import React from 'react';
import MessageBoxFunctionalLayout from './MessageBoxFunctionalLayout';
import MessageBoxFunctionalLayoutFactory from './MessageBoxFunctionalLayout.driver';
import {createDriverFactory} from '../test-common';
import sinon from 'sinon';
//import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';
//import {messageBoxLayout2DriverFactory} from '../../testkit';
//import {messageBoxLayout2DriverFactory as enzymeMessageBoxTestkitFactory} from '../../testkit/enzyme';

/**
 * hideFooter: React.PropTypes.bool,
 confirmText: React.PropTypes.string,
 cancelText: React.PropTypes.string,
 style: React.PropTypes.string,
 theme: React.PropTypes.string,
 onOk: React.PropTypes.func,
 onCancel: React.PropTypes.func,
 title: React.PropTypes.node,
 children: React.PropTypes.any
 */
describe('MessageBox', () => {
  const createDriver = createDriverFactory(MessageBoxFunctionalLayoutFactory);

  /*const messageBoxToRender = (props) => {
    return (<MessageBoxPromptLayout {...props}/>);
  };*/

  describe('action buttons', () => {
    it('should display the confirmation text on top the confirmation button', () => {
      const props = {
        confirmText: 'confirmText'
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getConfirmationButtonText()).toBe(props.confirmText);
    });

    it('should display the cancellation text on top the cancellation button', () => {
      const props = {
        cancelText: 'cancelText'
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getCancellationButtonText()).toBe(props.cancelText);
    });

    it('should not display the cancellation button if cancellationText is empty', () => {
      const props = {
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      expect(driver.getCancellationButton()).toBeNull();
    });

    it(`should trigger the 'onOk' action upon clicking the confirmation button`, () => {
      const props = {
        onOk: sinon.spy()
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      driver.clickOnConfirmationButton();
      expect(props.onOk.calledOnce).toBeTruthy();
    });

    it(`should trigger the 'onCancel' action upon clicking the cancellation button`, () => {
      const props = {
        cancelText: 'cancelText',
        onCancel: sinon.spy()
      };
      const driver = createDriver(<MessageBoxFunctionalLayout {...props}/>);
      driver.clickOnCancellationButton();
      expect(props.onCancel.calledOnce).toBeTruthy();
    });
  });

  describe('theme attribute', () => {
    it('should set the theme by default to "blue"', () => {

    });

    it('should allowing setting the theme to "green"', () => {

    });

    it('should allow setting the theme to "red"', () => {

    });
  });

  describe('genral', () => {

    it(`should hide the footer`, () => {

    });

    it(`should render title`, () => {

    });

    it(`should render the passed children in the markup`, () => {

    });
  });

 /* describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<MessageBoxPromptLayout/>, messageBoxTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<MessageBoxPromptLayout/>, enzymeMessageBoxTestkitFactory)).toBe(true);
    });
  });
*/

});
