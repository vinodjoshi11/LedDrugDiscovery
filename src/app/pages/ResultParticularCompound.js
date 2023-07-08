import React from 'react';   
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import HeaderCard from '../components/Element/HeaderCard'; 
import { bioAssayResultFilters, bioAssayResultTableData, bioAssayResultTableHeaders } from '../modules/LeadDrug/config/bio-assay-result.config';
 
import DataTable from '../modules/shared/DataTable';
import "./style.css";

function ResultParticularCompound() {    
    let navigate = useNavigate(); 
    const showResult=()=>{   
       navigate("/bio-assay-result");
    } 
    return (<Container>     
          <HeaderCard heading={"Result for Bio Assay for a particular compound"} backHeading={"BIO Assay Search"}/>
          <DataTable dataList={bioAssayResultTableData} 
           filters={bioAssayResultFilters} header={bioAssayResultTableHeaders}
          />  
          <ActionButton variant="primary" onClick={showResult} text={"Save csv"}/> 
    </Container>
    );
}

export default ResultParticularCompound;