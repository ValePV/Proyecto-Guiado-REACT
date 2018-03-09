import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './component/LocationList';
import ForecastExtended from './component/ForecastExtended';
import { setCity } from './actions';
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
constructor() {
  super();
  this.state = {
    city : null
  }
}

	handleSelectionLocation = (city) => {
    this.setState({city});
		console.log(`handleSelectionLocation ${city}`);
    /*
    const action = {
      type : 'setCity',
      value : city 
    }*/
    store.dispatch(setCity(city));
	}
    render() {
        const { city } = this.state;
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
                  <LocationList
                    cities = { cities }
                    onSelectedLocation = { this. handleSelectionLocation}>
                  </LocationList>
                </Col>
                <Col xs={12} md={6}>
                  <Paper zDepth={4}>
                    <div className = 'detail'>
                      {
                        city === null ? null
                        : <ForecastExtended
                        city = { city }>
                        
                        </ForecastExtended>
                      }
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

const mapDispacthToPropsActions = () => {};

const AppConnected = connect(null, mapDispacthToPropsActions)(App);

export default AppConnected;