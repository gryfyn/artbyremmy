import Image from "next/image";

const ArtCard = ({ image, alt = "Artwork", date }) => {
  return (
    <div className="w-[290px] h-[450px] overflow-hidden bg-[#3A4D37] rounded-lg shadow-lg text-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
      <Image
        src={`/${image}`} // Updated to point directly to /public/
        alt={alt}
        width={290}
        height={400}
        className="w-full h-[400px] object-cover"
      />
      <div className="p-2 text-white">
        <p className="text-sm font-medium">{alt}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default ArtCard;