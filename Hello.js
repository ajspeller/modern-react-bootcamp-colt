class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1
  };
  render() {
    console.log(this.props);
    const { to, from, img } = this.props;
    let bangs = '!'.repeat(this.props.bangs);
    return (
      <div>
        <h1>
          Hello {to} from {from} {bangs}
        </h1>
        <img src={img} />
      </div>
    );
  }
}
