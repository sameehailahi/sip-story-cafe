import { useState } from "react";

// Shows the image, or a soft warm tile if the image cannot load.
export default function Img({ src, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">☕</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}