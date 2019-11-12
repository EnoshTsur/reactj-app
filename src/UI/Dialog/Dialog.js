import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';

class Dialog extends Component {

    render() {

        return (
            <div>
                    <Backdrop show={this.props.show} clicked={this.props.closeDialog} />
                    {this.props.children}
            </div>
        )
    }
}

export default Dialog;