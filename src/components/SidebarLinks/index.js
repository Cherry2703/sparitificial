import { Link } from "react-router-dom"

import "./index.css"

const SidebarLinks=props=>{
    const {each,clickedSidebar,active}=props
    const {nav_icon,nav_link,nav_name,nav_id}=each


    const styyle=active ? "active":""

    const onClickSidebar=()=>{
        clickedSidebar(nav_id)
    }



    return(
        <li className={`each-nav-link-li ${styyle}`}>
            
            <Link to={`${nav_link}`} className="link-sidebar">
                <button type="button" onClick={onClickSidebar} className="each-btn">
                    <i>{nav_icon}</i>
                    <span>{nav_name}</span>
                </button>
            </Link>



        </li>
    )
}

export default SidebarLinks