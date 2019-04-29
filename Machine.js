class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const colors = { fontSize: '50px', backgroundColor: 'purple' };
    const msgLoser = 'You LOSE!';
    const msgWinner = 'You WIN!';
    const winner = s1 === s2 && s2 === s3;
    const msg = winner ? msgWinner : msgLoser;
    return (
      <div className='Machine'>
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <h1 className={winner ? 'win' : 'lose'}>{msg}</h1>
      </div>
    );
  }
}
