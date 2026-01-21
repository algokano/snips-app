import { FeedResponse } from '@/types/feed';
import { apiGet } from './client';

export function fetchFeedData() {
  return apiGet<FeedResponse>('/FeedPage1.json');
}
