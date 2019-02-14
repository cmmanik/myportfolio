import React, {Component}  from 'react';
import {Grid, Cell, Card, CardTitle, CardActions} from 'react-mdl'
class landdinPage extends Component {
    render(){
        return (
            <div className="ddddddddd" style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div style={{ paddingTop:'100px'}}></div>
                    <Card shadow={0} style={{width: '256px', height: '256px', background: 'url(https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/50402451_2298552893804012_6021531281269981184_n.jpg?_nc_cat=102&_nc_ht=scontent.fdac24-1.fna&oh=5093d08de6690d5a45a4d4cea819fbe5&oe=5CF5B06F) center / cover', margin: 'auto'}}>
                        <CardTitle expand />
                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                            <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                               <p className="names">CM Manik</p>
                            </span>
                        </CardActions>
                    </Card>

                    <div className="banner-text">
                        <h2>Full Stack Web Developer</h2>
                        <p>HTML || CSS || JavaScript || Node.JS || Express</p>
                        <div className="social-links">
                            <ul className="nav">
                                <li><a href="https://fb.com/cmmanik5" target="blank"><i className="fa fa-facebook-square fba"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/cmmanik/"><i className="fa fa-linkedin-square linkdins"></i></a></li>
                                <li><a href="https://github.com/cmmanik" target="blank"><i className="fa fa-github-square githubs" ></i></a></li>
                                <li><a href="/"><i className="fa fa-youtube youtbs"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default landdinPage;