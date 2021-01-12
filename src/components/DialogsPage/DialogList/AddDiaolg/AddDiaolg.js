import React from 'react';
import Style from './AddDiaolg.module.css';

const AddDiaolg = () => {
  const newDialogRef = React.createRef();

  const clickHandler = () => {
    console.log('dialog added!')
  };

  return (
    <div className={Style.wrapper}>
      <textarea rows="2" ref={newDialogRef} className={Style.textInput} />
      <button type="button" onClick={clickHandler} className={Style.btn}>send</button>
    </div>
  )
}

export default AddDiaolg;