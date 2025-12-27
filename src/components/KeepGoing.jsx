export default function KeepGoing({ backgroundColor, motivationTxt }) {
  return (
    <section
      className={`${backgroundColor} flex flex-col gap-2 justify-center items-center w-full py-4 mx-4 animate-fadeIn`}
    >
      <h2 className="text-3xl md:text-6xl font-right text-center text-black">
        {motivationTxt}
      </h2>
      <a
        href="https://davonnessite.vercel.app/"
        className="font-mono hover:scale-105 text-lg text-center md:text-xl"
      >
        Wanna learn more? Check out my portfolio
      </a>
    </section>
  );
}
