export type PokedexEntry = {
  "id": number;
  "name": {
    "english": string;
    "japanese": string;
    "chinese": string;
    "french": string;
  };
  "type": string[];
  "base": {
    "HP": number;
    "Attack": number;
    "Defense": number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    "Speed": number;
  };
}

export type Pokemon = {
  "id": number;
  "name": string;
  "type": string[];
  "base": {
    "HP": number;
    "Attack": number;
    "Defense": number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    "Speed": number;
  };
  "image": string;
  "sprite": string;
}