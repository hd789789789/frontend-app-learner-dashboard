/* eslint-disable quotes */
import { StrictDict } from "utils";

export const messages = StrictDict({
    confirmHeader: {
        id: "learner-dash.unenrollConfirm.confirm.header",
        description: "Header for confirm unenroll modal",
        defaultMessage: "Hủy đăng ký khóa học?",
    },
    confirmCancel: {
        id: "learner-dash.unenrollConfirm.confirm.cancel",
        description: "Cancel action for confirm unenroll modal",
        defaultMessage: "Đừng bận tâm",
    },
    confirmUnenroll: {
        id: "learner-dash.unenrollConfirm.confirm.unenroll",
        description: "Confirm action for confirm unenroll modal",
        defaultMessage: "Bỏ đăng ký",
    },
    reasonHeading: {
        id: "learner-dash.unenrollConfirm.confirm.reason.heading",
        description: "Heading for unenroll reason modal",
        defaultMessage: `Lý do chính khiến bạn hủy đăng ký là gì?`,
    },
    reasonSkip: {
        id: "learner-dash.unenrollConfirm.confirm.reason.skip",
        description: "Skip action for unenroll reason modal",
        defaultMessage: "Bỏ qua khảo sát",
    },
    reasonSubmit: {
        id: "learner-dash.unenrollConfirm.confirm.reason.submit",
        description: "Submit action for unenroll reason modal",
        defaultMessage: "Gửi lý do",
    },
    finishHeading: {
        id: "learner-dash.unenrollConfirm.confirm.finish.heading",
        description: "Heading for unenroll finish modal",
        defaultMessage: "Bạn đã hủy đăng ký",
    },
    finishThanksText: {
        id: "learner-dash.unenrollConfirm.confirm.finish.thanks-text",
        description: "Thank you message on unenroll modal for providing a reason",
        defaultMessage: "Cảm ơn bạn đã chia sẻ lý do hủy đăng ký.",
    },
    finishText: {
        id: "learner-dash.unenrollConfirm.confirm.finish.text",
        description: "Text for unenroll finish modal",
        defaultMessage: "Khóa học này sẽ bị xóa khỏi bảng điều khiển của bạn.",
    },
    finishReturn: {
        id: "learner-dash.unenrollConfirm.confirm.finish.return",
        description: "Hành động trả về để hủy đăng ký kết thúc modal",
        defaultMessage: "Return to dashboard",
    },
});

export default messages;
