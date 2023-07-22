
import React from 'react'; 
import { useSelector } from 'react-redux';
const ExactSearch = () => {   
    const {data}=useSelector((state)=>state.ledDrugCompound.exact); 
    return (<>
        <div className="exactSearchContent">
            {data && data?.img && <img src={data.img} alt={"diagram"} />}
        </div>
        {/* <div className="imageNo">
            DRL_9584767
        </div> */}
    </>)
}
export default ExactSearch;