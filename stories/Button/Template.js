import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Button from 'wix-style-react/Button';
import {Close} from 'wix-style-react/Icons';

export class Form extends Component {

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    let iconSize = '6px';
    if (this.props.height === 'large') {
      iconSize = '8px';
    }
    if (['close-standard', 'close-dark', 'close-transparent'].indexOf(this.props.theme) < 0) {
      iconSize = '12px';
    }

    let icons = {};
    if (this.props.prefixIcon) {
      icons.prefixIcon = this.props.prefixIcon;
    }

    if (this.props.suffixIcon) {
      icons.suffixIcon = this.props.suffixIcon;
    }

    return (
      <Button
        disabled={this.props.disabled}
        height={this.props.height}
        theme={this.props.theme}
        {...icons}>
        {this.props.iconOnly ? <Close size={iconSize}/> : this.props.text}
      </Button>
    );
  }

  render() {
    return this.getComponent();
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  theme: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool.isRequired,
  iconOnly: React.PropTypes.bool,
  text: React.PropTypes.string,
  height: React.PropTypes.string,
  prefixIcon: React.PropTypes.node,
  suffixIcon: React.PropTypes.node
};

export default Form;

