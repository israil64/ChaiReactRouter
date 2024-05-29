import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <>
      <div class="w-[300px] rounded-md border mb-4 mt-6 ">
        <img
          src={data.avatar_url}
          alt="Img"
          class="h-[200px] w-full rounded-t-md object-cover"
        />
        <div class="p-4">
          <h1 class="inline-flex items-center text-lg font-semibold">
            {data.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p class="mt-3 text-sm text-gray-600">{data.bio}</p>
          <div class="mt-4">
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Followers:{data.followers}
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Following:{data.following}
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"></span>
          </div>
          <Link to={data.html_url} target="blank">
            <button
              type="button"
              class="mt-4 w-full rounded-sm bg-purple-800 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Click Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const url = `https://api.github.com/users/israil64`;

  const response = await fetch(url);
  return response.json();
};
