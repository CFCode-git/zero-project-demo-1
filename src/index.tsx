import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

import styles from "./index.scss";

import ViewTest from "@views/ViewsTest/index";
import SharedTest from "@shared/SharedTest/index";

import App from "@views/App/app";
import { Provider } from "@store/index";

const render = () => {
  ReactDOM.render(
    <div className={styles.test}>
      123
      <Button type="primary">This is a Button from antd</Button>
      <hr />
      <div>
        <ViewTest />
        <SharedTest />
      </div>
      <hr />
      <div>
        <Provider>
          <App />
        </Provider>
      </div>
    </div>,
    document.querySelector("#app")
  );
};

render();
