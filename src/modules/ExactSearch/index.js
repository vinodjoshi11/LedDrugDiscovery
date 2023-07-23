
import SpinnerLoader from 'app/components/Element/SpinnerLoader';
import React from 'react'; 
import { useSelector } from 'react-redux';
const ExactSearch = () => {   
    const {data,isLoading}=useSelector((state)=>state.ledDrugCompound.exact); 
    return (<>
        {!isLoading && data && <div className="exactSearchContent">
            {data?.img && <img src={data.img} alt={"diagram"} />}
        </div>}
            {isLoading && <SpinnerLoader/>}
        {/* <div className="imageNo">
            DRL_9584767
        </div> */}
    </>)
}
export default ExactSearch;