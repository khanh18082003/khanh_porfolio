interface HeroImageProps {
  imageSrc: string;
  name: string;
}

function HeroImage({ imageSrc, name }: HeroImageProps) {
  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm">
      <div className="relative">
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-slate-200/50 blur-sm dark:from-blue-400/10 dark:to-slate-700/30" />
        <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/80 shadow-2xl dark:border-slate-700/60">
          <img
            alt={`Profile of ${name}`}
            className="h-full w-full object-cover"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
