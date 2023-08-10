// import { Container } from 'react-bootstrap';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/Header';


// const App = () => {
//   return (
//     <>
//       <Header />
//       <ToastContainer />
//  <Container className='my-2'>
//         <Outlet />
//       </Container>
      
//     </>
//   );
// };

// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store.js';
// import { Provider } from 'react-redux';
// import HomeScreen from './screens/HomeScreen.jsx';
// import LoginScreen from './screens/LoginScreen.jsx';
// import RegisterScreen from './screens/RegisterScreen.jsx';
// import ProfileScreen from './screens/ProfileScreen.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import Postdetaile from './screens/Postdetaile.js';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route index={true} path='/' element={<HomeScreen />} />
//       <Route path='/login' element={<LoginScreen />} />
//       <Route path='/register' element={<RegisterScreen />} />
//       <Route path='/post/:_id' element={<Postdetaile/>} />
  
//       <Route path='' element={<PrivateRoute />}>
//         <Route path='/profile' element={<ProfileScreen />} />
//       </Route>
//       {/* <Footer/> */}
//     </Route>
//   )
// );



import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Postdetaile from './screens/Postdetaile.js';
import Header from './components/Header';

// import Home from './AUTH/Home';
// import Login from './AUTH/Login';
// import Register from './AUTH/Register';
// import Profile from './AUTH/Profile';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/create/Create.jsx';
import Edit from './components/create/Edit.js';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>

      <Route  path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/post/:_id' element={<Postdetaile/>} />
  
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/edit/:_id' element={<Edit/>} />
        <Route path='/create' element={<Create />} />
 
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App





