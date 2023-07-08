import Button from 'react-bootstrap/Button';
import "./style.css"
const ActionButton=({
    variant="primary",
    text="",
    onClick=()=>{},
    startIcon
})=> {
  return (
    <>
      <Button variant={variant} onClick={onClick}>
        {startIcon && <img src={startIcon} alt={""}/>}
        {text}
      </Button> 
    </>
  );
}
export default ActionButton;
