import Image from "./Image";

export default function April() {
  const aprilWork = [
    { uiProject: "/images/theFunkyTaco.webp", id: 1 },
    { uiProject: "/images/springCamp.webp", id: 2 },
    { uiProject: "/images/stayAlert.webp", id: 3 },
    { uiProject: "/images/habitQuest.webp", id: 4 },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {aprilWork.map((work) => (
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
