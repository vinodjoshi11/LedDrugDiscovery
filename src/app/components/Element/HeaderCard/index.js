import React from 'react';    
import "./style.css"
function HeaderCard({
    heading="",
    backHeading
}) {    
    const handleBack=()=>{
        window.history.back();
      }
    return (<div >  
        <div onClick={handleBack}>{backHeading}</div>
          {heading}
    </div>
    );
}

export default HeaderCard;