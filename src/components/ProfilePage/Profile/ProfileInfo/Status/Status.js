import React from 'react';
import Style from './Status.module.css';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: props.status,
    };
  }

  editModeHandler = () => {
    const editMode = !this.state.editMode;
    this.setState({editMode});
    if(editMode === false) {
      this.props.updateStatus(this.state.status);
    }
  }

  onStatusChange = (e) => {
    const status = e.currentTarget.value;
    this.setState({ status });
  }

  componentDidUpdate(prevProps){
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <>
        {this.state.editMode
        ? <input
            type="text"
            value={this.state.status}
            onBlur={this.editModeHandler}
            onChange={this.onStatusChange}
            autoFocus={true}
          />
        : <p
            className={Style.aboutMe}
            onDoubleClick={this.editModeHandler}
          >
            <strong>{this.state.status || '111'}</strong>
          </p>}
      </>
    );
  }
}

export default Status;
