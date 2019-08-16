import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class AppBar extends React.Component {
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header dark = {this.props.dark} style = {this.props.style}>

        <Appbar.Content
          title={this.props.title}
        />
      </Appbar.Header>
    );
  }
}