import { useGetTableData } from "../shared/hooks";
import { useSearchParams } from "react-router-dom";
import { SearchSvg, PlusSvg, BookMarkSvg, FilterSvg } from "../shared/svg";
import Button from "../shared/ui/Button";
import EmptyState from "../shared/ui/EmptyState";
import TableView from "../shared/ui/Table";
import { useUpdateQuery } from "../shared/hooks/useUrl";
import { useState } from "react";
import SidePane from "./SidePane";
const datas = ["Home", "OC", "Item search"];

export default function ItemSearch() {
  const [openPane, setOpenPane] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const t = searchParams.get("types");
  const isQueryParamExists = searchParams.has("q");
  const [value, setValue] = useState<any>(q ? q : "");
  const { data, loading } = useGetTableData({
    orderIds: q as string,
    types: t as string,
  });
  const { updateQueryString } = useUpdateQuery();

  const handleSubmit = () => {
    if (!value.length) return;
    updateQueryString("q", value);
  };

  const handleClear = () => {
    searchParams.delete("q");
    setSearchParams(searchParams);
    setValue("");
  };

  return (
    <div className="relative w-full">
      <SidePane
        value={value}
        setValue={setValue}
        isOpen={openPane}
        handleCLose={() => setOpenPane(false)}
      />
      <div className="w-full">
        <div className="w-full">
          <div className="w-full px-6 py-3 bg-accent-100">
            <ul className="flex gap-2 text-sm bg-accent-100">
              {datas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <section className="">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="w-full ">
                <h1>Item Search</h1>
                <p className="text-sm">
                  {" "}
                  {data.length ? data.length : 0} Items
                </p>
              </div>
              <div className="flex w-full gap-4 ">
                <div className="relative flex items-center w-full">
                  <input
                    type="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="px-3 h-[2.5rem] flex w-full  focus:outline-none text-sm placeholder:text-[#8997A1] border border-[#D0DAE1] placeholder:text-sm rounded-[4px]"
                    placeholder="Search by Item#, Order #"
                  />
                  {!isQueryParamExists ? (
                    <Button onClick={handleSubmit} variant="ghost" className="">
                      <SearchSvg className="-ml-8 " />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleClear()}
                      variant="ghost"
                      className=""
                    >
                      <span className="-ml-8 "> X</span>
                    </Button>
                  )}
                </div>
                <Button variant="ghost" className="">
                  <PlusSvg />
                </Button>
                <Button variant="ghost" className="">
                  <BookMarkSvg />
                </Button>
                <Button
                  onClick={() => setOpenPane(true)}
                  variant="ghost"
                  className=""
                >
                  <FilterSvg />
                </Button>
              </div>
            </div>
          </section>
        </div>
        {loading ? (
          <div>Loading..</div>
        ) : data.length === 0 ? (
          <div className="flex items-center justify-center h-[30rem]">
            <EmptyState />
          </div>
        ) : (
          <TableView data={data} />
        )}
      </div>
    </div>
  );
}
