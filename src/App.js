import "./App.css";
import style from "./style.module.less";
import CircleButton from "./component/CircleButton/index.tsx";

function App() {
  return (
    <div className={style.home_container}>
      <div className={style.tip}>上升中...</div>
      <div className={style.home_body}>
        <div className={style.show_container}>
          <img
            src={require("./asset/liaoyijia_down.png")}
            className={style.liaoyijia}
          />
          <img src={require("./asset/light.png")} className={style.light} />
        </div>
      </div>
      <div className={style.light_button}>
        <i className={style.light_icon}></i>
        <span>照明</span>
      </div>
      <div className={style.home_footer}>
        <CircleButton icon={<span className={style.down_icon}></span>}>
          下降
        </CircleButton>
        <CircleButton icon={<span className={style.pause_icon}></span>}>
          暂停
        </CircleButton>
        <CircleButton icon={<span className={style.up_icon}></span>}>
          上升
        </CircleButton>
      </div>
    </div>
  );
}

export default App;
