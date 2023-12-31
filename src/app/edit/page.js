import { SearchIcon } from "@/assets/icons";

const page = () => {
  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold">Edit Request</h2>
      <div className="flex flex-col items-center gap-5 my-10">
        <div className="flex flex-col items-start gap-1 ">
          <label htmlFor="search" className="font-semibold">
            Search Video
          </label>
          <div className="w-full flex">
            <input
              id="search"
              type="text"
              className="border border-gray-700 rounded-tl rounded-bl px-2 py-2 w-[550px]"
            ></input>
            <button className="border-2 flex justify-center items-center border-black rounded-tr-md rounded-br-md py-2 w-[50px] font-medium">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title</label>
          <input
            type="text"
            className="border border-gray-700 rounded px-2 py-2 w-[600px]"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Describe</label>
          <textarea className="border border-gray-700 rounded px-2 py-2 w-[600px] h-24"></textarea>
        </div>

        <button className="w-[150px] mt-7 items-center gap-2 py-2.5 text-white bg-amber-600 rounded-lg hover:bg-amber-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
