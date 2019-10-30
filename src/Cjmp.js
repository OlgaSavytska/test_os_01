import React, { Component } from 'react';
import s from './mmm.module.css';

const green = '#39D1B4';
const none = '#FFFFFF';

class Cjmp extends Component {
  // state = {
  //   imp1: green,
  //   imp2: yellow,
  // };

  // handleChange = () => {
  //   this.setState({
  //     imp1: yellow,
  //     imp2: green,
  //   });
  // };

  state = {
    color1: green,
    color2: none,
  };

  changeColor = () => {
    this.setState({
      color1: none,
      color2: green,
    });
  };

  render() {
    const { color1, color2 } = this.state;
    return (
      <div className={s.ty}>
        <form>
          <input className={s.ty2} style={{ borderColor: color1 }} />
          <input className={s.ty3} style={{ borderColor: color2 }} />
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
