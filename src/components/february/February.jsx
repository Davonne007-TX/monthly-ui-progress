import Image from "../Image";

export default function February() {
  const februaryWork = [
    { uiProject: "/images/cosmos.png", id: 1 },
    { uiProject: "/images/foreverDiamonds.png", id: 2 },
    { uiProject: "/images/ironFistKarate.png", id: 3 },
    { uiProject: "/images/ironFistKarate2.png", id: 4 },
    { uiProject: "/images/nextGenAstronaut.png", id: 5 },
    { uiProject: "/images/mesozoicMarvels.png", id: 6 },
    { uiProject: "/images/oneStopShop.png", id: 7 },
    { uiProject: "/images/donuts.png", id: 8 },
  ];

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {februaryWork.map((work) => (
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
