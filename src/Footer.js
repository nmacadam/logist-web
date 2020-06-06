import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import ThemeContext from './ThemeContext';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.sessionData === undefined)
        {
            return (
                <ThemeContext.Consumer>
                    {value => (
                        <div className={'footer_' + value}>
                            <div className='themeButtonContainer'>
                                <ThemeSwitch  swapTheme={this.props.swapTheme} isChecked={this.props.isChecked}/>
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            );
        }
        
        return (
            <ThemeContext.Consumer>
                {value => (
                    <div className={'footer_' + value}>
                        <div className='sessionInfoContainer'>
                            {this.props.sessionData.ProductName}, v{this.props.sessionData.Version} {this.props.sessionData.Platform} {this.props.sessionData.CompanyName}
                            <br/>
                            from {this.props.sessionData.SessionStartTime} to {this.props.sessionData.SessionEndTime} ({this.props.sessionData.SessionDuration})
                        </div>
                        <div className='themeButtonContainer'>
                            <ThemeSwitch  swapTheme={this.props.swapTheme} isChecked={this.props.isChecked}/>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Footer;