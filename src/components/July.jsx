import Image from "./Image";

export default function July() {
  const projects = [
    { image: "/images/goBig.webp", id: 1 },
    { image: "/images/developerCard.webp", id: 2 },
    { image: "/images/calmPaws.webp", id: 3 },
    { image: "./images/cheeseThis.webp", id: 4 },
  ];
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {projects.map((work) => (
          <Image
            key={work.id}
            image={work.image}
            alt={"Davonnes Coding UI Projects"}
          />
        ))}
      </div>
    </section>
  );
}
