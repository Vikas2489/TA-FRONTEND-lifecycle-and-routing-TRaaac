import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      activeInfo: '',
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      user: this.state.user,
      activeInfo: this.state.activeInfo,
      loading: true,
    });
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          user: data.results[0],
          activeInfo:
            'my name is ' +
            data.results[0].name.first +
            ' ' +
            data.results[0].name.last,
          loading: false,
        })
      );
    this.setState({
      user: this.state.user,
      activeInfo: this.state.activeInfo,
      loading: false,
    });
  }

  handleHoverOverProfile = () => {
    return this.setState({
      activeInfo:
        'my name is' +
        this.state.user.name.first +
        ' ' +
        this.state.user.name.last,
    });
  };

  handleHoverOverEmail = () => {
    return this.setState({
      activeInfo: 'my email is ' + this.state.user.email,
    });
  };

  handleHoverOverAge = () => {
    return this.setState({
      activeInfo: 'my age is ' + this.state.user.dob.age,
    });
  };

  handleHoverOverAddress = () => {
    return this.setState({
      activeInfo:
        'my address is ' +
        this.state.user.location.street.name +
        this.state.user.location.street.number,
    });
  };

  handleHoverOverPhone = () => {
    return this.setState({
      activeInfo: 'my phone number is ' + this.state.user.phone,
    });
  };

  handleHoverOverPassword = () => {
    return this.setState({
      activeInfo: 'my password is ' + this.state.user.login.password,
    });
  };

  render() {
    if (this.state.user) {
      return (
        <div className="flex flex-col">
          <figure className="rounded-full  w-10 h-10">
            <img src={this.state.user.picture.thumbnail} alt="" />
          </figure>
          <p>{this.state.activeInfo}</p>
          <ul className="flex space-x-2 my-3">
            <li onMouseEnter={this.handleHoverOverProfile}>
              <i className="fas fa-user"></i>
            </li>
            <li onMouseEnter={this.handleHoverOverEmail}>
              <i className="fas fa-envelope"></i>
            </li>
            <li onMouseEnter={this.handleHoverOverAge}>age</li>
            <li onMouseEnter={this.handleHoverOverAddress}>
              <i className="fas fa-street-view"></i>
            </li>
            <li onMouseEnter={this.handleHoverOverPhone}>
              <i className="fas fa-phone"></i>
            </li>
            <li onMouseEnter={this.handleHoverOverPassword}>
              <i className="fas fa-lock"></i>
            </li>
          </ul>
          <button
            className="border-2 border-solid border-grey w-40 rounded-full px-5 py-2 bg-black text-white"
            type="button"
            onClick={() => {
              this.setState({
                loading: true,
              });
              fetch('https://randomuser.me/api/')
                .then((res) => res.json())
                .then((data) =>
                  this.setState({
                    user: data.results[0],
                    activeInfo:
                      'my name is ' +
                      data.results[0].name.first +
                      ' ' +
                      data.results[0].name.last,
                    loading: false,
                  })
                );
            }}
          >
            {this.state.loading ? 'Loading.....' : 'Random User'}
          </button>
        </div>
      );
    }
    return <div className="loader"></div>;
  }
}

export default App;
