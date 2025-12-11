import { useIntl } from '@edx/frontend-platform/i18n';
import { utilHooks, reduxHooks } from 'hooks';

import * as hooks from './hooks';
import messages from './messages';

export const useAccessMessage = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { startDate, endDate } = reduxHooks.useCardCourseRunData(cardId);
  const formatDate = utilHooks.useFormatDate();

  if (!startDate && !endDate) {
    return null;
  }

  const formattedStartDate = startDate ? formatDate(startDate) : '...';
  const formattedEndDate = endDate ? formatDate(endDate) : '...';

  return formatMessage(messages.courseDateRange, {
    startDate: formattedStartDate,
    endDate: formattedEndDate,
  });
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
