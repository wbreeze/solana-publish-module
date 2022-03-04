import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { PaywallComponent } from './paywallComponent';

const Paywall = function Paywall({ reciever }) {
    const [state, setState] = React.useState({
        bottom: true,
    });

    const toggleDrawer = (open) => {
        setState({ ...state, ['bottom']: open });
    };

    return (
        <div>
            <React.Fragment key={'bottom'}>
                <Drawer anchor={'bottom'} open={state['bottom']}>
                    <PaywallComponent reciever={reciever} toggleDrawer={toggleDrawer} />
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export { PaywallComponent };