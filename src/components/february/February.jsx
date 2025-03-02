import Image from "../Image";

export default function February() {
  const februaryWork = [
    { uiProject: "/images/january/cosmos.png", id: 1 },
    { uiProject: "/images/january/foreverDiamonds.png", id: 2 },
    { uiProject: "/images/january/ironFistKarate.png", id: 3 },
    { uiProject: "/images/january/ironFistKarate2.png", id: 4 },
    { uiProject: "/images/january/nextGenAstronaut.png", id: 5 },
    { uiProject: "/images/january/mesozoicMarvels.png", id: 6 },
    { uiProject: "/images/january/oneStopShop.png", id: 7 },
  ];

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 ml-10 w-full">
      {februaryWork.map((work) => (
        <Image key={work.id} image={work.uiProject} />
      ))}
    </section>
  );
}
