import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./leave.css";
import {
  Modal,
  Card,
  Row,
  Col,
  Table,
  Button,
  Input,
  Select,
  Popconfirm,

} from "antd";
import { DatePicker } from "antd";
import axios from "axios";
import moment from "moment";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logout: false,
      Leave: {
        status: "",
        Ename: "",
        leavetype: "",
        Email: "",
        date: "",
        from: "",
        To: "",
        leaveReason: "",
    
      },
      Draftdata: [],
      data: [],
      visible: false
    };
    this.handleOk = this.handleOk.bind(this);
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    var oldItems = JSON.parse(localStorage.getItem("usersdata")) || [];
    // this.setState({})
    this.setState({ data: oldItems });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      Leave: {
        Ename: "",
        leavetype: "",
        Email: "",
        date: "",
        Bcc: "",
        cc: "",
        leaveReason: ""
      }
    });
  };

  onBlur = () => {};

  onFocus = () => {};

  onSearch = val => {};
  onChange = (e, type) => {
    const Leave = { ...this.state.Leave };
    if (type === "Email") {
      Leave[type] = e;
    } else if (type === "leavetype") {
      Leave[type] = e;
    } else if (type === "date") {
      const date1 = moment(new Date(e[0]._i)).format("YYYY-MM-DD");
      const date2 = moment(new Date(e[1]._i)).format("YYYY-MM-DD");
      Leave["date"] = date1 + "to" + date2;
      // Leave["from"]=date2
    } else {
      Leave[type] = e.target.value;
    }
    this.setState({ Leave });
  };

  handleOk(e) {
    const Leave = { ...this.state.Leave };
    Leave["status"] = "Save";
    this.setState({ Leave });

    var oldItems = JSON.parse(localStorage.getItem("usersdata")) || [];
    oldItems.push(Leave);
    localStorage.setItem("usersdata", JSON.stringify(oldItems));

    this.setState({
      visible: false,
      Leave: {
        Ename: "",
        leavetype: "",
        Email: "",
        date: "",
        Bcc: "",
        cc: "",
        leaveReason: ""
      }
    });
  }
  async save(e) {
    var oldItems = JSON.parse(localStorage.getItem("authData"));
    var Email1 = oldItems.Email;
    var password1 = oldItems.password;
    const {
      Ename,
      Email,
      leaveReason,
      leavetype,
      date,
      cc,
      Bcc
    } = this.state.Leave;
    const Leave = { ...this.state.Leave };
    Leave["status"] = "send";
    this.setState({ Leave });
    var oldItems = JSON.parse(localStorage.getItem("usersdata")) || [];
    oldItems.push(this.state.Leave);
    localStorage.setItem("usersdata", JSON.stringify(oldItems));
    await axios
      .post("/api/form", {
        Ename,
        Email,
        leaveReason,
        leavetype,
        date,
        Email1,
        password1,
        cc,
        Bcc
      })
      .then(res => {});
    this.setState({
      visible: false,
      Leave: {
        Ename: "",
        leavetype: "",
        Email: "",
        date: "",
        from: "",
        To: "",
        leaveReason: ""
      }
    });
  
  }
  logout = () => {
    localStorage.removeItem("authData");
    this.setState({
      logout: true
    });
  };
  render() {
    const { logout } = this.state;
    const { leaveReason, leavetype, Email, Ename, cc, Bcc } = this.state.Leave;
    const columns = [
      {
        title: "Name",
        dataIndex: "Ename",
        width: 150
      },
      {
        title: "to",
        dataIndex: "cc",
        width: 150
      },
      {
        title: "cc",
        dataIndex: "Bcc",
        width: 150
      },
      {
        title: "Status",
        dataIndex: "status",
        width: 150
      },
      {
        title: "Date",
        dataIndex: "date",
        width: 150
      }
    ];

   
    const text = "Save as Draft?";
    if (logout) {
      return <Redirect to={{ pathname: "/#" }} />;
    }
    return (
      <div>
        <ul className="ulStyle">
          <li className="listyle" style={{ float: "right" }}>
            <a className="anchorStyle">
              <Popconfirm
                placement="topLeft"
                title="are sure to logout"
                onConfirm={this.logout}
                okText="Yes"
                cancelText="No"
              >
                <Button>Logout</Button>
              </Popconfirm>
            </a>
          </li>
        </ul>
        <div style={{ padding: "10px" }}>
          <Row>
            <Col lg={8} mg={8} sm={8}>
              <Card title="Total Leave">
                <h1>Count:12</h1>
              </Card>
            </Col>
            <Col lg={8} mg={8} sm={8}>
              <Card title="Approve Leave">
                <h1>Count:0</h1>
              </Card>
            </Col>
            <Col lg={8} mg={8} sm={8}>
              <Card title="Cancel Leave">
                <h1>Count:8</h1>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ padding: "20px 20px" }}>
          <Button
            style={{ float: "right" }}
            type="primary"
            onClick={this.showModal}
          >
            APPLY
          </Button>
        </div>
        <div style={{ padding: "20px" }}>
          <Table
            columns={columns}
            dataSource={this.state.data}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
        </div>
        <Modal
          title="Leave Application"
          visible={this.state.visible}
          // onOk={this.handleOk}
          width={600}
          footer={null}
          // okText="Send"
          onCancel={this.handleCancel}
        >
          <footer>
            <Popconfirm
              placement="topLeft"
              title={text}
              onConfirm={this.handleOk}
              okText="Yes"
              cancelText="No"
            >
              <Button>Save</Button>
            </Popconfirm>
          </footer>
          <Col>
            <div style={{ width: "100%" }} className="LabelText">
              Employyename
            </div>
            <Input
              style={{ width: "100%", margin: "10px 10px" }}
              placeholder="Enter Last Name"
              onChange={e => this.onChange(e, "Ename")}
              value={Ename ? Ename : null}
            />
          </Col>
          <Col>
            <div style={{ width: "46%" }} className="LabelText">
              To
            </div>
            <Input
              style={{ width: "46%", margin: "10px 10px" }}
              placeholder="cc"
              onChange={e => this.onChange(e, "cc")}
              value={cc ? cc : null}
            />
            <div style={{ width: "46%" }} className="LabelText">
              cc
            </div>
            <Input
              style={{ width: "46%", margin: "10px 10px" }}
              placeholder="Bcc"
              onChange={e => this.onChange(e, "Bcc")}
              value={Bcc ? Bcc : null}
            />
          </Col>
          <Col>
            <div style={{ width: "46%" }} className="LabelText">
              Leave Type
            </div>
            <Select
              showSearch
              style={{ width: "46%", margin: "10px 10px" }}
              placeholder="Select type of Leave"
              optionFilterProp="children"
              value={leavetype ? leavetype : null}
              onChange={e => this.onChange(e, "leavetype")}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Sickleave">Sick Leave</Option>
              <Option value="CasualLeave">Casual Leave</Option>
              <Option value="MaternityLeave">Maternity Leave</Option>
            </Select>{" "}
            <div style={{ width: "46%" }} className="LabelText">
              Role
            </div>
            <Select
              showSearch
              style={{ width: "46%", margin: "10px 10px" }}
              placeholder="Select a manager"
              optionFilterProp="children"
              onChange={e => this.onChange(e, "Email")}
              value={Email ? Email : null}
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
          <Col>
            <div style={{ width: "96%" }} className="LabelText">
              Date of Leave
            </div>
            <RangePicker
              onChange={e => this.onChange(e, "date")}
              // value={[
              //   moment(to?to:null, dateFormat),
              //   moment(from?from:null, dateFormat)
              // ]}
              style={{ width: "96%", margin: "10px 10px" }}
              defaultValue={[
                moment("2019/11/26", dateFormat),
                moment("2019/11/28", dateFormat)
              ]}
              format={dateFormat}
            />
          </Col>
          <div style={{ width: "100%" }} className="LabelText">
            Leave Reason
          </div>
          <Col>
            <TextArea
              value={leaveReason ? leaveReason : null}
              onChange={e => this.onChange(e, "leaveReason")}
              style={{ width: "100%", margin: "10px 10px" }}
              rows={4}
            />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button onClick={this.handleCancel}>Cancel</Button>
            <Button onClick={this.save} type="primary">
              Send
            </Button>
          </Col>
        </Modal>
      </div>
    );
  }
}

export default index;
