import React, { useState, useEffect } from "react";

async function fetchCats() {
  const responseCatsImg = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const dataCatsImg = await responseCatsImg.json();

  const responseCatsName = await fetch(
    "https://tools.estevecastells.com/api/cats/v1?limit=10"
  );
  const dataCatsName = await responseCatsName.json();
  let cats = [];

  for (let i = 0; i < dataCatsImg.length; i++) {
    let cat = {
      id: dataCatsImg[i].id,
      name: dataCatsName[i],
      url: dataCatsImg[i].url,
    };
    cats.push(cat);
  }
  return cats;
}

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats().then((result) => {
      console.log("Requisição realizada");
      console.log(result);
      setCats(result);
    });
  }, []);

  return (
    <div className="app" style={{display: "flex", flexDirection: "column"}}>
      <h2>Cats</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {cats.map((cat) => (
          <div
            style={{ display: "flex", flexDirection: "column" }}
            key={cat.id}
          >
            <img
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
              src={cat.url}
              alt=""
            />
            <h2>{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
