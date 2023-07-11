import { Table, Container, Row, Col, Form } from 'react-bootstrap';
import React, { Fragment, useMemo, useState } from 'react';
import CustomDropdown from '../../../components/Element/CustomDropdown';
const DataTable = ({
  dataList = [],
  header = [],
  filters = [],
  activeTableHead=null,
  getSetActiveRow=()=>{}
}) => {
  const [activeSection,setActiveSection]=useState(activeTableHead);
  const memoFilters = useMemo(() => {
    return filters;
  }, [filters]);
  const memoHeader = useMemo(() => {
    return header;
  }, [header]);
  const memoDataList = useMemo(() => {
    return dataList;
  }, [dataList]);
  console.log(activeSection)
  return (<div className="tableSection">
    <Container>
    <Row>
      {memoFilters.map((item) => <Col sm={12} md={4} className="filterSection">
        {item.select && <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{item.title}</Form.Label> 
          {item.options.length && <CustomDropdown
            placeHolder="Select..."
            options={item.options}
            selected={item.selected}
            onChange={(value) => console.log(value)}
          />}
        </Form.Group>}
        {item.custom && <item.custom />}
      </Col>)}
    </Row>
    <Table striped bordered responsive="sm">
      <thead><tr>
        {memoHeader.map((item, i) =>
          <th key={item.title}>{item.title}
            {item.isHeaderRadio && <Form.Check
              inline
              label={""}
              name={item.title}
              type={"radio"}
              onChange={()=>setActiveSection(i)}
              defaultChecked={i===activeSection}
              id={`inline-${"radio"}-${i}`}
            />}
          </th>
        )}
      </tr>
      </thead>
      <tbody>
        {memoDataList.map((row,index) => <tr key={`value-${index}`}>
          {memoHeader.map((item, i) => <Fragment key={i}>
            {item.isRadio && 
            <td align="center" className={row.isChecked?"selectedRow":""}>
              <Form.Check
              inline
              label={""}
              name={`row-${item.title}`}
              type={"radio"}
              onChange={()=>getSetActiveRow(index)}
              defaultChecked={row.isChecked}
              id={`inline-${"radio"}-${i}`}
            />
            </td>
            } 
            {item.custom && <td className={`${i===activeSection?"radio-active":"table-cell"} ${row.isChecked?"selectedRow":""}`}>{<item.custom {...row} />}</td>}
            {!item.custom && item.key && <td className={`${i===activeSection?"radio-active":"table-cell"} ${row.isChecked?"selectedRow":""}`}>{row[item.key]}</td>}
          </Fragment>
          )}
        </tr>)}
      </tbody>
    </Table>
  </Container>
  </div>
  );
}
export default DataTable;