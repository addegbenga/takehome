import React from "react";
import { ITableDataReturnType } from "../../services";

interface ITableData {
  data: ITableDataReturnType[];
}

const header = {
  action: "action",
  orderId: "orderId",
  type: "type",
  category: "category",
  desc: "desc",
};

export default function TableView({ data }: ITableData) {
  return (
    <table className="w-full ">
      <thead className="">
        <tr className="text-left ">
          {Object.values(header).map((item, idx) => (
            <React.Fragment key={idx}>
              {item === "action" ? (
                <th className="flex items-center justify-center p-3 px-6 border border-y-0">
                  <input className="w-4 h-4 mt-1.5" type="checkbox" />
                </th>
              ) : (
                <th className="p-3 border border-y-0 ">{item}</th>
              )}
            </React.Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, idx) => (
          <tr key={item.orderId} className="">
            {Object.values(header).map((val, id) =>
              val === "action" ? (
                <td
                  key={id}
                  className="flex items-center justify-center p-3 px-6 border "
                >
                  {idx + 1}
                </td>
              ) : (
                <td key={id} className="p-3 border">
                  {item[val]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
