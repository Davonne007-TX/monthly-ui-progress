import Image from "../Image";

export default function March() {
  const marchWork = [
    { uiProject: "/images/retro.png", id: 1 },
    { uiProject: "/images/thePursuit.png", id: 2 },
    { uiProject: "/images/shamrockTavern.png", id: 3 },
    { uiProject: "/images/rForce.png", id: 4 },
    { uiProject: "/images/ventanasXP.png", id: 5 },
    { uiProject: "/images/eatNow.png", id: 6 },
  ];

  return (
    <section className="mt-10">
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
