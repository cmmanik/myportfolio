import React, { Component } from 'react';
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './component/Main';
// import Footer from './component/layout/Footer'
class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-coler" title={<Link style={{textDecoration:'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    {/* <Link to="/about">About</Link> */}
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    {/* <Link to="/about">About</Link> */}
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <Main />
                {/* <Footer /> */}
            </Content>
            <Header className="footer-color">
                <Navigation style={{paddingLeft: '35%'}}>
                    <Link className="fss" to="/">Home</Link>
                    <Link className="fss" to="/resume">Resume</Link>
                    <Link className="fss" to="/projects">Projects</Link>
                    {/* <Link className="fss" to="/about">About</Link> */}
                    <Link className="fss" to="/contact">Contact</Link>
                </Navigation>
            </Header>
        </Layout>
    </div>
    );
  }
}

export default App;
