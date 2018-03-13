import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
// import { setCity } from './actions';
// import { store } from './store';
import './App.css';

const cities = [
	'Buenos Aires,ar',
	'Bogotá,col',
	'Santiago,scl',
	'Ciudad de México,mx',
	'Madrid,es',
	'Rio de Janeiro,br'
];


class App extends Component {
/*constructor() {
  super();
  this.state = {
    city : null
  }
}*/
  render() {
    //const { city } = this.state;
    return ( 
    	<MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>  
              <LocationListContainer cities = { cities }>
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className = 'detail'>
                  <ForecastExtendedContainer>
                    
                  </ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

          /*<MuiThemeProvider>
        		<div className = "App" >
              <LocationList 
              	cities = { cities } 
              	onSelectedLocation = {this.handleSelectionLocation}>

              </LocationList>
            </div>
          </MuiThemeProvider>*/
        );
    }
}
// App.propTypes = {
//  setCity : PropTypes.func.isRequired,
// }

// connect toma lo que estan haciendo las dos funcionesy lo lleva a app
export default App;

