import { getFile } from "@utils/library-client";
import React, { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const file = await getFile("test_project");
    setData(file);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
