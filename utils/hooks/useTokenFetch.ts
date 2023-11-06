import { useCookies } from 'react-cookie';

export function useTokenFetch(func: any) {
  const [cookies, setCookie, removeCookie] = useCookies();

  async function actionFunction(...args: any) {
    console.log(args);
    func(...args)
      .unwrap()
      .then((res: any) => {
        if (res.code === 202) {
          setCookie('copyToken', res.token!, { path: '/' });
          const par = { ...args[0], token: res.token! };
          func(par);
        }
        return res;
      });
  }
  return actionFunction;
}
