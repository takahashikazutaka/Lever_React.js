import * as React from "react";
import {
  Badge,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import "./style.css";

export interface ICompetencyComponent {
  key: string;
  competency: ICompetency;
  level?: number;
}

export interface ICompetency {
  _id: string;
  name?: string;
  description?: string;
}

export const Competency = ({ competency, level }: ICompetencyComponent) => {
  let levelBadge;
  if (level) {
    levelBadge = (
      <Badge className="float-right" color="primary">
        {level}
      </Badge>
    );
  }

  return (
    <ListGroupItem>
      <ListGroupItemHeading>
        {competency.name} {levelBadge}
      </ListGroupItemHeading>
      <ListGroupItemText>{competency.description}</ListGroupItemText>
    </ListGroupItem>
  );
};
