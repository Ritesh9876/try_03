import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import Login from './components/Login'
import Signup from './components/Signup'
import Adddata from './components/Adddata'
import Home from './components/Home'
import  Webexample from './components/WebExample';
function App() {
  return (
    <Provider store={store}>
    <div className="container">
        
      <Router>
    {/* <Navbar/> */}
    
         <Routes>
         <Route path='/' 
          element={<Home />}
           />
          <Route path='/login' 
          element={<Login />}
           />
            <Route path='/signup' 
          element={<Signup />}
           />
           <Route path='/add_data' 
          element={<Adddata />}
           />
            <Route path='/webexample' 
          element={< Webexample />}
           />
         </Routes>
       </Router>
          
       </div> </Provider>
    
  );
}

export default App;
