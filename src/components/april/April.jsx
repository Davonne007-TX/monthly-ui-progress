import Image from "../Image";
import KeepGoing from "../KeepGoing";

export default function April() {
  const aprilWork = [
    { uiProject: "/images/theFunkyTaco.png", id: 1 },
    { uiProject: "/images/springCamp.png", id: 2 },
    { uiProject: "/images/stayAlert.png", id: 3 },
    { uiProject: "/images/habitQuest.png", id: 4 },
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
      <KeepGoing
        motivationTxt="CREATING"
        backgroundColor="bg-linear-65 from-white to-green-600"
      />
    </section>
  );
}
