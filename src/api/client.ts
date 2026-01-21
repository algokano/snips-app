import { API_BASE_URL } from '@/constants';

export async function apiGet<T>(url: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}
