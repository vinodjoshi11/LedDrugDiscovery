import {Table,Container,Row,Col, Form} from 'react-bootstrap';
import React, { Fragment } from 'react';
const  DataTable=({
    dataList=[],
    header=[],
    filters=[]
})=>{ 
  
  return (<Container fluid>
    <Row>
       {filters.map((item)=> <Col>
        {item.select && <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{item.title}</Form.Label>
            <Form.Select aria-label="Default select example">
                {item.options.map((item)=><option value={item.value}> {item.value} </option>)}
            </Form.Select> 
        </Form.Group>}
       {item.custom && <item.custom/>}
       </Col>)}
    </Row>
    <Table striped="columns" responsive="sm">
      <thead><tr>
        {header.map((item,i)=>
          <th key={item.title}>{item.title}
          {item.isHeaderRadio && <Form.Check
            inline
            label={""}
            name="group1"
            type={"radio"} 
            defaultChecked={item.isChecked}
            id={`inline-${"radio"}-${i}`}
          />}
          </th> 
       )}
        </tr>
      </thead>
      <tbody>
        {dataList.map((row)=><tr>
            {header.map((item,i)=><Fragment key={i}>
              {item.isRadio && <Form.Check
            inline
            label={""}
            name="group1"
            type={"radio"} 
            defaultChecked={row.isChecked}
            id={`inline-${"radio"}-${i}`}
          />}
          
              {item.custom && <td>{<item.custom {...row}/>}</td>}
              {!item.custom && item.key && <td>{row[item.key]}</td>}
            </Fragment>
            )} 
        </tr>)}
      </tbody>
    </Table>
</Container>
  );
}
export default DataTable;