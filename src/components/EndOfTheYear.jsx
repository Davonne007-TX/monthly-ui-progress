import Image from "./Image";

export default function EndOdTheYear() {
  const finalWork = [
    { uiProject: "/images/yourNightmare.webp", id: 1 },
    { uiProject: "/images/superRobo.webp", id: 2 },
    { uiProject: "/images/silkySmooth.webp", id: 3 },
    { uiProject: "/images/skateOff.webp", id: 4 },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {finalWork.map((work) => (
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
