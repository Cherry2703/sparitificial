import { Component } from "react";


import { nav_links } from "../links/links";

import SidebarLinks from "../SidebarLinks"


import "./index.css"


class Sidebar extends Component{

    state={activeNav:nav_links[0].nav_id}


    clickedSidebar=(id)=>{
        this.setState({activeNav:id})
    }
    
    

    render(){
        const {activeSidebar}=this.props
        return(
            <div className="sidebar">
                <div className="top-section">
                    <div>
                        <div className="sidebar-top">
                            <p className="company-name">Spartificial</p> 
                        </div>
                        <hr/>
                        <div>
                            <ul>
                                {/* {nav_links.map((each)=>(
                                    <li  key={each.nav_id} className="each-nav-link-li">
                                        
                                    </li>
                                ))} */}

                                {nav_links.map((each)=>(
                                    <SidebarLinks each={each} key={each.nav_id} clickedSidebar={this.clickedSidebar} active={each.nav_id === activeSidebar}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom-section"></div>
            </div>
        )
    }
}

export default Sidebar