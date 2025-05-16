import Image from "../../assets/react-core-concepts.png";
import "./Header.css";

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const array = ["Fundamental", "Important", "Extraordinary"];

export default function Header() {
  const rand = array[randomInt(2)];

  return (
    <header>
      <img src={Image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {rand} React concepts you will need for almost any app your going to
        build!
      </p>
    </header>
  );
}
