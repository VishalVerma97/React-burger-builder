import React from 'react';
import CustomAux from '../../higher-order-component/CustomAux';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <CustomAux>
            <div>
                Toolbar, Sidedrawer, Backdrop
        </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </CustomAux>
    )
};

export default layout;