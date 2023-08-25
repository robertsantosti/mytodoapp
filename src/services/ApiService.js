const BASE_URL = 'http://localhost:3000/resource';
const headers = { "Content-type": "application/json" }

const getUrl = (resource) => {
  return BASE_URL.replace('resource', resource)
}

const Get = async (resource) => {
  return await fetch(getUrl(resource));
}

const Show = async (resource, id) => {
  return await fetch(getUrl(`${resource}/${id}`));
}

const Create = async (resource, data) => {
  return await fetch(getUrl(resource), {
    method: 'POST',
    body: data,
    headers,
  })
}

const Update = async (resource, id, data) => {
  return await fetch(getUrl(`${resource}/${id}`), {
    method: 'POST',
    body: data,
    headers,
  })
}

const Delete = async (resource, id) => {
  return await fetch(getUrl(`${resource}/${id}`), {
    method: 'DELETE',
  });
}

export const ApiService = {
  Get,
  Show,
  Create,
  Update,
  Delete
}