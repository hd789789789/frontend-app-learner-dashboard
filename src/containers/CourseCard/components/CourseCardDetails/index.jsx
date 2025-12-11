import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@openedx/paragon';

import useCardDetailsData from './hooks';
import './index.scss';

export const CourseCardDetails = ({ cardId }) => {
  const {
    accessMessage,
    isEntitlement,
    isFulfilled,
    canChange,
    openSessionModal,
    changeOrLeaveSessionMessage,
  } = useCardDetailsData({ cardId });

  return (
    <span className="course-card-meta small" data-testid="CourseCardDetails">
      {!(isEntitlement && !isFulfilled) && accessMessage}
      {isEntitlement && isFulfilled && canChange ? (
        <>
          {accessMessage ? ' • ' : null}
          <Button variant="link" size="inline" className="m-0 p-0" onClick={openSessionModal}>
            {changeOrLeaveSessionMessage}
          </Button>
        </>
      ) : null}
    </span>
  );
};

CourseCardDetails.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardDetails.defaultProps = {};

export default CourseCardDetails;
