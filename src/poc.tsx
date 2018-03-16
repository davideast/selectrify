import { Component, h, render } from 'preact';

import select from './';

interface AppState {
  name?: string;
  nameVisible?: boolean;
}

interface SelectProp {
  setState: (state) => any;
}

interface ProfileProps extends AppState, SelectProp { }

class Profile extends Component<ProfileProps, any> {

  toggleName = () => {
    this.props.setState({ nameVisible: !this.props.nameVisible });
  }

  render() {
    const { name, nameVisible } = this.props;
    return (
      <div>
        <button onClick={this.toggleName}>Toggle</button>
        {nameVisible && <span>{name}</span>}
      </div>
    )
  }

}

class App extends Component<{}, AppState> {
  state = {
    nameVisible: true,
    name: 'David'
  }

  render() {
    return (
      <div class="root">
        <Profile {...select<AppState>(this, state => state) } />
      </div>
    );
  }
}

render(<App />, document.body);
