import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import UsersContainer from './Components/Users/UsersContainer';



function App(props) {
  return (
      <div className="App_wrapper">
        <Header />
        <Navbar />
        <div className="App_content">
          <Route render = { () => <Profile />} path="/profile"/>
          <Route render = { () => <DialogsContainer />} path ="/dialogs"/>
          <Route render = { () => <UsersContainer /> } path = "/users" />
        </div>
      </div>
  );
}

export default App;