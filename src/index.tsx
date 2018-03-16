import { Component, h, render } from 'preact';

export default function select<S>(component: Component<any, any>, keyCb: (state: S) => any) {
  const container = { setState: component.setState.bind(component) };
  const containerProps = keyCb(component.state);
  let keys = Object.keys(containerProps);
  let i = keys.length;
  while(i--) container[keys[i]] = component.state[keys[i]];
  return container;
}

