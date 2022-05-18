import './App.css';
import style from './style.module.less';

import React, { useEffect, useState, useReducer, createContext } from 'react';
import { getDeviceInfo, getDeviceParams, getToken } from './util/hejia';
import { Mask } from 'antd-mobile';
import FooterButton from './container/FooterButton/index';
import LightButton from './container/LightButton/index';
import events from './util/events';
import {getCountryList} from './server/api';

const initialState = {
  control: 'stop',
  clothes_positiion: 'center',
  light: '0',
  fault: '0',
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.text };
    default:
      throw new Error();
  }
}

export const DpsContext: React.Context<{ dps: any; dispatch: React.Dispatch<any> }> = createContext(
  {
    dps: undefined,
    dispatch: () => {},
  }
);

function App({ deviceId }) {
  const [dps, dispatch] = useReducer(reducer, initialState);
  const [connected, setConnected] = useState(false);

  // 更新设备数据
  const updateDeviceData = () => {
    setTimeout(() => {
      getToken().then(token => console.log('token', token))
    }, 2000)
    getDeviceInfo().then(({ device, location }) => {
      setConnected(device.connected);
    });
    getDeviceParams().then((dps) => {
      console.log(dps);
      dispatch({
        type: 'update',
        text: dps,
      });
    });
  };

  useEffect(() => {
    getCountryList().then(res => console.log(res.data));
    updateDeviceData();
    // 数据更新，不可靠，所以加了轮询做数据更新上的双重保障
    Hejia.onMessage((obj) => {
      if (obj.deviceId === deviceId) {
        updateDeviceData();
      }
    });
    const t = setInterval(() => {
      updateDeviceData();
    }, 5000);

    events.on('onDpsChange', (res) => {
      console.log('=========onDpsChange=========');
      dispatch({
        type: 'update',
        text: res,
      });
    });
    return () => {
      t && clearInterval(t);
      events.off('onDpsChange');
    };
  }, []);

  return (
    <DpsContext.Provider value={{ dps, dispatch }}>
      <div className={style.home_container}>
        {dps.control === 'up' && <div className={style.tip}>上升中...</div>}
        {dps.control === 'down' && <div className={style.tip}>下降中...</div>}
        <div className={style.home_body}>
          <div className={style.show_container}>
            {dps.clothes_position === 'top' ? (
              <img
                src={require('./asset/liangyijia_up.png')}
                className={style.liaoyijia}
                alt="晾衣架"
              />
            ) : (
              <img
                src={require('./asset/liaoyijia_down.png')}
                className={style.liaoyijia}
                alt="晾衣架"
              />
            )}
            {dps.light === '1' && (
              <img src={require('./asset/light.png')} className={style.light} alt="光源" />
            )}
          </div>
        </div>
        <LightButton value={dps.light === '1'} />
        <FooterButton />
        <Mask visible={!connected}>
          <div className={style.overlayContent}>设备离线</div>
        </Mask>
      </div>
    </DpsContext.Provider>
  );
}

export default App;
