import { useAppDispatch } from '../store/hooks';
import { oauthApi } from '../api/OauthApi';
import { setServiceId } from '../store/features/oauthSlice';
import { Paths } from '../utils/routeConstants';

export const useOauth = () => {
  const dispatch = useAppDispatch();
  const redirectUri = process.env.NODE_ENV === 'development'
    ? Paths.REDIRECT_URI_DEV
    : Paths.REDIRECT_URI_PROD;

  const getServiceId = async () => {
    try {
      const response = await oauthApi.getServiceId();
      const data = await response.json();
      dispatch(setServiceId(data.service_id));
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithYandexId = async (code: string) => {
    try {
      const response = await oauthApi.loginWithYandexId({ code, redirect_uri: redirectUri });
      if (response.ok) {
        localStorage.setItem('isLogged', 'true');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOauthCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  };

  return { loginWithYandexId, getServiceId, getOauthCode };
};