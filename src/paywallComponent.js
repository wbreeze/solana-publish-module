import React from 'react';
import payWithSol from './payWithSol';
import { Button } from '@mui/material';

const PaywallComponent = ({ reciever, toggleDrawer }) => {
    return (
        <div
            style={{
                display: `flex`,
                boxShadow: `0px 0px 20px 0px`,
                background: `rgb(16, 6, 69)`,
            }}
        >
            <div
                style={{
                    display: `flex`,
                    flex: `1 1 60vw`,
                    flexDirection: `column`,
                    justifyContent: `space-around`,
                    padding: `1em`,
                    textAlign: `center`,
                }}
            >
                <h3>
                    You can use your Phantom wallet to view this article!
          {` `}
                </h3>
                <p></p>
                <p>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            payWithSol(toggleDrawer, 1, reciever);
                        }}
                    >
                        Buy with Phantom Wallet
          </Button>
                </p>
                <a href="/">Back to Overview</a>
            </div>
        </div>
    );
};

export { PaywallComponent };
