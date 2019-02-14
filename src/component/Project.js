import React, {Component}  from 'react';
import {Tab, Tabs, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button, Grid, Cell} from 'react-mdl';

let cardd = (

            <div className="demo-grid">
                <Card shadow={0} style={{width: '75%', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Live </Button>
                        <Button colored>Github </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>

  
)

class Project extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
        
    }


    toogleCat() {
        if(this.state.activeTab === 0) {
            return (
                <Grid>
                    <Cell col={4}>{cardd}</Cell>
                    <Cell col={4}>{cardd}</Cell>
                    <Cell col={4}>{cardd}</Cell>
                </Grid>

            )
        } else if(this.state.activeTab === 1) {
            return (
                <Grid>
                    <Cell col={4}>{cardd}</Cell>
                    <Cell col={4}>{cardd}</Cell>
                    <Cell col={4}>{cardd}</Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Grid>
                <Cell col={4}>{cardd}</Cell>
                <Cell col={4}>{cardd}</Cell>
                <Cell col={4}>{cardd}</Cell>
                </Grid>

            )
        }
    }
    

    render(){
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section>
                    
                    <Grid className="demo-grid">
                        <Cell col={12}>
                            <div className="content">{this.toogleCat()}</div>
                        </Cell>
                        
                    </Grid>
                    
                </section>
            </div>  
        )
    }
}

export default Project;