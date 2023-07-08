import { useState } from "react";
import { Form, Col, InputGroup } from 'react-bootstrap';
import AccordionList from "../../components/Element/Accordion"; 
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
const Prediction = () => {
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
      </Form>
        <AccordionList onChange={onChange} accordions={data} />
    </>)
}
export default Prediction;