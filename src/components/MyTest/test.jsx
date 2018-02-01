import React, { Component } from "react";
import PropTypes from "prop-types";
import mirror, { actions, connect, render } from "mirrorx";
class MyTest extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("子组件");
    console.log(this.props);
  }

  componentDidMount() {}
  render() {
    let { user } = this.props;
    console.log(user);
    return (
      <div>
        子组件获取值tests
        <div > {user.name} </div>
      </div>
    );
  }
}

MyTest.propTypes = {};

export default connect(state => state.fsztest)(MyTest);
