import { motion } from "motion/react";

export default function KeepGoing({
  backgroundColor,
  // href,
  // ourLink,
  motivationTxt,
}) {
  return (
    <section
      className={`${backgroundColor} flex flex-col gap-2 justify-center items-center w-full py-4 mx-4 animate-fadeIn`}
    >
      <h2 className="text-3xl md:text-6xl font-right text-center text-black">
        {motivationTxt}
      </h2>

      <motion.a
        href="https://lets-code-it.vercel.app/"
        className="font-mono text-lg text-center md:text-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        For more information about me, check out my portfolio!
      </motion.a>
    </section>
  );
}
