import Style from './AddDiaolg.module.css';
import { Field, Form, withFormik } from 'formik';

const AddDiaolg = (props) => {
  const {
    values,
    handleSubmit
  } = props;
  return (
    <Form className={Style.wrapper} onSubmit={handleSubmit}>
      <Field
        as="textarea"
        rows="2"
        className={Style.textInput}
        name={"dialogText"}
        value={values.dialogText}
      />
      <button type="submit" className={Style.btn}>send</button>
    </Form>
  )
}

const EnchancedAddDiaolog = withFormik({
  displayName: 'addDialogForm',
  mapPropsToValues: () => ({
    dialogText: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.addDialogHandler(values.dialogText);
  }
})(AddDiaolg);

export default EnchancedAddDiaolog;