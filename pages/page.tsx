"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const search = async (q: string) => {
  const response = await axios.get("/api/search", {
    params: { q },
  });
  return response.data.queryOutput;
};

export default function Home() {
  const [queryOutput, setQueryOutput] = useState<any>([]);

  const handleSearch = async (q: string) => {
    const results = await search(q);
    setQueryOutput(results);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {queryOutput.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
