import HotDealModal from '@/app/components/HotDealModal';

export function HotDealModalServer() {
  const enabled = process.env.NEXT_PUBLIC_DISCOUNT_MODAL_ENABLED === 'true';
  const promoCode = process.env.NEXT_PUBLIC_DISCOUNT_CODE || '10OFF-Fall2026';

  return (
    <HotDealModal
      enabled={enabled}
      title="Fall Special: 10% Off"
      description="Book your coastal escape now and save 10% on your stay at Casa Del Mare. Limited time offer!"
      promoCode={promoCode}
    />
  );
}
