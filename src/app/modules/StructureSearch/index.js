import { useState } from "react";
import { Form, Col, Row, InputGroup } from 'react-bootstrap';
import AccordionList from "../../components/Element/Accordion";
import RangeSlider from "../../components/Element/RangeSlider";
const dataList = [{
    title: "Target", result: [{ label: "heRG", checked: true },
    { label: "cav1.2", checked: true }, { label: "nav1.5", checked: true }]
},
{
    title: "Value Type", result: [{ label: "heRG", checked: true },
    { label: "cav1.2", checked: true }, { label: "nav1.5", checked: true }]
},
{
    title: "Assay Type", result: [{ label: "heRG", checked: true },
    { label: "cav1.2", checked: true }, { label: "nav1.5", checked: true }]
}]
const StructureSearch = () => {
    const [data, setData] = useState(dataList)
    const onChange = (index, k, isChecked) => {
        const filterData = dataList.filter((item, i) => {
            if (i === index) {
                item.result.filter((r, j) => {
                    if (j === k) {
                        r.checked = !isChecked;
                    }
                    return r;
                })
            }
            return item;
        });
        setData(filterData);
    }
    return (<>
        <Form className="structure-search">
            <Form.Group  className="mt-3 mb-3 form-row" controlId="formPlaintextEmail">
                <Form.Label  className="form-label">
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
            <Row>
                <Col sm="5">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Search Type :</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Similarity"> Similarity </option>
                            <option value="1">One</option>
                            <option value="2">Two</option> 
                        </Form.Select> 
                    </Form.Group>
                </Col>
                <Col sm="7">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Similarity % :</Form.Label>
                    <RangeSlider />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
        <AccordionList onChange={onChange} accordions={data} />
    </>)
}
export default StructureSearch;