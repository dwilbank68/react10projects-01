var Navbar = React.createClass({

    //propTypes(){
    //    brand: React.PropTypes.string.isRequired
    //},

    getDefaultProps(){
        return {
            brand: 'My Websyite',
            color: 'light'
        }
    },

    render: function(){

        if (this.props.color == 'dark'){
            var navClass = 'navbar navbar-inverse';
        } else {
            var navClass = 'navbar navbar-default';
        }

        var homeActive = '';
        var aboutActive = '';

        if (this.props.page == 'home'){
            homeActive = 'active';
        } else if (this.props.page == 'about') {
            aboutActive = 'active';
        }

        return(
            <div>
                <nav className={navClass}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#" className="navbar-brand">
                                {this.props.brand}
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="homeActive">
                                    <a href="#" onClick={this.props.homeClick}>
                                        Home
                                    </a>
                                </li>
                                <li className="aboutActive">
                                    <a href="#" onClick={this.props.aboutClick}>
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
});

class PageHome extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h2 className="page-header">Home</h2>
                    <p>Homey content</p>
                </div>
            </div>
        )
    }
}

class PageAbout extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h2 className="page-header">About Us</h2>
                    <p>Abouty content...</p>
                </div>
            </div>
        )
    }
}

//class Footer extends React.Component {

var Footer = React.createClass({

    getDefaultProps(){
        return {
            website: 'My Website',
            copy_year: 2016
        }
    },

    render() {
        return(
            <div className="container">
                <hr/>
                <footer>
                    <p>&copy; {this.props.copy_year} {this.props.website}</p>
                </footer>
            </div>
        )
    }

})
//}

//class App extends React.Component {

var App = React.createClass({

    getInitialState(){
        return {
            page: 'home'
        }
    },

    handleHomeClick() {
        this.setState({
            page: 'home'
        })
    },

    handleAboutClick() {
        this.setState({
            page: 'about'
        })
    },

    render() {

        if (this.state.page == 'home'){
            var jumbotron = <Jumbotron />
            var page = <PageHome/>
        } else if (this.state.page == 'about') {
            var jumbotron = '';
            var page = <PageAbout/>
        }

        return(
            <div>
                <Navbar color="dark"
                        page={this.state.page}
                        homeClick={this.handleHomeClick}
                        aboutClick={this.handleAboutClick}/>
                {jumbotron}
                {page}
                <Footer />
            </div>
        )
    }

})
//}

var Jumbotron = React.createClass ({

    PropTypes: {
        heading: React.PropTypes.string,
        text: React.PropTypes.string,
        link: React.PropTypes.string
    },

    getDefaultProps(){
        return {
            heading: 'Welcome!',
            text: 'Welcome to our shiny new website built with React Components',
            link: 'http://google.com'
        }
    },

    render() {
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <p><a className="btn btn-primary btn-lg"
                            href={this.props.link} role="button">
                            Learn More &raquo;
                    </a></p>
                </div>
            </div>
        )
    }

})

ReactDOM.render(
    <App />,
    document.getElementById('app')
);