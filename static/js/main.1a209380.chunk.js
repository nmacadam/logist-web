(this.webpackJsonploggerhead=this.webpackJsonploggerhead||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),s=a.n(r),l=(a(13),a(1)),c=a(2),i=a(5),g=a(4),m=a(3),h=o.a.createContext(null),u=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={active:!0},n.handleClick=n.handleClick.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(){this.setState((function(e){return{active:!e.active}})),this.props.onCategoryToggle(this.props.title,!this.state.active),console.log(this.props.title+" "+this.state.active)}},{key:"render",value:function(){return!0===this.state.active?o.a.createElement("a",{onClick:this.handleClick,id:this.props.title,className:"categoryButton"},this.props.title):o.a.createElement("a",{onClick:this.handleClick,id:this.props.title,className:"categoryButton",style:{textDecoration:"line-through",opacity:"60%"}},this.props.title)}}]),a}(o.a.Component),p=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).readSingleFile=function(e){var t=e.target.files[0];if(t){var a=new FileReader;a.onload=function(e){var t=e.target.result;n.props.onLoadedLog(JSON.parse(t))},a.readAsText(t)}},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"fileButtonContainer"},o.a.createElement("input",{type:"file",id:"hiddenUpload",className:"categoryButton",onChange:this.readSingleFile}),o.a.createElement("a",{onClick:function(){return document.getElementById("hiddenUpload").click()},id:"upload",className:"categoryButton"},"upload"))}}]),a}(o.a.Component),d=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement("div",null,o.a.createElement("div",{className:"toolbar"},o.a.createElement("div",{className:"logo_"+t},o.a.createElement("h1",{className:"logoText"},"logist")),o.a.createElement("div",{className:"categoryButtonContainer"},o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"assert"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"error"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"exception"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"warning"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"system"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"performance"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"log"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"graphics"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"ai"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"audio"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"content"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"logic"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"gui"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"input"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"network"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"animation"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"physics"}),o.a.createElement(u,{onCategoryToggle:e.props.onCategoryToggle,title:"event"})),o.a.createElement("div",null,o.a.createElement(p,{onLoadedLog:e.props.onLoadedLog}))),o.a.createElement("div",null,o.a.createElement("div",{className:"logHeader_"+t},o.a.createElement("table",{className:"logHeaderTable"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{width:"5%"},"time"),o.a.createElement("td",{width:"10%"},"categories"),o.a.createElement("td",{width:"80%"},"message"),o.a.createElement("td",{width:"2.5%",style:{textAlign:"center"}},"stack"),o.a.createElement("td",{width:"2.5%",style:{textAlign:"center"}},"info")))))))}))}}]),a}(o.a.Component),C=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n.handleClick=n.props.onClick.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("center",null,o.a.createElement("a",{onClick:this.handleClick,className:"stackTrace-button"}))}}]),a}(o.a.Component),f=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={infoClass:"infoHide"},n.handleClick=n.props.onClick.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("center",null,o.a.createElement("a",{onClick:this.handleClick,className:"info-button"}))}}]),a}(o.a.Component),E=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={traceClass:"stackTraceShow"},n}return Object(c.a)(a,[{key:"handleVisibility",value:function(){this.props.show?this.setState({traceClass:"stackTraceShow"}):this.setState({traceClass:"stackTraceHide"})}},{key:"render",value:function(){var e=this;if(!1===this.props.open||void 0===this.props.open)return o.a.createElement("div",null);var t=this.props.trace.map((function(e,t){return o.a.createElement("p",{key:"index"},e)}));return o.a.createElement(h.Consumer,null,(function(a){return o.a.createElement("div",{className:e.state.traceClass+"_"+a},t)}))}}]),a}(o.a.Component),v=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={traceClass:"infoShow"},n}return Object(c.a)(a,[{key:"onToggle",value:function(){"infoHide"===this.state.traceClass?this.setState({traceClass:"infoShow"}):this.setState({traceClass:"infoHide"})}},{key:"render",value:function(){var e=this;return!1===this.props.open||void 0===this.props.open?o.a.createElement("div",null):o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement("div",{className:e.state.traceClass+"_"+t},e.props.info)}))}}]),a}(o.a.Component),y=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showStackTrace:!1,showInfo:!1},n.showStackTraceElement=n.showStackTraceElement.bind(Object(i.a)(n)),n.showInfoElement=n.showInfoElement.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"showStackTraceElement",value:function(){this.setState((function(e){return{showStackTrace:!e.showStackTrace,showInfo:e.showInfo}}))}},{key:"showInfoElement",value:function(){this.setState((function(e){return{showStackTrace:e.showStackTrace,showInfo:!e.showInfo}}))}},{key:"render",value:function(){var e=this,t=!1;if(this.props.categories.forEach((function(a){t=t||e.props.filter[a]})),!1===t)return o.a.createElement("div",null);var a=this.props.categories.map((function(t,a){return e.props.filter[t]?o.a.createElement("a",{key:a,id:t,className:"categoryTag"},t):o.a.createElement("a",{key:a,id:t,className:"categoryTag",style:{textDecoration:"line-through",opacity:"60%"}},t)}));return o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement("div",{className:"log_"+t},o.a.createElement("table",{className:"logContents"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{width:"5%"},e.props.timeStamp.toFixed(3)),o.a.createElement("td",{width:"10%"},a),o.a.createElement("td",{width:"80%"},e.props.log),o.a.createElement("td",{width:"2.5%"},o.a.createElement(C,{onClick:e.showStackTraceElement})),o.a.createElement("td",{width:"2.5%"},o.a.createElement(f,{onClick:e.showInfoElement}))))),o.a.createElement(E,{trace:e.props.trace,open:e.state.showStackTrace}),o.a.createElement(v,{info:e.props.info,open:e.state.showInfo}))}))}}]),a}(o.a.Component),k=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);localStorage.getItem("theme");return n.state={},n.handleToggle=n.handleToggle.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"handleToggle",value:function(){this.setState((function(e){return{isChecked:!e.isChecked}}),this.props.swapTheme())}},{key:"render",value:function(){return o.a.createElement("label",{class:"switch"},o.a.createElement("input",{onClick:this.props.swapTheme,type:"checkbox",checked:this.props.isChecked}),o.a.createElement("span",{class:"slider round"}))}}]),a}(o.a.Component);k.defaultProps={isChecked:!1};var T=k,b=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return void 0===this.props.sessionData?o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement("div",{className:"footer_"+t},o.a.createElement("div",{className:"themeButtonContainer"},o.a.createElement(T,{swapTheme:e.props.swapTheme,isChecked:e.props.isChecked})))})):o.a.createElement(h.Consumer,null,(function(t){return o.a.createElement("div",{className:"footer_"+t},o.a.createElement("div",{className:"sessionInfoContainer"},e.props.sessionData.ProductName,", v",e.props.sessionData.Version," ",e.props.sessionData.Platform," ",e.props.sessionData.CompanyName,o.a.createElement("br",null),"from ",e.props.sessionData.SessionStartTime," to ",e.props.sessionData.SessionEndTime," (",e.props.sessionData.SessionDuration,")"),o.a.createElement("div",{className:"themeButtonContainer"},o.a.createElement(T,{swapTheme:e.props.swapTheme,isChecked:e.props.isChecked})))}))}}]),a}(o.a.Component),O=(a(14),o.a.createContext("activeCategories"),function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var o="dark";"theme"in localStorage&&(o=localStorage.getItem("theme")),n.state={session:{},categories:{assert:!0,error:!0,exception:!0,warning:!0,system:!0,performance:!0,log:!0,graphics:!0,ai:!0,audio:!0,content:!0,logic:!0,gui:!0,input:!0,network:!0,animation:!0,physics:!0,event:!0},theme:o},n.addLogData=n.addLogData.bind(Object(i.a)(n)),n.toggleCategory=n.toggleCategory.bind(Object(i.a)(n)),n.toggleTheme=n.toggleTheme.bind(Object(i.a)(n));var r=document.getElementsByTagName("BODY")[0];return"dark"===n.state.theme?r.className="dark":"light"===n.state.theme&&(r.className="light"),console.log("startup theme is "+n.state.theme),n}return Object(c.a)(a,[{key:"toggleTheme",value:function(){var e=this;this.setState((function(t){return{session:e.state.session,categories:e.state.categories,theme:"dark"===t.theme?"light":"dark"}}),(function(){console.log("theme changed to "+e.state.theme),localStorage.setItem("theme",e.state.theme);var t=document.getElementsByTagName("BODY")[0];"dark"===e.state.theme?t.className="dark":"light"===e.state.theme&&(t.className="light")})),localStorage.setItem("theme",this.state.theme)}},{key:"updateLocalStorage",value:function(){console.log("theme changed to "+this.state.theme),localStorage.setItem("theme",this.state.theme)}},{key:"addLogData",value:function(e){console.log(e),this.setState({session:e,categories:this.state.categories,theme:this.state.theme})}},{key:"toggleCategory",value:function(e,t){var a=Object.assign({},this.state.categories);a[e]=t,this.setState({session:this.state.session,categories:a,theme:this.state.theme})}},{key:"render",value:function(){var e=this,t=o.a.createElement("div",null);return void 0!==this.state.session.Logs&&(t=this.state.session.Logs.map((function(t,a){return o.a.createElement(y,{key:a,filter:e.state.categories,timeStamp:t.TimeStamp,categories:t.Categories,log:t.Log,trace:t.StackTrace,info:"data.info"})}))),o.a.createElement(h.Provider,{value:this.state.theme},o.a.createElement("div",{className:"App"},o.a.createElement(d,{onLoadedLog:this.addLogData,onCategoryToggle:this.toggleCategory}),o.a.createElement("div",{className:"logContainer"},t),o.a.createElement(b,{swapTheme:this.toggleTheme,isChecked:"dark"!==this.state.theme,sessionData:this.state.session.SessionData})))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a209380.chunk.js.map