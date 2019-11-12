import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navigation from './components/Navigation/Navigation';
import VideoContainer from './components/Videos/VideoContainer';
import HomePage from './components/HomePage/HomePage';
import Study from './components/Study/Study';
import Dialog from './UI/Dialog/Dialog';
import { isUserOnStorage, } from './dataSources/userService';
import UserForm from './components/UserForm/UserForm';
import Game from './components/Game/Game';
import Code from './components/Code/CodeContainer';

function DialogContainer() {
  const [ isOpen, setOpen] = React.useState(false);
  React.useEffect(() => setOpen(!isUserOnStorage()), []);

  return (
  <Dialog show={isOpen}>
    { isOpen && <UserForm closeDialog={() => setOpen(false)}/> }
  </Dialog>
  );
}

function App() {
  const history = createBrowserHistory();

  return (

    <div>
      <DialogContainer/>

      <Navigation history={history}/>
      <HashRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/videos" component={VideoContainer} />
          <Route exact path="/study" component={Study} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/iddqd" component={Game} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
