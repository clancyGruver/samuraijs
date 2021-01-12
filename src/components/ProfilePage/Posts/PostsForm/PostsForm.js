import Style from './PostsForm.module.css';
import React from 'react';

const PostsForm = () => {
  const newPostElement = React.createRef();
  
  const clickHandler = () => {
    const text = newPostElement.current.value;
    console.log(123);
  }

  return (
    <form className={Style.form}>
      <textarea className={Style.input} rows="5" defaultValue="your news" ref={newPostElement} />
      <button type="button" className={Style.btn} onClick={ clickHandler }>Send</button>
    </form>
  );
}

export default PostsForm;