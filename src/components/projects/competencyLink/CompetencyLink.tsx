import * as React from "react";
import { Competency, ICompetency } from "../../../components";
import "./style.css";

export interface ICompetencyLinkComponent {
  key: string;
  competencyLink: ICompetencyLink;
}

export interface ICompetencyLink {
  key: string;
  _id: string;
  competency: ICompetency;
  level: number;
}

export const CompetencyLink = ({
  competencyLink
}: ICompetencyLinkComponent) => (
  <Competency
    competency={competencyLink.competency}
    key={competencyLink.competency._id}
    level={competencyLink.level}
  />
);
