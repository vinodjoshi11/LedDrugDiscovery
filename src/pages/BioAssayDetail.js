import React, { useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import ActionButton from 'app/components/Element/ActionButton';
import HeaderCard from 'app/components/Element/HeaderCard';
import { BIOAssayTableData, BIOAssayTableHeaders,BIOAssayFilters} from '../modules/LedDrug/config/bio-assay.config';
import DataTable from '../modules/shared/DataTable';
import "./style.css"
import { Container } from 'react-bootstrap';
function BioAssayDetail() {  
    let navigate = useNavigate(); 
    const [data,setData]=useState(BIOAssayTableData);
    const showResult=()=>{ 
       navigate("/bio-assay-result");
    }
    const getSetActiveRow=(index)=>{
    const filterData=BIOAssayTableData.filter((item,i)=>{
      if(i===index)item.isChecked=true;
      else item.isChecked=false;
      return item;
    })
    setData(filterData);
    }
    return (<div className={"lead-container"}>  
          <HeaderCard heading={"Result of Keyword Search for Bio Assay"} backHeading={"Bio Assay Search"}/>
          <DataTable dataList={data} 
           filters={BIOAssayFilters} header={BIOAssayTableHeaders}
           getSetActiveRow={getSetActiveRow}
          /> 
          <div className="footerButton">
            <Container>
                <ActionButton variant="primary" onClick={() => showResult()} text={"Show Assay Result"}/>
            </Container>
          </div>
    </div>
    );
}

export default BioAssayDetail;