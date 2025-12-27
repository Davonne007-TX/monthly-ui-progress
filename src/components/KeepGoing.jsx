export default function KeepGoing({ backgroundColor, motivationTxt }) {
  return (
    <section
      className={`${backgroundColor}  flex justify-center items-center w-full py-4 mx-4 animate-fadeIn`}
    >
      <h2 className="text-3xl md:text-6xl font-right text-center text-black">
        {motivationTxt}
      </h2>
      <a href="">My Portfolio</a>
    </section>
  );
}
