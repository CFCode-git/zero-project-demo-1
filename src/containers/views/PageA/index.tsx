import React from "react";
import { Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ShowCount from "@components/ShowCount";
import CountOperation from "@components/CountOperation";

const PageA = ({ history }: RouteComponentProps) => {
  return (
    <div>
      <div>PageA</div>
      <Button type="primary" onClick={() => history.push("/page-b")}>
        Go To B
      </Button>
      <hr />
      <ShowCount />
      <CountOperation />
    </div>
  );
};

export default withRouter(PageA);
