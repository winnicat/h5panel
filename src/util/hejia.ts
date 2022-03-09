import { formatDpsData } from "./common";

const handleErrorFn = (fn) => (msg, obj) => {
  console.log("hejia error: ", msg);
  fn(obj)
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
    Hejia.setControlParam({parameters}, res, handleErrorFn(rej));
  })
}

/**
 * 获取token
 * @returns 
 */
export const getToken = () => {
  return new Promise((res, rej) => {
    Hejia.setControlParam(res, rej);
  })
}

/**
 * 获取设备id
 * @returns 
 */
export const getDeviceId = () => {
  return new Promise((res, rej) => {
    Hejia.getDeviceId(res, rej);
  })
}