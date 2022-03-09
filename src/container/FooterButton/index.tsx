import CircleButton from '../../component/CircleButton/index';
import style from './style.module.less';
import { sdControl } from '../../util/dp';
import { useContext, useEffect, useState } from 'react';
import { DpsContext } from '../../App';
import cn from 'classnames';

enum CONTROL {
  STOP = 'stop',
  UP = 'up',
  DOWN = 'down',
}

const FooterButton = () => {
  const { dps, dispatch } = useContext(DpsContext);
  const [status, setStatus] = useState<CONTROL>(dps.control || CONTROL.STOP);
  const sdControlFn = (content) => {
    if (status === content) return;
    sdControl(content).then(() => {
      setStatus(content);
    });
  };

  const btns = [
    {
      name: '下降',
      key: CONTROL.DOWN,
      iconName: 'down_icon',
    },
    {
      name: '暂停',
      key: CONTROL.STOP,
      iconName: 'pause_icon',
    },
    {
      name: '上升',
      key: CONTROL.UP,
      iconName: 'up_icon',
    },
  ];

  useEffect(() => {
    setStatus(dps.control);
  }, [dps.control]);

  return (
    <div className={style.home_footer}>
      {btns.map((item) => (
        <CircleButton
          key={item.key}
          icon={
            <span
              className={cn([style[item.iconName], status === item.key && style.active])}
              onClick={() => {
                sdControlFn(item.key);
              }}
            ></span>
          }
        >
          {item.name}
        </CircleButton>
      ))}
    </div>
  );
};

export default FooterButton;
