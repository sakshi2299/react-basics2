import { useCookies } from 'react-cookie';

export const useCustomCookies = () => {
  const [cookies, setCookie] = useCookies(['user']);

  const setCustomCookie = (name, value) => {
    setCookie(name, value, { path: '/' });
  };

  return { cookies, setCustomCookie };
};
