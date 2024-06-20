
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Support from './pages/support/Support';
import TransactionPage from './pages/transaction/TransactionPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Dashboard/>,
    },
    {
      path: "/transaction",
      element:<TransactionPage/>,
    },
    {
      path: "/support",
      element:<Support/>,
    },
  ]);

  return (

    <>
     <RouterProvider router={router} />
 
    </>
  )
}

export default App
