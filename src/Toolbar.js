import React from 'react';
import CategoryButton from './CategoryButton';
import FileUploader from './FileUploader';
import ThemeContext from './ThemeContext';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {value => (
                    <div>
                        <div className='toolbar'>
                            <div className={'logo_' + value}>
                                <h1 className='logoText'>logist</h1>
                            </div>
                            <div className='categoryButtonContainer'>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='assert'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='error'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='exception'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='warning'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='system'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='performance'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='log'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='graphics'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='ai'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='audio'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='content'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='logic'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='gui'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='input'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='network'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='animation'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='physics'/>
                                <CategoryButton onCategoryToggle={this.props.onCategoryToggle} title='event'/>
                            </div>
                            <div>
                                <FileUploader onLoadedLog={this.props.onLoadedLog}/>
                            </div>
                        </div>
                        <div>
                            <div className={'logHeader_' + value}>
                                <table className='logHeaderTable'>
                                    <tbody>
                                        <tr>
                                            <td width="5%">time</td>
                                            <td width="10%">categories</td>
                                            <td width="80%">message</td>
                                            <td width="2.5%" style={{textAlign:'center'}}>stack</td>
                                            <td width="2.5%" style={{textAlign:'center'}}>info</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Toolbar;