import React from 'react';    
import { useNavigate } from 'react-router-dom';
import ActionButton from 'app/components/Element/ActionButton';
import HeaderCard from 'app/components/Element/HeaderCard'; 
import { bioAssayResultFilters, bioAssayResultTableData, bioAssayResultTableHeaders } from '../modules/LedDrug/config/bio-assay-result.config';
 
import DataTable from '../modules/shared/DataTable';
import "./style.css";

function ResultParticularCompound() {    
    let navigate = useNavigate(); 
    const showResult=()=>{   
       navigate("/bio-assay-result");
    } 
    return (<div class="lead-container">     
          <HeaderCard heading={"Result for Bio Assay for a particular compound"} backHeading={"BIO Assay Search"}/>
          <DataTable dataList={bioAssayResultTableData} 
           filters={bioAssayResultFilters} header={bioAssayResultTableHeaders}
          />  
          <div className="compound-result-footer">
            <div className='container'>
              <ActionButton variant="primary" onClick={showResult} text={"Save csv"}/> 
           </div>
         </div>
    </div>
    );
}

export default ResultParticularCompound;