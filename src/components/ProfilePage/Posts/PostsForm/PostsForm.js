import Style from './PostsForm.module.css';

const PostsForm = () => {
  return (
    <form className={Style.form}>
      <textarea className={Style.input} rows="5">your news</textarea>
      <button type="button" className={Style.btn}>Send</button>
    </form>
  );
}

export default PostsForm;