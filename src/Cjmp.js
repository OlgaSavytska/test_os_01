import React, { Component } from 'react';
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

class Cjmp extends Component {
  state = {
    color1: green,
    color2: none,
    color3: none,
    color4: none,
    color5: none,
    color6: none,
  };

  changeColor = (color1, color2, color3, color4, color5, color6) => {
    if (this.state.color1 !== none) {
      this.setState({
        color1: none,
        color2: green,
        color3: none,
        color4: none,
        color5: none,
        color6: none,
      });
    }
    if (this.state.color2 !== none) {
      this.setState({
        color1: none,
        color2: none,
        color3: green,
        color4: none,
        color5: none,
        color6: none,
      });
    }
    if (this.state.color3 !== none) {
      this.setState({
        color1: none,
        color2: none,
        color3: none,
        color4: green,
        color5: none,
        color6: none,
      });
    }
    if (this.state.color4 !== none) {
      this.setState({
        color1: none,
        color2: none,
        color3: none,
        color4: none,
        color5: green,
        color6: none,
      });
    }
    if (this.state.color5 !== none) {
      this.setState({
        color1: none,
        color2: none,
        color3: none,
        color4: none,
        color5: none,
        color6: green,
      });
    }
    if (this.state.color6 !== none) {
      this.setState({
        color1: none,
        color2: none,
        color3: none,
        color4: none,
        color5: none,
        color6: none,
      });
    }
  };

  render() {
    const { color1, color2, color3, color4, color5, color6 } = this.state;
    return (
      <div className={s.ty}>
        <form>
          <input
            className={s.ty2}
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color1,
            }}
          />
          <input
            className={s.ty3}
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color2,
            }}
          />
          <input
            className={s.ty4}
            style={{
              borderTop: '0px',
              borderLeft: '0px',
              borderRight: '0px',
              borderColor: color3,
            }}
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
