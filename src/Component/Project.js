import React, {useState,useEffect} from 'react';
import {Card,Row, Col,CardBody, CardTitle,CardText,UncontrolledTooltip,Container,Button} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import Data from './data/data.json'
const Project=(props)=>{
    const [project, setProject] = useState(Data.Projects);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getProject();
    },[])

    const getProject=()=>{
        setProject(project);
        console.log(project);
    }

    const style = {
        width: '400px', /* width of container */
        height: '300px', /* height of container */
        objectFit: 'cover',
        objectPosition: '20% 20%', /* try 20px 10px */ 
        color:props.content
        
    };
    const projectList = project.map((item)=>
    <Carousel.Item style={{color:props.content, backgroundColor:props.Color }}>
        <div className="d-block w-100"  style={style}>
            <Carousel.Caption className=" " style={{color:props.content, style}}>
                <h5>{item.prjct_name}</h5>
                    <p>{item.prjct_desc}</p>
                    <div>
                        <Button color="primary"  id={item.prjct_name} href={item.prjct_link} target="_blank">Read More</Button>
                            <UncontrolledTooltip placement="right" target={item.prjct_name}>
                                Click here to read more about the project
                            </UncontrolledTooltip>
                    </div>
        
            </Carousel.Caption>
        </div>
    </Carousel.Item>
    );
    return(
        <div id='about'>
        <Container className='px-0 mt-2' style={{textAlign:'left'}}>
            <Card style={{backgroundColor:props.BackGround,border:'0'}}>
                <CardBody >
                <Row >
                    <Col md={3}>
                            <CardTitle tag="h1" className="" style={{textAlign:'left'}}> <b style={{backgroundColor:props.Highlight,color:props.Color}}>Projects</b></CardTitle>
                    </Col>
                    <Col  md={9}> 
                        <CardText className="text-justify my-3" >
                            <Carousel style={{color:props.content}} dark>
                                {projectList}
                            </Carousel>               
                        </CardText>
                    </Col>
                </Row>
                </CardBody>
            </Card>
        </Container>
    </div>
    );
};
export default Project;