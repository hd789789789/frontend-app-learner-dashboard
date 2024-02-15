import React from 'react';
import { Helmet } from 'react-helmet';
import { shallow } from '@edx/react-unit-test-utils';

import Footer from '@edx/frontend-component-footer';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import { RequestKeys } from 'data/constants/requests';
import { reduxHooks } from 'hooks';
import Dashboard from 'containers/Dashboard';
import LearnerDashboardHeader from 'containers/LearnerDashboardHeader';

import { ExperimentProvider } from 'ExperimentContext';
import { App } from './App';
import messages from './messages';

jest.mock('@edx/frontend-component-footer', () => 'Footer');

jest.mock('containers/Dashboard', () => 'Dashboard');
jest.mock('containers/LearnerDashboardHeader', () => 'LearnerDashboardHeader');
jest.mock('components/ZendeskFab', () => 'ZendeskFab');
jest.mock('ExperimentContext', () => ({
  ExperimentProvider: 'ExperimentProvider',
}));
jest.mock('data/redux', () => ({
  selectors: 'redux.selectors',
  actions: 'redux.actions',
  thunkActions: 'redux.thunkActions',
}));
jest.mock('hooks', () => ({
  reduxHooks: {
    useRequestIsFailed: jest.fn(),
    usePlatformSettingsData: jest.fn(),
    useLoadData: jest.fn(),
  },
}));
jest.mock('data/store', () => 'data/store');

const logo = 'fakeLogo.png';

jest.mock('@edx/frontend-platform', () => ({
  getConfig: jest.fn(() => ({})),
}));

const loadData = jest.fn();
reduxHooks.useLoadData.mockReturnValue(loadData);

let el;

const supportEmail = 'test-support-url';
reduxHooks.usePlatformSettingsData.mockReturnValue({ supportEmail });

describe('App router component', () => {
  const { formatMessage } = useIntl();
  describe('component', () => {
    const runBasicTests = () => {
      test('snapshot', () => { expect(el.snapshot).toMatchSnapshot(); });
      it('displays title in helmet component', () => {
        const control = el.instance
          .findByType(Helmet)[0]
          .findByType('title')[0];
        expect(control.children[0].el).toEqual(formatMessage(messages.pageTitle));
      });
      it('displays learner dashboard header', () => {
        expect(el.instance.findByType(LearnerDashboardHeader).length).toEqual(1);
      });
      test('Footer logo drawn from env variable', () => {
        expect(el.instance.findByType(Footer)[0].props.logo).toEqual(logo);
      });
    };
    describe('no network failure', () => {
      beforeAll(() => {
        reduxHooks.useRequestIsFailed.mockReturnValue(false);
        getConfig.mockReturnValue({ LOGO_POWERED_BY_OPEN_EDX_URL_SVG: logo });
        el = shallow(<App />);
      });
      runBasicTests();
      it('loads dashboard', () => {
        const main = el.instance.findByType('main')[0];
        expect(main.children.length).toEqual(1);
        const expProvider = main.children[0];
        expect(expProvider.type).toEqual('ExperimentProvider');
        expect(expProvider.children.length).toEqual(1);
        expect(
          expProvider.matches(shallow(<ExperimentProvider><Dashboard /></ExperimentProvider>)),
        ).toEqual(true);
      });
    });
    describe('no network failure with optimizely url', () => {
      beforeAll(() => {
        reduxHooks.useRequestIsFailed.mockReturnValue(false);
        getConfig.mockReturnValue({ LOGO_POWERED_BY_OPEN_EDX_URL_SVG: logo, OPTIMIZELY_URL: 'fake.url' });
        el = shallow(<App />);
      });
      runBasicTests();
      it('loads dashboard', () => {
        const main = el.instance.findByType('main')[0];
        expect(main.children.length).toEqual(1);
        const expProvider = main.children[0];
        expect(expProvider.type).toEqual('ExperimentProvider');
        expect(expProvider.children.length).toEqual(1);
        expect(
          expProvider.matches(shallow(<ExperimentProvider><Dashboard /></ExperimentProvider>)),
        ).toEqual(true);
      });
    });
    describe('no network failure with optimizely project id', () => {
      beforeAll(() => {
        reduxHooks.useRequestIsFailed.mockReturnValue(false);
        getConfig.mockReturnValue({ LOGO_POWERED_BY_OPEN_EDX_URL_SVG: logo, OPTIMIZELY_PROJECT_ID: 'fakeId' });
        el = shallow(<App />);
      });
      runBasicTests();
      it('loads dashboard', () => {
        const main = el.instance.findByType('main')[0];
        expect(main.children.length).toEqual(1);
        const expProvider = main.children[0];
        expect(expProvider.type).toEqual('ExperimentProvider');
        expect(expProvider.children.length).toEqual(1);
        expect(
          expProvider.matches(shallow(<ExperimentProvider><Dashboard /></ExperimentProvider>)),
        ).toEqual(true);
      });
    });
    describe('initialize failure', () => {
      beforeAll(() => {
        reduxHooks.useRequestIsFailed.mockImplementation((key) => key === RequestKeys.initialize);
        getConfig.mockReturnValue({ LOGO_POWERED_BY_OPEN_EDX_URL_SVG: logo });
        el = shallow(<App />);
      });
      runBasicTests();
      it('loads error page', () => {
        const main = el.instance.findByType('main')[0];
        expect(main.children.length).toEqual(1);
        const alert = main.children[0];
        expect(alert.type).toEqual('Alert');
        expect(alert.children.length).toEqual(1);
        const errorPage = alert.children[0];
        expect(errorPage.type).toEqual('ErrorPage');
        expect(errorPage.props.message).toEqual(formatMessage(messages.errorMessage, { supportEmail }));
      });
    });
    describe('refresh failure', () => {
      beforeAll(() => {
        reduxHooks.useRequestIsFailed.mockImplementation((key) => key === RequestKeys.refreshList);
        getConfig.mockReturnValue({ LOGO_POWERED_BY_OPEN_EDX_URL_SVG: logo });
        el = shallow(<App />);
      });
      runBasicTests();
      it('loads error page', () => {
        const main = el.instance.findByType('main')[0];
        expect(main.children.length).toEqual(1);
        const alert = main.children[0];
        expect(alert.type).toEqual('Alert');
        expect(alert.children.length).toEqual(1);
        const errorPage = alert.children[0];
        expect(errorPage.type).toEqual('ErrorPage');
        expect(errorPage.props.message).toEqual(formatMessage(messages.errorMessage, { supportEmail }));
      });
    });
  });
});
