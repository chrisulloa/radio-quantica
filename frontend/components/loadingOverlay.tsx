import { Component } from "react";

function Overlay() {
  return (
    <div className="absolute z-10 w-full h-full top-0 left-0 bg-black opacity-75"></div>
  );
}

export class LoadingOverlay extends Component<{ delay: number }> {
  state = {
    showOverlay: false,
  };
  timer: NodeJS.Timeout | undefined;

  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState({ showOverlay: true }),
      this.props.delay
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return this.state.showOverlay && <Overlay />;
  }
}
