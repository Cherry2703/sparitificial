import { totalPosts,users, users_active,posts_data} from "../../data/data"

import "./index.css"

const KPIS=()=>(
    <div className="kpis-cont" >
        <h1>Spartificial Information</h1>
        <div className="kpis-all-containers">
            
                <div className="each-kpi">
                    <h2>Total Users</h2>
                    <p>{users}</p>
                </div>
                <div className="each-kpi">
                    <h2>Users Active in Last 24hrs</h2>
                    <p>{users_active.length}</p>
                </div>
                <div className="each-kpi">
                    <h2>Total Posts</h2>
                    <p>{totalPosts}</p>
                </div>
                <div className="each-kpi">
                    <h2>Posts Published in 24hrs</h2>
                    <p>{posts_data.kpis.postsLast24Hours}</p>
                </div>
            
        </div>
    </div>
)

export default KPIS