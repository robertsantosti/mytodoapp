const url = 'http://localhost:3000/resource';

export class ApiService {
  url;
  headers = { "Content-type": "application/json" }

  constructor(resource) {
    this.url = url.replace('resource', resource)
  }

  Get = async () => {
    const response = await fetch(this.url);
    return response.json();
  }
  
  Show = async (id) => {
    const response = await fetch(`${this.url}/${id}`);
    return response.json();
  }
  
  Create = async (data) => {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: this.headers,
    })
    return response.json();
  }
  
  Update = async (id, data) => {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: this.headers,
    })
    return response.json();
  }
  
  Delete = async (id) => {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
}