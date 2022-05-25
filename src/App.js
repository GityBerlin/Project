import logo from './logo.svg';
import './App.css';
import BasicTable from './comp/users';
import { Provider } from 'react-redux';
import store from './redux/store';
function App(){
 return(
 <> 

<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />

  <Provider store={store}>
    <BasicTable></BasicTable>
</Provider>
    {/* <BasicTable></BasicTable> */}

</header>
</>
);

}

export default App;

