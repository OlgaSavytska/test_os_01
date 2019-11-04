import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import s from './mmm.module.css';

// const Cjmp = ({ butPrev, butNext }) => {
//   const butPrevClass = butPrev ? s.disabled : s.buttom;
//   const butNextClass = butNext ? s.disabled : s.buttom;

//   handleClassArticle = () => {
//     this.prevState(prevst\);
//     return (
//       <div className={s.ty}>
//         <form>
//           <input className={s.ty2} />
//           <input className={s.ty3} />
//           <input className={s.ty4} />
//           <input className={s.ty5} />
//           <input className={s.ty6} />
//           <input className={s.ty7} />
//           <button
//             type="button"
//             disabled={butNext}
//             // onClick={this.changeColor}
//             onClick={butNext ? null : butNextClass}
//             className={s.ty4}
//           />
//         </form>
//       </div>
//     );
//   };

const green = '#39D1B4';
const none = '#FFFFFF';
const grey = '#A9A9A9';

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
    color1: green,
    colorText1: green,
    color2: none,
    colorText2: grey,
    color3: none,
    colorText3: grey,
    color4: none,
    colorText4: grey,
    color5: none,
    colorText5: grey,
    color6: none,
    colorText6: grey,
    color7: none,
    colorText7: grey,
    color8: none,
    colorText8: grey,
    inputValue2: '',
    inputValue3: '',
    selectData: '',
    selectData1: '',
    selectData2: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
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
    findDOMNode,
  ) => {
    if (this.state.color1 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: green,
        colorText2: green,
        color3: none,
        colorText3: grey,
        color4: none,
        colorText4: grey,
        color5: none,
        colorText5: grey,
        color6: none,
        colorText6: grey,
        color7: none,
        colorText7: grey,
        color8: none,
        colorText8: grey,
      });
      ReactDOM.findDOMNode(this.refs.myInput3).focus();
    }
    if (this.state.color2 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: none,
        colorText2: grey,
        color3: green,
        colorText3: green,
        color4: none,
        colorText4: grey,
        color5: none,
        colorText5: grey,
        color6: none,
        colorText6: grey,
        color7: none,
        colorText7: grey,
        color8: none,
        colorText8: grey,
      });
      ReactDOM.findDOMNode(this.refs.myInput4).focus();
    }
    if (this.state.color3 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: none,
        colorText2: grey,
        color3: none,
        colorText3: grey,
        color4: green,
        colorText4: green,
        color5: none,
        colorText5: grey,
        color6: none,
        colorText6: grey,
        color7: none,
        colorText7: grey,
        color8: none,
        colorText8: grey,
      });
      ReactDOM.findDOMNode(this.refs.myInput5).focus();
    }
    if (this.state.color4 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: none,
        colorText2: grey,
        color3: none,
        colorText3: grey,
        color4: none,
        colorText4: grey,
        color5: green,
        colorText5: green,
        color6: none,
        colorText6: grey,
        color7: none,
        colorText7: grey,
        color8: none,
        colorText8: grey,
      });
      ReactDOM.findDOMNode(this.refs.myInput6).focus();
    }
    if (this.state.color5 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: none,
        colorText2: grey,
        color3: none,
        colorText3: grey,
        color4: none,
        colorText4: grey,
        color5: none,
        colorText5: grey,
        color6: green,
        colorText6: green,
        color7: none,
        colorText7: grey,
        color8: none,
        colorText8: grey,
      });
      ReactDOM.findDOMNode(this.refs.myInput7).focus();
    }
    if (this.state.color6 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: none,
        colorText2: grey,
        color3: none,
        colorText3: grey,
        color4: none,
        colorText4: grey,
        color5: none,
        colorText5: grey,
        color6: none,
        colorText6: grey,
        color7: green,
        colorText7: green,
        color8: none,
        colorText8: grey,
      });
      ReactDOM.findDOMNode(this.refs.myInput8).focus();
    }
    if (this.state.color7 !== none) {
      this.setState({
        color1: none,
        colorText1: grey,
        color2: none,
        colorText2: grey,
        color3: none,
        colorText3: grey,
        color4: none,
        colorText4: grey,
        color5: none,
        colorText5: grey,
        color6: none,
        colorText6: grey,
        color7: none,
        colorText7: grey,
        color8: green,
        colorText8: green,
      });
      ReactDOM.findDOMNode(this.refs.myInput9).focus();
    }
  };

  render() {
    const {
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
      inputValue2,
      inputValue3,
      selectData,
      inputValue4,
      inputValue5,
      inputValue6,
    } = this.state;
    return (
      <div className={s.ty}>
        <form>
          <div className={s.form_group}>
            <input
              className={s.ty2}
              ref="myInput2"
              placeholder=" "
              style={{
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderColor: color1,
              }}
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
            <label htmlFor="dynamic-label-input" style={{ color: colorText1 }}>
              First name
            </label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty3}
              placeholder=" "
              type="text"
              ref="myInput3"
              style={{
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderColor: color2,
              }}
              value={inputValue3}
              onChange={this.handleChange}
              minLength="2"
              maxLength="50"
              name="inputValue3"
              pattern="[а-яёА-ЯЁ]+"
              required
            />
            <label htmlFor="dynamic-label-input" style={{ color: colorText2 }}>
              Last name
            </label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty4}
              placeholder=" "
              type="text"
              ref="myInput4"
              style={{
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderColor: color3,
              }}
              value={inputValue4}
              onChange={this.handleChange}
              maxLength="250"
              name="inputValue4"
              pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
              required
            />
            <label htmlFor="dynamic-label-input" style={{ color: colorText3 }}>
              Email ID
            </label>
          </div>
          <div className={s.form_group}>
            <input
              className={s.ty5}
              placeholder=" "
              type="text"
              ref="myInput5"
              style={{
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderColor: color4,
              }}
              value={inputValue5}
              onChange={this.handleChange}
              minLength="5"
              maxLength="30"
              name="inputValue5"
              pattern="^[A-Za-z_]+$"
              required
            />
            <label htmlFor="dynamic-label-input" style={{ color: colorText4 }}>
              User ID
            </label>
          </div>
          <p className={s.tyP4} style={{ color: colorText5 }}>
            Country
          </p>
          <Select
            required
            className={s.select}
            ref="myInput6"
            options={options}
            value={findOpt(selectData)}
            onChange={this.onChangeSelect}
            style={{
              border: none,
            }}
          />
          <p className={s.tyP4} style={{ color: colorText6 }}>
            State
          </p>
          <Select
            required
            className={s.select}
            ref="myInput7"
            options={options1}
            value={findOpt(selectData)}
            onChange={this.onChangeSelect}
            style={{
              border: none,
            }}
          />
          <p className={s.tyP4} style={{ color: colorText7 }}>
            City
          </p>
          <Select
            required
            className={s.select}
            ref="myInput8"
            options={options2}
            value={findOpt(selectData)}
            onChange={this.onChangeSelect}
            style={{
              border: none,
            }}
          />
          <div className={s.form_group}>
            <input
              className={s.ty6}
              placeholder="380..."
              ref="myInput9"
              style={{
                borderTop: '0px',
                borderLeft: '0px',
                borderRight: '0px',
                borderColor: color8,
              }}
              value={inputValue6}
              onChange={this.handleChange}
              type="tel"
              name="inputValue6"
              pattern="380[0-9]{9}"
              required
            />
            <label htmlFor="dynamic-label-input" style={{ color: colorText8 }}>
              Phone Number
            </label>
          </div>
          {/* <input
            className={s.ty5}
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color4,
            }}
          />
          <input
            className={s.ty6}
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color5,
            }}
          />
          <input
            className={s.ty7}
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color6,
            }}
          />{' '} */} */}
          <button
            type="button"
            // onClick={this.changeColor}
            onClick={this.changeColor}
          // onClick={() => {
          //   ReactDOM.findDOMNode(this.refs.myInput).focus();
          // }}
          />
        </form>
      </div>
    );
  }
}

export default Cjmp;
