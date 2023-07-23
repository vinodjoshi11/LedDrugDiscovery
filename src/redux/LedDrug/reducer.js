import { createSlice } from '@reduxjs/toolkit';
import { LedCompoundSliceThunk } from './actions';
export const initialState = { 
    search:"",
    exact: {
      isLoading:false,
      isSuccess:false,
      message:"",
      data:null
    },
    similarity: {
      isLoading:false,
      isSuccess:false,
      message:"",
      method:"Similarity",
      percentage:50,
      selectedItem:"",
      data:null
    },
    substructure:{
      isLoading:false,
      isSuccess:false,
      message:"",
      selectedItem:"",
      data:null
    } 
};
export const LedCompoundSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { 
    onCompoundSearch: (state, action) => {
      state.search = action.payload; 
    },
    onSelectSubstructure: (state, action) => {
      state.substructure.selectedItem = action.payload; 
    },
    onSelectStructure: (state, action) => {
      state.similarity.selectedItem = action.payload; 
    },
    onSelectPercentage: (state, action) => {
      state.similarity.percentage = action.payload; 
    },
    onSelectMethods: (state, action) => {
      state.similarity.method = action.payload; 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LedCompoundSliceThunk.getCompoundExactSearch.pending, (state) => {
        state.exact.isLoading = true; 
      })
      .addCase(LedCompoundSliceThunk.getCompoundExactSearch.fulfilled, (state, action) => {
        state.exact.isLoading = false;
        state.exact.isSuccess = true;
        state.exact.data = action.payload;  
      })
      .addCase(LedCompoundSliceThunk.getCompoundExactSearch.rejected, (state, action) => {
        state.exact.isLoading = false;
        state.exact.data = null;
        state.exact.message = action.payload;  
      })
      .addCase(LedCompoundSliceThunk.getCompoundSimilaritySearch.pending, (state) => {
        state.similarity.isLoading = true; 
      })
      .addCase(LedCompoundSliceThunk.getCompoundSimilaritySearch.fulfilled, (state, action) => {
        state.similarity.isLoading = false;
        state.similarity.isSuccess = true;
        state.similarity.selectedItem=action.payload && action.payload.length?action.payload[0].url:"";
        state.similarity.data = action.payload;  
      })
      .addCase(LedCompoundSliceThunk.getCompoundSimilaritySearch.rejected, (state, action) => {
        state.similarity.isLoading = false;
        state.similarity.data = null;
        state.similarity.message = action.payload;  
      }) 
      .addCase(LedCompoundSliceThunk.getCompoundSubstructureSearch.pending, (state) => {
        state.substructure.isLoading = true; 
      })
      .addCase(LedCompoundSliceThunk.getCompoundSubstructureSearch.fulfilled, (state, action) => {
        state.substructure.isLoading = false;
        state.substructure.isSuccess = true;
        state.substructure.selectedItem=action.payload && action.payload.length?action.payload[0].url:"";
        state.substructure.data = action.payload;  
      })
      .addCase(LedCompoundSliceThunk.getCompoundSubstructureSearch.rejected, (state, action) => {
        state.substructure.isLoading = false;
        state.substructure.data = null;
        state.substructure.message = action.payload;  
      })  
  },
});  
const {onCompoundSearch,onSelectMethods,onSelectPercentage,  onSelectSubstructure ,onSelectStructure} = LedCompoundSlice.actions;
export const LedCompoundReducerAction = {
  onCompoundSearch,
  onSelectSubstructure,
  onSelectMethods,
  onSelectPercentage,
  onSelectStructure 
}
export default LedCompoundSlice.reducer;


