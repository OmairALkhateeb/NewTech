import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(({locale}) => {
  return {
    locale: locale ?? 'en',
    messages: require(`../messages/${locale ?? 'en'}.json`)
  };
});
