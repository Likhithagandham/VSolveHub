import { ICONS } from '@/lib/data';

export function Icon({ name, className }: { name: string; className?: string }) {
  const svg = ICONS[name] || '';
  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
