import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@hejia';
import { getDeviceId, getDeviceInfo, getToken } from './util/hejia';
import { CustomAxios } from './server/api';


Hejia.ready(() => {
  getToken().then(token => {
    CustomAxios.getInstance(token)
    return getDeviceInfo()
  }).then((res) => {
    console.log('rererere', res)
    ReactDOM.render(
      <React.StrictMode>
        <App deviceId={(res as any).device.id} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
});

{
  /* <React.StrictMode>
    <BrowserRouter>
      <Route path="/health">
        <div>health</div>
      </Route>
      <Route path="/">
        <App deviceId={111} />
      </Route>
    </BrowserRouter>
  </React.StrictMode>, */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
