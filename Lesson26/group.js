const groups = {
  group1: [],
  group2: [],
};

const names = [
  "Rauf",
  "Subhan",
  "Royal",
  "Pakize",
  "Leyla",
  "Brilyant",
  "Haci",
  "Faiq",
  "Elvin",
  "Bayram",
  "Semender",
  "Namiq",
  "Emil",
  "Dima",
  "Fidan",
  "Ayla",
  "Ibrahim",
  "Elnur",
  "Nazenin",
  "Aqshin",
  //   "Nigar",
];

const findEligibleGroup = () => {
  return groups.group1.length > groups.group2.length
    ? groups.group2
    : groups.group1;
};

const renderGroups = () => {
  for (let i = 1; i <= 2; i++) {
    const groupSelector = `group${i}`;
    const groupContainer = document.getElementById(groupSelector);
    const groupMembers = groups[groupSelector];

    groupContainer.innerHTML = groupMembers
      .map((name) => `<li>${name}</li>`)
      .join("");
  }
};

const setMember = () => {
  if (names.length === 0) return;
  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names.splice(randomIndex, 1)[0];

  const group = findEligibleGroup();

  group.push(name);

  renderGroups();
};

document.querySelector("button").addEventListener("click", () => {
  setMember();
});
