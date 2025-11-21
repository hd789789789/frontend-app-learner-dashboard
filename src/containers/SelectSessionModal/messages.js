/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  changeOrLeaveHeader: {
    id: 'learner-dash.selectSession.changeOrLeaveHeader',
    description: 'Header for session that allow leave option',
    defaultMessage: 'Thay đổi hoặc rời phiên học?',
  },
  selectSessionHeader: {
    id: 'learner-dash.selectSession.selectSessionHeader',
    description: 'Header for unfulfilled entitlement',
    defaultMessage: 'Chọn một phiên học',
  },
  changeOrLeaveHint: {
    id: 'learner-dash.selectSession.changeOrLeaveHint',
    description: 'Hint for session that allow leave option',
    defaultMessage: 'Khi bạn chuyển sang phiên học khác, mọi tiến độ khóa học hoặc điểm từ phiên học hiện tại của bạn sẽ bị mất.',
  },
  selectSessionHint: {
    id: 'learner-dash.selectSession.selectSessionHint',
    description: 'Hint for session that does not allow leave option',
    defaultMessage: 'Hãy nhớ, nếu bạn thay đổi ý định, bạn có 2 tuần để hủy ghi danh và chọn một phiên học khác.',
  },
  leaveSessionOption: {
    id: 'learner-dash.selectSession.leaveSessionOption',
    description: 'Radio option for leave session',
    defaultMessage: 'Rời phiên học',
  },
  nevermind: {
    id: 'learner-dash.selectSession.nevermind',
    description: 'Cancel action for select session modal',
    defaultMessage: 'Không sao',
  },
  confirmSession: {
    id: 'learner-dash.selectSession.confirmSession',
    description: 'Confirm action for select session modal',
    defaultMessage: 'Xác nhận phiên học',
  },
});

export default messages;
