import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPopup(props) {
  const {getBodyContent=()=>{},handleFooter=()=>{},show,onHide,heading="",isFooter=true,footerActionText="",customClass=""}=props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={customClass}
    >
      <Modal.Header className="modalClose" closeButton closeVariant={"white"}>
        <Modal.Title id="contained-modal-title-vcenter">
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        {getBodyContent()}
      </Modal.Body>
      {isFooter && <Modal.Footer>
        <Button onClick={()=>handleFooter()}>{footerActionText}</Button>
      </Modal.Footer>}
    </Modal>
  );
}
export default ModalPopup;