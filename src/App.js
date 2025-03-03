import { Row,Col } from 'reactstrap';
import './App.css';
import About from './Component/About';
import Header from './Component/Header';
import TechnicalSkills from './Component/TechnicalSkills';
import Work from './Component/Work';
import Education from './Component/Education';
import Project from './Component/Project';
import Certificate from './Component/Certificate';
import FundamentalSkills from './Component/FundamentalSkills';
import Footer from './Component/Footer';
function App() {
  
  const color1 = 'rgb(142, 105, 77)';//rgba(255, 255, 255,1)
  const color2= 'rgb(251, 221, 165)';//rgb(49, 21, 115)
 

  
  return (
    <div style={{ backgroundColor:'rgb(245, 211, 149)', padding:'1%', paddingTop:'0',  }}>
    
      
      <Row>
        <Col md={12}>  
          <Header Color={color1} Highlight={color2} content={color2}/>
        </Col>
      </Row>
      
      <Row>
        <Col md={9} >  
          <Row id="about" >
            <About  Color={color1} BackGround={color2} Highlight={color2} content={color1}/>
	        </Row>
          <Row id="work">
            <Work Color={color2} BackGround={color1} Highlight={color1} content={color2} />
	        </Row>
          <Row id="projects">
            <Project  Color={color1} BackGround={color2} Highlight={color2} content={color2}/>
	        </Row>
          <Row id="cert">
            <Certificate Color={color2} BackGround={color1} Highlight={color1} content={color2}/>
	        </Row>
          <Row id="edu">
            <Education  Color={color1} BackGround={color2} Highlight={color2} content={color2}/>
	        </Row>
        </Col>
        <Col md={3} className="mt-2">  
          <TechnicalSkills id="tools" Color={color2} BackGround={color1} Highlight={color1} content={color2} />
          <FundamentalSkills id="skill" Color={color2} BackGround={color1} Highlight={color1} content={color2} />
        </Col>
      </Row>
      <Row>
        
          <Footer Color={color1} Highlight={color2} content={color2}/>
        
      </Row>
    </div>
  );
}
export default App;
