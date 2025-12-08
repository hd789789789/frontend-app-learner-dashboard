import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@openedx/paragon';

import CourseCardBanners from './components/CourseCardBanners';
import CourseCardImage from './components/CourseCardImage';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardActions from './components/CourseCardActions';
import CourseCardDetails from './components/CourseCardDetails';
import CourseCardTitle from './components/CourseCardTitle';

import './CourseCard.scss';

export const CourseCard = ({
  cardId,
}) => {
  const orientation = 'vertical';
  return (
    <div className="mb-4.5 course-card" id={cardId} data-testid="CourseCard">
      <Card orientation={orientation}>
        <div className="d-flex flex-column w-100">
          <div className="course-card-shell">
            <CourseCardImage cardId={cardId} orientation="horizontal" />
            <div className="course-card-body">
              <div className="course-card-title-row">
                <CourseCardTitle cardId={cardId} />
                <CourseCardMenu cardId={cardId} />
              </div>
              <div className="course-card-meta-row">
                <CourseCardDetails cardId={cardId} />
              </div>
              <div className="course-card-actions-row">
                <CourseCardActions cardId={cardId} />
              </div>
            </div>
          </div>
          <CourseCardBanners cardId={cardId} />
        </div>
      </Card>
    </div>
  );
};
CourseCard.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCard;
