import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

import styles from "./index.scss";

import ViewTest from "./containers/views/ViewsTest/index.tsx";
import SharedTest from "./containers/shared/SharedTest/index.tsx";

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
    </div>,
    document.querySelector("#app")
  );
};

render();
