import React from 'react';    
import "./style.css"
import { Container } from 'react-bootstrap';
function HeaderCard({
    heading="",
    backHeading
}) {    
    const handleBack=()=>{
        window.history.back();
      }
    return (<Container>  
        <div className="backStrip">
          <div className="backIcon"><img  onClick={handleBack} src={"/images/back-icon.png"} alt={"back"} />{backHeading}</div>
          {heading}
        </div>
    </Container>
    );
}

export default HeaderCard;