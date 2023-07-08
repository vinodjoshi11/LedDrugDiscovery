import React from 'react';   
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import HeaderCard from '../components/Element/HeaderCard';
import { BIOAssayTableData, BIOAssayTableHeaders,BIOAssayFilters} from '../components/utils/bio-assay-utils';
import DataTable from '../modules/shared/DataTable';
import "./style.css"
function BioAssayResult() {  
    let navigate = useNavigate(); 
    const showResult=()=>{ 
       navigate("/predictive-ai");
    }
    return (<div className={"lead-container"}>   
          <HeaderCard heading={"Assay Result of AID Number"} backHeading={"BIO Assay Results"}/>
          <DataTable dataList={BIOAssayTableData} 
           filters={BIOAssayFilters} header={BIOAssayTableHeaders}
          /> 
          <ActionButton variant="primary" onClick={() => showResult()} text={"Predictive Modelling"}/>
    </div>
    );
}

export default BioAssayResult;