import Image from "../Image";

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
    <section className="grid grid-cols-1 md:grid-cols-2 ml-10 w-full">
      {myUIProjectsJanuary.map((project) => (
        <Image key={project.id} image={project.UIproject} />
      ))}
    </section>
  );
}
