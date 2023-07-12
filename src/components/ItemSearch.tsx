import { data } from "./data";

export default function ItemSearch() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      {data.map((item, idx) => (
        <div key={idx + "dhdh"}>
          <h1 className="mb-3 text-2xl font-medium">Demo for copy to figma</h1>
          <div className="w-full h-[20rem] border">
            <img
              className="object-contain w-full h-full"
              src="https://s3-alpha.figma.com/hub/file/1881514653/47b6f864-dbb7-487d-9afa-2c3b89620e33-cover.png"
              alt=""
            />
          </div>
          <button
            onClick={() => whipFn(item.code)}
            className="w-full p-2 mt-2 text-white bg-blue-700"
          >
            Copy Design
          </button>
        </div>
      ))}
    </div>
  );
}

function whipFn(html: any) {
  document.addEventListener("copy", (e) => {
    e.clipboardData?.setData("text/html", html);
    e.preventDefault();
  });

  document.execCommand("copy");
}
