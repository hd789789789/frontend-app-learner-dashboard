import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  loadingSR: {
    id: 'learner-dash.loadingSR',
    description: 'Page loading screen-reader text',
    defaultMessage: 'Đang tải...',
  },
  errorMessage: {
    id: 'learner-dash.error-page-message',
    defaultMessage: 'Nếu bạn gặp lỗi liên tục, vui lòng gửi email hỗ trợ tới {supportEmail}',
    description: 'Error page message',
  },
  pageTitle: {
    id: 'learner-dash.title',
    description: 'Page title: Learner Home',
    defaultMessage: 'Trang chủ người học',
  },
});

export default messages;
