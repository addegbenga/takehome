import { filterData } from "../shared/functions";
import { tabledata } from "../shared/utils";

export interface ITableDataReturnType {
  orderId: number;
  type: string;
  category: string;
  desc: string;
  action: string;
}

export interface IQueryType {
  orderIds?: string;
  types?: string;
  signal: AbortSignal;
}

export function getTableDataFn({
  signal,
  orderIds,
  types,
}: IQueryType): Promise<ITableDataReturnType[]> {
  const order = orderIds ? orderIds.split(",").map(Number) : undefined;
  const type = types ? types?.split(",") : undefined;
  const data = filterData(tabledata, order, type);
  return new Promise((resolve, reject) => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      resolve(data);
    }, delay);

    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      reject(new Error("Aborted"));
    });
  });
}
