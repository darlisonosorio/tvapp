import React, { useState, useEffect } from 'react';
import personProvider from '../providers/PersonProvider';
import { Person } from '../@types';

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);
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

  const getMorePeople = async () => {
    await load(people, page + 1, search);
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
        const data = (await personProvider.search({ q: query }) ?? []);
        setPeople(data.map(it => it.person));
      } else {
        const data = (await personProvider.list({ page }) ?? []);
        setPeople(series.concat(data)); 
      }
    } catch(e: any) {
      // HANDLE ERROR
      // setError(e.message);
      setPeople([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  },[]);
  
  return {
    people,
    loading,
    refreshing,
    refresh,
    setQuery,
    getMorePeople,
  };
}
