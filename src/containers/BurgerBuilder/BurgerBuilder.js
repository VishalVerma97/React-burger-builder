import React, { Component } from 'react';
import CustomAux from '../../higher-order-component/CustomAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    render() {
        return (
            <CustomAux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </CustomAux>
        );
    }
}

export default BurgerBuilder;