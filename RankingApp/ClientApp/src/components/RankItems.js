import { useState, useEffect } from "react";

export default function RankItems() {
  const [items, setItems] = useState([]);
  const dataType = 1;

  useEffect(() => {
    fetch(`item/${dataType}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <main>
      {items != null ? (
        items.map((items) => <h3>{items.title}</h3>)
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
