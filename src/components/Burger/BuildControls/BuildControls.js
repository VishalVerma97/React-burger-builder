import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

let controls = [
    {
        label: 'Salad', type: 'salad',
    },
    {
        label: 'Bacon', type: 'bacon',
    },
    {
        label: 'Cheese', type: 'cheese',
    },
    {
        label: 'Meat', type: 'meat',
    }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctl => {
                return <BuildControl key={ctl.label} label={ctl.label} />;
            })}
        </div>
    );
}

export default buildControls;