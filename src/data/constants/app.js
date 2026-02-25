import { getConfig } from '@edx/frontend-platform';
import { StrictDict } from 'utils';

export const routePath = `${getConfig().PUBLIC_PATH}:courseId`;
export const locationId = window.location.pathname.slice(1);

export const SortKeys = StrictDict({
  enrolled: 'enrolled',
  title: 'title',
  custom: 'custom',
});

// Course group configuration - customize this to change the order of course groups
// Each group has a prefix (course number starts with) and optional display name
export const CourseGroups = [
  { prefix: 'AIMC', order: 1, name: 'Tư duy và Năng lực AI' },
  { prefix: 'TOAN', order: 2, name: 'Toán' },
  { prefix: 'AITVO', order: 3, name: 'Câu lạc bộ AI TVO' },
];

// Get group order for a course based on its course number
export const getCourseGroupOrder = (courseNumber) => {
  for (const group of CourseGroups) {
    if (courseNumber.startsWith(group.prefix)) {
      return group.order;
    }
  }
  return 999; // Default group for unknown courses
};

// Get sort value within group (extract numeric part from course number)
export const getCourseSortValue = (courseNumber) => {
  const match = courseNumber.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export const FilterKeys = StrictDict({
  inProgress: 'inProgress',
  notStarted: 'notStarted',
  done: 'done',
  notEnrolled: 'notEnrolled',
  upgraded: 'upgraded',
});

export const ListPageSize = 25;
