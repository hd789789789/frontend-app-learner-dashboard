import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  unenroll: {
    id: 'learner-dash.courseCardMenu.unenroll',
    description: 'Course unenroll menu button',
    defaultMessage: 'Hủy ghi danh',
  },
  dropdownAlt: {
    id: 'learner-dash.courseCardMenu.dropdownAlt',
    description: 'Course action menu alt-text',
    defaultMessage: 'Menu thao tác khóa học',
  },
  emailSettings: {
    id: 'learner-dash.courseCardMenu.emailSettings',
    description: 'Course email settings menu button',
    defaultMessage: 'Cài đặt email',
  },
  shareToFacebook: {
    id: 'learner-dash.courseCardMenu.shareToFacebook',
    description: 'Course Facebook Sharing button',
    defaultMessage: 'Chia sẻ lên Facebook',
  },
  shareToTwitter: {
    id: 'learner-dash.courseCardMenu.shareToTwitter',
    description: 'Course Twitter Sharing button',
    defaultMessage: 'Chia sẻ lên Twitter',
  },
  shareQuote: {
    id: 'learner-dash.courseCardMenu.shareQuote',
    description: 'Social sharing quote',
    defaultMessage: 'Tôi đang học {courseName} trực tuyến với {socialBrand}. Hãy xem thử nhé!',
  },
});

export default messages;
