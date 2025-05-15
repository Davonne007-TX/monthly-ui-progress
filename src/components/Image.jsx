export default function Image({ image, alt }) {
  return <img src={image} className="max-w-2xl w-full p-2 mx-auto" alt={alt} />;
}
