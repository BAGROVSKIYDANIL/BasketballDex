export interface IFormData
{
    name: string;
    division: string;
    conference: string;
    foundationYear: number | null;
    imageUrl: string;
}
export interface CardsTeamsItemProps {
    imageUrl: string;
    name: string;
    year: number;
}
export interface IArrTeamCard
{
    id: number;
    name: string;
    foundationYear: number;
    imageUrl: string;
    conference: string;
}