'use client';

import { useState } from 'react';

type Emoji3DProps = {
  src: string;
  fallback: string;
  alt?: string;
  className?: string;
};

export function Emoji3D({ src, fallback, alt = '', className }: Emoji3DProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`emoji-3d-fallback${className ? ` ${className}` : ''}`} aria-hidden="true">
        {fallback}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      width={56}
      height={56}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
