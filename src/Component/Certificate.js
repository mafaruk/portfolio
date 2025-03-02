import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardImgOverlay,CardImg,Row,Col,CardTitle,CardText,UncontrolledTooltip,Container,Button} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import Data from './data/data.json';
const Certificate=(props)=>{
    
    const [cert, setCert] = useState(Data.Certificate);
    useEffect(() => {
        getCert();
    },[]);

    const getCert=()=>{
        setCert(cert);
        console.log(cert);
    };
    const imgtyle = {
        width: '300px', /* width of container */
        height: '410px', /* height of container */
        objectFit: 'cover',
        objectPosition: '20% 20%', /* try 20px 10px */
        
        
    };


   
    let a=-1;
    const CertficateList = cert.map((item)=>
    
    <Carousel.Item style={{color:props.Color,backgroundColor:'transparent'}} className={a = a+1} >
        
        <Card inverse style={{backgroundColor:'transparent'}}>
        <div className="d-block w-100"  style={imgtyle}>
		    <CardImg alt="Card image cap" src={item.cert_image} width="100%" height='90%'/>
        </div>
		<CardImgOverlay>
            
            <CardTitle tag="h5" style={{color:props.Color}}>
				<b style={{backgroundColor:props.Highlight, color:props.Color}}>{item.cert_name}</b>
			</CardTitle>
			<CardText className="py-5 my-5">
            <Carousel.Caption className="py-5 mt-5">
				<small style={{color:props.Color}}>
                    <b style={{backgroundColor:props.Highlight, color:props.Color}}>Year :- {item.cert_year}</b><br />
                    <b style={{backgroundColor:props.Highlight, color:props.Color}}>Issued By:- {item.cert_platform}</b><br />
                    <b style={{backgroundColor:props.Highlight, color:props.Color}}>Authorized By:- {item.cert_by}</b>
				</small><br/> 
                    <Button color="primary" href={item.cert_verify} target="_blank" className="mt-1">Verify</Button>    
                
                
            </Carousel.Caption>
			</CardText>
            
		</CardImgOverlay>
        
	</Card>
    
	</Carousel.Item>
    );
    const style = {
        width: '400px', /* width of container */
        height: '300px', /* height of container */
        objectFit: 'cover',
        objectPosition: '20% 20%', /* try 20px 10px */ 
        
        
    };
    
    return(
        <div id='about'>
        <Container className='px-0 mt-2' style={{textAlign:'left', color:props.Color}}>
            <Card style={{backgroundColor:props.BackGround,border:'0' }}>
                <CardBody >
                    <Row >
                        <Col md={4}>
                            <CardTitle tag="h1" className="" style={{textAlign:'left'}}> <b style={{backgroundColor:props.Highlight}}>Certificates & Achievement</b></CardTitle>
                        </Col>
                        <Col  md={8}> 
                            <CardText className="text-justify my-3">
                                <Carousel>
                                    {CertficateList}
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
export default Certificate;