interface HeroImageProps {
  imageSrc: string;
  name: string;
}

function HeroImage({ imageSrc, name }: HeroImageProps) {
  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md">
      <div className="aspect-square overflow-hidden rounded-full border-8 border-white shadow-xl dark:border-slate-800">
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
