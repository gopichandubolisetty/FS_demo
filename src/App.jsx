import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pricing from "./Pages/Pricing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ContactUs from "./Pages/Contact";
import Nav from "./Components/Nav";


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Nav></Nav>
      <Home></Home>
    </>,
  },
  {
    path: "/pricing",
    element: <>
      <Nav></Nav>
      <Pricing></Pricing>
    </>,
  },
  {
    path: "/signup",
    element: <>
      <Nav></Nav>
      <Signup></Signup>
    </>,
  },
  {
    path: "/login",
    element: <>
      <Nav></Nav>
      <Login></Login>
    </>,
  },
  {
    path: "/contact",
    element: <>
      <Nav></Nav>
      <ContactUs></ContactUs>
    </>,
  },
])


function App() {
    return(
        <>
           <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
