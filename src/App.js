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
import Footer from './Component/Footer'
function App() {
  
  const color1 = 'rgb(49, 21, 115)';//rgba(255, 255, 255,1)
  
  
  const color2= 'rgba(255, 255, 255,1)';//rgb(49, 21, 115)
  
  return (
    <div style={{ backgroundColor:color2, padding:'1%', paddingTop:'0' }}>
    
      
      <Row>
        <Col md={12}>  
          <Header Color={color1} Highlight={color2} content={color2}/>
        </Col>
      </Row>
      
      <Row>
        <Col md={9} >  
          <Row >
            <About Color={color2} BackGround={color2} Highlight={color1} content={color1}/>
	        </Row>
          <Row >
            <Work Color={color1} BackGround={color1} Highlight={color2} content={color2}/>
	        </Row>
          <Row >
            <Project Color={color2} BackGround={color2} Highlight={color1} content={color1}/>
	        </Row>
          <Row >
            <Certificate Color={color1} BackGround={color1} Highlight={color2} content={color2}/>
	        </Row>
          <Row >
            <Education Color={color2} BackGround={color2} Highlight={color1} content={color1}/>
	        </Row>
        </Col>
        <Col md={3} className="mt-2">  
          <TechnicalSkills Color={color1} BackGround={color1} Highlight={color2} content={color2} />
          <FundamentalSkills  Color={color1} BackGround={color1} Highlight={color2} content={color2} />
        </Col>
      </Row>
      <Row>
        
          <Footer Color={color1} Highlight={color2} content={color2}/>
        
      </Row>
    </div>
  );
}
export default App;
