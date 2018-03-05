//componente funcional por eso no tiene {component}
import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
	<div>
		<WeatherLocation city = {'Santiago,scl'}/>
    <WeatherLocation city = {'Bogotá,col'}/>
    <WeatherLocation city = {'Rio de Janeiro,br'}/>
    <WeatherLocation city = {'Buenos Aires,ar'}/>
	</div>
)

export default LocationList;