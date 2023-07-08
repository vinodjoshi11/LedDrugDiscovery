import React from 'react';   
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import "./style.css"
function BioAssaySearch() {  
  let navigate = useNavigate(); 
  const onSearch=()=>{
    navigate("/bio-assay-detail");
  }
    return (<div className={"lead-container"}>   
         <ActionButton variant="primary" onClick={() => onSearch()} text={"Search"}/>
    </div>
    );
}

export default BioAssaySearch;