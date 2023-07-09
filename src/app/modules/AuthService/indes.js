import { READ } from "../../services/ServerClient"; 
const authorizationHeader = { authorization: true };
export const getSearch = (id) => {
    return READ(
      `/products/${id}`,
      {},
      authorizationHeader
    );
  };