import React from "react";
import { Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";

const PageA = ({ history }: RouteComponentProps) => {
  return (
    <div>
      <div>PageA</div>
      <Button type="primary" onClick={() => history.push("/page-b")}>
        Go To B
      </Button>
    </div>
  );
};

export default withRouter(PageA);
