export const getData = (url) => 
  fetch(url)
    .then(response => response.json())
    .catch(err => console.error(err));

export const updateData = async (url, method, data = {}) => {
  const resp = await fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE' },
    body: JSON.stringify(data),
  })

  return resp;
}