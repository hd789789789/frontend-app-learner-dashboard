import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseStatus: {
    id: 'learner-dash.courseListFilters.courseStatus',
    description: 'course status filter form heading',
    defaultMessage: 'Trạng thái khóa học',
  },
  inProgress: {
    id: 'learner-dash.courseListFilters.inProgress',
    description: 'in-progress filter checkbox label for course list filters',
    defaultMessage: 'Đang học',
  },
  notStarted: {
    id: 'learner-dash.courseListFilters.notStarted',
    description: 'Not-Started filter checkbox label for course list filters',
    defaultMessage: 'Chưa bắt đầu',
  },
  done: {
    id: 'learner-dash.courseListFilters.done',
    description: 'done filter checkbox label for course list filters',
    defaultMessage: 'Đã hoàn thành',
  },
  notEnrolled: {
    id: 'learner-dash.courseListFilters.notEnrolled',
    description: 'not-enrolled filter checkbox label for course list filters',
    defaultMessage: 'Chưa ghi danh',
  },
  upgraded: {
    id: 'learner-dash.courseListFilters.upgraded',
    description: 'upgraded filter checkbox label for course list filters',
    defaultMessage: 'Đã nâng cấp',
  },
  clearAll: {
    id: 'learner-dash.courseListFilters.clearAll',
    description: 'clear all filters button text',
    defaultMessage: 'Xóa tất cả',
  },
  sort: {
    id: 'learner-dash.courseListFilters.sort',
    description: 'Sort radio form heading',
    defaultMessage: 'Sắp xếp',
  },
  sortLastEnrolled: {
    id: 'learner-dash.courseListFilters.sortLastEnrolled',
    description: 'Last enrolled sort option text',
    defaultMessage: 'Ghi danh gần nhất',
  },
  sortTitle: {
    id: 'learner-dash.courseListFilters.sortTitle',
    description: 'Title sort option text',
    defaultMessage: 'Tiêu đề (A-Z)',
  },
  sortCustom: {
    id: 'learner-dash.courseListFilters.sortCustom',
    description: 'Custom group sort option text',
    defaultMessage: 'Nhóm khóa học',
  },
  refine: {
    id: 'learner-dash.courseListFilters.refine',
    description: 'Filter button container text',
    defaultMessage: 'Lọc',
  },
});

export default messages;
