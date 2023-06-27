import { useState, useEffect } from "react";
import {
  getTableDataFn,
  IQueryType,
  ITableDataReturnType,
} from "../../services";

export function useGetTableData({
  orderIds,
  types,
}: Omit<IQueryType, "signal">) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ITableDataReturnType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getTableDataFn({
          signal: abortController.signal,
          orderIds: orderIds,
          types: types,
        });

        console.log(response, "response");
        setData(response);
        setLoading(false);
      } catch (error) {
        if (!abortController.signal.aborted) {
          if (error instanceof Error) {
            setError(error);
          } else {
            setError(new Error(String(error)));
          }
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [orderIds, types]);

  return { loading, data, error };
}
