import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

const DEFAULT_URL = "term-groups/";

export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `${id}/`
  });
}

export async function getAllByUserId(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `users/${id}/`
  });
}
