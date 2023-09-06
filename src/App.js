import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';



const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
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
