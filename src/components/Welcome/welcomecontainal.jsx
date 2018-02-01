import React, { Component } from "react";
import { actions } from "mirrorx";
const Welcome = state => {
  return (
    <div>
      <button onClick={actions.fsztest.getList}>点击我吧</button>
      <br />
      <div>{`姓名：${state.user.name}`}</div>
      <div>{`年龄：${state.user.age}`}</div>
      <div>{`性别：${state.user.sex}`}</div>
      <button onClick={actions.fsztest.getUserList}>获取线上数据</button>
      {state.list.map(item => {
        return [
          <div>{item.username}</div>,
          <div>{item.age}</div>, 
          <div>{item.sex}</div>
        ];
      })}
    </div>
  );
};
export default Welcome;
