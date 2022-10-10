import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from './Utilities/RouteFile'

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <h1>Home page</h1>
    </div>
  );
}

export default App;
