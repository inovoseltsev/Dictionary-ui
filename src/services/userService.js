import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

const DEFAULT_URL = "users/";

export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `${id}/`
  });
}

export async function getAll() {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL
  });
}

export async function create(user) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + "registration",
    method: "POST",
    data: user,
    tokenRequired: false
  });
}

export async function update(user) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + user.id,
    method: "PUT",
    data: user
  });
}
