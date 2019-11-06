import Index from "./components/views/Index.jsx";
import Profile from "./components/views/Profile.jsx";
//import Maps from "./components/views/Maps.jsx";
import Register from "./components/views/Register.jsx";
import Login from "./components/views/Login.jsx";
//import Tables from "./components/views/Tables.jsx";
//import Icons from "./components/views/Icons.jsx";

import EventsList from "./components/views/EventsList.jsx"



var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-spaceship text-primary",
    component: Index,
    layout: "/admin"
  },
 
  {
    path: "/eventList",
    name: "Eventos",
    icon: "ni ni-bullet-list-67 text-yellow",
    component: EventsList,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "",
    icon: "ni ni-circle-08 text-info",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-pink",
    component: Profile,
    layout: "/admin"
  }
 
];
export default routes;
