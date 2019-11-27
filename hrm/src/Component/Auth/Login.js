import React, { Component } from "react";
import { Card, Input, Row, Col, Button } from "antd";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authActions from "../../redux/auth/authActions";
import "./login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        password: ""
      },
      isError: false,
      redirectToHome: false,
      submitted: false,
      errorMsg: null,
      loading: false,
      iconLoading: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    let update = {};
    switch (nextProps.loginAction.type) {
      case "GET_AUTHENTICATION_SUCCESS":
        localStorage.setItem(
          "authData",
          JSON.stringify({
            Email: nextProps.loginAction.data.name,
            password: nextProps.loginAction.data.password
          })
        );
        prevState.redirectToHome = true;
        update.loading = false;
        update.iconLoading = false;
        alert(nextProps.loginAction.message);
        // update.username= null;
        // update.password= null;
        // update.submitted= false;
        // update.animate=false;
        return prevState.mounted ? update : null;
      case "GET_AUTHENTICATION_FAIL":
        update.isError = true;
        update.loading = false;
        update.errorMsg = nextProps.loginAction.message;
        return prevState.mounted ? update : null;
      default:
        return null;
    }
  }

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ submitted: true, isError: true });
    const { name, password } = this.state.user;

    if (!(name && password)) {
      return;
    } else {
      this.props.getAuthAction(name, password);
      this.setState({ iconLoading: true });
    }
  };
  onChange = (e, type) => {
    const user = { ...this.state.user };
    user[type] = e.target.value;
    this.setState({ user });
  };
  render() {
    const { name, password, isError, submitted, errorMsg } = this.state.user;
    const { redirectToHome } = this.state;
    if (redirectToHome) {
      return <Redirect to={{ pathname: "/HRM" }} />;
    }
    let errMsgPrint = "Login to your account";
    if (submitted) {
      if (isError) {
        if (!name && !password) {
          return (errMsgPrint = "Please enter name and password");
        } else if (!name && password) {
          return (errMsgPrint = "Please enter name");
        } else if (!password && name) {
          return (errMsgPrint = "Please enter password");
        } else {
          return (errMsgPrint = "Login to your account");
        }
      } else {
        errMsgPrint = errorMsg;
      }
    }
    return (
      <div>
        <Card className="CArdStyle" style={{ width: 500 }}>
          <div className="labelText">
            <h1 style={{ textAlign: "center" }}>Login</h1>
          </div>
          <div className="msg">{errMsgPrint}</div>
          <Row>
            <Col className="RowStyle">
              <Input
                placeholder="Enter Email Id"
                onChange={e => this.onChange(e, "name")}
                value={name ? name : null}
              />
            </Col>
            <Col className="RowStyle">
              <Input.Password
                placeholder="Enter Password"
                onChange={e => this.onChange(e, "password")}
                value={password ? password : null}
              />
            </Col>
          </Row>
          <Row style={{ float: "right" }}>
            <div style={{ padding: "20px" }}>
              <Button
                type="primary"
                icon="poweroff"
                loading={this.state.iconLoading}
                onClick={this.enterIconLoading}
              >
                Log in
              </Button>
            </div>
          </Row>
          <Link to="./Register">Register</Link>
        </Card>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.Auth
  }),
  { ...authActions }
)(Login);
