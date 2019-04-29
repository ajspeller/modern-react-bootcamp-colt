class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name='AJ' hobbies={['Programming', 'Swimming', 'Drawing']} />
        <Friend name='Keira' hobbies={['Photography', 'Crafts', 'Hair']} />
        <Friend name='Amir' hobbies={['Art']} />
        <h1>Slot Machines!</h1>
        <Machine s1='x' s2='x' s3='y' />
        <Machine s1='😉' s2='😉' s3='😉' />
        <Hello
          to='Keira'
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny
          bangs={4}
          img='https://images.unsplash.com/photo-1555852095-64e7428df0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        />
        <Hello
          to='Mom'
          from='Dad'
          img='https://images.unsplash.com/photo-1555852095-64e7428df0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

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
