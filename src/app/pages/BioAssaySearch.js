import React from 'react';   
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import "./style.css"
function BioAssaySearch() {  
  let navigate = useNavigate(); 
  const onSearch=(page)=>{
    navigate(page);
  }
    return (<div className={"lead-container"}>   
         <ActionButton variant="primary" onClick={() => onSearch("/bio-assay-detail")} text={"Search"}/>




         result page
         <ActionButton variant="primary" onClick={() => onSearch("/particular-compound-result")} text={"Search"}/>
    </div>
    );
}

export default BioAssaySearch;