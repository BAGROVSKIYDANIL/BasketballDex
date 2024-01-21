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
    id: number;
}
export interface IArrTeamCard
{
    id: number;
    name: string;
    foundationYear: number;
    imageUrl: string;
    division: string;
    conference: string;
}
export interface TeamState
{
    imageUrl: string;
    teamArrCard: IArrTeamCard[],
    pageIndex:
    {
        startIndex: number,
        endIndex: number  
    }
    paginateTeam:
    {
        count: number | null;
        page: number | null;
        size: number | null;
        data: IArrTeamCard[]
    }
}