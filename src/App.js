import React from 'react';
import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar'
import Log from './Log'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import './App.css';

const ActiveCategories = React.createContext('activeCategories');

class App extends React.Component {
  constructor(props) {
    super(props);

    let startupTheme = 'dark';
    if ('theme' in localStorage) {
      startupTheme = localStorage.getItem('theme');
    }

    this.state = 
    {
      session: {},
      categories: {
          'assert': true,        
          'error': true,
          'exception': true,
          'warning': true,
          'system': true,        
          'performance': true,
          'log': true, 
          'graphics': true, 
          'ai': true,
          'audio': true, 
          'content': true, 
          'logic': true, 
          'gui': true, 
          'input': true,  
          'network': true, 
          'animation': true, 
          'physics': true, 
          'event': true
      },
      theme: startupTheme
    }
    this.addLogData = this.addLogData.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);

    let body = document.getElementsByTagName("BODY")[0];
      if (this.state.theme === 'dark')
      {
        body.className = 'dark';
      }
      else if (this.state.theme === 'light')
      {
        body.className = 'light';
      }

    console.log("startup theme is " + this.state.theme);
  }

  toggleTheme() {
    this.setState(state => ({
      session: this.state.session,
      categories: this.state.categories,
      theme:
        state.theme === 'dark'//themes.dark
          ? 'light'//themes.light
          : 'dark'//themes.dark,
    }
    ), 
    () => {
      console.log("theme changed to " + this.state.theme);
      localStorage.setItem('theme', this.state.theme);

      let body = document.getElementsByTagName("BODY")[0];
      if (this.state.theme === 'dark')
      {
        body.className = 'dark';
      }
      else if (this.state.theme === 'light')
      {
        body.className = 'light';
      }
    });
    
    localStorage.setItem('theme', this.state.theme);

    

    //console.log("theme changed to " + this.state.theme);
  };

  updateLocalStorage()
  {
    console.log("theme changed to " + this.state.theme);
    localStorage.setItem('theme', this.state.theme);
  }

  addLogData(sessionData)
  {
    console.log(sessionData);
    this.setState({session: sessionData, categories: this.state.categories, theme: this.state.theme});
  }

  toggleCategory(key, isActive)
  {
    const categoriesCopy = Object.assign({}, this.state.categories);
    categoriesCopy[key] = isActive;
    this.setState({session: this.state.session, categories: categoriesCopy, theme: this.state.theme});
  }

  render() {

    let logs = (<div/>);
    if (this.state.session.Logs !== undefined)
    {
      logs = this.state.session.Logs.map((data, index) =>
        <Log key={index} filter={this.state.categories} timeStamp={data.TimeStamp} categories={data.Categories} log={data.Log} trace={data.StackTrace} info={'data.info'} />
      );
    }

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App">
          <Toolbar onLoadedLog={this.addLogData} onCategoryToggle={this.toggleCategory}/>
          <div className='logContainer'>
            {logs}
          </div>
          <Footer swapTheme={this.toggleTheme} isChecked={this.state.theme !== 'dark'} sessionData={this.state.session.SessionData}/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
