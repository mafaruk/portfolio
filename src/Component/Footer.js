import React, {useState, useEffect}from 'react';
import {Nav,NavItem,NavLink,} from 'reactstrap';
import {Row} from 'reactstrap';
import { FaTwitter, FaLinkedin, FaGithub,  FaEnvelope} from "react-icons/fa";
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
    <div style={style} className="text-center mt-3">
        <h5>
            & that's me. 
        </h5>
        <p>
            you can reach me at
        </p>
        <Nav pills style={{margin:"auto", width:'18%', padding:'10px'}}>
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
    );
};
export default Footer;