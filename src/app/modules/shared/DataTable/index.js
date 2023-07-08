import { Table, Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import React, { Fragment, useMemo, useState } from 'react';
import CustomDropdown from '../../../components/Element/CustomDropdown';
const DataTable = ({
  dataList = [],
  header = [],
  filters = [],
  activeTableHead=5
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
  return (<Container fluid>
    <Row>
      {memoFilters.map((item) => <Col>
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
    <Table striped="columns" responsive="sm">
      <thead><tr>
        {memoHeader.map((item, i) =>
          <th key={item.title}>{item.title}
            {item.isHeaderRadio && <Form.Check
              inline
              label={""}
              name="group1"
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
        {memoDataList.map((row) => <tr>
          {memoHeader.map((item, i) => <Fragment key={i}>
            {item.isRadio && <Form.Check
              inline
              label={""}
              name="group1"
              type={"radio"}
              defaultChecked={row.isChecked}
              id={`inline-${"radio"}-${i}`}
            />}

            {item.custom && <td className={`${i===activeSection?"radio-active":"table-cell"} `}>{<item.custom {...row} />}</td>}
            {!item.custom && item.key && <td className={`${i===activeSection?"radio-active":"table-cell"}`}>{row[item.key]}</td>}
          </Fragment>
          )}
        </tr>)}
      </tbody>
    </Table>
  </Container>
  );
}
export default DataTable;