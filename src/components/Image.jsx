export default function Image({ image, alt }) {
  return (
    <img
      src={image}
      className="max-w-3xl p-1 w-full mx-auto"
      alt={alt}
      loading="lazy"
    />
  );
}
