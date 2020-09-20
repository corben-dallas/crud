export const getData = async (url) => {
  const resp = await fetch(url);
  return resp.json();
}

export const updateData = async (url, method, data = {}) => {
  const resp = await fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE' },
    body: JSON.stringify(data),
  })

  return resp;
}