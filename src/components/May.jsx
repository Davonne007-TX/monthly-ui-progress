import Image from "./Image";

export default function February() {
  const mayWork = [
    { uiProject: "/images/backTour.webp", id: 1 },
    { uiProject: "/images/tournament.png", id: 2 },
    { uiProject: "/images/takinItBack.png", id: 3 },
    { uiProject: "/images/summerVibes.png", id: 4 },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {mayWork.map((work) => (
          <Image
            key={work.id}
            image={work.uiProject}
            alt={"Davonnes Coding UI Projects"}
          />
        ))}
      </div>
    </section>
  );
}
