export interface IFormPlayerData
{
    name: string;
    position: string;
    avatarUrl: string;
    team: number | null;
    height: number | null;
    weight: number | null;
    birthday: Date | null;
    number: number | null;
    
}
export interface IPlayersState
{
    imageUrl: string;
    arrPosition: string[];
    arrTeams: IArrTeams[];
    arrPlayersCard: IPlayersCard[];
    selectedTeam: string[]
    paginate:
    {
        count: number | null;
        page: number | null;
        size: number | null;
    }
    pageIndex:
    {
        startIndex: number,
        endIndex: number  
    }
}
export interface IArrTeams
{
    id: number;
    name: string;
}
export interface IPlayersCard
{
    name: string;
    position: string;
    avatarUrl: string;
    team: number | null;
    height: number | null;
    weight: number | null;
    birthday: Date | null;
    number: number | null;
}
export interface CardsPlayersItemProps
{
    avatarUrl: string;
    name: string;
    team: number;
    number: number
}