const API_KEY =
  'live_tkio0zSdSrwSD8tb5cTwddvDhv2flWP7F7ew5OIzg3SfITNrlW6tCiDFsOmgko0Y';

function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch breeds');
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/images/search';
  const params = new URLSearchParams({
    breed_ids: breedId,
    api_key: API_KEY,
  });
  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText || 'Помилка');
    }
    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
