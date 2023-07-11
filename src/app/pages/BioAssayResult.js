/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';   
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import HeaderCard from '../components/Element/HeaderCard';
import RangeSlider from '../components/Element/RangeSlider';  
import { assayResultAIDResultTableData, assayResultAIDResultTableHeaders } from '../modules/LeadDrug/config/AssayResultofAIDNumber';
import ModalPopup from '../modules/ModalPopup';
import DataTable from '../modules/shared/DataTable';
import "./style.css";
import CustomDropdown from '../components/Element/CustomDropdown';

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
    return (<div className={"lead-container"}> 
          <HeaderCard heading={"Assay Result of AID Number"} backHeading={"BIO Assay Result"}/>
          <DataTable dataList={assayResultAIDResultTableData}
           header={assayResultAIDResultTableHeaders} activeTableHead={5}
          />   
          <div className="footerButton">
            <Container>
            <div className="d-flex align-items-center justify-content-between mobileClass">
              <div className="leftAction">
                  <div className="typeModal">
                    <h5>Type of Model</h5>
                    <Form.Check
                      inline
                      label={"Clarification"}
                      name="group1"
                      type={"radio"}
                      id={""}
                    />
                    <Form.Check
                      inline
                      label={"Regression"}
                      name="group1"
                      type={"radio"}
                      defaultChecked={true}
                      id={""}
                    />
                  </div>
                  <div className="architectureCol">
                    <h5>Architecture to use</h5>
                    <div className="d-flex align-items-center smallMobile">
                    <Form.Check
                      inline
                      label={"Auto ML"}
                      name="group2"
                      type={"radio"}
                      id={""}
                      defaultChecked={true}
                    />
                    <CustomDropdown
                        placeHolder="Select..."
                        options={[{label:"PyCaret",value:"PyCaret"},{label:"PyCaret2",value:"PyCaret2x"}]}
                        selected={{label:"PyCaret",value:"PyCaret"}}
                        onChange={(value) => console.log(value)}
                        customClass={"secondary-container"}
                    />
                    <Form.Check
                      inline
                      label={"ChemBERTA"}
                      name="group2"
                      type={"radio"}
                      id={""}
                    />
                    </div>
                  </div>
              </div>
              <div>
              <ActionButton variant="primary" onClick={onPredict} text={"Predictive Modelling"}/>
              <ActionButton variant="outline-primary" onClick={onPredict} text={"Save"}/>
              </div>
              </div>
            </Container>
          </div>
        {modalShow && <ModalPopup
          show={modalShow}
          heading={"Sample Data"}
          onHide={() => setModalShow(false)}
          footerActionText={"ok"}
          getBodyContent={getBodyContent}
          handleFooter={showResult}
        /> }
    </div>
    );
}

export default BioAssayResult;