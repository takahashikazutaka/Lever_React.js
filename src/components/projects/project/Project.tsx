import { IAnimal, IColony, IUser } from "../../../components";

export interface IProjectComponent {
  key: string;
  project: IProject;
}

export interface IProject {
  _id: string;
  name?: string;
  description?: string;
  startDate?: number;
  endDate?: number;
  colonies: IColony[];
  animals: IAnimal[];
  users: IUser[];
}
