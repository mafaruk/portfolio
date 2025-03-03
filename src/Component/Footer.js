import React, {}from 'react';
import {Nav,NavItem,NavLink,} from 'reactstrap';

import { FaTwitter, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {IconContext} from "react-icons";

const Footer = (props) =>{

    const style = {
        width: '100%', /* width of container */
        height: 'auto', /* height of container */
        objectFit: 'cover',
        objectPosition: '20% 20%', /* try 20px 10px */
        backgroundColor: props.Color,
        color:props.content,
        margin:'0'
        
    };
    return(
    <div style={style} className="text-center mt-3" >
        <h5>

            You can reach out to me at
        </h5>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <Nav pills style={{ display: "flex", gap: "10px", padding: "10px" }}>
                    <NavItem >
                        <NavLink href="https://twitter.com/Mafaruk_Bagwan"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.content}}} >
                                <div >
                                    <FaTwitter /> 
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/mafarukbagwan4/"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.content}}} >
                                <div >
                                    <FaLinkedin />
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:bagwannihal4@gmail.com"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.content}}} >
                                <div >
                                    <FaEnvelope />
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem> 
                    <NavItem></NavItem>
                </Nav>
                </div>
    </div>
    );
};
export default Footer;