import { formatDpsData } from "./common";
import '@hejia';

const handleErrorFn = (rejFn, resFn?: (value?: any) => any, fnName?: string) => (msg, obj) => {
  console.log(`hejia error [${fnName}]: `, msg);
  if (fnName === 'getToken') {
    customBridge('getMetaData').then((data: {
      uid: string,
      token: string,
      apiKey: string
    }) => {
      console.log('---- getMetaData', data)
      const { token } = data
      resFn(token)
    }).catch(rejFn)
  } else {
    rejFn(obj)
  }
}

const customBridge = (name, params?: any) => {
  return new Promise((resolve, reject) => {
    const wvb = global.WebViewJavascriptBridge
    if (!wvb) reject(new Error('不支持WebViewJavascriptBridge'))
    global.WebViewJavascriptBridge.callHandler(name, params, (response) => {
      let res;
      try {
        res = JSON.parse(response);
      } catch (e) {
        res = response;
      }
      resolve(res);
    });
  })
}


// 获取设备基础信息
export const getDeviceInfo = (opts?: any) => {
  return new Promise((res, rej) => {
    Hejia.getDeviceInfo(opts || {}, res, handleErrorFn(rej))
  })
}

/**
 * 获取设备当前参数
 * @param opts : {deviceId: string, paramName: Array}
 * @returns 
 */
export const getDeviceParams = (opts?: {
  deviceId?: string;
  paramName: Array<string>
}) => {
  return new Promise((res, rej) => {
    Hejia.getCurrentParam(opts || {}, (data) => {
      res(formatDpsData(data))
    }, handleErrorFn(rej));
  })
}

/**
 * 发送dp
 * @param parameters: {param: Array<{name: string, content: number | string}>}
 * @returns 
 */
export const control = (parameters) => {
  return new Promise((res, rej) => {
    Hejia.setControlParam({ parameters }, res, handleErrorFn(rej));
  })
}

/**
 * 获取token
 * @returns 
 */
export const getToken = () => {
  return new Promise((res: (token: string) => void, rej) => {
    Hejia.ready(() => {
      Hejia.getToken(res, handleErrorFn(rej, res, 'getToken'));
    })
  })
}

/**
 * 无效！用getDeviceInfo代替！ 获取设备id
 * @returns 
 */
export const getDeviceId = () => {
  return new Promise((res, rej) => {
    Hejia.getDeviceId(res, rej);
  })
}