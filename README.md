# Selectrify

Because passing callbacks down the component tree is a pain.

## Install

```
npm i selectrify
```

## Example
```js
import { h, Component, render } from 'preact';
import select from 'selectrify';

class App extends Component {
  state = {
    nameVisible: true,
    name: 'David',
    shoeSize: 9,
    location: 'USA'
  }

  render() {
    return (
      <div class="root">
        <Profile {...select(this, state => { 
          return { name: state.name, nameVisible: state.nameVisible };
        }) } />
      </div>
    );
  }
}

class Profile extends Component {

  toggleName = () => {
    this.props.setState({ nameVisible: !this.props.nameVisible });
  }

  render({ name, nameVisible }) {
    return (
      <div>
        <button onClick={this.toggleName}>Toggle</button>
        {nameVisible && <span>{name}</span>}
      </div>
    )
  }

}
```
