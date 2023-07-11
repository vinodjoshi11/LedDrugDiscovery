import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import ActionButton from "../components/Element/ActionButton";
import { predictiveAITableData, predictiveAITableHeaders } from "../modules/LeadDrug/config/predictive-ai.config";
import DataTable from "../modules/shared/DataTable";
import Marvinjs from '../modules/Marvinjs';
import "./style.css"
import {  useNavigate } from "react-router-dom";
function PredictiveAI() {
    let navigate = useNavigate(); 
    const onClickPredict=()=>{ 
      navigate("/predict-property");
    }
    return (<div className={"lead-container"}> 
        <Container fluid>
            <Row>
                <Col sm={12} md={12} lg={12} xl={6} className="leftSection">
                     <div className="drawingToolSection">
                        <h3>Drawing Tool:</h3>
                        <Form>
                            <Form.Check // prettier-ignore
                                reverse
                                label="3D"
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>
                    </div>
                    <Marvinjs />
                    <Form.Group  className="smileSection" controlId="formPlaintextEmail">
                        <Form.Label>
                            Smiles :
                        </Form.Label>
                        <Col className="form-input-box">
                            <InputGroup className="form-input">
                                <Form.Control
                                    placeholder="Search for something"
                                    aria-label="search"
                                    aria-describedby="basic-addon2"
                                    value={"cc2ccfccf45"}
                                />
                                <InputGroup.Text id="basic-addon2"><img src={"/images/copy.png"} alt={"search"} /></InputGroup.Text>
                            </InputGroup> 
                        </Col>
                        <div className="predictAction mt-3">
                            <ActionButton variant="primary" text={"Add"} />
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={12} md={12} lg={12} xl={6} className="pe-0">
                    <div className="predictSection">
                        <div className="predictAction"><ActionButton variant="outline-primary" text={"Upload Csv File"} /></div>
                        <DataTable dataList={predictiveAITableData}
                            header={predictiveAITableHeaders}
                        />
                        <div className="predictAction">
                            <ActionButton variant="primary" onClick={onClickPredict} text={"Predict Property"} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default PredictiveAI;