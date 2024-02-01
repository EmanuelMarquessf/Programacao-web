type PlanetSituation = 'habitado' | 'habitavel' | 'inabitavel';
type PlanetCoordinates = [number, number, number, number];

type Planet = {
  name: string
  coordinates: PlanetCoordinates
  situation: PlanetSituation
  satellities: string[]
}

const planetArray: Planet[] = [];

function planetCreate(name : string, coord: PlanetCoordinates, situation: PlanetSituation){
  planetArray.push({name, coord, situation, satellities: []});
}

function findPlanet(planetName){
  planetArray.filter()
}

function situationModif(){

}