import { Component } from "react";

import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

import { nav_links } from "../links/links";

import "./index.css"
import PostsList from "../PostsList";
import { posts_data } from "../../data/data";


class Posts extends Component{
    render(){
        return(
            <div>
                <div className="mini-screen">
                    <Navbar/>
                    <div>
                        <h3>Posts</h3>
                        <div className="kpis-all-containers">
                            <div className="each-kpi">
                                <h3>Total posts</h3>
                                <p>{posts_data.kpis.totalPosts}</p>
                            </div>
                            <div className="each-kpi">
                                <h3>Posts Published in 24hrs</h3>
                                <p>{posts_data.kpis.postsLast24Hours}</p>
                            </div>
                        </div>
                        <PostsList/>
                    </div>
                </div>
                <div className="tab-screen">
                    <Navbar/>
                    <div>
                        <h3>Posts</h3>
                        <div className="kpis-all-containers">
                            <div className="each-kpi">
                                <h3>Total posts</h3>
                                <p>{posts_data.kpis.totalPosts}</p>
                            </div>
                            <div className="each-kpi">
                                <h3>Posts Published in 24hrs</h3>
                                <p>{posts_data.kpis.postsLast24Hours}</p>
                            </div>
                        </div>
                        <PostsList/>
                    </div>
                </div>
                <div className="large-screen">
                    <Sidebar activeSidebar={nav_links[2].nav_id}/>
                    <hr/>
                    <div className="large-screen-content">
                        <h3>Posts</h3>
                        <div className="kpis-all-containers">
                            <div className="each-kpi">
                                <h3>Total posts</h3>
                                <p>{posts_data.kpis.totalPosts}</p>
                            </div>
                            <div className="each-kpi">
                                <h3>Posts published in 24hrs</h3>
                                <p>{posts_data.kpis.postsLast24Hours}</p>
                            </div>
                        </div>
                        <PostsList/>
                    </div>


                </div>
            </div>
        )
    }
}

export default Posts