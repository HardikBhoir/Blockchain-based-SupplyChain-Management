import abi from "../utils/DrugDetection.json";
const contractAddress = "CONTRACT_ADDRESS";//DEPLOYED CONTRACT ADDRESS
const contractABI = abi.abi;
export { contractABI, contractAddress };
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
};
export { options };
