import { Component } from "react";


import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import KPIS from "../KPIS";

import { nav_links } from "../links/links";

import "./index.css"
import UsersList from "../UsersList";


class Home extends Component{
    render(){
        
        return(
            <div>
                <div className="mini-screen">
                    <Navbar activenavbar={nav_links[0].nav_id}/>
                    <KPIS/>
                    <UsersList/>
                </div>
                <div className="tab-screen">
                    <Navbar/>
                    <KPIS/>
                    <UsersList/>
                </div>
                <div className="large-screen">
                    <Sidebar activeSidebar={nav_links[0].nav_id}/>
                    <hr/>
                    <div className="large-screen-content">
                    <KPIS/>

                    <UsersList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home