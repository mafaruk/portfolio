import React, { } from 'react';
import {Card, CardBody, CardTitle,CardText, Container,Col,Row, CardSubtitle} from 'reactstrap';
import { SiJava, SiSpring,SiJavascript,SiSpringboot,SiHibernate,SiJunit5,SiPython,SiReact,SiJquery,SiHtml5,
    SiCss3,SiBootstrap,SiGradle,SiApachemaven,SiJenkins, SiTeamcity,SiMicrosoftsqlserver,
    SiOracle,
    SiFirebase,
    SiC,
    SiMongodb,
    SiGithub,
    SiJirasoftware,
    SiSonarqube,
    SiApachetomcat} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { DiCodeBadge } from "react-icons/di";
import { GiTortoise } from "react-icons/gi";
import './tech.css'

const TechnicalSkills=(props)=>{
    return(
        <div style={{textAlign:'left',  color:props.content}}>
            <Card style={{backgroundColor:props.BackGround, width:'max-width', border:'0' }}>
                    <CardBody >
                    <CardTitle tag="h1" className="" style={{textAlign:'left'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Tools & Technologies</b></CardTitle>
                    <CardSubtitle tag="h6" className="mt-1">Programming Languages</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%'}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiJava /><p style={{fontSize:'60%'}}>Java</p>
                            </Col>
                            <Col md={4}>
                                    
                                        <SiC/> <p style={{fontSize:'60%'}}>C Lang</p>
                                    
                            </Col>
                            <Col md={4}>
                            <SiJavascript/><p style={{fontSize:'60%'}}>Javascript</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiPython/><p style={{fontSize:'60%'}}>Python</p>
                            </Col>
                            <Col md={4}>
                                    
                            </Col>
                            <Col md={4}>
                            
                            </Col>
                        </Row>
                    </CardText>
                    <CardSubtitle tag="h6" className="mt-1">Java Technologies </CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%'}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiJava/><p style={{fontSize:'60%'}}>J2EE</p>
                            </Col>
                            <Col md={4}>
                                <SiJava/><p style={{fontSize:'60%'}}>Servlet</p>
                            </Col>
                            <Col md={4}>
                            <SiJava/><p style={{fontSize:'60%'}}>JSP</p>
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
                            <Col md={4}>
                            <SiJava/><p style={{fontSize:'60%'}}>JPA</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiJunit5/><p style={{fontSize:'60%'}}>Junit 5</p>
                            </Col>
                            <Col md={4}>
                                <SiApachetomcat/><p style={{fontSize:'60%'}}>Tomcat </p>
                            </Col>
                        </Row>
                    </CardText>
                    <CardSubtitle tag="h6" className="mt-1">Web Technologies </CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%'}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiReact/><p style={{fontSize:'60%'}}>React JS</p>
                            </Col>
                            <Col md={4}>
                                <SiJquery/><p style={{fontSize:'60%'}}>Jquery</p>
                            </Col>
                            <Col md={4}>
                            <SiHtml5/><p style={{fontSize:'60%'}}>HTML 5</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiCss3/><p style={{fontSize:'60%'}}>CSS 3</p>
                            </Col>
                            <Col md={4}>
                                <SiBootstrap/><p style={{fontSize:'60%'}}>Bootstrap </p>
                            </Col>
                            <Col md={4}>
                            <VscJson/><p style={{fontSize:'60%'}}>Json</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <DiCodeBadge/><p style={{fontSize:'60%'}}>XML</p>
                            </Col>
                        </Row>
                      
                    </CardText>
                    <CardSubtitle tag="h6" className="mt-1">Database Technologies</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%'}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiMicrosoftsqlserver/><p style={{fontSize:'60%'}}>MS SQL Server</p>
                            </Col>
                            <Col md={4}>
                                <SiOracle/><p style={{fontSize:'60%'}}>Oracle</p>
                            </Col>
                            <Col md={4}>
                            <SiMongodb/><p style={{fontSize:'60%'}}>Mongo DB</p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiFirebase/><p style={{fontSize:'60%'}}>Firebase RT database</p>
                            </Col>
                        </Row>
                        
                      
                    </CardText>
                    <CardSubtitle tag="h6" className="mt-1">Build, CI/CD & Other Tool</CardSubtitle>
                    <CardText className="text-center my-3" style={{fontSize:'140%'}}>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiApachemaven/><p style={{fontSize:'60%'}}>Maven</p>
                            </Col>
                            <Col md={4}>
                                <SiGradle/><p style={{fontSize:'60%'}}>Gradle</p>
                            </Col>
                            <Col md={4}>
                                <SiJenkins/><p style={{fontSize:'60%'}}>Jenkins </p>
                            </Col>
                        </Row>
                        <Row className="icon">
                            <Col md={4} className="mx-0 px-0">
                                <SiTeamcity/><p style={{fontSize:'60%'}}>Teamcity</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiGithub/><p style={{fontSize:'60%'}}>Github</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <GiTortoise/><p style={{fontSize:'60%'}}>Tortoise SVN</p>
                            </Col>
                           
                        </Row>
                        <Row className="icon">
                        <Col md={4} className="mx-0 px-0">
                                <SiSonarqube/><p style={{fontSize:'60%'}}>Sonar Qube</p>
                            </Col>
                            <Col md={4} className="mx-0 px-0">
                                <SiJirasoftware/><p style={{fontSize:'60%'}}>JIRA</p>
                            </Col>
                           
                        </Row>
        
                      
                    </CardText>
                   
                    </CardBody>
                </Card>
            
        </div>
    );
};
export default TechnicalSkills;