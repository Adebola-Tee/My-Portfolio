import React from "react";
import Heading from "@/components/Heading";
import Card from "./Card";
const data = [
  {
    id: 1,
    title: "Socialsphere app",
    desc: "Este es un app por Este es un app por Este es un app por ",
    img: "",
    tags: ["React", "tailwindcss", "materialui", "css"],
  },
  {
    id: 2,
    title: "Socialsphere app",
    desc: "Este es un app por Este es un app por Este es un app por ",
    img: "",
    tags: ["React", "tailwindcss", "materialui", "css"],
  },
  {
    id: 3,
    title: "Socialsphere app",
    desc: "Este es un app por Este es un app por Este es un app por ",
    img: "",
    tags: ["React", "tailwindcss", "materialui", "css"],
  },
  {
    id: 4,
    title: "Socialsphere app",
    desc: "Este es un app por Este es un app por Este es un app por ",
    img: "",
    tags: ["React", "tailwindcss", "materialui", "css"],
  },
  {
    id: 5,
    title: "Socialsphere app",
    desc: "Este es un app por Este es un app por Este es un app por ",
    img: "",
    tags: ["React", "tailwindcss", "materialui", "css"],
  },
  {
    id: 6,
    title: "Socialsphere app",
    desc: "Este es un app por Este es un app por Este es un app por ",
    img: "",
    tags: ["React", "tailwindcss", "materialui", "css"],
  },
];

const Projects = () => {
  return (
    <div className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid md:grid-cols-s container lg:grid-cols-3 gap-10 xl:gap-0 xl:gap-y-10 place-items-center">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
