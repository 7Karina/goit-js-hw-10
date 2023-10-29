const API_KEY =
  'live_yhKx5EW7r5s5EKWButootd2z8zjtwxwBhL2KtG8Vaujfjusynd9eugh1xm5dCi7E';

function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
}

return fetch(`${BASE_URL}${END_POINT}?${API_KEY}`).then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch breeds');
  }
  return response.json();
});

export { fetchBreeds };
