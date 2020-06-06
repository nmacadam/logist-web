import React from 'react';

class InfoToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { infoClass: 'infoHide'};

        this.handleClick = this.props.onClick.bind(this);
    }

    render() {
        return (
            <center>
                <a onClick={this.handleClick} className='info-button'/>
            </center>
        );
    }
}

export default InfoToggle;