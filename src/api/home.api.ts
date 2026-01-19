import { HomeResponse } from '@/types/home';
import { apiGet } from './client';

export function fetchHomeData() {
  return apiGet<HomeResponse>('/homePage.json');
}
