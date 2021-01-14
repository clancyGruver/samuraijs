import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialogsPage from './components/DialogsPage/DialogsPage';
import NewsPage from './components/NewsPage/NewsPage';
import MusicPage from './components/MusicPage/MusicPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import './assets/styles/App.css';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <SideBar state={props.state.sideBar} />
      <main className="content">
        <Route path="/profile" render={ () => (
          <ProfilePage
            state={props.state.profilePage}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/dialogs" render={ () => (
          <DialogsPage
            state={props.state.dialogsPage}
            dispatch={props.dispatch}
          />
        )}/>
        <Route path="/news" render={ () => <NewsPage /> } />
        <Route path="/music" render={ () => <MusicPage /> } />
        <Route path="/settings" render={ () => <SettingsPage /> } />
      </main>
    </div>
  );
}

export default App;
