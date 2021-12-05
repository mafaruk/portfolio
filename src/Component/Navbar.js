import React,{useState,useEffect} from "react";
import { Nav, NavItem, NavLink} from "reactstrap";

import Data from './data/data.json';
import './Header.css';
const Navbar =(props)=>{
    const navItems = Data.navigation;
    const [navBar, setnavBar] = useState(navItems);

    useEffect(() => {
        getheader();
    },[]);

    const getheader=()=>{
        setnavBar(navBar);
        console.log(navBar);
    };
  

    const navItemsArr = navItems.map((item) =>
        <NavItem >
            <NavLink href='#' for={item}  style={{color:props.Color}} >    
                <b>{item}</b>
            </NavLink>
        </NavItem>
    );
    return(
        <div  >
            <Nav vertical pills style={{textAlign:'left'}} > {navItemsArr}
                
            </Nav>
        </div>       
    );
};
export default Navbar;