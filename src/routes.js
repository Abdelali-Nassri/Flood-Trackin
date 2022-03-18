
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Flood Monitoring",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
 /*{
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },*/
  {
    path: "/maps",
    name: "Monitoring from Map",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  /*{
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },*/
  {
    path: "/Flood Prediction",
    name: "Flood Prediction",
    icon: "nc-icon nc-money-coins",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/Test",
    name: "Test",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
  /*{
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },*/
];
export default routes;
