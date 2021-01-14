import { addDialogActionCreator, editNewDialogActionCreator } from '../../../../store/dialogsReducer';
import Style from './AddDiaolg.module.css';

const AddDiaolg = (props) => {
  const changeHandler = (ev) => {
    const text = ev.target.value;
    props.changeNewDialogHandler(text);
  }
  const clickHandler = () => props.addDialogHandler();

  return (
    <div className={Style.wrapper}>
      <textarea
        rows="2"
        className={Style.textInput}
        value={props.newDialog}
        onChange={changeHandler}
      />
      <button type="button" onClick={ clickHandler } className={Style.btn}>send</button>
    </div>
  )
}

export default AddDiaolg;