import React from 'react';   
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import HeaderCard from '../components/Element/HeaderCard';
import { BIOAssayTableData, BIOAssayTableHeaders,BIOAssayFilters} from '../modules/LeadDrug/config/bio-assay.config';
import DataTable from '../modules/shared/DataTable';
import "./style.css"
function BioAssayDetail() {  
    let navigate = useNavigate(); 
    const showResult=()=>{ 
       navigate("/bio-assay-result");
    }
    return (<div className={"lead-container"}>  
          <HeaderCard heading={"Result of Keyword Search for Bio Assay"} backHeading={"Bio Assay Search"}/>
          <DataTable dataList={BIOAssayTableData} 
           filters={BIOAssayFilters} header={BIOAssayTableHeaders}
          /> 
          <ActionButton variant="primary" onClick={() => showResult()} text={"Show Assay Result"}/>
    </div>
    );
}

export default BioAssayDetail;