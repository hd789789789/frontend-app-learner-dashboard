import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseDateRange: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseDateRange',
    description: 'Course start and end date range on course card.',
    defaultMessage: 'Thời gian: {startDate} - {endDate}',
  },
  courseStartOnly: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseStartOnly',
    description: 'Course start date only on course card.',
    defaultMessage: 'Thời gian: {startDate}',
  },
  courseEndOnly: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEndOnly',
    description: 'Course end date only on course card.',
    defaultMessage: 'Thời gian: {endDate}',
  },
  unknownProviderName: {
    id: 'learner-dash.courseCard.CourseCardDetails.unknownProviderName',
    description: 'Provider name display when name is unknown',
    defaultMessage: 'Không xác định',
  },
  changeOrLeaveSessionButton: {
    id: 'learner-dash.courseCard.CourseCardDetails.changeOrLeaveSessionButton',
    description: 'Button for trigger change or leave session for entitlement course',
    defaultMessage: 'Thay đổi hoặc rời phiên học',
  },
});

export default messages;
