/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import s from './mmm.module.css';

const none = '#FFFFFF';

const options = [
  { value: 'India', label: 'India' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'France', label: 'France' },
  { value: 'UK', label: 'UK' },
];
const options1 = [
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Kyiv', label: 'Kyiv' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
];
const options2 = [
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Kyiv', label: 'Kyiv' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
];

const findOpt = value => options.find(opt => opt.value === value);
// const findOpt1 = value => options1.find(opt => opt.value === value);

class Cjmp extends Component {
  state = {
    inputValue2: '',
    inputValue3: '',
    selectData: '',
    selectData1: '',
    selectData2: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
    inputValue7: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeSelect = opt => {
    this.setState({
      selectData: opt.value,
    });
  };

  handleSublit = e => {
    e.prevebtDefault();
  };

  changeColor = (
    color1,
    colorText1,
    color2,
    colorText2,
    color3,
    colorText3,
    color4,
    colorText4,
    color5,
    colorText5,
    color6,
    colorText6,
    color7,
    colorText7,
    color8,
    colorText8,
    color9,
    colotText9,
    findDOMNode,
  ) => {
    if (this.state.color1 !== none && this.state.inputValue2 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput3).focus();
    }
    if (this.state.color2 !== none && this.state.inputValue3 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput4).focus();
    }
    if (this.state.color3 !== none && this.state.inputValue4 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput5).focus();
    }
    if (this.state.color4 !== none && this.state.inputValue5 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput6).focus();
    }
    if (this.state.color5 !== none && this.state.inputValue6 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput7).focus();
    }
    if (this.state.color6 !== none && this.state.inputValue7 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput8).focus();
    }
    if (this.state.color7 !== none && this.state.inputValue8 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput9).focus();
    }
    if (this.state.color8 !== none && this.state.inputValue9 !== true) {
      ReactDOM.findDOMNode(this.refs.myInput10).focus();
    }
  };

  render() {
    const {
      // color1,
      // colorText1,
      // color2,
      // colorText2,
      // color3,
      // colorText3,
      // color4,
      // colorText4,
      // colorText5,
      // colorText6,
      // colorText7,
      // color8,
      // colorText8,
      // color9,
      // colorText9,
      inputValue2,
      inputValue3,
      selectData,
      selectData1,
      selectData2,
      inputValue4,
      inputValue5,
      inputValue6,
      inputValue7,
    } = this.state;
    return (
      <div className={s.ty}>
        <form>
          <div className={s.form_group}>
            <input
              className={s.ty2}
              ref="myInput2"
              placeholder=" "
              value={inputValue2}
              onChange={this.handleChange}
              type="text"
              minLength="2"
              maxLength="50"
              name="inputValue2"
              pattern="[а-яёА-ЯЁ]+"
              id="dynamic-label-input"
              required
              autoFocus
            />
            <label htmlFor="dynamic-label-input">First name</label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty3}
              placeholder=" "
              type="text"
              ref="myInput3"
              value={inputValue3}
              onChange={this.handleChange}
              minLength="2"
              maxLength="50"
              name="inputValue3"
              pattern="[а-яёА-ЯЁ]+"
              required
            />
            <label htmlFor="dynamic-label-input">Last name</label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty4}
              placeholder=" "
              type="text"
              ref="myInput4"
              value={inputValue4}
              onChange={this.handleChange}
              maxLength="250"
              name="inputValue4"
              pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
              required
            />
            <label htmlFor="dynamic-label-input">Email ID</label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty5}
              placeholder=" "
              type="text"
              ref="myInput5"
              value={inputValue5}
              onChange={this.handleChange}
              minLength="5"
              maxLength="30"
              name="inputValue5"
              pattern="^[A-Za-z_]+$"
              required
            />
            <label htmlFor="dynamic-label-input">User ID</label>
          </div>
          <p className={s.tyP4}>Country</p>
          <Select
            required
            className={s.select}
            ref="myInput6"
            options={options}
            value={findOpt(selectData)}
            onChange={this.onChangeSelect}
            required
          />
          <p className={s.tyP4}>State</p>
          <Select
            required
            className={s.select}
            ref="myInput7"
            options={options1}
            value={findOpt(selectData1)}
            onChange={this.onChangeSelect}
            required
          />
          <p className={s.tyP4}>City</p>
          <Select
            required
            className={s.select}
            ref="myInput8"
            options={options2}
            value={findOpt(selectData2)}
            onChange={this.onChangeSelect}
            required
          />
          <div className={s.form_group}>
            <input
              className={s.ty6}
              placeholder=" "
              ref="myInput9"
              value={inputValue6}
              onChange={this.handleChange}
              type="tel"
              name="inputValue6"
              pattern="380[0-9]{9}"
              required
            />
            <label htmlFor="dynamic-label-input">Phone Number</label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty7}
              placeholder=" "
              ref="myInput10"
              value={inputValue7}
              onChange={this.handleChange}
              type="text"
              name="inputValue7"
              pattern="^[A-Za-z_0-9]+$"
              required
            />
            <label htmlFor="dynamic-label-input">Reference Code</label>
          </div>
          <button type="submit" onClick={this.changeColor} />
        </form>
      </div>
    );
  }
}

export default Cjmp;
