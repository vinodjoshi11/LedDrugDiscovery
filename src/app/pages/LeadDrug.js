import { useState } from 'react'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Prediction from '../modules/Prediction';
import StructureSearch from '../modules/StructureSearch';
import Marvinjs from '../modules/Marvinjs';
import "./style.css"
function LeadDrug() {
    const [key, setKey] = useState('structure');

    return (<div className={"lead-container"}> 
        <Row  >
            <Col sm={12} md={6} className="mt-3 pe-4">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="lead-tab"
                >
                    <Tab eventKey="structure" title="Structure Search">
                        <StructureSearch />
                    </Tab>
                    <Tab eventKey="prediction" title="Prediction">
                        <Prediction />
                    </Tab>
                </Tabs>
            </Col>
            <Col sm={12} md={6}><Marvinjs /></Col>
        </Row> 
    </div>
    );
}

export default LeadDrug;