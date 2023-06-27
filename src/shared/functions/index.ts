import { ITableDataReturnType } from "../../services";

export function cn(...classNames: (string | boolean)[]): string {
  return classNames.filter(Boolean).join(" ");
}

export const filterData = (
  data: ITableDataReturnType[],
  orderIds: number[] | undefined,
  types: string[] | undefined
) => {
  return data.filter((item) => {
    if (orderIds && types) {
      return orderIds.includes(item.orderId) && types.includes(item.type);
    }
    if (orderIds) {
      return orderIds.includes(item.orderId);
    }
    if (types) {
      return types.includes(item.type);
    }
    return false;
  });
};
