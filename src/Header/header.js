import React, { Component } from "react";
import { Tabs, Row, Col } from "antd";
import { HeaderWrapper } from "./headerWrapper.styale";
import { ZsInput,ZsSelect } from "../component/zsForm/index";

const { TabPane } = Tabs;
export class demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
     
    
    };
    this.handleClick = this.handleClick.bind(this);
  }
  static getDerivedStateFromProps(nextProps) {
    console.log(nextProps);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  callback = (key) => {
    console.log(key);
  };
  componentDidMount() {
    console.log("Component did mount!");
    // this.getList();
  }

  render() {
    return (
      <HeaderWrapper>
<Row style={{padding:"10px"}}>          <Col>
            <ZsInput
              name="userFname"
              type="text"
              maxLength="30"
              // value={firstName ? firstName : ""}
              placeholder="First Name"
              autoComplete="off"
              // onChange={e =>
              //   this.setFormData(e.target.value, "firstName")
              // }
            />
          </Col>
       
        </Row>
        <Row style={{padding:"10px"}}>
        <Col>
          <ZsSelect
                  tabIndex="0"
                  // showTooltip={true}
                  placeholder={"Select Source Key"}
                  // onChange={e => this.setFormData(e, "sourceKey", i)}
                  // value={q.sourceKey ? q.sourceKey : ""}
                  data={[
                    { name: "Admin", value: "admin" },
                    { name: "Users", value: "user" }
                  ]}                />
          </Col>
        </Row>
        <Row style={{padding:"10px"}}>
          <Col>
          <ZsCheck
                                  value={p.token}
                                  checked={
                                    selectedPanel.indexOf(p.token) !== -1
                                  }
                                  onChange={() => this.selectPanels(p.token)}
                                />
          </Col>
        </Row>
      </HeaderWrapper>
    );
  }
  componentWillUnmount() {
    // this.setState({mounted:false})
    console.log("component will unmount");
  }
}

export default demo;
