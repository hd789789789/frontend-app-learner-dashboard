import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  ViewAs: {
    id: 'MasqueradeBar.ViewAs',
    defaultMessage: 'Xem với vai trò:',
    description: 'Label for the View as',
  },
  ViewingAs: {
    id: 'MasqueradeBar.ViewingAs',
    defaultMessage: 'Đang xem với vai trò:',
    description: 'Label for the Viewing as',
  },
  SubmitButton: {
    id: 'MasqueradeBar.SubmitButton',
    defaultMessage: 'Gửi',
    description: 'Label for the Submit button',
  },
  StudentNameInput: {
    id: 'MasqueradeBar.StudentNameInput',
    defaultMessage: 'Tên người dùng hoặc email',
    description: 'Label for the Student Name or email input',
  },
  NoStudentFound: {
    id: 'MasqueradeBar.NoStudentFound',
    defaultMessage: 'Không tìm thấy người học nào với tên người dùng hoặc email này',
    description: 'Error message when no student is found',
  },
  UnknownError: {
    id: 'MasqueradeBar.UnknownError',
    defaultMessage: 'Đã xảy ra lỗi không xác định',
    description: 'Error message when an unknown error occurs',
  },
});

export default messages;
