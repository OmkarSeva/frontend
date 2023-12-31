"use client";
import { useState, useEffect } from "react";
import { BlockIcon, ListIcon } from "@/assets/icons";
import {
  PlaylistBlockCard,
  PlaylistListCard,
  VideoBlockCard,
  VideoListCard,
} from "@/components";
import Link from "next/link";
import supabase from "@/config/supabase";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from("Videos") // Name of Table
        .select(`*,Facilitators(*)`);

      if (error) {
        console.log("error");
        console.log(error);
      }
      if (data) {
        console.log(data);
        await setVideos(data);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const { data, error } = await supabase
        .from("Playlists") // Name of Table
        .select();

      if (error) {
        console.log("error");
        console.log(error);
      }
      if (data) {
        console.log(data);
        await setPlaylists(data);
      }
    };
    fetchPlaylists();
  }, []);
  const [viewBlock, setViewBlock] = useState(true);
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 w-[100%]">
        <div className="flex items-center gap-3 ">
          <input
            type="text"
            className="border border-gray-700 rounded px-2 py-2 w-[400px]"
          ></input>
          <button className="border-2 border-black rounded-md py-2 w-[100px] font-medium">
            From
          </button>
          <button className="border-2 border-black rounded-md py-2 w-[100px] font-medium">
            End
          </button>
          <button className="border-2 border-black rounded-md py-2 w-[100px] font-medium">
            Speaker
          </button>
          <button className=" w-[150px] items-center gap-2 py-2.5 text-white bg-amber-600 rounded-lg hover:bg-amber-700">
            Search
          </button>
        </div>
        <div className="flex items-center justify-center gap-0">
          <div
            className="p-2 border-2 border-black rounded-bl-md rounded-tl-md cursor-pointer"
            onClick={() => setViewBlock(true)}
          >
            <BlockIcon />
          </div>
          <div
            onClick={() => setViewBlock(false)}
            className="p-2 border-2 border-black rounded-br-md rounded-tr-md
            cursor-pointer"
          >
            <ListIcon />
          </div>
        </div>
      </div>

      {viewBlock ? (
        <div className="lectureContainer-Block">
          <div className="videoContainer">
            <div className="w-full flex justify-between">
              <h2 className="mb-2 text-[1.2rem] font-semibold">Videos</h2>
              <Link href={`/videos`}>
                <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem] mr-[3rem]">
                  See all
                </div>
              </Link>
            </div>
            <div className="videoContainer flex gap-5">
              {videos ? (
                videos.map((data) => {
                  return <VideoBlockCard data={data} key={data.link} />;
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="PlaylistContainer mt-4">
            <div className="w-full flex justify-between">
              <h2 className="mb-2 text-[1.2rem] font-semibold">Playlist</h2>
              <Link href="playlists">
                <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem] mr-[3rem]">
                  See all
                </div>
              </Link>
            </div>
            <div className="videoContainer flex gap-5">
              {playlists ? (
                playlists.map((data) => {
                  return <PlaylistBlockCard data={data} key={data.link} />;
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="lectureContainer-list flex flex-col gap-7 mb-16 mt-5">
          <div className="videoContainer">
            <div className="w-full flex justify-between items-center">
              <h2 className=" text-[1.5rem] font-semibold">Videos</h2>
              <Link href={`/videos`}>
                <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem]">
                  See all
                </div>
              </Link>
            </div>
            <div className="videoOuterContainer flex gap-5 h-[400px] items-start overflow-y-scroll border-2 border-black rounded-lg  scrollbar-thumb-slate-800 scrollbar-thin">
              <div className="videoInnerContainer flex flex-col gap-3 mt-2 mx-2 ">
                {videos ? (
                  videos.map((data) => {
                    return <VideoListCard data={data} key={data.link} />;
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="videoContainer">
            <div className="w-full flex justify-between items-center">
              <h2 className=" text-[1.5rem] font-semibold">Playlist</h2>
              <Link href="/playlists">
                <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem]">
                  See all
                </div>
              </Link>
            </div>
            <div className="videoOuterContainer flex gap-5 h-[400px] items-start overflow-y-scroll border-2 border-black rounded-lg scrollbar-thumb-slate-800 scrollbar-thin">
              <div className="videoInnerContainer flex flex-col gap-3 mt-2 ml-2">
                {playlists ? (
                  playlists.map((data) => {
                    return <PlaylistListCard data={data} key={data.link} />;
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
