import React, { Component } from "react";
import ZsSelectWrapper from "./zsSelectStyle";
import Icons  from "../../icons/icons";
import  ZsToolTip  from "../../tooltip/zsToolTip";
import up from "./up.svg";
import down from "./down.svg";
class ZsSelect extends Component {
  state = {
    //common
    placeholder: "",
    data: [],
    eid: "zsSelect" + Math.random(),

    //normal
    value: {value:""},
    selectedValue: "",

    //search
    searchVal: "",
    searchMode: false,

    //multiselect
    multipleValues: [],

    //tags
    tags: [],

    //autocomplete
    autoCompleteData: [],

    //dropdown props
    menuOpen: this.props.menuOpen ? this.props.menuOpen : false
  };

  componentDidMount() {
    window.addEventListener("mousedown", e => {
      if (this.state.menuOpen === true) {
        if (
          document.getElementById(
            this.props.id ? this.props.id : this.state.eid
          )
        ) {
          if (
            document
              .getElementById(this.props.id ? this.props.id : this.state.eid)
              .contains(e.target)
          ) {
          } else {
            this.showMenu();
            this.setState({ searchMode: false });
          }
        }
      }
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let update = {};
    if (nextProps.placeholder) {
      update.placeholder = nextProps.placeholder;
    }

    if (nextProps.mode && nextProps.mode !== "") {
      if (nextProps.mode === "autoComplete") {
        if (nextProps.value) {
          let i = nextProps.data.findIndex(e => e.value === nextProps.value);
          if (i !== -1) {
            update.value = nextProps.data[i];
          } else {
            i = nextProps.data.findIndex(e => e.name === nextProps.value);
            if (i !== -1) {
              update.value = nextProps.data[i];
            }
          }
        }
        if (nextProps.data) {
          let d = [...prevState.data];
          nextProps.data.forEach(element => {
            if (d.findIndex(e => e.value === element.value) === -1) {
              d.push(element);
            }
          });
          update.data = d;
        }
      } else if (nextProps.mode === "tags") {
        if (
          nextProps.value &&
          typeof nextProps.value === "string" &&
          nextProps.value !== ""
        ) {
          let x = nextProps.value.split(",");
          update.tags = x;
        }
      } else if (nextProps.mode === "multiple") {
        if (
          nextProps.value &&
          typeof nextProps.value === "string" &&
          nextProps.value !== ""
        ) {
          let x = nextProps.value.split(",");
          let ar = [...prevState.multipleValues];
          x.forEach(ee => {
            let i = nextProps.data.findIndex(e => e.value === ee);
            if (i !== -1) {
              if (
                ar.findIndex(l => l.value === nextProps.data[i].value) === -1
              ) {
                ar.push(nextProps.data[i]);
              }
            } else {
              i = nextProps.data.findIndex(e => e.name === ee);
              if (i !== -1) {
                if (
                  ar.findIndex(l => l.value === nextProps.data[i].value) === -1
                ) {
                  ar.push(nextProps.data[i]);
                }
              }
            }
          });
          update.multipleValues = ar;
        }
        if (nextProps.data) {
          let d = [];
          nextProps.data.forEach(element => {
            if (d.findIndex(e => e.value === element.value) === -1) {
              d.push(element);
            }
          });
          update.data = d;
        }
      }
    } else {
      if (nextProps.value) {
        let i = nextProps.data.findIndex(e => e.value === nextProps.value);
        if (i !== -1) {
          update.value = nextProps.data[i];
        } else {
          i = nextProps.data.findIndex(e => e.name === nextProps.value);
          if (i !== -1) {
            update.value = nextProps.data[i];
          }
        }
      }
      if (nextProps.value === undefined) {
        update.value = {};
      }

      if (nextProps.data) {
        let d = [];
        nextProps.data.forEach(element => {
          if (d.findIndex(e => e.value === element.value) === -1) {
            d.push(element);
          }
        });
        update.data = d;
      }
    }

    return Object.keys(update).length === 0 ? null : update;
  }

  showMenu = e => {
    if (
      document.getElementById(this.props.id ? this.props.id : this.state.eid)
    ) {
      this.setState({ menuOpen: !this.state.menuOpen });
    }

    let slt = "";
    if (this.state.value.name && this.state.value.name !== "") {
      slt = this.state.value.name;
    } else if (this.state.value.value && this.state.value.value !== "") {
      slt = this.state.value.value;
    } else if (this.state.placeholder && this.state.placeholder !== "") {
      slt = this.state.placeholder;
    } else {
      slt = "Select";
    }
    if (this.props.search === true) {
      this.setState({ searchMode: !this.state.searchMode, searchVal: slt });
    }
  };

  changeOptionSelect(id) {
    window.addEventListener("keydown", e => {
      this.setState({ menuOpen: false });
    });
    this.setState({ menuOpen: true });
  }
  changeOption = d => {
    this.setState({ value: d, searchVal: d.name });
    if (this.props.onChange) {
      this.props.onChange(d);
    }
    this.showMenu();
  };

  //search
  filter = e => {
    this.setState({ searchVal: e.target.value });
    if (this.props.mode === "autoComplete") {
      this.changeOption({ name: e.target.value, value: e.target.value });
      this.props.onChange({ name: e.target.value, value: e.target.value });
    }
  };

  //autocomplete
  autoCompletePush = val => {
    const data = [...this.state.data];
    if (data.findIndex(e => e.value === val.value) === -1) {
      data.unshift(val);
      this.setState({ data });
    } else {
      this.setState({ searchVal: val.name });
    }
    this.changeOption(val);
  };

  //for tags mode
  tagPush = (val, type) => {
    const tags = [...this.state.tags];
    if (type === "event") {
      if (val.key === "Enter") {
        if (tags.indexOf(val.target.value) === -1) {
          tags.unshift(val.target.value);
          this.setState({ tags, searchVal: "" });
          if (this.props.onChange) {
            this.props.onChange(tags);
          }
        }
      } else {
        this.setState({ searchVal: val.target.value });
      }
    } else {
      if (tags.indexOf(val) === -1) {
        tags.unshift(val);
        this.setState({ tags, searchVal: "" });
        if (this.props.onChange) {
          this.props.onChange(tags);
        }
      }
    }
  };

  //for multiple mode
  addMultiple = val => {
    const multipleValues = [...this.state.multipleValues];
    if (multipleValues.findIndex(e => e.value === val.value) === -1) {
      multipleValues.push(val);
    } else {
      multipleValues.splice(
        multipleValues.findIndex(e => e.value === val.value),
        1
      );
    }
    if (this.props.onChange) {
      this.props.onChange(multipleValues);
    }
    this.setState({ multipleValues });
  };
  divclass = e => {};

  render() {
    const {
      id,
      search = false,
      mode = "",
      classList = "",
      tabIndex,
      controlStyle = {},
      disabled = false
    } = this.props; //mode=multiple,tags
    const {
      menuOpen,
      eid,
      data = [],
      value,
      placeholder,
      searchVal,
      tags,
      multipleValues,
      searchMode
    } = this.state;

    if (mode === "multiple") {
      //normal select
      let slt = "";
      if (value.name && value.name !== "") {
        slt = value.name;
      } else if (value.value && value.value !== "") {
        slt = value.value;
      } else if (placeholder && placeholder !== "") {
        slt = placeholder;
      } else {
        slt = "Select";
      }
      return (
        <ZsSelectWrapper id={id ? id : eid}>
          <div
            style={{ ...controlStyle, height: "auto" }}
            tabIndex={tabIndex}
            onFocus={() => this.setState({ menuOpen: !this.state.menuOpen })}
            className={
              disabled
                ? "zsSelectControl isDisabled" + classList
                : "zsSelectControl" + classList
            }
          >
            <div style={{ width: "calc(100% - 20px)" }}>
              {multipleValues.length > 0 && (
                <div className="">
                  <div className="tagCont">
                    {multipleValues.map((d, i) => (
                      <div className="selectTags" key={i}>
                        {d.name}
                        <Icons
                          type="close"
                          className="closeIcnSelect"
                          onClick={() => {
                            const tgs = [...multipleValues];
                            tgs.splice(i, 1);
                            this.setState({ multipleValues: tgs });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchMode ? (
                <input
                  placeholder={placeholder ? placeholder : "Search"}
                  className="searchSelect"
                  onClick={() => this.setState({ menuOpen: true })}
                  value={searchVal ? searchVal : ""}
                  onChange={e => this.filter(e)}
                />
              ) : (
                <div
                  className="selectedVal"
                  onClick={this.showMenu}
                  style={{ cursor: search ? "text" : "pointer" }}
                >
                  {slt}
                </div>
              )}
            </div>
            <div className="zsDropArrow" onClick={this.showMenu}></div>
          </div>
          <div
            className={menuOpen ? "selectMenu menuOpen2" : "selectMenu"}
            style={{ position: "relative" }}
          >
            {searchMode && searchVal && searchVal !== "Select" ? (
              <div className="menuContent">
                {data
                  .filter(
                    e =>
                      e.name.toLowerCase().includes(searchVal.toLowerCase()) ||
                      e.value.toLowerCase().includes(searchVal.toLowerCase())
                  )
                  .map((d, i) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                      className={
                        value.value === d.value || value.name === d.name
                          ? "option selectedOpt"
                          : "option"
                      }
                      onClick={() => this.addMultiple(d)}
                      key={i}
                    >
                      {d.name ? d.name : d.value ? d.value : "-"}
                      {multipleValues.findIndex(e => e.value === d.value) !==
                      -1 ? (
                        <span style={{ float: "right" }}>✓</span>
                      ) : null}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="menuContent">
                {data.map((d, i) => (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className={
                      value.value === d.value || value.name === d.name
                        ? "option selectedOpt"
                        : "option"
                    }
                    onClick={() => this.addMultiple(d)}
                    key={i}
                  >
                    {d.name ? d.name : d.value ? d.value : "-"}
                    {multipleValues.findIndex(e => e.value === d.value) !==
                    -1 ? (
                      <span style={{ float: "right" }}>✓</span>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ZsSelectWrapper>
      );
    } else if (mode === "tags") {
      return (
        <ZsSelectWrapper id={id ? id : eid}>
          <div
            style={controlStyle}
            tabIndex={tabIndex}
            onFocus={() => this.setState({ menuOpen: !this.state.menuOpen })}
            className={
              disabled
                ? "zsSelectControl isDisabled" + classList
                : "zsSelectControl" + classList
            }
          >
            <input
              placeholder={placeholder ? placeholder : "Tags"}
              className="searchSelect"
              onClick={() => this.setState({ menuOpen: true })}
              value={searchVal ? searchVal : ""}
              onChange={e => this.filter(e)}
              onKeyPress={e => this.tagPush(e, "event")}
            />
            <div className="zsDropArrow" onClick={this.showMenu}></div>
          </div>
          {tags.length > 0 && (
            <div
              className="selectMenu menuOpen2"
              style={{ position: "relative" }}
            >
              <div className="menuContent" style={{ boxShadow: "none" }}>
                {searchVal.length > 0 && tags.indexOf(searchVal) === -1 ? (
                  <div
                    className={"option"}
                    onClick={() => this.tagPush(searchVal, "direct")}
                  >
                    {searchVal}
                  </div>
                ) : null}
                <div className="tagCont">
                  {tags.map((d, i) => (
                    <div className="selectTags" key={i}>
                      {d}
                      <Icons
                        type="close"
                        className="closeIcnSelect"
                        onClick={() => {
                          const tgs = [...tags];
                          tgs.splice(i, 1);
                          this.setState({ tags: tgs });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ZsSelectWrapper>
      );
    } else if (mode === "autoComplete") {
      return (
        <ZsSelectWrapper id={id ? id : eid}>
          <div
            style={{ padding: "0px 18px" }}
            tabIndex={tabIndex}
            onFocus={() => this.changeOptionSelect(id)}
            className={
              disabled
                ? "zsSelectControl isDisabled" + classList
                : "zsSelectControl" + classList
            }
          >
           
            <input
              placeholder={placeholder ? placeholder : "Search"}
              className="searchSelect"
              onClick={() => this.setState({ menuOpen: true })}
              value={value ? value.value : searchVal ? searchVal : ""}
              onChange={e => {
                this.setState({ searchVal: e.target.value });
                this.filter(e);
              }}
            />
            <div
              className={
                !menuOpen ? "zsDropArrowAuto" : "zsDropArrowRotateAuto"
              }
              style={{
                transform: !menuOpen ? " rotate(45deg)" : "rotate(-133deg)",
                marginTop: !menuOpen ? "13px" : "15px"
              }}
              onClick={() => this.setState({ menuOpen: !menuOpen })}
            ></div>
          </div>
          <div
            className={menuOpen ? "selectMenu menuOpenAuto" : "selectMenu"}
            style={{ marginTop: "3px" }}
          >
            <div className="menuContent">
              {searchVal.length > 0 &&
              data.findIndex(
                r => r.value === searchVal || r.name === searchVal
              ) === -1 ? (
                <div
                  className="option"
                  onClick={() =>
                    this.autoCompletePush({ name: searchVal, value: searchVal })
                  }
                >
                  {searchVal}
                </div>
              ) : null}
              {data.map((d, i) => (
                <div
                  data-tip
                  data-for={d.value}
                  className={
                    value.value === d.value || value.name === d.name
                      ? "option selectedOpt"
                      : "option"
                  }
                  onClick={() => this.autoCompletePush(d)}
                  key={i}
                >
                  {d.name ? d.name : d.value ? d.value : "-"}
                </div>
              ))}
              {data.map((d, i) => (
                <ZsToolTip
                  id={d.value}
                  content={d.value}
                  place="top"
                  key={i}
                  select="select"
                >
                  <span>{d.value}</span>
                </ZsToolTip>
              ))}
            </div>
          </div>
        </ZsSelectWrapper>
      );
    } else {
      //normal select
      let slt = "";
      if (value.name && value.name !== "") {
        slt = value.name;
      } else if (value.value && value.value !== "") {
        slt = value.value;
      } else if (placeholder && placeholder !== "") {
        slt = placeholder;
      } else {
        slt = "Select";
      }
      return (
        <ZsSelectWrapper id={id ? id : eid}>
          <div
            style={controlStyle}
            tabIndex={tabIndex}
            onClick={this.showMenu}
            //onFocus={() => this.changeOptionSelect(id)}
            className={
              disabled
                ? "zsSelectControl isDisabled" + classList
                : "zsSelectControl" + classList
            }
          >
            {searchMode ? (
              <input
                placeholder={placeholder ? placeholder : "Search"}
                className="searchSelect"
                onClick={() => this.setState({ menuOpen: true })}
                value={searchVal ? searchVal : ""}
                onChange={e => this.filter(e)}
              />
            ) : (
              <div
                className="selectedVal"
                onKeyDown={e => this.divclass(e)}
                onClick={this.showMenu}
                style={{
                  cursor: search ? "text" : "pointer",
                  color:
                    slt === placeholder || slt === "Select"
                      ? "rgba(255, 255, 255, 0.5)"
                      : "#fff"
                }}
              >
                {slt}
              </div>
            )}
            {this.props.fillarrow !== undefined ? (
              <img
                src={!menuOpen ? down : up}
                alt="up"
                onClick={this.showMenu}
                style={{ height: "10px", width: "10px" }}
              ></img>
            ) : (
              <div
                className={!menuOpen ? "zsDropArrow" : "zsDropArrowRotate"}
                style={{
                  transform: !menuOpen ? " rotate(45deg)" : "rotate(-133deg)",
                  marginTop: !menuOpen ? "11px" : "13px"
                }}
                onClick={this.showMenu}
              ></div>
            )}
          </div>
          <div className={menuOpen ? "selectMenu menuOpen" : "selectMenu"}>
            {searchMode && searchVal && searchVal !== "Select" ? (
              <div className="menuContent">
                {data
                  .filter(
                    e =>
                      e.name.toLowerCase().includes(searchVal.toLowerCase()) ||
                      e.value.toLowerCase().includes(searchVal.toLowerCase())
                  )
                  .map((d, i) => (
                    <div
                      data-tip
                      data-for={d.value}
                      id={d.value}
                      className={
                        value.value === d.value || value.name === d.name
                          ? "option selectedOpt"
                          : "option"
                      }
                      onClick={() => this.changeOption(d)}
                      key={i}
                    >
                      {d.name ? d.name : d.value ? d.value : "-"}
                    </div>
                  ))}
                {data.map((d, i) => (
                  <ZsToolTip
                    id={d.value}
                    content={d.value}
                    place="top"
                    key={i}
                    select="select"
                  >
                    <span>{d.value}</span>
                  </ZsToolTip>
                ))}
              </div>
            ) : (
              <div id={id ? id : eid} className="menuContent">
                {data.map((d, i) => (
                  <div
                    data-tip
                    id={d.name}
                    data-for={d.name}
                    className={
                      value.value === d.value || value.name === d.name
                        ? "option selectedOpt"
                        : "option"
                    }
                    onClick={() => this.changeOption(d)}
                    key={i}
                  >
                    {d.name ? d.name : d.value ? d.value : "-"}
                  </div>
                ))}
                {this.props.showTooltip === true ? (
                  <div>
                    {data.map((d, i) => (
                      <ZsToolTip
                        id={d.name}
                        content={d.name}
                        place="top"
                        key={i}
                        select="select"
                      >
                        <span>{d.name}</span>
                      </ZsToolTip>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </ZsSelectWrapper>
      );
    }
  }
}

export default ZsSelect;
