import React, {useState, useEffect}from 'react';
import {Row} from 'reactstrap';
import Data from './data/data.json'
import Navbar from './Navbar';
import SocialIcon from './SocialIcon';
import headshot from "./Images/HeadShotCl1.jpg";
const Header=(props)=>{
    const imageUrl = headshot;
    const [header, setheader] = useState(Data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getheader();
    },);

    const getheader=()=>{
        setheader(header);
        console.log(header);
    };

    return (
       
      
            <div className="App mb-2 px-0" style={{backgroundColor:'transparent',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'max-width',
            height: '100%'
            }}>
                <Row className="mr-5" >
                    
                    <div style={{color:props.content, textAlign:'left', backgroundImage: `url(${imageUrl})`, padding:'1%', backgroundRepeat:'no-repeat', backgroundSize:'cover' }} className="App img-responsive">
                        <div style={{float:'left'}} className="App">
                            <SocialIcon Color={props.content} BackGround={props.BackGround} content={props.Color} Highlight={props.Highlight}/>
                        </div>
                        <div className ="mx-5"style={{float:'right'}}>
                        <h1 className ="mt-5"><b style={{color:props.Highlight}}>{"Hi, I'm " +header.name}</b></h1>
                        <p >a <b style={{backgroundColor:props.Highlight, color:props.Color,textAlign:'left'}}>{header.position }</b> based in India, <br />who believes in buiding things for social & Environmental good.</p>
                        <Navbar Color={props.content} BackGround={props.BackGround} />
                        </div>
                        
                    </div>
                   
                </Row>

               
            </div>
        
         
       );
};
export default Header;