import { AxiosStatic } from "axios";


export interface StormGlassSource {
    [key:string]: number
}

export interface StormGlassPoint { 
    readonly time: string
    readonly waveHeight: StormGlassSource

}

export interface StormGlassForescastResponse {
    hours:
}


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