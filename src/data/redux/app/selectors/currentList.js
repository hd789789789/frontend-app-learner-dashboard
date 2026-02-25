import { StrictDict } from 'utils';
import { FilterKeys, SortKeys, getCourseGroupOrder, getCourseSortValue } from 'data/constants/app';

import simpleSelectors from './simpleSelectors';
import * as module from './currentList';

export const sortFn = (transform, { reverse, isArraySort }) => (v1, v2) => {
  const [a, b] = [v1, v2].map(transform);

  // Handle array sort for custom grouping (compare element by element)
  if (isArraySort && Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return ((a[i] > b[i]) ? 1 : -1) * (reverse ? -1 : 1);
      }
    }
    return 0;
  }

  if (a === b) { return 0; }
  return ((a > b) ? 1 : -1) * (reverse ? -1 : 1);
};

export const courseFilters = StrictDict({
  [FilterKeys.notEnrolled]: (course) => !course.enrollment.isEnrolled,
  [FilterKeys.done]: (course) => course.courseRun !== null && course.courseRun.isArchived,
  [FilterKeys.upgraded]: (course) => course.enrollment.isVerified,
  [FilterKeys.inProgress]: (course) => course.enrollment.hasStarted,
  [FilterKeys.notStarted]: (course) => !course.enrollment.hasStarted,
});

export const transforms = StrictDict({
  [SortKeys.enrolled]: ({ enrollment }) => new Date(enrollment.lastEnrolled),
  [SortKeys.title]: ({ course }) => course.courseName.toLowerCase(),
  [SortKeys.custom]: ({ course }) => {
    // Custom sort: first by group order, then by numeric value within group
    const courseNumber = course.courseNumber;
    const groupOrder = getCourseGroupOrder(courseNumber);
    const sortValue = getCourseSortValue(courseNumber);
    // Return array for multi-level sorting: [groupOrder, sortValue]
    return [groupOrder, sortValue];
  },
});

export const courseFilterFn = filters => (filters.length
  ? course => filters.reduce((match, filter) => match && courseFilters[filter](course), true)
  : () => true);

export const currentList = (allCourses, {
  sortBy,
  filters,
}) => {
  const isCustomSort = sortBy === SortKeys.custom;
  return allCourses
    .filter(module.courseFilterFn(filters))
    .sort(module.sortFn(transforms[sortBy], {
      reverse: sortBy === SortKeys.enrolled,
      isArraySort: isCustomSort,
    }));
};

export const visibleList = (state, {
  sortBy,
  filters,
  pageSize,
}) => {
  const courses = Object.values(simpleSelectors.courseData(state));
  const list = module.currentList(courses, { sortBy, filters });
  const pageNumber = simpleSelectors.pageNumber(state);

  if (pageSize === 0) {
    return {
      visible: list,
      numPages: 1,
    };
  }
  return {
    visibleList: list.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
    numPages: Math.ceil(list.length / pageSize),
  };
};

export default visibleList;
