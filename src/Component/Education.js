import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle,CardText,CardHeader,CardFooter,Container,Row,Col} from 'reactstrap';
import Data from './data/data.json';
const Education=( props)=>{
    const [edu, setEdu] = useState(Data.Education);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        getEdu();
    },);

    const getEdu=()=>{
        setEdu(edu);
        console.log(edu);
    };
    let a = 0;
    const eduInfo=edu.map((eduitem)=>
    
    <Col md={6} className="mt-3">
        <Card style={{backgroundColor:'transparent' }}>
            <CardHeader tag='h6' className={a = a+1}>
                <b>{a+". "+eduitem.board}</b>
                
            </CardHeader> 
            <CardBody>
                <CardTitle tag="h5">
                    {eduitem.degree}
                </CardTitle>
                <CardText>
                    {eduitem.insti}
                </CardText>
            </CardBody>
            <CardFooter>
                {eduitem.year}
            </CardFooter>   
        </Card>
    </Col>
    );
    return(
    <div>
        <Container className='px-0 mt-2' style={{textAlign:'left', color:props.content}}>
            <Card style={{backgroundColor:props.BackGround, border:'0' }}>
                <CardBody >
                    <div className="d-inline">
                    <div className="col-md-3" style={{float:'right'}}>
                            <CardTitle tag="h1" className="" style={{textAlign:'right'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Education</b></CardTitle>
                    </div>
                    <div className="col-md-9" style={{float:'left'}}> 
                            <Row >
                            {eduInfo}
                            </Row>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </Container>
    </div>
    );
};

export default Education;