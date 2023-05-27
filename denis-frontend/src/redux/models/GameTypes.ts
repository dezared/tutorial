export interface AddGameRequest {
  name: string;
  description: string;
  genre: string;
  imageUrl: string;
  metaRaitng: number;
}

export interface EditGameRequest {
  name: string;
  description: string;
  genre: string;
  imageUrl: string;
  metaRaitng: number;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  genre: string;
  metaRaitng: number;
}
