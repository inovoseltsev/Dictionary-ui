import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

export async function create(user) {
  return await createApiCall({
    url: API_V1_URL + "users/registration",
    method: "POST",
    data: user,
    tokenRequired: false
  });
}

export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + `users/${id}/`,
    tokenRequired: true
  });
}
