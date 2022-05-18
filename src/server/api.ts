import axios, { AxiosInstance, AxiosResponse } from 'axios'
import '@hejia'
// 调用涂鸦开放接口
// 3.0接口不通 如果用到了联系@白素

const URL = 'https://openapi.tuyacn.com';

let axiosIns: AxiosInstance

export class CustomAxios {
  _instance: AxiosInstance

  constructor() { }

  static getInstance(token?: string) {
    if (!(CustomAxios as any)._instance && token) {
      (CustomAxios as any)._instance = axios.create({
        baseURL: URL,
        timeout: 3000,
        headers: { 'access_token': token, 'x-request': 'webapp' }
      })
      axiosIns = (CustomAxios as any)._instance
      return (CustomAxios as any)._instance
    }
  }
}

const TySdk: Record<string, any> = {}

export const getCountryList = () => {
  const url = '/v1.0/iot-03/cities'
  return axiosIns.get<any, AxiosResponse<string[], any[]>, any>(url)
}

/**
 * 根据经纬度获取当前天气情况
 * @param lat 纬度，取值范围为 -90 到 90
 * @param lon 经度，取值范围为 -180 到 180
 * @returns 
 */
export const getCurrentWeather = (lat: string, lon: string) => {
  const url = `/v2.0/iot-03/weather/current`
  return axiosIns.get(url, {
    params: {
      lat, lon
    }
  })
}