import { ICompetencyLink } from "../../../components";

export interface IUserComponent {
  key: string;
  user: IUser;
}

export interface IUser {
  _id: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  privilege?: string;
  competencyLinks?: ICompetencyLink[];
  picturePath?: string;
}
