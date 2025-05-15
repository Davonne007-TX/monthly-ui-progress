export default function KeepGoing({ backgroundColor, motivationTxt }) {
  return (
    <section
      className={`${backgroundColor} font-press flex justify-center items-center w-full py-4 mx-4`}
    >
      <h1 className="text-3xl md:text-6xl font-press text-center text-black">
        {motivationTxt}
      </h1>
    </section>
  );
}
