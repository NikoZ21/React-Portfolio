import { useEffect, useState } from "react";

export default function Effect() {
  const [resourceType, setResourceType] = useState("");
  const [counter, setCounter] = useState(0);

  console.log("render");

  useEffect(() => {
    console.log("Changed Resource Type");

    return () => {
      console.log("Cleaning Up ");
    };
  }, [resourceType]);

  return (
    <>
      <h1 style={{ fontSize: 30, fontWeight: "bold" }}>{resourceType}</h1>
      <br />
      <div>
        <button
          style={{ padding: 5, border: "2px solid", margin: 2 }}
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          style={{ padding: 5, border: "2px solid", margin: 2 }}
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button
          style={{ padding: 5, border: "2px solid", margin: 2 }}
          onClick={() => setResourceType("comments")}
        >
          Commnets
        </button>
        <br />
        <br />
        <br />
        <button
          style={{ padding: 5, border: "2px solid", margin: 2 }}
          onClick={(prev) => {
            const newV = prev + 1;
            console.log("New Value: ", newV);
            setCounter(newV);
          }}
        >
          Counter++
        </button>
      </div>
    </>
  );
}
