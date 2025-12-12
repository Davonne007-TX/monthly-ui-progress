import Image from "./Image";

export default function February() {
  const februaryWork = [
    { uiProject: "/images/cosmos.webp", id: 1 },
    { uiProject: "/images/foreverDiamonds.webp", id: 2 },
    { uiProject: "/images/ironFistKarate.webp", id: 3 },
    { uiProject: "/images/ironFistKarate2.webp", id: 4 },
    { uiProject: "/images/nextGenAstronaut.webp", id: 5 },
    { uiProject: "/images/mesozoicMarvels.webp", id: 6 },
    { uiProject: "/images/oneStopShop.webp", id: 7 },
    { uiProject: "/images/donuts.webp", id: 8 },
  ];

  return (
    <section>
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
