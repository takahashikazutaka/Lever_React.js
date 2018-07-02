import { IAnimal } from "../../../components";


export interface IColonyComponent {
    key: string,
    colony: IColony
}

export interface IColony {
    _id: string,
    name?: string,
    description?: string,
    animals?: IAnimal[]
}