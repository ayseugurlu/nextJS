"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({ resim, isim }) => {
  let router = useRouter();
  return (
    <div
      className="w-44 mx-auto cursor-pointer group"
      onClick={() => router.push("/movies")}
    >
      <div className="w-44 h-44 rounded-md border-2 border-transparent group-hover:border-white overflow-hidden ">
        <img src={resim} alt="Profile Picture" />
      </div>

      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
        <h2>{isim}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;
