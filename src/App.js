import logo from './logo.svg';
import './App.css';
import PendingOrder from './components/PendingOrder';
import SharedLayout from './components/SharedLayout';
import Login from './components/Login';
import { AuthProvider, } from "./context/AuthContext"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom';
import CompletedOrder from './components/CompletedOrder';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path="" element={<SharedLayout />}>
      <Route path='pendingorder' element={<PendingOrder />} />
      <Route path='completedorder' element={<CompletedOrder />} />

    </Route>
    <Route path='/login' element={<Login />} />
  </Route>
))

function App() {
  return (


    <RouterProvider router={routes} />


  );
}

export default App;
