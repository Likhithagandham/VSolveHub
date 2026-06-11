import { notFound } from 'next/navigation';
import { CategoryServicesScreen } from '@/components/services/CategoryServicesScreen';
import { CATEGORIES, getCategory, getServicesByCategory } from '@/lib/data';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.id }));
}

export function generateMetadata({ params }: { params: Promise<{ cat: string }> }) {
  return params.then(({ cat }) => {
    const category = getCategory(cat);
    return { title: category ? `${category.name} — VSolveHub` : 'Services — VSolveHub' };
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const category = getCategory(cat);
  if (!category) notFound();

  const count = getServicesByCategory(cat).length;

  return (
    <div className="page-services-hub">
      <CategoryServicesScreen
        categoryId={cat}
        name={category.name}
        tagline={category.tagline}
        count={count}
      />
    </div>
  );
}
