import { control, getDeviceParams } from './hejia';
import events from './events';


const sendDp = (name) => (content) => {
  return control({
    param:[{name, content}]
  }).then((obj) => {
    console.log(`dpCode(${name}) 发送成功: dpValue(${content})`, obj)
    // 移动的dp点更新有延迟
    setTimeout(() => {
      getDeviceParams({paramName: [name]}).then((res) => {
        console.log('dp点更新===========', res)
        events.emit('onDpsChange', res)
      })
    }, 1000)
    return obj;
  })
}

/**
 * 设备控制
 * @param dpValue: stop | up | down
 */
export const sdControl = sendDp('control')

/**
 * 灯光 
 * @param dpValue: 0 | 1
 */
export const sdLight = sendDp('light')