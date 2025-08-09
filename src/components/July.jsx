import Image from "./Image";

export default function July() {
  const projects = [
    { image: "/images/goBig.png", id: 1 },
    { image: "/images/developerCard.png", id: 2 },
    { image: "/images/calmPaws.png", id: 3 },
    { image: "./images/cheeseThis.png", id: 4 },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
      {projects.map((project) => (
        <Image
          key={project.id}
          image={project.image}
          alt={"Davonnes Coding UI Projects"}
        />
      ))}
    </section>
  );
}

//1 project built in August to make it even ..! Till if there are more Projects
