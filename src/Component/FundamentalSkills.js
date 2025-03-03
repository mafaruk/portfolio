import React, { useState,useEffect} from 'react';
import {Card, CardBody, CardTitle,CardText, CardSubtitle} from 'reactstrap';
import Data from './data/data.json';
import './tech.css'
const FundamentalSkills= (props) =>{
    const[skills, setSkills] = useState(Data.Skills);
    
    useEffect(()=>{
        getSkills();
    },[getSkills]);

    const getSkills=()=>{
        setSkills(skills);
        console.log(skills);
    };

    const fskills =  skills.fundamentalSkill.map((desc)=>
        <li style={{fontSize:'85%'}} className="icon">{desc}</li>
    );

    const pskills = skills.personalSkill.map((desc)=>
        <li style={{fontSize:'85%'}} className="icon">{desc}</li>
    );

    return(
        <div style={{textAlign:'left',  color:props.content}} className="mt-3" id={props.id}>
            <Card style={{backgroundColor:props.BackGround, width:'max-width', border:'0' }}>
                    <CardBody >
                    <CardTitle tag="h1" className="" style={{textAlign:'left'}}> <b style={{backgroundColor:props.Highlight, color:props.Color}}>Skills</b></CardTitle>
                    <CardSubtitle tag="h6" className="mt-1"style={{ color:props.Color}} >Fundamental Skill</CardSubtitle>
                        <CardText className="text-left my-3" style={{ color:props.Color}}  >{fskills}</CardText>
                    <CardSubtitle tag="h6" className="mt-1" style={{ color:props.Color}}>Personal Skill</CardSubtitle>
                        <CardText className="text-left my-3" style={{ color:props.Color}}>{pskills} </CardText>
                </CardBody>
            </Card>
        </div>
    );
};
export default FundamentalSkills;