import { AxiosStatic } from "axios";


export interface StormGlassSource {
    [key:string]: number
}

export interface StormGlassPoint { 
    readonly time: string
  readonly waveHeight: StormGlassSource;
  readonly waveDirection: StormGlassSource;
  readonly swellDirection: StormGlassSource;
  readonly swellHeight: StormGlassSource;
  readonly swellPeriod: StormGlassSource;
  readonly windDirection: StormGlassSource;
  readonly windSpeed: StormGlassSource;
}

export interface StormGlassForescastResponse {
    hours:StormGlassPoint[]
}

export interface ForecastPoint {
    time: string;
    waveHeight: number;
    waveDirection: number;
    swellDirection: number;
    swellHeight: number;
    swellPeriod: number;
    windDirection: number;
    windSpeed: number;
  }


export class stormGlass {
    readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISource = 'noaa';
    constructor(protected request: AxiosStatic) {}

    public async fetchPoints(lat:number, log:number):Promise<{}>{
    return this.request.get<StormGlassForescastResponse>(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lat}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`,
    )
   }


   private normalizeResponse(
       points:StormGlassForescastResponse
   ):ForecastPoint[] {
    return 
   } 

}