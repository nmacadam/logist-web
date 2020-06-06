import React from 'react';
import StackTraceToggle from './StackTraceToggle';
import InfoToggle from './InfoToggle';
import StackTrace from './StackTrace';
import Info from './Info';
import ThemeContext from './ThemeContext';

class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            showStackTrace: false,
            showInfo: false,
        };

        this.showStackTraceElement = this.showStackTraceElement.bind(this);
        this.showInfoElement = this.showInfoElement.bind(this);
    }

    showStackTraceElement() 
    {
        this.setState(state => ({
            showStackTrace: !state.showStackTrace,
            showInfo: state.showInfo
        }));
    }

    showInfoElement() 
    {
        this.setState(state => ({
            showStackTrace: state.showStackTrace,
            showInfo: !state.showInfo
        }));
    }

    render() {
        let isRendered = false;
        this.props.categories.forEach(element => {
            isRendered = isRendered || this.props.filter[element];
        });
        if (isRendered === false)
        {
            return (<div/>);
        }
        
        const categoryTags = this.props.categories.map((data, index) =>
            this.props.filter[data] 
            ? <a key={index} id={data} className='categoryTag'>{data}</a>
            : <a key={index} id={data} className='categoryTag' style={{textDecoration:'line-through', opacity:'60%'}}>{data}</a>
        );

        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={'log_' + value}>
                        <table className='logContents'>
                            <tbody>
                                <tr>
                                    <td width="5%">{this.props.timeStamp.toFixed(3)}</td>
                                    <td width="10%">
                                        {categoryTags}
                                    </td>
                                    <td width="80%">{this.props.log}</td>
                                    <td width="2.5%">
                                        <StackTraceToggle onClick={this.showStackTraceElement}/>
                                    </td>
                                    <td width="2.5%">
                                        <InfoToggle  onClick={this.showInfoElement}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <StackTrace trace={this.props.trace} open={this.state.showStackTrace}/>
                        <Info info={this.props.info} open={this.state.showInfo}/>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Log;