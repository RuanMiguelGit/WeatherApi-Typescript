import { AxiosStatic } from "axios";


export class stormGlass {
    readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISource = 'noaa';
    constructor(protected request: AxiosStatic) {}

    public async fetchPoints(lat:number, log:number):Promise<{}>{
    return this.request.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lat}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`,
    )
   }

}