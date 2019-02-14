import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render() {
        return(
          <Grid>
              <Cell col={2}>
                <p style={{color:'#C33764', fontWeight:'bold'}}>{ this.props.startYear} - { this.props.endYear }</p>
              </Cell>
              <Cell col={8}>
                <h4 style={{marginTop:'0px', textTransform:'uppercase', color:'#1D2671'}}>{this.props.schoolName}</h4>
                <p>{this.props.scInfo}</p>
              </Cell>
          </Grid>
        )
    }
}

export default Education;