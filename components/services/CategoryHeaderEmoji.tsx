'use client';

import { getCategoryEmoji3d } from '@/lib/emoji-3d';
import { Emoji3D } from '@/components/ui/Emoji3D';

export function CategoryHeaderEmoji({ categoryId }: { categoryId: string }) {
  return (
    <span className="services-cat-emoji services-cat-emoji--header" aria-hidden="true">
      <Emoji3D {...getCategoryEmoji3d(categoryId)} className="category-grid-emoji" />
    </span>
  );
}
