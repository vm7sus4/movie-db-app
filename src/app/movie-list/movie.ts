export interface IMovie {
    objectId: string;
    image: any;
    createdAt: string;
    updatedAt: string;
    title: string;
    releaseYear: string;
    genre: Array<string>;
    rating:number;
    description: string;
}