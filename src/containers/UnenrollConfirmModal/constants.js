/* eslint-disable quotes */
import { StrictDict } from 'utils';
import { defineMessages } from '@edx/frontend-platform/i18n';

export const reasonKeys = StrictDict({
  prereqs: 'prereqs',
  difficulty: 'difficulty',
  goals: 'goals',
  broken: 'broken',
  time: 'time',
  browse: 'browse',
  support: 'support',
  quality: 'quality',
  easy: 'easy',
  custom: 'custom',
});

export const order = [
  reasonKeys.prereqs,
  reasonKeys.difficulty,
  reasonKeys.goals,
  reasonKeys.broken,
  reasonKeys.time,
  reasonKeys.browse,
  reasonKeys.support,
  reasonKeys.quality,
  reasonKeys.easy,
];

const messages = defineMessages({
  [reasonKeys.prereqs]: {
    id: 'learner-dash.unenrollConfirm.reasons.prereqs',
    description: 'Unenroll reason option - missing prerequisites',
    defaultMessage: `Tôi không có đủ điều kiện tiên quyết về học thuật hoặc ngôn ngữ`,
  },
  [reasonKeys.difficulty]: {
    id: 'learner-dash.unenrollConfirm.reasons.difficulty',
    description: 'Unenroll reason option - material is too hard',
    defaultMessage: 'Tài liệu khóa học quá khó',
  },
  [reasonKeys.goals]: {
    id: 'learner-dash.unenrollConfirm.reasons.goals',
    description: 'Unenroll reason option - goals-related',
    defaultMessage: `Khóa học này sẽ không giúp tôi đạt được mục tiêu`,
  },
  [reasonKeys.broken]: {
    id: 'learner-dash.unenrollConfirm.reasons.broken',
    description: 'Unenroll reason option - something broken',
    defaultMessage: 'Có gì đó bị lỗi',
  },
  [reasonKeys.time]: {
    id: 'learner-dash.unenrollConfirm.reasons.time',
    description: 'Unenroll reason option - time-related',
    defaultMessage: `Tôi không có thời gian`,
  },
  [reasonKeys.browse]: {
    id: 'learner-dash.unenrollConfirm.reasons.browse',
    description: 'Unenroll reason option - wanted to browse',
    defaultMessage: 'Tôi chỉ muốn xem qua tài liệu',
  },
  [reasonKeys.support]: {
    id: 'learner-dash.unenrollConfirm.reasons.support',
    description: 'Unenroll reason option - lacking support',
    defaultMessage: `Tôi không nhận được đủ hỗ trợ`,
  },
  [reasonKeys.quality]: {
    id: 'learner-dash.unenrollConfirm.reasons.quality',
    description: 'Unenroll reason option - quality-related',
    defaultMessage: 'Tôi không hài lòng với chất lượng nội dung',
  },
  [reasonKeys.easy]: {
    id: 'learner-dash.unenrollConfirm.reasons.easy',
    description: 'Unenroll reason option - too easy',
    defaultMessage: 'Tài liệu khóa học quá dễ',
  },
  customPlaceholder: {
    id: 'learner-dash.unenrollConfirm.reasons.custom-placeholder',
    description: 'Unenroll custom reason option placeholder text',
    defaultMessage: 'Khác',
  },
});

export default {
  messages,
  order,
  reasonKeys,
};
