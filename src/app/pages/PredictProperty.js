import React from 'react';   
import { Container } from 'react-bootstrap'; 
import ActionButton from '../components/Element/ActionButton'; 
import { predictPropertyTableData, predictPropertyTableHeader } from '../modules/LeadDrug/config/predictive-ai.config';
import DataTable from '../modules/shared/DataTable';
import "./style.css"; 
function PredictProperty() {     
    return (<Container>      
            <DataTable dataList={predictPropertyTableData}   
            header={predictPropertyTableHeader} />  
          <ActionButton variant="primary"   text={"Save csv"}/> 
    </Container>
    );
}

export default PredictProperty;