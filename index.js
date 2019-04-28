class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Universe!</h1>
        <h1>Hello Universe!</h1>
        <h1>Hello Universe!</h1>
      </div>
    );
  }
}

// ReactDOM.render(<Hello />, document.getElementById('root'));

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

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your number is {num}</h1>
        <p>{ num === 7 ? 'You got my lucky number!': 'Your number is not so lucky!'} </p>
        
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
