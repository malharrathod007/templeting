import React, { Component } from "react";
import { Select, Card, Input, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./login.css";
import { connect } from "react-redux";
import authActions from "../../redux/auth/authActions";
const { Option } = Select;

export class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        Firstname: "",
        Lastname: "",
        role: "",
        name: "",
        password: "",
        Cpassword: ""
      },
      isError: false,
      submitted: false,
      errorMsg: null,
      loading: false,
      iconLoading: false
    };
  }

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ submitted: true, isError: true });
    const user = { ...this.state.user };

    var oldItems = JSON.parse(localStorage.getItem("users")) || [];

    oldItems.push(user);

    localStorage.setItem("users", JSON.stringify(oldItems));

    //   this.props.Register(this.state.user);
    this.setState({
      user: {
        Firstname: "",
        Lastname: "",
        role: "",
        name: "",
        password: "",
        Cpassword: ""
      }
    });
  };

  onBlur = () => {
    console.log("blur");
  };

  onFocus = () => {
    console.log("focus");
  };

  onSearch = val => {
    console.log("search:", val);
  };
  onChange = (e, type) => {
    const user = { ...this.state.user };
    if (type === "role") {
      user[type] = e;
    } else {
      user[type] = e.target.value;
    }
    this.setState({ user });
  };
  render() {
    const {
      Firstname,
      Lastname,
      role,
      name,
      password,
      isError,
      Cpassword,
      submitted,
      errorMsg
    } = this.state.user;
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
    console.log(this.state);
    return (
      <div>
        <Card className="CArdStyle" style={{ width: 500 }}>
          <div className="labelText">
            <h1 style={{ textAlign: "center" }}>Login</h1>
          </div>
          {/* <div className="msg">{errMsgPrint}</div> */}
          <Row>
            <Col className="RowStyle">
              <Input
                placeholder="Enter First Name"
                onChange={e => this.onChange(e, "Firstname")}
                value={Firstname ? Firstname : null}
              />
            </Col>
            <Col className="RowStyle">
              <Input
                placeholder="Enter Last Name"
                onChange={e => this.onChange(e, "Lastname")}
                value={Lastname ? Lastname : null}
              />
            </Col>
            <Col className="RowStyle">
              <Input
                placeholder="Enter Email Id"
                onChange={e => this.onChange(e, "name")}
                value={name ? name : null}
              />
            </Col>
            <Col className="RowStyle">
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Select a Role"
                optionFilterProp="children"
                value={role ? role : null}
                onChange={e => this.onChange(e, "role")}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="HRManager">Hr Manager</Option>
                <Option value="Pmanager">Project Manager</Option>
                <Option value="employee">Employee</Option>
              </Select>{" "}
            </Col>
            <Col className="RowStyle">
              <Input.Password
                placeholder="Enter Password"
                onChange={e => this.onChange(e, "password")}
                value={password ? password : null}
              />
            </Col>
            <Col className="RowStyle">
              <Input.Password
                placeholder="Enter Confirm Password"
                onChange={e => this.onChange(e, "Cpassword")}
                value={Cpassword ? Cpassword : null}
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
                Sign in
              </Button>
            </div>
          </Row>
          <Link to="./login">Login</Link>
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
)(register);
