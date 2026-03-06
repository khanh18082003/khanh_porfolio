interface HeroImageProps {
  imageSrc: string;
  name: string;
}

function HeroImage({ imageSrc, name }: HeroImageProps) {
  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md">
      <div className="aspect-square overflow-hidden rounded-full border-8 border-emerald-500 shadow-xl dark:border-emerald-300">
        <img
          alt={`Profile of ${name}`}
          className="h-full w-full object-cover"
          src={imageSrc}
        />
      </div>
    </div>
  );
}

export default HeroImage;
