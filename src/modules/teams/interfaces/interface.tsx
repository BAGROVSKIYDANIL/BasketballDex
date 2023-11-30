export interface IFormData
{
    name: string;
    division: string;
    conference: string;
    foundationYear: number | null;
    imageUrl: string | null;
}

export interface IChangeInput 
{
    name: string;
    value: string | number
}