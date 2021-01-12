import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialogsPage from './components/DialogsPage/DialogsPage';
import NewsPage from './components/NewsPage/NewsPage';
import MusicPage from './components/MusicPage/MusicPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import './assets/styles/App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <SideBar state={props.state.sideBar} />
        <main className="content">
          <Route path="/profile" render={ () => (
            <ProfilePage
              state={props.state.profilePage}
            />
          )}/>
          <Route path="/dialogs" component={ () => (
            <DialogsPage
              state={props.state.dialogsPage}
            />
          )}/>
          <Route path="/news" component={ () => <NewsPage /> } />
          <Route path="/music" component={ () => <MusicPage /> } />
          <Route path="/settings" component={ () => <SettingsPage /> } />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
