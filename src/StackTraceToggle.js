import React from 'react';

class StackTraceToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.props.onClick.bind(this);
    }
    
    render() {
        return (
            <center>
                <a onClick={this.handleClick} className='stackTrace-button'/>
            </center>
        );
    }
}

export default StackTraceToggle;