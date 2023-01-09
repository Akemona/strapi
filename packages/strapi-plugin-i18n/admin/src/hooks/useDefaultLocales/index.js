import { useQuery } from 'react-query';
import { request } from '@akemona-org/strapi-helper-plugin';

const fetchDefaultLocalesList = async () => {
  try {
    const data = await request('/i18n/iso-locales', {
      method: 'GET',
    });

    return data;
  } catch (e) {
    strapi.notification.toggle({
      type: 'warning',
      message: { id: 'notification.error' },
    });

    return [];
  }
};

const useDefaultLocales = () => {
  const { isLoading, data } = useQuery('default-locales', fetchDefaultLocalesList);

  return { defaultLocales: data, isLoading };
};

export default useDefaultLocales;
