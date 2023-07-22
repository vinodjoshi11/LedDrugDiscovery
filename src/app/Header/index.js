
import React from 'react';  
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';  
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import "./style.css" 
import { useLocation } from 'react-router-dom';
function Header() { 
  const {pathname}=useLocation();  
  return (
    <>  
        <Navbar key={"lg"} expand={"lg"} className="">
          <Container>
            <Navbar.Brand href="/">
            <img
              src={"/images/logo.png"} alt={"logo"}
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Text className="primary navbar-heading"> 
            LED Drug Discovery
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
                    className="d-inline-block align-top"
                  />{' '}
                  </Offcanvas.Title>
                  <Navbar.Text className="primary"> 
                  AI LED Drug Discovery
                </Navbar.Text>
              </Offcanvas.Header>
              <Offcanvas.Body> 
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/" className={["/"].includes(pathname)?"active-nav":""}>Compound Search</Nav.Link>
                  <Nav.Link href="/bio-assay-search" className={["/bio-assay-search","/particular-compound-result","/bio-assay-detail","/bio-assay-result"].includes(pathname)?"active-nav":""}>Bio Assay Search</Nav.Link>
                  <Nav.Link href="/predictive-ai" className={["/predictive-ai","/predict-property"].includes(pathname)?"active-nav":""}>Predictive AI</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> 
    </>
  );
}

export default Header;
