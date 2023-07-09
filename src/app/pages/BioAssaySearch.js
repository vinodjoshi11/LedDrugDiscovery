import { useState } from 'react'; 
import Marvinjs from '../modules/Marvinjs';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../components/Element/ActionButton';
import "./style.css"
import { Container, Form, Col, Row, InputGroup } from 'react-bootstrap';
import CustomDropdown from '../components/Element/CustomDropdown';
    
function BioAssaySearch() {  
  let navigate = useNavigate(); 
  const onSearch=(page)=>{
    navigate(page);
  } 
    const [search,searchState]=useState("");
    const onChangeSearch=async(e)=>{
      searchState(e.target.value);
    }

    return (<div className={"lead-container"}>   
    <Container fluid>
            <Row>
                <Col sm={12} md={6} className="leftSection">
                  <div className="bioAssaysLeft">
                    <div className="searchSection">
                        <h3>Key word(s) Search for Bio Assays</h3>
                        <Form className="searchForm"> 
                            <InputGroup className="search-input">
                                <Form.Control
                                placeholder="Key word(s) Search for Bio Assays"
                                aria-label="search"
                                aria-describedby="basic-addon2"
                                value={search}
                                onChange={onChangeSearch} 
                                />
                                <InputGroup.Text onClick={onSearch} className="search-action" id="basic-addon2"><img src={"/images/searchIcon.png"} alt={"search"}/></InputGroup.Text>
                            </InputGroup>
                            <div className="searchResult">
                              <label>No. of Search results</label>
                              <CustomDropdown
                                  placeHolder="Select..."
                                  options={[{label:"01",value:"01"},{label:"02",value:"02"}]}
                                  selected={{label:"01",value:"01"}}
                                  onChange={(value) => console.log(value)}
                                  customClass={"secondary-container"}
                              />
                            </div>
                        </Form>     
                        <div className="searchBy">
                          Search by <span>Target name, Assay name, Assay Type, Disease name</span>
                        </div>  
                        <div className="actionButton">
                          <ActionButton variant="outline-primary" onClick={() => onSearch("/bio-assay-detail")} text={"Reset"}/>
                          <ActionButton variant="primary" onClick={() => onSearch("/bio-assay-detail")} text={"Search"}/>
                        </div>             
                    </div>
                   </div>
                </Col>
                <Col sm={12} md={6} className="pe-0">
                  <div className="bioAssayRight">
                  <div className="drawingToolSection">
                      <h3>Bio Assays for specific compound</h3>
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
                    </Form.Group>
                    <div className="actionButton">
                      <ActionButton variant="outline-primary" onClick={() => onSearch("/bio-assay-detail")} text={"Reset"}/>
                      <ActionButton variant="primary" onClick={() => onSearch("/particular-compound-result")} text={"Search"}/>
                    </div>  
                  </div>
                </Col>            
            </Row> 
        </Container>
    </div>
    );
}

export default BioAssaySearch;