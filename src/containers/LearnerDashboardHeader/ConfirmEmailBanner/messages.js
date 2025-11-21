import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  confirmNowButton: {
    id: 'leanerDashboard.confirmEmailBanner',
    description: 'Button for sending confirm email and open modal',
    defaultMessage: 'Xác nhận ngay',
  },
  confirmEmailTextReminderBanner: {
    id: 'leanerDashboard.confirmEmailTextReminderBanner',
    description: 'Text for reminding user to confirm email',
    defaultMessage: 'Hãy nhớ xác nhận email của bạn để có thể tiếp tục học! {confirmNowButton}.',
  },
  verifiedConfirmEmailButton: {
    id: 'leanerDashboard.verifiedConfirmEmailButton',
    description: 'Button for verified confirming email',
    defaultMessage: 'Tôi đã xác nhận email của mình',
  },
  confirmEmailModalHeader: {
    id: 'leanerDashboard.confirmEmailModalHeader',
    description: 'title for confirming email modal',
    defaultMessage: 'Xác nhận email của bạn',
  },
  confirmEmailModalBody: {
    id: 'leanerDashboard.confirmEmailModalBody',
    description: 'text hint for confirming email modal',
    defaultMessage: 'Chúng tôi đã gửi email để xác minh tài khoản của bạn. Vui lòng kiểm tra hộp thư đến và nhấp vào nút màu đỏ lớn để xác nhận và tiếp tục học.',
  },
  confirmEmailImageAlt: {
    id: 'leanerDashboard.confirmEmailImageAlt',
    description: 'text alt confirm email image',
    defaultMessage: 'nền xác nhận email',
  },
});

export default messages;
