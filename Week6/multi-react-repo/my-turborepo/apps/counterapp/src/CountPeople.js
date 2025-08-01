import React from "react";

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  };

  updateExit = () => {
    this.setState((prevState) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  };

  render() {
    const containerStyle = {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "100px",
    };

    const buttonStyle = {
      padding: "10px 15px",
      border: "1px solid #ccc",
      backgroundColor: "#90EE90",
      cursor: "pointer",
      marginRight: "10px",
    };

    return (
      <div style={containerStyle}>
        <div>
          <button style={buttonStyle} onClick={this.updateEntry}>
            Login
          </button>
          <span>{this.state.entrycount} People Entered!!!</span>
        </div>
        <div>
          <button style={buttonStyle} onClick={this.updateExit}>
            Exit
          </button>
          <span>{this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
