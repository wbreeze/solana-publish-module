import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { PaywallComponent } from './paywallComponent';

const Paywall = function Paywall({
  reciever
}) {
  const [state, setState] = React.useState({
    bottom: true
  });

  const toggleDrawer = open => {
    setState({ ...state,
      ['bottom']: open
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(React.Fragment, {
    key: 'bottom'
  }, /*#__PURE__*/React.createElement(Drawer, {
    anchor: 'bottom',
    open: state['bottom']
  }, /*#__PURE__*/React.createElement(PaywallComponent, {
    reciever: reciever,
    toggleDrawer: toggleDrawer
  }))));
};

export { Paywall };