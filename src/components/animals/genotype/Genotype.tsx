

export interface IGenotypeComponent {
    key: string, 
    genotype: IGenotype
}

export interface IGenotype {
    _id: string,
    name?: string,
    description?: string
}