class Machine extends React.Component {
  render() {
    let msg = 'You LOSE!';
    const {s1, s2, s3} = this.props;
    if ((s1===s2) && (s2===s3)) {
      msg = "You WIN!";
    }
    return (
      <div>
        <h1>{s1} {s2} {s3}</h1>
        <h1>{msg}</h1>
      </div>
    );
  }
}