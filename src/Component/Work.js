import React,{useState, useEffect} from 'react';
import {Accordion} from 'react-bootstrap';
import {Container,Card,CardBody,CardTitle,CardText, List,Row,Col} from 'reactstrap';
import Data from './data/data.json'
const Work = (props) =>{
    const [work,setWork] = useState(Data.work);
    var a="0";

    useEffect(() => {
        getWork();
        
    },);

    const getWork=()=>{
        setWork(work);
        
        console.log(work);
        
    };
    
    // const workDesInfo = description.map((desItem)=>
    // <li>{desItem}</li>                                    
    // );

    

    const workinfo= work.map((items)=>

    <Accordion defaultActiveKey="0" className="mt-2 " >
        <Accordion.Item eventKey={a} className={a = parseInt(a)+1} style={{backgroundColor:'transparent'}}>
            <Accordion.Header >
                <h5 style={{fontSize:'110%'}}><b>{a+". "+items.org_name}</b></h5>
                
            </Accordion.Header>
                <Accordion.Body>
                    <List type="unstyled">
                        <li>
                            <h5 style={{fontSize:'105%'}}>{items.position}</h5>
                            <h6 style={{fontSize:'90%'}}>{items.time_span}</h6>
                            <ul style={{fontSize:'90%', listStyleType:'disc'}}>
                                {   items.description.map((desc)=>
                                        <li>{desc}</li>
                                    )}
                            </ul>
                        </li>
                    </List>
            </Accordion.Body>
        </Accordion.Item>
        
    </Accordion>
    
    );

    

    return(
        <div>
            <Container className='px-0 mt-2' style={{ color:props.content}}>
                <Card style={{backgroundColor:props.BackGround,border:'0'}}>
                <CardBody >
                   
                <div className="d-inline">
                    <div className="col-md-3" style={{float:'right'}}>
                    <CardTitle tag="h1" className="" style={{textAlign:'right'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Work Experience</b></CardTitle>
                    </div>
                    <div className="col-md-9" style={{float:'left', maxWidth:'100%'}}> 
                            <Row >
                            {workinfo}
                            </Row>
                    </div>
                    </div>
                     {/* <Row >
                        <Row style={{float:"right"}}>
                        <Col md={12}>
                        <CardTitle tag="h1" className="" style={{textAlign:'right'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Work Experience</b></CardTitle>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={12}>
                            <CardText>
                                {workinfo}
                            </CardText>
                        </Col>
                        </Row>
                    </Row> */}
                </CardBody>
                </Card>
            </Container>
        </div>
    );

};
export default Work;