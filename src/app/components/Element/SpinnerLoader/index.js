import Spinner from 'react-bootstrap/Spinner';
import "./style.css"
function SpinnerLoader() {
  return (<div className="spin-loader">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default SpinnerLoader;