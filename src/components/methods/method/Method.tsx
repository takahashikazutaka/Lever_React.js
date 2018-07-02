import { IBolus, IPositionOne, IPositionTwo } from "../../../components";

export interface IMethodComponent {
    key: string,
    method: IMethod
}

export interface IMethod {
    _id: string,
    name?: string,
    description?: string,
    date?: number,
    positionOne?: IPositionOne[],
    positionTwo?: IPositionTwo[],
    bolus?: IBolus
}