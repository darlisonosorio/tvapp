import { Serie } from '../../serie/@types';
import React, { useEffect, useState } from 'react';
import personProvider, { CastCredit } from '../providers/PersonProvider';

export const useCastCredits = (id: number) => {
  const [credits, setCredits] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(false);

  const loadCredits = async () => {
    setLoading(true);
    try {
        const data = (await personProvider.getCastCredtis(id) ?? []);
        setCredits(data.map(it => it._embedded.show));
    } catch(e: any) {
      // HANDLE ERROR
      // setError(e.message);
      setCredits([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCredits();
  }, []);

  return {
    credits,
    loading,
  };
};
