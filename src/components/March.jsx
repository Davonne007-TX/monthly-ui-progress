import Image from "./Image";

export default function March() {
  const marchWork = [
    { uiProject: "/images/blast2ThePast.webp", id: 1 },
    { uiProject: "/images/thePursuit.webp", id: 2 },
    { uiProject: "/images/shamrockTavern.webp", id: 3 },
    { uiProject: "/images/rForce.webp", id: 4 },
    { uiProject: "/images/ventanasXP.webp", id: 5 },
    { uiProject: "/images/eatNow.webp", id: 6 },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {marchWork.map((work) => (
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
