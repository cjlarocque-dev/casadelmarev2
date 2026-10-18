import { useEffect, useState } from 'react';

export interface DiscountConfig {
  enabled: boolean;
  code: string;
}

export function useDiscountConfig() {
  const [config, setConfig] = useState<DiscountConfig>({
    enabled: true,
    code: '10OFF-Fall2026',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (response.ok) {
          const data = await response.json();
          setConfig(data.discount);
        }
      } catch (error) {
        console.error('Failed to load config:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, isLoading };
}
