import { Container, Row, Col } from "react-bootstrap";
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
    return (<Container>
        <Row>
            <Col sm={12} md={6} className="mt-3 pe-4"><Marvinjs /></Col>
            <Col sm={12} md={6} >
                <ActionButton variant="outline-primary" text={"Upload Csv File"} />
                <DataTable dataList={predictiveAITableData}
                    header={predictiveAITableHeaders}
                />
                <ActionButton variant="primary" onClick={onClickPredict} text={"Predict Property"} />
            </Col>
        </Row>
    </Container>
    );
}

export default PredictiveAI;