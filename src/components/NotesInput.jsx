import React from 'react';
class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.maxCar = 50;
    this.state = {
      title: '',
      body: '',
      char: this.maxCar,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    this.setState(() => {
      const inputValue = e.target.value;
      const char = this.maxCar;
      const remainingChar = char - inputValue.length;
      if (inputValue.length > char) {
        e.target.value = inputValue.substr(0, char);
        return;
      }
      return { title: inputValue, char: remainingChar };
    });
  }

  onBodyChangeHandler(e) {
    this.setState(() => {
      return { body: e.target.value };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className="form" onSubmit={this.onSubmitHandler}>
        <form action="">
          <p className="text-char">Sisa karakter: {this.state.char}</p>
          <div className="notes-form">
            <input
              type="text"
              className="notes-form__input"
              placeholder="title note"
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
            />
          </div>
          <div className="notes-form">
            <textarea
              className="notes-form__input"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.onBodyChangeHandler}
            ></textarea>
          </div>
          <div className="notes-form">
            <button className="btn-input" type="submit">
              Buat
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default NotesInput;
