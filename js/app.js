const CrearSection = (id, bgColor) => {
  const section = document.querySelector("#section");
  const clon = section.cloneNode(true);
  const bg = document.createElement("div");
  bg.style.backgroundColor = bgColor;
  bg.appendChild(clon);

  section.id = id;
  document.body.querySelector(".section-container").appendChild(bg);
};

CrearSection("services", "#dee8f1");
CrearSection("pricing", "#f6f6f6");

const CrearCard = (bgColor) => {
  const card = document.querySelector(".card");
  const clon = card.cloneNode(true);
  clon.style.backgroundColor = bgColor;
  document.querySelector("#down").appendChild(clon);
};

CrearCard("#a4b9d4");
CrearCard("#d8e2ee");
CrearCard("#b8c8df");
