import { ICompetencyLink, IMethod, IProject, IUser } from "../../../components";

export interface IEventComponent {
    key: string,
    event: IEvent
}

export interface IEvent {
    _id: string,
    description?: string,
    method?: IMethod,
    project?: IProject,
    animal?: string,
    user?: IUser,
    addDate?: number,
    dueDate?: number,
    claimDate?: number,
    completionDate?: number,
    competencyLinks?: ICompetencyLink[]
}