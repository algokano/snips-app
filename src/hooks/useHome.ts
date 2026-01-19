import { useCallback, useEffect, useState } from 'react';
import { fetchHomeData } from '@/api/home.api';
import { HomeComponent } from '@/types/home';

export function useHome() {
  const [components, setComponents] = useState<HomeComponent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      const res = await fetchHomeData();
      setComponents(res.data.components);
      setError(null);
    } catch {
      setError('Failed to load home data');
    }
  }, []);

  useEffect(() => {
    loadData().finally(() => setLoading(false));
  }, [loadData]);

  return { components, loading, error, refetch: loadData };
}
