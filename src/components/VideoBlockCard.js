import Link from "next/link";

const VideoBlockCard = ({ data }) => {
  return (
    <Link href={`/video/${data ? data.link : "1"}`}>
      <div className="min-w-[260px] flex flex-col gap-1 cursor-pointer">
        <div className="imgContainer max-w-[260px] bg-gray-200 rounded-xl h-[180px] overflow-hidden">
          <img
            src={`https://img.youtube.com/vi/${
              data ? data.link : "1"
            }/sddefault.jpg`}
            className="w-[100%]"
          ></img>
        </div>
        <div>
          <h3 className="font-semibold">
            {data ? data.title.slice(0, 30) + "..." : "Title"}
            {/* {title.slice(0, 7)}...
            {title.slice(account.length - 4)} */}
          </h3>
          <p className="text-[0.9rem] font-medium">
            {data
              ? `${data.Facilitators.prefix} ${data.Facilitators.name} ${data.Facilitators.suffix}`
              : "Author"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoBlockCard;
