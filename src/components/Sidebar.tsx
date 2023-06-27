import { sidebardata } from "../shared/utils";

export default function Sidebar() {
  return (
    <div className="2xl:w-[20rem] w-[13rem] flex-shrink-0 text-accent-100 bg-primary min-h-screen">
      <div className="flex gap-2 p-2 ">
        <h1 className="flex items-center justify-center w-10 h-10 bg-secondary ">
          OC
        </h1>
        <div className="flex flex-col text-sm">
          <h1>OC &#8482;</h1>
          <p className="text-xs text-accent-300">Order Central</p>
        </div>
      </div>
      <div className="grid  mt-[2rem]">
        {sidebardata.map((item, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-3 py-4 text-sm cursor-pointer hover:bg-secondary text-accent-400"
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
