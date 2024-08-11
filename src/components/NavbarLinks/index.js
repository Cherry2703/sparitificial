import { Link } from "react-router-dom"

const NavbarLinks=(props)=>{

    const {each,btnChange,activebtn}=props

    const onClickNavBtn=()=>{
        btnChange(each.nav_id)
    }

    const ac=activebtn ? "activenav":""

    return(

        <li key={each.nav_id} className={ac} >
            <Link to={`${each.nav_link}`}>
                <button className="each-navlink-btn" onClick={onClickNavBtn}>
                    <i>{each.nav_icon}</i>
                    <span>{each.nav_name}</span>
                </button>
            </Link>
        </li>
    )
}

export default NavbarLinks