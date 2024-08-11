import { Component } from "react";

import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

import { nav_links } from "../links/links";

import { users_data } from "../../data/data";
import UsersList from "../UsersList";

import "./index.css"


class Users extends Component{
    render(){
        return(
            <div>
                <div className="mini-screen">
                    <Navbar />
                    <div>
                        <h3>Users</h3>
                        <div className="kpis-all-containers">
                            <div className="each-kpi">
                                <h3>Total Users</h3>
                                <p>{users_data.kpis.totalUsers}</p>
                            </div>
                            <div className="each-kpi">
                                <h3>Total Users active in 24hrs</h3>
                                <p>{users_data.kpis.activeUsersLast24Hours}</p>
                            </div>
                        </div>
                        <UsersList/>
                    </div>
                </div>
                <div className="tab-screen">
                    <Navbar />
                    <div>
                        <h3>Users</h3>
                        <div className="kpis-all-containers">
                            <div className="each-kpi">
                                <h3>Total Users</h3>
                                <p>{users_data.kpis.totalUsers}</p>
                            </div>
                            <div className="each-kpi">
                                <h3>Total Users active in 24hrs</h3>
                                <p>{users_data.kpis.activeUsersLast24Hours}</p>
                            </div>
                        </div>
                        <UsersList/>
                    </div>
                </div>
                <div className="large-screen">
                    <Sidebar activeSidebar={nav_links[1].nav_id}/>
                    <hr/>
                    <div className="large-screen-content">
                        <h3>Users</h3>
                        <div className="kpis-all-containers">
                            <div className="each-kpi">
                                <h3>Total Users</h3>
                                <p>{users_data.kpis.totalUsers}</p>
                            </div>
                            <div className="each-kpi">
                                <h3>Total Users active in 24hrs</h3>
                                <p>{users_data.kpis.activeUsersLast24Hours}</p>
                            </div>
                        </div>
                        <UsersList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users