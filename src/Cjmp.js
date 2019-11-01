import React, { Component } from 'react';
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

const findOpt = value => options.find(opt => opt.value === value);

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
    color6: none,
    inputValue2: '',
    inputValue3: '',
    selectData: '',
    inputValue4: '',
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
    color6,
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
        color6: none,
      });
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
        color6: none,
      });
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
        color6: none,
      });
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
        color6: none,
      });
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
        color6: green,
      });
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
        color6: none,
      });
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
      color6,
      inputValue2,
      inputValue3,
      selectData,
      inputValue4,
    } = this.state;
    return (
      <div className={s.ty}>
        <form>
          <p className={s.tyP2} style={{ color: colorText1 }}>
            First Name
          </p>
          <input
            className={s.ty2}
            placeholder="Chandan"
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
            required
          />
          <p className={s.tyP3} style={{ color: colorText2 }}>
            Email ID
          </p>
          <input
            className={s.ty3}
            placeholder="chandan@codias.com"
            type="text"
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color2,
            }}
            value={inputValue3}
            onChange={this.handleChange}
            maxLength="250"
            name="inputValue3"
            pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
            required
          />
          <p className={s.tyP4} style={{ color: colorText3 }}>
            Country
          </p>
          <Select
            required
            className={s.select}
            options={options}
            value={findOpt(selectData)}
            onChange={this.onChangeSelect}
            style={{
              border: none,
            }}
          />
          <p className={s.tyP4} style={{ color: colorText4 }}>
            Phone Number
          </p>
          <input
            className={s.ty4}
            placeholder="380..."
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color4,
            }}
            value={inputValue4}
            onChange={this.handleChange}
            type="tel"
            name="inputValue4"
            pattern="380[0-9]{9}"
            required
          />
          <input
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
          />
          <button
            type="button"
            // onClick={this.changeColor}
            onClick={this.changeColor}
            className={s.ty4}
          />
        </form>
      </div>
    );
  }
}

export default Cjmp;
