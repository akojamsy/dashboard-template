import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#B3398B",
              colorPrimaryHover: "#b3398b",
            },
          },
          token: {
            borderRadius: "2px",
            colorPrimary: "#b3398b",
          },
        }}  
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

