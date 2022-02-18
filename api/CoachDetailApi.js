import requestHandler from "../services/requestHandler";

export const getCoachDetailsData = () => {
  return requestHandler.get(`/partners/details/1`);
}

export default {
  getCoachDetailsData
}