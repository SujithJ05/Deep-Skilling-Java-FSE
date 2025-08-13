import React from "react";

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstname: "",
      image: "",
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const user = data.results[0];
      this.setState({
        title: user.name.title,
        firstname: user.name.first,
        image: user.picture.large,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  render() {
    const { title, firstname, image, loading } = this.state;

    if (loading) {
      return <h3>Loading user data...</h3>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>User Details</h2>
        <p>
          {title} {firstname}
        </p>
        <img src={image} alt="User" style={{ borderRadius: "50%" }} />
      </div>
    );
  }
}

export default Getuser;
