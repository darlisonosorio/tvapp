import React from 'react';
import { useEffect, useState } from "react";
import { Episode } from "../@types";
import serieProvider from "../providers/SerieProvider";

export const useEpisodes = (id: string) => {
  const [episodes, setEpisodes] = useState<Map<Number, Episode[]>>(new Map());
  const [loading, setLoading] = useState(false);

  const loadEpisodes = async () => {
    setLoading(true);
    try {
        const data = (await serieProvider.getEpisodes(id) ?? []);
        setEpisodes(groupBy(data, ep => ep.season));
    } catch(e: any) {
      // HANDLE ERROR
      // setError(e.message);
      setEpisodes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEpisodes();
  },[]);

  return {
    episodes,
    loading,
    setEpisodes,
  };
};

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}
