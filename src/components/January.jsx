import Image from "./Image";

export default function January() {
  const myUIProjectsJanuary = [
    { UIproject: "/images/saveHumanity.webp", id: 1 },
    { UIproject: "/images/wannaCode.webp", id: 2 },
    { UIproject: "/images/flyWithUs.webp", id: 3 },
    { UIproject: "/images/nsso.webp", id: 4 },
    { UIproject: "/images/systematic.webp", id: 5 },
    { UIproject: "/images/letsRide.webp", id: 6 },
    { UIproject: "/images/arcade.webp", id: 7 },
    { UIproject: "/images/wizardChessUI.webp", id: 8 },
    { UIproject: "/images/spidermanFanClub.webp", id: 9 },
    { UIproject: "/images/aimHigh.webp", id: 10 },
  ];

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {myUIProjectsJanuary.map((project) => (
          <Image
            key={project.id}
            image={project.UIproject}
            alt={"Davonnes Coding UI Projects"}
          />
        ))}
      </div>
    </section>
  );
}
