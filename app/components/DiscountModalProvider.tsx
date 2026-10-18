'use client';

import { useDiscountConfig } from '@/app/hooks/useDiscountConfig';
import HotDealModal from '@/app/components/HotDealModal';

export function DiscountModalProvider() {
  const { config, isLoading } = useDiscountConfig();

  if (isLoading) {
    return null;
  }

  return (
    <HotDealModal
      enabled={config.enabled}
      title="Fall Special: 10% Off"
      description="Book your coastal escape now and save 10% on your stay at Casa Del Mare. Limited time offer!"
      promoCode={config.code}
    />
  );
}
