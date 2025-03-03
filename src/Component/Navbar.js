import React,{useState,useEffect} from "react";
import { Nav, NavItem, NavLink} from "reactstrap";

import Data from './data/data.json';
import './Header.css';
const Navbar =(props)=>{
    const navItems = Data.navigation;
    const [navBar, setnavBar] = useState(navItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getheader();
    },);

    const getheader=()=>{
        setnavBar(navBar);
        console.log(navBar);
    };
  
    let links = navItems.href;
    let a = 0;
    const navItemsArr = navItems.nav.map((item) =>
        <NavItem >
            <NavLink  href={"#"+links[a]} className={a = a+1} style={{color:props.Color}} >  
                
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