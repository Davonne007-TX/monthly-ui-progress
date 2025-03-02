import Image from "../Image";

export default function January() {
  const myUIProjectsJanuary = [
    { UIproject: "/images/january/saveHumanity.png", id: 1 },
    { UIproject: "/images/january/wannaCode.png", id: 2 },
    { UIproject: "/images/january/flyWithUs.png", id: 3 },
    { UIproject: "/images/january/nsso.png", id: 4 },
    { UIproject: "/images/january/systematic.png", id: 5 },
    { UIproject: "/images/january/letsRide.png", id: 6 },
    { UIproject: "/images/january/arcade.png", id: 7 },
    { UIproject: "/images/january/wizardChessUI.png", id: 8 },
    { UIproject: "/images/january/spidermanFanClub.png", id: 9 },
    { UIproject: "/images/january/aimHigh.png", id: 10 },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 ml-10 w-full">
      {myUIProjectsJanuary.map((project) => (
        <Image key={project.id} image={project.UIproject} />
      ))}
    </section>
  );
}
