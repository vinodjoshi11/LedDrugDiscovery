/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';   
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import HeaderCard from '../components/Element/HeaderCard';
import RangeSlider from '../components/Element/RangeSlider';  
import { assayResultAIDResultTableData, assayResultAIDResultTableHeaders } from '../modules/LeadDrug/config/AssayResultofAIDNumber';
import ModalPopup from '../modules/ModalPopup';
import DataTable from '../modules/shared/DataTable';
import "./style.css";

function BioAssayResult() {  
    const [modalShow, setModalShow] = useState(false);  
    const [countDown, setCountDown] = useState(10);
    const [runTimer, setRunTimer] = useState(false); 
    let timerId;
    let navigate = useNavigate(); 
    const showResult=()=>{  
        setModalShow(false);  
       navigate("/predictive-ai");
    }
    useEffect(() => {
      if (runTimer) { 
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown + 10);
        }, 1000);
      }
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    useEffect(() => {
      if (countDown >= 100 && runTimer) { 
        setRunTimer(false);
        // setCountDown(0); 
        clearInterval(timerId);
      }
    }, [countDown, runTimer]);
    const onPredict=()=>{
        setModalShow(true);  
        setRunTimer(true)  
    }
    const getBodyContent=()=>{ 
        return(<>
        <p>Model training Completed</p>
        <RangeSlider color={"#31ab2f"} 
          value={countDown}/>
        </>)
    }
    return (<Container>     
          <HeaderCard heading={"Assay Result of AID Number"} backHeading={"BIO Assay Result"}/>
          <DataTable dataList={assayResultAIDResultTableData} 
           header={assayResultAIDResultTableHeaders}
          />   
          <ActionButton variant="primary" onClick={onPredict} text={"Predictive Modelling"}/>
          <ActionButton variant="outline-primary" onClick={onPredict} text={"Save"}/>
        {modalShow && <ModalPopup
          show={modalShow}
          heading={"Sample Data"}
          onHide={() => setModalShow(false)}
          footerActionText={"ok"}
          getBodyContent={getBodyContent}
          handleFooter={showResult}
        /> }
    </Container>
    );
}

export default BioAssayResult;