import React from 'react';
import { payWithSol } from './payWithSol';
import { Button } from '@mui/material';

const PaywallComponent = ({
  reciever,
  toggleDrawer
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: `flex`,
      boxShadow: `0px 0px 20px 0px`,
      background: `rgb(16, 6, 69)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: `flex`,
      flex: `1 1 60vw`,
      flexDirection: `column`,
      justifyContent: `space-around`,
      padding: `1em`,
      textAlign: `center`
    }
  }, /*#__PURE__*/React.createElement("h3", null, "You can use your Phantom wallet to view this article!", ` `), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      payWithSol(toggleDrawer, 1, reciever);
    }
  }, "Buy with Phantom Wallet")), /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Back to Overview")));
};

export { PaywallComponent };