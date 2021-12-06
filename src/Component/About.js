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
                    <p>This is <b style={{backgroundColor:props.Highlight, color:props.Color}}>{about}.</b> I graduated in June 2019 from Shivaji University, Kolhapur with a bachelor's degree in computer science & engineering. I also took a immersive software development training from Seed Infotech,where I dove into the fields of Data structures, Programming and Software Development.</p> 
                    <p>I have been programming small softwares and websites since I was in college, so it’s always been my passion. Currently I am working as software engineer at Wolters Kluwer & I also have 1 year of financial data analytics experience at AXA Business Services</p>
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