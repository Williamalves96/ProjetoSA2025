import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element: <Body/>,
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]);

  return (
    <div clasName='container-app'>
      <Header />
      
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
