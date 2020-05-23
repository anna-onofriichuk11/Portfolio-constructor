import React, { Component } from 'react';
import Editable from '../Editable';

class RowComponent extends Component {
  constructor (props) {
    super(props);
    const content = this.props.content;

    if (content) {
      this.state = {
        title: content.title,
        img: content.img,
        titlePosition: content.titlePosition,
        textPosition: content.textPosition,
        text: content.text,
        url: content.url,
        isSaved: true
      };
    } else {
      this.state = {
        title: 'Custom Title',
        titlePosition: null,
        textPosition: null,
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        url: '#',
        isSaved: true
      };
    }
    this.getStyled = this.getStyled.bind(this);
    this.saveTextInput = this.saveTextInput.bind(this);
    this.onChangeTiTlePosition = this.onChangeTiTlePosition.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  getStyled (position, styles) {
    let styleHeader;
    switch (position) {
      case null:
        styleHeader = 'text-center';
        break;
      case 'text-center':
        styleHeader = 'text-center';
        break;
      case 'text-left':
        styleHeader = 'text-left';
        break;
      case 'text-right':
        styleHeader = 'text-right';
        break;
    };
    return styleHeader + ' ' + styles;
  };

  onChangeTiTlePosition (event) {
    console.log('change position');
    console.log(event.currentTarget.getAttribute('name'));
    const newState = this.state;
    switch (event.currentTarget.getAttribute('value')) {
      case 'text-center':
        newState[event.currentTarget.getAttribute('name')] = 'text-left';
        break;
      case 'text-left':
        newState[event.currentTarget.getAttribute('name')] = 'text-right';
        break;
      case 'text-right':
        newState[event.currentTarget.getAttribute('name')] = 'text-center';
        break;
      case null:
        newState[event.currentTarget.getAttribute('name')] = 'text-left';
        break;
    }
    newState.isSaved = false;
    this.setState(newState);
    this.props.update(this);
  }

  getButtonType (value) {
    let titleButton;
    switch (value) {
      case 'text-center':
        titleButton = <i className="fas fa-align-center"></i>;
        break;
      case 'text-left':
        titleButton = <i className="fas fa-align-left"></i>;
        break;
      case 'text-right':
        titleButton = <i className="fas fa-align-right"></i>;
        break;
      case null:
        titleButton = <i className="fas fa-align-center"></i>;
        break;
    };
    return titleButton;
  }

  saveTextInput (event, input, element) {
    if (event.key === 'Enter') {
      const newState = this.state;
      newState[element] = input;
      newState.isSaved = false;
      this.setState(newState);
      this.props.update(this);
    };
  }

  handleChange (event) {
    console.log('change');
    this.setState({
      [event.target.name]: event.target.value,
      isSaved: false
    });
  };

  render () {
    const titleButton = this.getButtonType(this.state.titlePosition);
    const textButton = this.getButtonType(this.state.textPosition);
    console.log(this.props);

    return (
      <div className="col-md-6 mb-4">

        <div className="card compact">
          <div className="view overlay no-m">
            <img className="card-img-top" src={this.state.img} alt="Card image cap"/>
          </div>
          <div className="right-side-arr " onClick={console.log('hey')}>
            <p className="hint-text" value={this.state.hint}></p>
            <i href={this.state.url} className="fas fa-chevron-circle-right arrow"></i>
          </div>
          <div className="card-body">

            <div className={ this.getStyled(this.state.titlePosition, 'text-control-item ')}>
              <Editable onKeyDown={(event) => this.saveTextInput(event, this.state.title, 'title')} styleName='editable-title card-title' text={this.state.title} type="input" value={this.state.title}>
                <input
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  type="text"
                  id="inputPrefilledEx"/>
              </Editable>
              <div onClick={this.onChangeTiTlePosition} name="titlePosition" value={this.state.titlePosition} className="text-format-button">
                { titleButton }
              </div>
            </div>
            <hr/>
            <div className={ this.getStyled(this.state.textPosition, 'text-control-item ')}>
              <Editable onKeyDown={(event) => this.saveTextInput(event, this.state.text, 'text')}
                styleName='card-plain-text text-muted font-weight-light'
                text={this.state.text}
                type="input"
                value={this.state.text}>
                <input
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  type="text"
                  id="inputPrefilledEx"/>
              </Editable>
              <div onClick={this.onChangeTiTlePosition} name="textPosition" value={this.state.textPosition} className="text-format-button">
                { textButton }
              </div>
            </div>
            <hr/>
            <button type="button" onClick={() => { this.props.update(this); }} className="btn btn-primary">SAVE</button>
            <button type="button" onClick={() => { this.props.delete(this); }} className="btn btn-danger">DELETE</button>

          </div>
        </div>

      </div>
    );
  }
}

export default RowComponent;