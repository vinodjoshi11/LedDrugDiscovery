import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'; 
import Nav from 'react-bootstrap/Nav';  
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import "./style.css"
import { getSearch } from '../../modules/AuthService/indes';
import { useState } from 'react'; 
import NavbarRoute from '../../routes';
function Header() { 
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
  return (
    <>  
        <Navbar key={"xxl"} expand={"xxl"} className="mb-3">
          <Container>
            <Navbar.Brand href="#">
            <img
              src={"/images/logo.png"} alt={"logo"}
              width="170"
              height="46"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Text className="primary navbar-heading"> 
            LEAD Drug Discovery
          </Navbar.Text>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"xxl"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"xxl"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"xxl"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xxl"}`}>
                      <img
                    src={"/images/logo.png"} alt={"logo"}
                    width="170"
                    height="40"
                    className="d-inline-block align-top"
                  />{' '}
                  </Offcanvas.Title>
                  <Navbar.Text className="primary"> 
                  LEAD Drug Discovery
                </Navbar.Text>
              </Offcanvas.Header>
              <Offcanvas.Body> 
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/">Compound Search</Nav.Link>
                  <Nav.Link href="/bio-assay-search">Bio Assay Search</Nav.Link>
                  <Nav.Link href="/predictive-ai">Predictive AI</Nav.Link>
                </Nav>
                <Form className="d-flex"> 
                  <InputGroup className=" search-input">
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
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
    </>
  );
}

export default Header;