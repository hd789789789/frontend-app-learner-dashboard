import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  lookingForChallengePrompt: {
    id: 'Dashboard.NoCoursesView.lookingForChallengePrompt',
    defaultMessage: 'Tìm kiếm thử thách mới?',
    description: 'Prompt user for new challenge',
  },
  exploreCoursesPrompt: {
    id: 'Dashboard.NoCoursesView.exploreCoursesPrompt',
    defaultMessage: 'Khám phá các khóa học của chúng tôi để thêm vào bảng điều khiển của bạn.',
    description: 'Prompt user to explore more courses',
  },
  exploreCoursesButton: {
    id: 'Dashboard.NoCoursesView.exploreCoursesButton',
    defaultMessage: 'Khám phá khóa học',
    description: 'Button to explore more courses',
  },
  bannerAlt: {
    id: 'Dashboard.NoCoursesView.bannerAlt',
    defaultMessage: 'Banner xem khi không có khóa học',
    description: 'No Courses view basnner',
  },
});

export default messages;
