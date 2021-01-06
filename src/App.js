import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
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
        <LeftMenu />
        <main className="content">
          <Route path="/profile" render={ () => (
            <ProfilePage
              posts={props.posts}
              />
          )}/>
          <Route path="/dialogs" component={ () => (
            <DialogsPage
              dialogs={props.dialogs}
              users={props.users}
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
