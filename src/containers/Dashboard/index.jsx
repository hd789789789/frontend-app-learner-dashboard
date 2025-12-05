import React, { useState } from 'react';

import { reduxHooks } from 'hooks';
import { RequestKeys } from 'data/constants/requests';
import SelectSessionModal from 'containers/SelectSessionModal';
import CoursesPanel from 'containers/CoursesPanel';
import DashboardModalSlot from 'plugin-slots/DashboardModalSlot';
import LearnerChat from 'containers/LearnerChat';

import LoadingView from './LoadingView';
import DashboardLayout from './DashboardLayout';
import hooks from './hooks';
import './index.scss';

export const Dashboard = () => {
  hooks.useInitializeDashboard();
  const { pageTitle } = hooks.useDashboardMessages();
  const hasCourses = reduxHooks.useHasCourses();
  const initIsPending = reduxHooks.useRequestIsPending(RequestKeys.initialize);
  const showSelectSessionModal = reduxHooks.useShowSelectSessionModal();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  // Get course list data
  const { visibleList } = reduxHooks.useCurrentCourseList({
    sortBy: 'enrolled',
    filters: [],
    pageSize: 0, // Get all courses
  });

  // Get courseId from first course card if available
  const firstCardId = visibleList && visibleList.length > 0 ? visibleList[0].cardId : null;
  const firstCourseRunData = firstCardId ? reduxHooks.useCardCourseRunData(firstCardId) : null;
  const firstCourseId = firstCourseRunData?.courseId;

  // Set selected course ID when available
  React.useEffect(() => {
    if (firstCourseId && !selectedCourseId) {
      setSelectedCourseId(firstCourseId);
    }
  }, [firstCourseId, selectedCourseId]);

  return (
    <div id="dashboard-container" className="d-flex flex-column p-2 pt-0">
      <h1 className="sr-only">{pageTitle}</h1>
      {!initIsPending && (
        <>
          <DashboardModalSlot />
          {(hasCourses && showSelectSessionModal) && <SelectSessionModal />}
        </>
      )}
      <div id="dashboard-content" data-testid="dashboard-content">
        {initIsPending
          ? (<LoadingView />)
          : (
            <DashboardLayout>
              <CoursesPanel />
            </DashboardLayout>
          )}
      </div>
      {selectedCourseId && (
        <>
          <LearnerChat
            courseId={selectedCourseId}
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
          />
          {!isChatOpen && (
            <button
              className="learner-chat-toggle-btn"
              onClick={() => setIsChatOpen(true)}
              title="Mở chat"
            >
              💬
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
