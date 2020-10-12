import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

export async function login(credentials) {
  return await createApiCall({
    url: API_V1_URL + "auth",
    method: "POST",
    data: credentials,
    tokenRequired: false
  });
}
