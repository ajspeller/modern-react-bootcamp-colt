class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDEMO extends React.Component {
  render() {
    return (
      <div>
        <h1>My number is: {getMood()}</h1>
        <h1>My current mood is 😅</h1>
        <img src='https://images.unsplash.com/photo-1555852095-64e7428df0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
      </div>
    );
  }
}

//ReactDOM.render(<JSXDEMO />, document.getElementById('root'));

//ReactDOM.render(<NumPicker />, document.getElementById('root'));
