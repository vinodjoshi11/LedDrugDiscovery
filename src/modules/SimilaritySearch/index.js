import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row } from 'react-bootstrap';
import RangeSlider from 'app/components/Element/RangeSlider';
import CustomDropdown from 'app/components/Element/CustomDropdown';
import { LedCompoundReducerAction } from 'redux/LedDrug/reducer';
import SpinnerLoader from 'app/components/Element/SpinnerLoader';
import { LedCompoundSliceThunk } from 'redux/LedDrug/actions';
const SimilaritySearch = () => {
    const dispatch=useDispatch();
    const {similarity,search} = useSelector((state) => state.ledDrugCompound) 
    const { data,selectedItem="",percentage=0,method="Similarity",isLoading }=similarity|| {};
    const onSelectItem=(item)=>{
        dispatch(LedCompoundReducerAction.onSelectStructure(item))
    }
    const onSearch=(value,method)=>{ 
        const param=`${search}&percentage=${value}&method=${method}`;
        dispatch(LedCompoundSliceThunk.getCompoundSimilaritySearch(param));
    }
    const onChangeRange=(value)=>{
        dispatch(LedCompoundReducerAction.onSelectPercentage(value)); 
        onSearch(value,method); 
    }
    const onSelectPercentage=(item)=>{ 
        const value=item.value.split("%").join(""); 
        dispatch(LedCompoundReducerAction.onSelectPercentage(value))
        onSearch(value,method); 
    }
    const onChangeMethods=(item)=>{ 
        dispatch(LedCompoundReducerAction.onSelectMethods(item.value))
        onSearch(percentage,item.value);
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
                            onChange={(value) =>onChangeMethods(value)}
                        />
                    </Form.Group>
                </Col>
                <Col sm="7">
                    <div className="rangeSection">
                        <Form.Group className="similarityPercentage" controlId="exampleForm.ControlInput1">
                            <Form.Label>Similarity Percentage :</Form.Label>
                            <RangeSlider value={percentage} onChangeRange={onChangeRange} color={"#31ab2f"} isCompound={true} />
                        </Form.Group>
                        <CustomDropdown
                            placeHolder="Select..."
                            options={[{ label: "50%", value: "50%" },{ label: "99%", value: "99%" }, { label: "100%", value: "100%" }]}
                            selected={{ label: `${percentage}%`, value: `${percentage}%` }}
                            onChange={(value) => onSelectPercentage(value)}
                            customClass={"secondary-container"}
                        />
                    </div>
                </Col>
            </Row>
        </Form>
        <div className="similarySearchContent">
            {!isLoading && <div className="bigImage">
                {selectedItem && <img src={selectedItem} alt={"diagram"} />}
                {/* <div className="imageNo">
                    DRL_9584767
                </div> */}
            </div>}
            {isLoading &&  <SpinnerLoader/>}
            {!isLoading && data && data.length>0 && <div className="thumbnail">
                <ul>
                {data.map((item,key)=><li key={`${key}_${item.url}`} 
                      className={`${item.url===selectedItem ? "active" : ""}`}  onClick={()=>onSelectItem(item.url)}>
                        {item.url && <img src={item.url} alt={"diagram"}  />}
                    </li>)} 
                </ul>
            </div>}
        </div>
    </>)
}
export default SimilaritySearch;