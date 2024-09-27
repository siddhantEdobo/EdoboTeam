import { create } from "apisauce";
import settings from "./settings";

const apiClient = create({
  baseURL: settings.API_BASE_URL,
});

export default apiClient;
