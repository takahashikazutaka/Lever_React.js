import { IPhenotype } from "../../../components";

export interface IPhenotypeLinkComponent {
    key: string,
    phenotypeLink: IPhenotypeLink
}

export interface IPhenotypeLink {
    _id: string,
    phenotype?: IPhenotype,
    date?: number
}