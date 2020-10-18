import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

export async function getByUserId(id) {
  return await createApiCall({
    url: API_V1_URL
  });
}
