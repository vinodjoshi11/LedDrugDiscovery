import { ActionType } from './action-types.js'; 
import { createAsyncThunk } from '@reduxjs/toolkit';  
import { getExactSearch,getSimilaritySearch,getSubstructureSearch } from 'modules/crm/service';
 
const getCompoundExactSearch = createAsyncThunk(
  ActionType.SET_LED_COMPOUND_EXACT_SEARCH,
  async (search) => {
    try{ 
      const {data}=await getExactSearch(search); 
      console.log(data)
      return data;
    } catch(error){
      console.error(error);
      return null; 
    }
  }
);
const getCompoundSimilaritySearch = createAsyncThunk(
  ActionType.SET_LED_COMPOUND_SIMILARITY_SEARCH,
  async (search) => {
    try{ 
      const {data}=await getSimilaritySearch(search); 
      return data;
    } catch(error){
      console.error(error);
      return null; 
    }
  }
);
const getCompoundSubstructureSearch = createAsyncThunk(
  ActionType.SET_LED_COMPOUND_SUBSTRUCTURE_SEARCH,
  async (search) => {
    try{ 
      const {data}=await getSubstructureSearch(search);
      if(data && data.length){
       const filterData=data.filter((item)=>{
          item["url"]=item["smiles_img"];
          return item
        })
        return filterData; 
      }
    } catch(error){
        console.error(error);
        return null; 
    }
  }
);

export const LedCompoundSliceThunk = {
  getCompoundExactSearch, 
  getCompoundSimilaritySearch,
  getCompoundSubstructureSearch
};