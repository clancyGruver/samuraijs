import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import DialogsPageContainer from './components/DialogsPage/DialogsPageContainer';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import NewsPage from './components/NewsPage/NewsPage';
import MusicPage from './components/MusicPage/MusicPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import LoginPage from './components/LoginPage/LoginPage';
import './assets/styles/App.css';

const App = (props) => {
  return (
    <div className="container">
      <HeaderContainer />
      <SideBarContainer />
      <main className="content">
        <Route
          path="/profile/:userId?"
          render={ () => (
            <ProfilePageContainer />
          )}
        />
        <Route
          path="/dialogs"
          render={ () => (
            <DialogsPageContainer />
          )}
        />
        <Route
          path="/users"
          render={ () => (
            <UsersPageContainer />
          )}
        />
        <Route
          path="/login"
          render={ () => (
            <LoginPage />
          )}
        />
        <Route path="/news" render={ () => <NewsPage /> } />
        <Route path="/music" render={ () => <MusicPage /> } />
        <Route path="/settings" render={ () => <SettingsPage /> } />
      </main>
    </div>
  );
}

export default App;
