import logo from './logo.svg';
import './App.css';
import DisplayUser from './comp/users';
import { Provider } from 'react-redux';
import store from './redux/store';
import login1 from './comp/userPost';
import UserPost from './comp/userPost';
import NewPost from './comp/newPost';
import Menu from './router/routerMenu';
function App() {
  return (
    <>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Provider store={store}>
          <Menu></Menu>
        </Provider>


      </header>
    </>
  );

}

export default App;

