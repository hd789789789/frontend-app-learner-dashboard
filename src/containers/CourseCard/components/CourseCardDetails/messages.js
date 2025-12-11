import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseDateRange: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseDateRange',
    description: 'Course start and end date range on course card.',
    defaultMessage: 'Thời gian: {startDate} - {endDate}',
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
