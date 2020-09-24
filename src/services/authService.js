import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

export async function login(credentials) {
  const {token} = await createApiCall({
    url: API_V1_URL + "auth",
    method: "POST",
    data: credentials,
    tokenRequired: false
  });
  return token;
}