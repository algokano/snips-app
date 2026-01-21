import { useCallback, useEffect, useState } from 'react';
import { fetchFeedData } from '@/api/feed.api';
import { FeedTitle } from '@/types/feed';

export function useFeed() {
  const [feedTitles, setFeedTitles] = useState<FeedTitle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      const res = await fetchFeedData();
      setFeedTitles(res.feedTitles);
      setError(null);
    } catch {
      setError('Failed to load feed data');
    }
  }, []);

  useEffect(() => {
    loadData().finally(() => setLoading(false));
  }, [loadData]);

  return { feedTitles, loading, error, refetch: loadData };
}
