import Image from "../Image";

export default function July() {
  const projects = [
    { image: "/images/goBig.png", id: 1 },
    { image: "/images/developerCard.png", id: 2 },
    { image: "/images/calmPaws.png", id: 2 },
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
