export enum Region {
  Worldwide = "Worldwide",
  USA = "United States",
  SouthAmerica = "South America",
  Europe = "Europe",
  Asia = "Asia",
  Australia = "Australia",
}

type Coordinates = {
  lat: number;
  lng: number;
};

export const getCoordinatesByRegion = (region: Region): Coordinates => {
  switch (region) {
    case Region.Worldwide:
      return { lat: 0, lng: 0 };
    case Region.USA:
      return { lat: 37.09024, lng: -95.712891 };
    case Region.SouthAmerica:
      return { lat: -14.235004, lng: -51.92528 };
    case Region.Europe:
      return { lat: 46.818188, lng: 8.227512 };
    case Region.Asia:
      return { lat: 34.047863, lng: 100.619655 };
    case Region.Australia:
      return { lat: -25.274398, lng: 133.775136 };
    default:
      throw new Error("Coordinates for the provided region are not available.");
  }
};
