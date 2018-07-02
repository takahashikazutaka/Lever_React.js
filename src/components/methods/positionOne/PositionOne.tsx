
export interface IPositionOneComponent {
    key: string,
    positionOne: IPositionOne
}

export interface IPositionOne {
    _id: string,
    trial?: number,
    reviewerType?: number,
    firstSwallowOnsetFrame?: number,
    pttEndFrame?: number,
    secondSwallowOnsetFrame?: number,
    jawCyclesPerSwallow?: number,
    twoSecFromSwallowOnsetFrame?: number,
    swallowsPerTwoSeconds?: number,
    lickOnsetFrame?: number,
    lickEndFrame?: number,
    lickRate?: number,
    methodRun?: number,
    videoPath?: string
}