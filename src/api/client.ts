const BASE_URL = 'https://snips-testing-data.s3.us-east-2.amazonaws.com';

export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}
