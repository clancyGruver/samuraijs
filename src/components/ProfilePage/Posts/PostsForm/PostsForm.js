import Style from './PostsForm.module.css';

const PostsForm = () => {
  return (
    <form className={Style.form}>
      <textarea className={Style.input} rows="5" defaultValue="your news" />
      <button type="button" className={Style.btn}>Send</button>
    </form>
  );
}

export default PostsForm;