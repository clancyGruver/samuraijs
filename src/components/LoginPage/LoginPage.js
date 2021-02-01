import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { login } from '../../store/authReducer';
import { connect } from 'react-redux';

const LoginForm = (props) => {
  const {
    touched,
    errors,
    handleSubmit
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <Field type="text" name="email" placeholder="email" />
        { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span> }
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" placeholder="Password"  />
        { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
      </div>
      <div>
        <Field name="rememberMe" type={"checkbox"} /> remember me
        </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </Form>
  );
}

const LoginFormik = withFormik({
  displayName: 'LoginForm',
  mapPropsToValues: (props) => ({
    email: props.email || '',
    password: props.password || '',
    rememberMe: false,
  }),
  handleSubmit(values, {props}) {
    props.login(values);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('email is required'),
    password: Yup.string().required('Password is required')
  })
})(LoginForm);

const ConnectedLoginFormik = connect(null, {login})(LoginFormik);

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <ConnectedLoginFormik />
    </div>
  );
}


export default LoginPage;