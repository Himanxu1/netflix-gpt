import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import Home from './pages/Home';



const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/home',
    element:<Home/>
  }


])


function App() {
  const dispatch = useDispatch()
  
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
     
      } else {
        dispatch(removeUser()) 
      }
    });
  },[])
  return (
    <div >
  
     <RouterProvider router={appRouter} />

    </div>
  );
}

export default App;
