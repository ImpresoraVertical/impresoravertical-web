/**
 * MediaPlaceholder — marco vacío con instrucciones para que Marc sepa qué
 * tipo de foto/vídeo/infografía colocar.
 *
 * Una vez Marc añada la imagen real, se sustituye este componente por un
 * <Image> o <video> con el path correspondiente.
 */

type MediaType = "image" | "video" | "infographic";

interface MediaPlaceholderProps {
  type?: MediaType;
  title: string;
  description: string;
  dimensions?: string;
  filename?: string;
  aspect?: string;
  variant?: "light" | "dark";
  className?: string;
}

const ICONS: Record<MediaType, React.ReactNode> = {
  image: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
      <rect x="6" y="10" width="52" height="44" rx="2" />
      <circle cx="22" cy="24" r="4" />
      <path d="M58 44 L42 28 L26 44 L18 38 L6 50" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
      <rect x="6" y="14" width="52" height="36" rx="2" />
      <path d="M26 24 L42 32 L26 40 Z" fill="currentColor" />
    </svg>
  ),
  infographic: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
      <rect x="6" y="6" width="52" height="52" rx="2" />
      <path d="M16 44 L16 32 M28 44 L28 22 M40 44 L40 28 M52 44 L52 18" strokeLinecap="round" />
    </svg>
  ),
};

export default function MediaPlaceholder({
  type = "image",
  title,
  description,
  dimensions,
  filename,
  aspect = "aspect-video",
  variant = "light",
  className = "",
}: MediaPlaceholderProps) {
  const isDark = variant === "dark";

  const bg = isDark ? "bg-ink/40" : "bg-ocre-200/15";
  const border = isDark ? "border-ocre-300/40" : "border-ocre-500/40";
  const titleColor = isDark ? "text-bone" : "text-ink";
  const textColor = isDark ? "text-bone/70" : "text-stone";
  const accent = isDark ? "text-ocre-300" : "text-ocre-600";
  const metaBg = isDark ? "bg-ink/60" : "bg-paper";
  const metaBorder = isDark ? "border-bone/15" : "border-stone/20";

  const typeLabel =
    type === "image"
      ? "FOTO"
      : type === "video"
      ? "VÍDEO"
      : "INFOGRAFÍA";

  return (
    <div
      className={`relative ${aspect} ${bg} border-2 border-dashed ${border} flex flex-col items-center justify-center p-6 lg:p-8 text-center ${className}`}
    >
      <div className={`${accent} mb-4`}>{ICONS[type]}</div>

      <div className={`font-mono text-eyebrow uppercase tracking-wider ${accent} mb-2`}>
        {typeLabel} pendiente
      </div>

      <h3 className={`font-display text-h5 uppercase tracking-tight ${titleColor} leading-tight max-w-md`}>
        {title}
      </h3>

      <p className={`font-sans text-body-sm ${textColor} mt-2 max-w-sm leading-relaxed`}>
        {description}
      </p>

      {(dimensions || filename) && (
        <div className={`mt-4 inline-flex flex-wrap gap-3 justify-center text-eyebrow font-mono uppercase tracking-wider`}>
          {dimensions && (
            <span className={`${metaBg} border ${metaBorder} ${textColor} px-3 py-1`}>
              {dimensions}
            </span>
          )}
          {filename && (
            <span className={`${metaBg} border ${metaBorder} ${accent} px-3 py-1`}>
              {filename}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
