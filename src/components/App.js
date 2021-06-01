import '../css/App.css';
import Navbar from './Navbar'
import Main from './Main';
import {Provider} from 'react-redux'
import store from '../Redux/store'
function App() {
  return (
    <Provider store= {store}>
    <div className="App w-11/12 mx-auto py-5 h-10/12">
        <Navbar />
        <Main />
    </div>
    </Provider>
  );
}

export default App;
