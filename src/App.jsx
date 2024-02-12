import { RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Private from "./protected/Private";
import SplashScreen from "./components/SplashScreen";
import Error from "./components/Error";
import Unavailable from "./components/Unavailable";
import { userAuth } from "./context/AuthContext";
import Home from "./components/Home";
import Create from "./components/Create";
import Notification from "./components/Notification";


function App() {

  const auth = userAuth() 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} errorElement={<Error/>} >
      <Route index element={<LandingPage/>} />
      <Route path="login" element={<Login/>} />
      <Route path="splashscreen" element={<SplashScreen/>} />
      <Route path="signup" element={<SignUp/>} />
      <Route element={<Private />}>
        <Route path="dashboard" element={<Dashboard/>}>
        <Route index element={<Home/>} />
        <Route path="unavailable" element={<Unavailable/>} />
        <Route path="create" element={<Create/>} />
        <Route path="notification" element={<Notification/>} />
        </Route>
      </Route>
      </Route>
    ))


    return(
      
      <RouterProvider router={router}/>
)


}

export default App
