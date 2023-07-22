import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { LedCompoundReducerAction } from 'redux/LedDrug/reducer';
const SubStructureSearch = () => {  
    const dispatch=useDispatch();
    const {data=null,selectedItem=""}=useSelector((state)=>state.ledDrugCompound.substructure) || {}; 
    const onSelectItem=(item)=>{
       dispatch(LedCompoundReducerAction.onSelectSubstructure(item))
    }
    return (<>
        <div className="similarySearchContent">
            <div className="bigImage">
                {selectedItem && <img src={selectedItem} alt={"diagram"} />}
                {/* <div className="imageNo">
                    DRL_9584767
                </div> */}
            </div>
            <div className="thumbnail">
                <ul>
                    {data && data.map((item,key)=><li key={`${key}_${item.url}`} 
                      className={`${item.url===selectedItem ? "active" : ""}`}  onClick={()=>onSelectItem(item.url)}>
                        {item.url && <img src={item.url} alt={"diagram"}/>}
                    </li>)} 
                </ul>
            </div>
        </div> 
    </>)
}
export default SubStructureSearch;