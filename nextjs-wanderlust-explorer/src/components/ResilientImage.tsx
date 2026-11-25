"use client";

import Image from "next/image";
import { useState } from "react";

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ResilientImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={!alt}
        className="absolute inset-0 flex items-center justify-center bg-slate-200 text-sm text-slate-600"
      >
        {alt ? "Image unavailable" : null}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}