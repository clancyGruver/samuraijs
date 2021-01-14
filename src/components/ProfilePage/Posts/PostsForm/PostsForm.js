import Style from './PostsForm.module.css';

const PostsForm = (props) => {
  const changeHandler = (ev) => {
    const text = ev.target.value;
    props.postEditHandler(text);
  }

  const clickHandler = () => {
    props.addPostHandler();
  }

  return (
    <form className={Style.form}>
      <textarea
        rows="5"
        placeholder="Yor news"
        value={props.newPostText}
        className={Style.input}
        onChange={changeHandler}
      />
      <button
        type="button"
        className={Style.btn}
        onClick={ clickHandler }
      >Send</button>
    </form>
  );
}

export default PostsForm;