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
    }[],
  stats: 
    {
      base_stat: string;
      effort: number;
      stat: {
        name: string;
        url: string;
      }
    }[];
}