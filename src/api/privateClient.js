import { create } from "apisauce";
import Cookies from "universal-cookie";
import settings from "./settings";
// import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const cookies = new Cookies();

const getToken = async () => {
  try {
    return await cookies.get("auth_token");
  } catch (e) {
    console.log("Error getting access token: " + e);
  }
};

// token testing 
const tokenTest ="";

const privateAPIClient = create({
  baseURL: settings.API_BASE_URL,
});

privateAPIClient.addAsyncRequestTransform(async (request) => {
  const authToken = await getToken();
  console.log("🚀 ", authToken);
  if (!authToken) {
    console.log("------invalid Access------");
    return;
  }
  request.headers["Authorization"] = "Bearer " + authToken;
  // request.headers["Content-Type"] = "multipart/form-data";
  request.headers["Content-Type"] = "application/json";
  // request.headers["Accept"] = "*/*";
  // if not working remove return
  return request;
});

// privateAPIClient.addResponseTransform((response) => {
//   // console.log("response--------->", response, response.status);
//   if (response.status === 200) {
//     // Handle unauthorized error
//     // console.error("Unauthorized error:", response.data);
//     // Navigate("/login"); // Redirect to the login page
//     // const navigate = useNavigate();
//     // navigate("/login");
//   }
// });

export default privateAPIClient;
