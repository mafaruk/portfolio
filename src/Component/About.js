import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle,CardText,Row,Col, Container} from 'reactstrap';
import Data from './data/data.json'
const About = (props) => {
    const [about, setabout] = useState(Data.name);

    useEffect(() => {
        getAbout();
    },[]);

    const getAbout= () =>{
        setabout(about);
        console.log(about);
    };

    return(
        <div id='about'>
            <Container className='px-0 mt-2' style={{textAlign:'left', color:props.content}}>
                <Card style={{backgroundColor:props.BackGround,border:'0' }}>
                    <CardBody >
                    <Row>
                        <Col md={3}>
                            <CardTitle tag="h1" className="" > <b style={{backgroundColor:props.Highlight, color:props.Color}}>About Me</b></CardTitle>
                        </Col>
                        <Col>
                        <CardText className="text-justify my-3">
                    <p>Hi,</p>
                    <p>This is <b style={{backgroundColor:props.Highlight, color:props.Color}}>{about}.</b> </p>
                    <p>A results-driven Java Full Stack Developer with 4+ years of experience in designing, developing, and deploying scalable applications. Proficient in Java, Spring Boot, Microservices, and frontend technologies like ReactJS. Strong expertise in Agile methodologies, CI/CD, and database management. Passionate about delivering high-quality software solutions that align with business objectives.</p>
                        </CardText>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );

};
export default About;