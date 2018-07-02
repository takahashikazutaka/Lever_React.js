import { IGenotype, IPhenotypeLink } from "../../../components";


export interface IAnimalComponent {
    key: string,
    animal: IAnimal
}

export interface IAnimal {
    _id: string,
    description?: string,
    genotype?: IGenotype,
    phenotypeLinks?: IPhenotypeLink[],
    sex?: number,
    dob?: number,
    dod?: number,
    causeOfDeath?: string,
    cage?: number,
    coat?: number,
    leftEarPunches?: number,
    rightEarPunches?: number
}