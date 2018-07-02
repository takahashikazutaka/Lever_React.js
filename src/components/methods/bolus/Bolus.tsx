import { IUser } from "../../../components";

export interface IBolusComponent {
    key: string,
    bolus: IBolus
}

export interface IBolus {
    _id: string,
    trial?: number,
    onsetFrame?: number,
    timeGrabbedFrame?: number,
    methodRun?: number,
    reviewerOne?: IUser,
    reviewerTwo?: IUser
}