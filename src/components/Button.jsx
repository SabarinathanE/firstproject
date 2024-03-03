import React from 'react';
import PropTypes from "prop-types";

class Button extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <button onClick={this.props.handleCounter}>{this.props.label}</button>
        )
    }
};

export default Button;

Button.propTypes = {
    label: PropTypes.string,
}