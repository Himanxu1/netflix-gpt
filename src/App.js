import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
  
  

  return (
    <div >
  
     <RouterProvider router={appRouter} />

    </div>
  );
}

export default App;
