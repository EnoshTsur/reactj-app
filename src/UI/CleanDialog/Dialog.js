import React, { Component } from 'react';
import Aux from '../../hoc/SimpleWrapper/SimpleWrapper';
import Backdrop from '../CleanBackdrop/Backdrop';

class Dialog extends Component {

    render() {

        return (
            <div>
                <Aux>
                    <Backdrop show={this.props.show} clicked={this.props.closeDialog} />
                    {this.props.children}
                </Aux>
            </div>
        )
    }
}

export default Dialog;