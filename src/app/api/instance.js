import axios from "axios";

const baseURL =
  "https://zhenyapro-d0bdf9cqh7dxhmez.canadacentral-01.azurewebsites.net";
export const client = axios.create({ baseURL });
