import React from 'react';
import ThemeContext from './ThemeContext';

class ThemeSwitch extends React.Component {
  constructor(props) {
    super(props);

    let checked = localStorage.getItem('theme') === 'light';

    this.state = {}
    this.handleToggle = this.handleToggle.bind(this);
  } 

  handleToggle() {
    this.setState(state => ({
      isChecked: !state.isChecked
    }),
    this.props.swapTheme()
    );
  }

  render() {
    return (
        <label class="switch">
            <input onClick={this.props.swapTheme} type="checkbox" checked={this.props.isChecked}/>
            <span class="slider round"></span>
        </label>
    );
  }
}

ThemeSwitch.defaultProps = {
  isChecked: false
}; 

export default ThemeSwitch;
