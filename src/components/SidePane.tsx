import { Dispatch, SetStateAction, useState } from "react";
import Button from "../shared/ui/Button";
import { useUpdateQuery } from "../shared/hooks/useUrl";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IPaneProp {
  isOpen: boolean;
  handleCLose: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
}

export default function SidePane(props: IPaneProp) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { updateQueryStrings } = useUpdateQuery();
  const q = searchParams.get("types");
  const checkUrl = (val: string) =>
    q?.split(",").find((value) => value === val) || "";
  const initialFilterValues = {
    EDF: "",
    CAO: "",
    SFO: "",
  };
  const [filterValues, setFilterValues] = useState<Record<string, any>>({
    EDF: checkUrl("EDF"),
    CAO: checkUrl("CAO"),
    SFO: checkUrl("SFO"),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    const { name } = e.target;
    setFilterValues((prevState: { [x: string]: any }) => {
      const prevValues = prevState[name];
      const updatedValues = prevValues.includes(item) ? "" : item;
      return { ...prevState, [name]: updatedValues };
    });
  };

  const handleApplyFilter = () => {
    props.handleCLose();
    const obj = Object.keys(filterValues)
      .reduce((arr: string[], item) => {
        if (filterValues[item]) {
          arr.push(filterValues[item]);
        }
        return arr;
      }, [])
      .join(",");
    if (!obj.length) {
      updateQueryStrings("types", obj);
    }
    if (props.value) {
      updateQueryStrings("q", props.value);
    }
    if (obj.length) {
      console.log(obj);
      updateQueryStrings("types", obj);
    }
    if (props.value && obj.length) {
      updateQueryStrings("q", props.value);
      updateQueryStrings("types", obj);
    }
  };

  const handleResetAll = () => {
    props.handleCLose();
    props.setValue("");
    setFilterValues(initialFilterValues);
    navigate("/");
  };
  return (
    props.isOpen && (
      <div className="bg-black ">
        <div
          onClick={props.handleCLose}
          className="absolute top-0 bottom-0 z-20 w-full bg-black bg-opacity-25"
        ></div>
        <div className="absolute flex flex-col justify-between left-0 z-40 top-0 bottom-0 right-0  bg-white w-[24rem]  ml-auto">
          <div>
            <div className="flex items-center p-4 bg-[#F5F7F8] justify-between">
              <h1>Set Parameters</h1>
              <Button
                onClick={handleResetAll}
                variant="ghost"
                className="text-sm text-secondary"
              >
                Reset All
              </Button>
            </div>
            <div className="p-4">
              <div className="relative flex items-center w-full">
                <input
                  type="search"
                  value={props.value}
                  onChange={(e) => props.setValue(e.target.value)}
                  className="px-3 h-[2.5rem] flex w-full  focus:outline-none text-sm placeholder:text-[#8997A1] border border-[#D0DAE1] placeholder:text-sm rounded-[4px]"
                  placeholder="Search by Item#, Order #"
                />
              </div>
              <div className="mt-5">
                <h1 className="pb-2 font-semibold border-b">Type</h1>
                <div className="flex flex-col gap-1 mt-2 w-fit">
                  {Object.keys(filterValues).map((item, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        checked={filterValues[item] ? true : false}
                        name={item}
                        type="checkbox"
                        onChange={(e) => handleChange(e, item)}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-2">
            <Button onClick={handleApplyFilter} className="w-full">
              Apply
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
