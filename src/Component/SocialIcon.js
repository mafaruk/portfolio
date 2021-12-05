import React from "react";
import {Nav,NavItem,NavLink,} from 'reactstrap';
import {Dropdown} from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub,  FaEnvelope} from "react-icons/fa";
import { SiCodewars, SiHackerrank, SiLeetcode} from "react-icons/si";
import {IconContext} from "react-icons";
import { FiMenu } from "react-icons/fi";
const SocialIcon=(props)=>{

    return (
           
                <Nav pills >
                    <NavItem >
                        <NavLink href="https://twitter.com/Mafaruk_Bagwan"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.Color}}} >
                                <div >
                                    <FaTwitter /> 
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/mafarukbagwan4/"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.Color}}} >
                                <div >
                                    <FaLinkedin />
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/mafaruk"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.Color}}} >
                                <div >
                                    <FaGithub />
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:bagwannihal4@gmail.com"  target="_blank" style={{color:props.Color}} >
                            <IconContext.Provider value={{ style: {fontSize: '180%',color:props.Color}}} >
                                <div >
                                    <FaEnvelope />
                                </div>
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem> 
                    <NavItem>
                            
                                <Dropdown  style={{color:'red'}}>
                                    <Dropdown.Toggle id="dropdown-basic"  variant="white">
                                        <IconContext.Provider value={{ style: {fontSize: '180%',color:props.Color}}} >
		                                    <FiMenu />
	                                    </IconContext.Provider>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="https://www.codewars.com/users/mafaruk" target="_blank">
		                                    <IconContext.Provider value={{ style: {fontSize: '180%', color:props.content}}} >
						                        
							                        <SiCodewars /><b style={{color:props.content}}> Codewars</b>
						                        
					                        </IconContext.Provider>
	                                    </Dropdown.Item>
                                        <Dropdown.Item href="https://www.hackerrank.com/bagwannihal" target="_blank">
		                                    <IconContext.Provider value={{ style: {fontSize: '180%',color:props.content}}} >
						                       
							                        <SiHackerrank /> <b style={{color:props.content}}> Hackerrank</b>
						                        
					                        </IconContext.Provider>
	                                    </Dropdown.Item>
                                        <Dropdown.Item href="https://leetcode.com/mafaruk/" target="_blank">
		                                    <IconContext.Provider value={{ style: {fontSize: '180%',color:props.content}}} >
						                        
							                        <SiLeetcode /><b style={{color:props.content}}> Leetcode</b>
						                        
					                        </IconContext.Provider>
	                                    </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>    
                          
                            
                        
                    </NavItem> 
                </Nav>
            
    );

};
export default SocialIcon;