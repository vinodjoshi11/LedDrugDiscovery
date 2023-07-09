import { useState } from 'react'; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StructureSearch from '../modules/StructureSearch';
import Marvinjs from '../modules/Marvinjs';
import "./style.css"
import "./compound.css"
import { Button, Container, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { getSearch } from '../modules/AuthService/indes';
import ExactSearch from '../modules/ExactSearch';
import RangeSlider from '../components/Element/RangeSlider';
import CustomDropdown from '../components/Element/CustomDropdown';
import ModalPopup from '../modules/ModalPopup';
function CompoundSearch() {
    const [modalShow, setModalShow] = useState(false);  
    const [key, setKey] = useState('structure');
    const [search,searchState]=useState("");
    const onChangeSearch=async(e)=>{
      searchState(e.target.value);
    }
    const onSearch=async(e)=>{ 
      try{
        const {data}=await getSearch(search);
        console.log(data);
      } catch(error){
          console.error(error);
      }
    } 
    const onKeyPress = (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        onSearch(search);
      }
    };
    const getBodyContent=()=>{ 
        return(<>
        <table>
            <tr>
                <th>DRL ID</th>
                <th>Name</th>
                <th>SMILES</th>
                <th>inChi</th>
            </tr>
            <tr>
                <td>DRL_0093434</td>
                <td>Aspirin</td>
                <td>C1=CC=C(C=C1)C=O</td>
                <td>inChI=1S/C3H6O/c1-3(2)4/h1-2H3</td>
            </tr>
        </table>
        </>)
    }
    return (<div className={"lead-container"}> 
        <Container fluid>
            <Row>
                <Col sm={12} md={5} className="leftSection">
                    <div className="searchSection">
                        <h3>Search for Compound</h3>
                    <Form className="searchForm"> 
                        <InputGroup className="search-input">
                            <Form.Control
                            placeholder="Search for something"
                            aria-label="search"
                            aria-describedby="basic-addon2"
                            value={search}
                            onChange={onChangeSearch}
                            onKeyPress={onKeyPress}
                            />
                            <InputGroup.Text onClick={onSearch} className="search-action" id="basic-addon2"><img src={"/images/searchIcon.png"} alt={"search"}/></InputGroup.Text>
                        </InputGroup>
                        <Button variant="outline-primary" className="uploadButton">
                            <img src={"/images/upload-icon.svg"} alt={"upload"} /> Upload Image
                        </Button>
                    </Form>
                    <div className="searchBy">
                            Search by <span onClick={()=>setModalShow(true) }>DRL ID, Name, SMILES, inChi, Image</span>
                    </div>
                    </div>
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
                    </Form.Group>
                </Col>
                <Col sm={12} md={7} className="mt-3 pe-0">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="lead-tab"
                    >
                        <Tab eventKey="exactSearch" title={<span> {key==="exactSearch" ? <img src={"/images/tab-icon1-color.png"} alt="" />:<img src={"/images/tab-icon1.png"} alt="" />} Exact Search </span>}>
                            <ExactSearch />
                        </Tab>
                        <Tab eventKey="structure" title={<span> {key==="structure" ? <img src={"/images/tab-icon2-color.png"} alt="" />:<img src={"/images/tab-icon2.png"} alt="" />} Similarity Search </span>}>
                            <Form className="structure-search">
                                <Row>
                                    <Col sm="5">
                                        <Form.Group className="methodSection" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Methods :</Form.Label>
                                            <CustomDropdown
                                                placeHolder="Select..."
                                                options={[{label:"Similarity",value:"Similarity"},{label:"One",value:"One"}]}
                                                selected={{label:"Similarity",value:"Similarity"}}
                                                onChange={(value) => console.log(value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col sm="7">
                                        <div className="rangeSection">
                                            <Form.Group className="similarityPercentage" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Similarity Percentage :</Form.Label>
                                                <RangeSlider value={50} color={"#31ab2f"} isCompound={true}/>
                                            </Form.Group>
                                            <CustomDropdown
                                                placeHolder="Select..."
                                                options={[{label:"99%",value:"99%"},{label:"100%",value:"100%"}]}
                                                selected={{label:"98%",value:"98%"}}
                                                onChange={(value) => console.log(value)}
                                                customClass={"secondary-container"}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                            <StructureSearch />
                        </Tab>
                        <Tab eventKey="prediction" title={<span> {key==="prediction" ? <img src={"/images/tab-icon3-color.png"} alt="" />:<img src={"/images/tab-icon3.png"} alt="" />} Sub-structure Search </span>}>
                            <StructureSearch />
                        </Tab>
                    </Tabs>
                </Col>            
            </Row> 
        </Container>
        <ModalPopup
          show={modalShow}
          heading={"Sample Data"}
          onHide={() => setModalShow(false)}
          footerActionText={"ok"}
          getBodyContent={getBodyContent}
          isFooter={false}
          customClass="searchBy"
        />
    </div>
    );
}

export default CompoundSearch;