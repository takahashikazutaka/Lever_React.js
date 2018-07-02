import { IAnimal } from "../../../components";

export interface IBreedingEventComponent {
    key: string,
    breedingEvent: IBreedingEvent
}

export interface IBreedingEvent {
    _id: string,
    description?: string,
    mom?: IAnimal,
    dad?: IAnimal,
    pairFormingDate?: number,
    weanedDate?: number,
    litterSize?: number,
    offspring?: IAnimal[]
}