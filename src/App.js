 
import "./_variables.scss";
import './App.css';  
import {Button} from 'react-bootstrap';
import Header from './app/components/Header'; 
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import AppRoutes from "./app/routes";
import ModalPopup from "./app/modules/ModalPopup";
import React from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
       <ThemeProvider>
        <Header/>
        <AppRoutes/>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> 
      </ThemeProvider>
    </div>
  );
}

export default App;
