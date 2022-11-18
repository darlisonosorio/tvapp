import React, { useState, useEffect } from 'react';
import serieProvider from '../providers/SerieProvider';
import { Serie } from '../@types';

export const useSeries = () => {
  const [series, setSeries] = useState<Serie[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  const refresh = async () => {
    setRefreshing(true);
    await init();
    setRefreshing(false);
  };

  const init = async () => {
    await load([], 0, search);
  }

  const getMoreSeries = async () => {
    await load(series, page + 1, search);
  };
  
  const setQuery = (query) => {
    if (query !== search) {
      setSearch(query);
      load([], 0, query);
    }
  };

  const load = async (series, page, query) => {
    setPage(page);
    setLoading(true);
    try {
      if (query.length) {
        const data = (await serieProvider.search({ q: query }) ?? []);
        setSeries(data.map(it => it.show));
      } else {
        const data = (await serieProvider.list({ page }) ?? []);
        setSeries(series.concat(data)); 
      }
    } catch(e: any) {
      // HANDLE ERROR
      // setError(e.message);
      setSeries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  },[]);
  
  return {
    series,
    loading,
    refreshing,
    refresh,
    setQuery,
    getMoreSeries,
  };
}
