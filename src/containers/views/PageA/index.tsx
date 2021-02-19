import React from "react";
import { Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ShowCount from "@components/ShowCount";
import CountOperation from "@components/CountOperation";
import { getArticleList } from "@services/api";

const PageA = ({ history }: RouteComponentProps) => {
  const getList = async () => {
    try {
      const res = await getArticleList();
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div>PageA</div>
      <Button type="primary" onClick={() => history.push("/page-b")}>
        Go To B
      </Button>
      <hr />
      <ShowCount />
      <CountOperation />
      <hr />
      <div>
        <Button onClick={getList}>获取文章列表</Button>
      </div>
    </div>
  );
};

export default withRouter(PageA);
