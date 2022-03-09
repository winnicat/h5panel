import React, { useEffect, useState } from 'react';
import style from './style.module.less';
import { sdLight } from '../../util/dp';

function LightButton({ value }: { value: boolean }) {
  const [light, setLight] = useState(value);

  const sendLightFn = () => {
    sdLight(light ? '0' : '1')
      .then(() => {
        setLight(!light);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLight(value);
  }, [value]);

  return (
    <div className={style.light_button} onClick={sendLightFn}>
      <i className={style.light_icon} />
      <span>{light ? '关灯' : '照明'}</span>
    </div>
  );
}

export default LightButton;
