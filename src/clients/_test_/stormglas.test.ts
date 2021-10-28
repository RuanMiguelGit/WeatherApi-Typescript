import { StormGlass } from '../stormGlass'
import axios from 'axios'
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import * as stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
jest.mock('axios')

describe('storm glas test',  () => {
    it('should return the data normalized', async () => {
    const lat = 464546
    const log = 7897987    
    axios.get = jest.fn().mockResolvedValue({data: stormglassWeatherPointFixture })
    const stormGlass = new StormGlass(axios)
    const response = await stormGlass.fetchPoints(lat, log)
    expect(response).toEqual(stormglassNormalizedResponseFixture)
    })
})