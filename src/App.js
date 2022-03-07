import logo from "./logo.svg";
import "./App.css";
import style from "./style.less";

function App() {
  return (
    <div className={style.home_container}>
      <div className={style.home_body}>晾衣架</div>
      <div className={style.home_footer}>按钮</div>
    </div>
  );
}

export default App;
