import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import "./style.css";
function AccordionList({
  accordions=[],
  onChange=()=>{}
}) {
  return (
    <Accordion defaultActiveKey="0" className='custom-accordion'>
      {accordions.map((item,index)=><Accordion.Item eventKey={`${index}`}  key={index}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>  
         {(item.result && item.result.length>0) ? item.result.map((r,k)=><Form.Check  key={index+k}
            label={r.label}
            name={"group1"}
            type={"checkbox"} 
            id={`check-${index+k}`}
            defaultChecked={r.checked}
            onChange={()=>onChange(index,k,r.checked)}
          />):""}
        </Accordion.Body>
      </Accordion.Item>)}
    </Accordion>
  );
}

export default AccordionList;