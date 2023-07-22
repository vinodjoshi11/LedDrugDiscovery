import { READ } from "../../../services/ServerClient"; 
const authorizationHeader = { authorization: true };
export const getExactSearch = (param="N=C1NC(=N)N(c2ccc(Cl)cc2)C2(CCCCC2)N1") => {
    return READ(
      `/similarity?smiles=${param}`,
      {}
    );
  };
  export const getSimilaritySearch = (param) => {
    return READ(
      `/similarity2?smiles=${param}`,
      {},
      authorizationHeader
    );
  };  
  export const getSubstructureSearch = (param) => {
    return READ(
      `/substructure?smiles=${param}`,
      {},
      authorizationHeader
    );
  };  