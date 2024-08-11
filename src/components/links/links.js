import { FaHome,FaUsers } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";



export const nav_links=[
    {
        nav_id:1,
        nav_name:'Home',
        nav_link:"/",
        nav_icon:<FaHome/>
    },
    {
        nav_id:2,
        nav_name:'Users',
        nav_link:"/users",
        nav_icon:<FaUsers/>
    },
    {
        nav_id:3,
        nav_name:'Posts',
        nav_link:"/posts",
        nav_icon:<CiViewList/>
    }
]