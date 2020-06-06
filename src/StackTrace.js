import React from 'react';
import ThemeContext from './ThemeContext';

class StackTrace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {traceClass: 'stackTraceShow'};
    }

    handleVisibility()
    {
        if (this.props.show) {
            this.setState({
                traceClass: 'stackTraceShow'
            })
        }
        else {
           this.setState({
                traceClass: 'stackTraceHide'
           })
        }
    }

    render() {
        if (this.props.open === false || this.props.open === undefined)
        {
            return (<div/>);
        }

        const stackTrace = this.props.trace.map((data, index) =>
            <p key='index'>{data}</p>
        );

        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={this.state.traceClass + '_' + value}>
                        {stackTrace}
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default StackTrace;