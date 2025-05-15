import Image from "../Image";
import KeepGoing from "../KeepGoing";

export default function January() {
  const myUIProjectsJanuary = [
    { UIproject: "/images/saveHumanity.png", id: 1 },
    { UIproject: "/images/wannaCode.png", id: 2 },
    { UIproject: "/images/flyWithUs.png", id: 3 },
    { UIproject: "/images/nsso.png", id: 4 },
    { UIproject: "/images/systematic.png", id: 5 },
    { UIproject: "/images/letsRide.png", id: 6 },
    { UIproject: "/images/arcade.png", id: 7 },
    { UIproject: "/images/wizardChessUI.png", id: 8 },
    { UIproject: "/images/spidermanFanClub.png", id: 9 },
    { UIproject: "/images/aimHigh.png", id: 10 },
  ];

  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {myUIProjectsJanuary.map((project) => (
          <Image
            key={project.id}
            image={project.UIproject}
            alt={"Davonnes Coding UI Projects"}
          />
        ))}
      </div>
      <KeepGoing
        motivationTxt="Building"
        backgroundColor="bg-linear-65 from-white to-pink-400"
      />
    </section>
  );
}
