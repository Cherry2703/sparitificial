import { Component } from "react";

import { nav_links } from "../links/links";


import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import NavbarLinks from "../NavbarLinks";

import "./index.css"



class Navbar extends Component{

    state={showMenu:false,activeNavbar:nav_links[0].nav_id}


    onClickMenuBtn=()=>{
        this.setState(prevstate=>({showMenu:!prevstate.showMenu}))
    }

    btnChange=id=>{
        this.setState({activenavbar:id})
    }

    render(){
        const {activenavbar}=this.props
        const {showMenu}=this.state
        return(
            <nav>
                <div className="navbar-top">
                    <span className="company-name">Spartificial</span>
                    {showMenu ? <button type="button" className="menu-btn" onClick={this.onClickMenuBtn}><IoMdClose/></button> : 
                    <button type="button" onClick={this.onClickMenuBtn} className="menu-btn"><IoMenu/></button>}
                </div>
                {showMenu && 
                <ul className="navbar-btns-cont">
                    {nav_links.map((each)=>(
                       <NavbarLinks each={each} key={each.nav_id} btnChange={this.btnChange} activebtn={each.nav_id===activenavbar}/>
                    ))}
                </ul>
                }
            </nav>
        )
    }
}


export default Navbar