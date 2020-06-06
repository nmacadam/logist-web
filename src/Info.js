import React from 'react';
import ThemeContext from './ThemeContext';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {traceClass: 'infoShow'};
    }

    onToggle()
    {
        if (this.state.traceClass === 'infoHide') {
            this.setState({
                traceClass: 'infoShow'
            })
        }
        else {
           this.setState({
                traceClass: 'infoHide'
           })
        }
    }

    render() {
        if (this.props.open === false || this.props.open === undefined)
        {
            return (<div/>);
        }

        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={this.state.traceClass + '_' + value}>
                        {this.props.info}
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Info;