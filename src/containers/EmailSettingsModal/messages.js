/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  header: {
    id: 'learner-dash.emailSettings.header',
    description: 'Header for email settings modal',
    defaultMessage: 'Nhận email khóa học?',
  },
  emailsOff: {
    id: 'learner-dash.emailSettings.emailsOff',
    description: 'Toggle text for email settings modal when email is disabled',
    defaultMessage: 'Email khóa học đã tắt',
  },
  emailsOn: {
    id: 'learner-dash.emailSettings.emailsOn',
    description: 'Toggle text for email settings modal when email is enabled',
    defaultMessage: 'Email khóa học đã bật',
  },
  description: {
    id: 'learner-dash.emailSettings.description',
    description: 'Description for email settings modal',
    defaultMessage: 'Email khóa học bao gồm thông tin quan trọng về khóa học của bạn từ giảng viên.',
  },
  nevermind: {
    id: 'learner-dash.emailSettings.nevermind',
    description: 'Cancel action for email settings modal',
    defaultMessage: 'Không sao',
  },
  save: {
    id: 'learner-dash.emailSettings.save',
    description: 'Save action for email settings modal',
    defaultMessage: 'Lưu cài đặt',
  },

});

export default messages;
