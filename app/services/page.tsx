import { ServicesScreen } from '@/components/services/ServicesScreen';

export const metadata = {
  title: 'Services — VSolveHub',
  description: 'Browse 850+ doorstep services across construction, technicians, beauty, events, rental, vehicles and stay.',
};

export default function ServicesPage() {
  return (
    <div className="page-services-hub">
      <ServicesScreen />
    </div>
  );
}
