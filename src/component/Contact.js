import React, {Component}  from 'react';
import {Grid, Cell, List, ListItem,ListItemContent } from 'react-mdl';
class Contact extends Component {
    render(){
        return (
            <div>
                <Grid className="contact-grid">
                    <Cell col={4}>
                        <img className="imggg" src="https://pickaface.net/gallery/avatar/nadinesomrita52e59e23695c7.png" alt=""/>
                        <h2>CM Manik</h2>
                        <p className="cpp">Hi, Thanks for visite my site, My name is CM Manik, I am a full Stack web developer, i love to lear new web technology</p>
                    </Cell>
                    <Cell col={8} >
                        <h2 className="contac">Contact Me</h2>
                        <List style={{paddingLeft:'50px'}}>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-phone-square cicon"></i>
                                    <span className="ddd">+8801780849889</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-skype cicon"></i>
                                    <span className="ddd">cmmanik</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-envelope cicon"></i>
                                    <span className="ddd">mkamnik@gmail.com</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    <i className="fa fa-facebook-square cicon"></i>
                                    <span className="ddd">fb.com/cmmanik5</span>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;