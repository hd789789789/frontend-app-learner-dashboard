import { useIntl } from '@edx/frontend-platform/i18n';
import { utilHooks, reduxHooks } from 'hooks';

import * as hooks from './hooks';
import messages from './messages';

export const useAccessMessage = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { startDate, endDate } = reduxHooks.useCardCourseRunData(cardId);
  const formatDate = utilHooks.useFormatDate();

  if (startDate && endDate) {
    return formatMessage(messages.courseDateRange, {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    });
  }

  if (startDate) {
    return formatMessage(messages.courseStartOnly, { startDate: formatDate(startDate) });
  }

  if (endDate) {
    return formatMessage(messages.courseEndOnly, { endDate: formatDate(endDate) });
  }

  return null;
};

export const useCardDetailsData = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const {
    isEntitlement,
    isFulfilled,
    canChange,
  } = reduxHooks.useCardEntitlementData(cardId);

  const openSessionModal = reduxHooks.useUpdateSelectSessionModalCallback(cardId);

  return {
    accessMessage: hooks.useAccessMessage({ cardId }),
    isEntitlement,
    isFulfilled,
    canChange,
    openSessionModal,
    changeOrLeaveSessionMessage: formatMessage(messages.changeOrLeaveSessionButton),
  };
};

export default useCardDetailsData;
