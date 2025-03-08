const user = {
  name: "Даня",
  surname: "Регула",
  userPhoto: "Screenshot 2025-02-08 193228.png",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "3797003423_w640_h640_igrovoj-kompyuter-pk.webp", alt: "Компютер:)" },
    { src: "OIP (2).jpeg", alt: "Собаку" },
    { src: "6e87c072bdacfeb29e40164de81da467.jpg", alt: "Навчити собаку командам " },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  800,
  1000,
  1000,
  1200,
  1200,
  1500,
  1800,
  2200,
  2600,
  3000,
  3550,
  4000,
];

const necessaryExpenses = 500;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "CSS" },
  { month: "Жовтень", skill: "Час за яким я буду працювати" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
