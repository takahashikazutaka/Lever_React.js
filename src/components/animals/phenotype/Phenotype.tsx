


export interface IPhenotypeComponent {
    key: string,
    phenotype: IPhenotype
}

export interface IPhenotype {
    _id: string,
    name?: string,
    description?: string
}