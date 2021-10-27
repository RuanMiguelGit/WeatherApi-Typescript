import { stormGlass } from '../stormGlass'
import axios from 'axios'
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import * as stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
jest.mock('axios')

describe('storm glas test',  () => {
    it('should return the data normalized', async () => {
    let lat = 464546
    let log = 7897987    
    axios.get = jest.fn().mockResolvedValue(stormglassWeatherPointFixture)
    const StormGlass = new stormGlass(axios)
    const response = await StormGlass.fetchPoints(lat, log)
    expect(response).toEqual(stormglassNormalizedResponseFixture)
    })
})