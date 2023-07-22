import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row } from 'react-bootstrap';
import RangeSlider from 'app/components/Element/RangeSlider';
import CustomDropdown from 'app/components/Element/CustomDropdown';
import { LedCompoundReducerAction } from 'redux/LedDrug/reducer';
const SimilaritySearch = () => {
    const dispatch=useDispatch();
    const { data,selectedItem="" } = useSelector((state) => state.ledDrugCompound.similarity) || {};

    const onSelectItem=(item)=>{
        dispatch(LedCompoundReducerAction.onSelectStructure(item))
     }
    return (<>
        <Form className="structure-search">
            <Row className="rangeRow">
                <Col sm="5">
                    <Form.Group className="methodSection" controlId="exampleForm.ControlInput1">
                        <Form.Label>Methods :</Form.Label>
                        <CustomDropdown
                            placeHolder="Select..."
                            options={[{ label: "Similarity", value: "Similarity" }, { label: "One", value: "One" }]}
                            selected={{ label: "Similarity", value: "Similarity" }}
                            onChange={(value) => console.log(value)}
                        />
                    </Form.Group>
                </Col>
                <Col sm="7">
                    <div className="rangeSection">
                        <Form.Group className="similarityPercentage" controlId="exampleForm.ControlInput1">
                            <Form.Label>Similarity Percentage :</Form.Label>
                            <RangeSlider value={50} color={"#31ab2f"} isCompound={true} />
                        </Form.Group>
                        <CustomDropdown
                            placeHolder="Select..."
                            options={[{ label: "99%", value: "99%" }, { label: "100%", value: "100%" }]}
                            selected={{ label: "98%", value: "98%" }}
                            onChange={(value) => console.log(value)}
                            customClass={"secondary-container"}
                        />
                    </div>
                </Col>
            </Row>
        </Form>
        <div className="similarySearchContent">
            <div className="bigImage">
                {selectedItem && <img src={selectedItem} alt={"diagram"} />}
                {/* <div className="imageNo">
                    DRL_9584767
                </div> */}
            </div>
            {data && <div className="thumbnail">
                <ul>
                {data.map((item,key)=><li key={`${key}_${item.url}`} 
                      className={`${item.url===selectedItem ? "active" : ""}`}  onClick={()=>onSelectItem(item.url)}>
                        {item.url && <img src={item.url} alt={"diagram"}/>}
                    </li>)} 
                </ul>
            </div>}
        </div>
    </>)
}
export default SimilaritySearch;