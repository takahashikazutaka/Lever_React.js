import * as React from "react";
import {
  Badge,
  Card,
  CardImg,
  ListGroupItem,
  ListGroupItemHeading
} from "reactstrap";
import { IProjectComponent } from "../../../components";

export const ProjectHorizontal = ({ project }: IProjectComponent) => {
  const imageSize = "50px";

  return (
    <ListGroupItem
      className="d-flex flex-row align-items-center"
      style={{ "max-height": "150px", padding: "5px" }}
    >
      <Card
        className="float-left"
        style={{
          height: imageSize,
          "max-width": imageSize,
          "min-width": imageSize
        }}
      >
        <CardImg
          top={true}
          height={imageSize}
          width={imageSize}
          style={{ objectFit: "cover", "background-color": "#dc3545" }}
        />
      </Card>
      <ListGroupItemHeading style={{ width: "100%", "margin-left": "10px" }}>
        {project.name}
        <Badge
          color="info"
          className="float-right"
          style={{ "margin-right": "5px" }}
        >
          {project.animals.length}
        </Badge>
        <Badge
          color="primary"
          className="float-right"
          style={{ "margin-right": "5px" }}
        >
          {project.colonies.length}
        </Badge>
        <Badge
          color="warning"
          className="float-right"
          style={{ "margin-right": "5px" }}
        >
          {project.users.length}
        </Badge>
      </ListGroupItemHeading>
    </ListGroupItem>
  );
};
