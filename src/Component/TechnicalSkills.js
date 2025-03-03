import React, { } from 'react';
import {Card, CardBody, CardTitle,CardText, Container,Col,Row, CardSubtitle} from 'reactstrap';
import { SIJava, SiSpring,SiJavascript,SiSpringboot,SiHibernate,SiJunit5,SiPython,SiReact,SiJquery,SiHtml5,
    SiCss3,SiBootstrap,SiApachemaven,SiJenkins, SiTeamcity,
    SiMongodb,
    SiGithub,
    SiJirasoftware,
    SiSonarqube,
    SiMysql, SiPostgresql,SiDocker,SiGit,SiGitlab,SiPostman,SiGerrit,SiAndroid, SiFlask     } from "react-icons/si";
import { VscCode,VscAzureDevops  } from "react-icons/vsc";
import { DiScrum,DiJava   } from "react-icons/di";
import './tech.css'

const TechnicalSkills=(props)=>{
    return(
        <div style={{textAlign:'left',  color:props.Color}} id={props.id}>
            <Card style={{backgroundColor:props.BackGround, width:'max-width', border:'0' }}>
                    <CardBody >
                    <CardTitle tag="h1" className="" style={{textAlign:'left'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Tools & Technologies</b></CardTitle>
                    <CardSubtitle tag="h6" className="mt-1" style={{color:props.Color}}>Backend</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%',color:props.Color}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <DiJava  /><p style={{fontSize:'60%'}}>Java</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <DiJava /><p style={{fontSize:'60%'}}>J2EE</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiSpring/><p style={{fontSize:'60%'}}>Microservices</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiSpring/><p style={{fontSize:'60%'}}>Spring</p>
                            </Col>
                            <Col md={4}>
                                <SiSpringboot/><p style={{fontSize:'60%'}}>Spring Boot</p>
                            </Col>
                            <Col md={4}>
                                <SiHibernate/><p style={{fontSize:'60%'}}>Hibernate</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiJunit5/><p style={{fontSize:'60%'}}>Junit</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiApachemaven/><p style={{fontSize:'60%'}}>Maven</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiPostgresql/><p style={{fontSize:'60%'}}>PostgreSQL</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4}>
                            <SiMongodb/><p style={{fontSize:'60%'}}>Mongo DB</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiMysql /><p style={{fontSize:'60%'}}>MySql</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                              
                            </Col>
                        </Row>
                    </CardText>
                    <CardSubtitle tag="h6" className="mt-1" style={{color:props.Color}}>Frontend</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%', color:props.Color}}>
                    <Row className="icon">
                            <Col md={4}>
                                <SiHtml5/><p style={{fontSize:'60%'}}>HTML 5</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiCss3/><p style={{fontSize:'60%'}}>CSS 3</p>
                            </Col>
                            <Col md={4}>
                                <SiBootstrap/><p style={{fontSize:'60%'}}>Bootstrap </p>
                            </Col>
                           
                        </Row>
                        <Row className="icon">
                            <Col md={4}>
                                <SiJavascript/><p style={{fontSize:'60%'}}>Javascript</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiReact/><p style={{fontSize:'60%'}}>React JS</p>
                            </Col>
                            <Col md={4}>
                                
                            </Col>
                            
                        </Row>
                        
                    </CardText> 
                    <CardSubtitle tag="h6" className="mt-1" style={{color:props.Color}}>Tools</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%',color:props.Color}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiDocker /><p style={{fontSize:'60%'}}>Docker</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiGit /><p style={{fontSize:'60%'}}>Git</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiGithub/><p style={{fontSize:'60%'}}>Github</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiGitlab /><p style={{fontSize:'60%'}}>GitLab</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiJirasoftware/><p style={{fontSize:'60%'}}>JIRA</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiSonarqube/><p style={{fontSize:'60%'}}>SonarQube</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4}>
                                <SiPostman /><p style={{fontSize:'60%'}}>Postman </p>
                            </Col>
                            <Col md={4}>
                                <SiJenkins/><p style={{fontSize:'60%'}}>Jenkins </p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiGerrit /><p style={{fontSize:'60%'}}>Gerrit </p>
                            </Col>
                        </Row>
        
                      
                    </CardText>
                    <CardSubtitle tag="h6" className="mt-1" style={{color:props.Color}}>Other Skils</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%', color:props.Color}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <VscCode/><p style={{fontSize:'60%'}}>Restful APIs</p>
                            </Col>
                            <Col md={4}>
                                <VscAzureDevops/><p style={{fontSize:'60%'}}>Azure Cloud </p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiFlask /><p style={{fontSize:'60%'}}>Python Flask Development</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                           
                            <Col md={4} className="mx-0 px-0">
                                <SiAndroid /><p style={{fontSize:'60%'}}>Android Development</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <DiScrum /><p style={{fontSize:'60%'}}>Agile Development</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <VscCode/><p style={{fontSize:'60%'}}>Web Development </p>
                            </Col>
                        </Row>          
                    </CardText>
                   
                    </CardBody>
                </Card>
            
        </div>
    );
};
export default TechnicalSkills;