import React from 'react';
import Style from './AboutMe.module.css';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  editModeHandler = () => {
    const editMode = !this.state.editMode;
    this.setState({editMode});
  }

  render() {
    return (
      <>
        {this.state.editMode
        ? <input
            type="text"
            value={this.props.status}
            onBlur={this.editModeHandler}
            autoFocus={true}
          />
        : <p
            className={Style.aboutMe}
            onDoubleClick={this.editModeHandler}
          >
            <strong>{this.props.status || '111'}</strong>
          </p>}
      </>
    );
  }
}

export default AboutMe;
