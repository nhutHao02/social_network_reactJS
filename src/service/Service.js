import ENDPOINTS from "./API";

const perform = async (endpoint, params = {}, payload = {}) => {
  const { method, url, requiresToken, responseType } = endpoint;
  const fullUrl = typeof url === 'function' ? url(params) : url;
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJuaHV0SGFvMDIiLCJzdWIiOiJ0ZXN0IiwiZXhwIjoxNzI1OTgzNDU1LCJpYXQiOjE3MjMzMDUwNTV9.CYpb-85nP37w5hIyvqERV5HDdRA3JfqBRx1zUAAAhOSS4UScUaKWbIBz6owWn52xrujVCwbAaB0TCtj7-4Ke4g'
  const headers = new Headers({
    'Content-Type': 'application/json',
    // Nếu endpoint yêu cầu token, thêm Authorization header
    // ...(requiresToken && { Authorization: `Bearer ${localStorage.getItem('token')}` })
    ...(requiresToken && { Authorization: `Bearer ${token}` })
  });

  const options = {
    method,
    headers,
    ...(payload && Object.keys(payload).length > 0 && { body: JSON.stringify(payload) })
  };
  try {
    const response = await fetch(fullUrl, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return responseType === 'json' ? response.json() : response.text();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
export default perform;