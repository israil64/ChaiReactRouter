import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <>
      <div className="w-full rounded-lg bg-gray-400 text-white text-2xl px-4 py-3 text-center mt-7 mb-4">
        <h1> User: {id}</h1>
      </div>
    </>
  );
}
