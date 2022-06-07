export interface PokeDTO {
  base_experience: number;
  id: number;
  name: string;
  height: number;
  weight: number;
  types: 
    {
      slot: number;
      type: {
        name: string;
        url: string;
      }
    }[];
  stats: 
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      }
    }[];
  moves:{
    move: {
      name: string,
      url: string,
    }
  }[];
}