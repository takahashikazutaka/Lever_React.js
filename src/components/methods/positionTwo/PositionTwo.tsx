

export interface IPositionTwoComponent {
    key: string,
    positionTwo: IPositionTwo
}

export interface IPositionTwo {
    _id: string,
    trial?: number,
    reviewerType?: number,
    firstSwallowOnsetFrame?: number,
    pttEndFrame?: number,
    ettEndFrame?: number,
    secondSwallowOnsetFrame?: number,
    esophagusEmptiesPriorToSecondSwallow?: number,
    numberOfSwallowsToClearEsophagus?: number,
    swallowInhibition?: boolean,
    methodRun?: number
}