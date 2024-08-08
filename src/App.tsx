import React, { FC } from "react";
import {
  preloadCachingFetch,
  useCachingFetch,
} from "../caching-fetch-library/cachingFetch";
import Person from "./components/Person";
import { validateData } from "./validation";

type Application = FC & {
  preLoadServerData?: () => Promise<void>;
};

// URL will be replaced with env variable later
const API_URL =
  process.env.CLIENT_API_URL ??
  "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123";

const App: Application = () => {
  const { data: rawData, isLoading, error } = useCachingFetch(API_URL);
  if (isLoading) return <div>Loading...</div>;
  if (error || rawData === null) return <div>Error: {error?.message}</div>;

  const data = validateData(rawData);

  return (
    <div>
      <h1>Welcome to the People Directory</h1>
      {data.map((person, index) => (
        <Person key={person.email} index={index} />
      ))}
    </div>
  );
};

App.preLoadServerData = async () => {
  await preloadCachingFetch(
    "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123"
  );
};

export default App;
