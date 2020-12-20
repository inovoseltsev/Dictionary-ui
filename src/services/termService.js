import createApiCall, {API_V1_URL} from "../helpers/createApiCall";

const DEFAULT_URL = "terms/";


export async function getById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + id
  });
}

export async function getAllByGroupId(groupId) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `term-groups/${groupId}`
  });
}

export async function getAnswersForTerm(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/answers/${id}`
  });
}

export async function getStudySet(groupId) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/term-groups/${groupId}`
  });
}

export async function getStudySetWithKeywords(groupId) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/keywords/term-groups/${groupId}`
  });
}

export async function getStudySetWithImages(groupId) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/images/term-groups/${groupId}`
  });
}

export async function getStudySetInChunks(groupId) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/chunks/term-groups/${groupId}`
  });
}

export async function createTerm(term) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL,
    method: "POST",
    data: term
  });
}

export async function update(id, term) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + id,
    method: "PUT",
    data: term
  });
}

export function updateAwareStatus(id, awareStatus) {
  return createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/aware-status/${id}?awareStatus=${awareStatus}`,
    method: "PUT"
  });
}

export function resetAwareStatusForGroup(groupId) {
  return createApiCall({
    url: API_V1_URL + DEFAULT_URL + `studying/aware-status/reset/${groupId}`,
    method: "PUT"
  })
}

export async function deleteById(id) {
  return await createApiCall({
    url: API_V1_URL + DEFAULT_URL + id,
    method: "DELETE"
  });
}
