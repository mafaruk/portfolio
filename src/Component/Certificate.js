import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardImgOverlay,CardImg,Row,Col,CardTitle,CardText,Container,Button} from 'reactstrap';
import {Carousel} from 'react-bootstrap';
import Data from './data/data.json';
import imgibmm from './Images/cert/Ibm_mainframe.png';
import imglij from './Images/cert/linkedin_jira.png';
import imglim from './Images/cert/linkedin_maven.png';
import imglis from './Images/cert/linkedin_dataAna.png';
import imglid from './Images/cert/linkedin_sqlda.png';
import imghj from './Images/cert/hackerrank_Java.png';
import imghs from './Images/cert/hackerrank_sql.png';
import imgsj from './Images/cert/Standford_json.png';
import imgup1 from './Images/cert/udemy_python2.jpg';
import imgup2 from './Images/cert/udemy_python1.jpg';
import imga from './Images/cert/axa_logo.jpg';
import imgs from './Images/cert/seed.jpg';
import imgkpit from './Images/cert/kpit_techlead.jpg';
import imgpmp from './Images/cert/ProjectManagementFoundation.png';
const Certificate=(props)=>{
    
    const [cert, setCert] = useState(Data.Certificate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    let images= [imgpmp,
        imgkpit,
        imgibmm,
        imglij ,
        imglim ,
        imglis ,
        imglid ,
        imghj  ,
        imghs  ,
        imgsj  ,
        imgup1 ,
        imgup2 ,
        imga   ,
        imgs   ,
        ]
   
    let a=-1;
    const CertficateList = cert.map((item)=>
    
    <Carousel.Item style={{color:props.Color,backgroundColor:'transparent'}} className={a = a+1} >
        
        <Card inverse style={{backgroundColor:'transparent'}}>
        <div className="d-block w-100"  style={imgtyle}>
		    <CardImg alt="Card image cap" src={images[a]} width="100%" height='90%'/>
        </div>
		<CardImgOverlay>
            
            <CardTitle tag="h5" style={{color:props.Color}}>
				<b style={{ color:props.Highlight}}>{item.cert_name}</b>
			</CardTitle>
			<CardText className="py-5 my-5">
            <Carousel.Caption className="py-5 mt-5">
				<small style={{color:props.Color}}>
                    <b style={{ color:props.Highlight}}>Year :- {item.cert_year}</b><br />
                    <b style={{ color:props.Highlight}}>Issued By:- {item.cert_platform}</b><br />
                    <b style={{ color:props.Highlight}}>Authorized By:- {item.cert_by}</b>
				</small><br/> 
                    <Button color="primary" href={item.cert_verify} target="_blank" className="mt-1">Verify</Button>    
                
                
            </Carousel.Caption>
			</CardText>
            
		</CardImgOverlay>
        
	</Card>
    
	</Carousel.Item>
    );
   
    
    return(
        <div id='about'>
        <Container className='px-0 mt-2' style={{textAlign:'left', color:props.Color}}>
            <Card style={{backgroundColor:props.BackGround,border:'0' }}>
                <CardBody >
                    <Row >
                        <Col md={4}>
                            <CardTitle tag="h1" className="" style={{textAlign:'left'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Certificates & Achievement</b></CardTitle>
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