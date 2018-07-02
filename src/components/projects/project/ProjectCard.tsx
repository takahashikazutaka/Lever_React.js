import * as React from "react";
import Moment from "react-moment";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { IProjectComponent } from "../../../components";

export const ProjectCard = ({ project }: IProjectComponent) => {
  return (
    <Card style={{ "max-width": "350px", "min-width": "300px" }}>
      <CardHeader style={{ "background-color": "#dc3545", height: "40px" }} />
      <CardBody>
        <CardTitle>{project.name}</CardTitle>
        <CardText>{project.description}</CardText>
        <ListGroup flush={true}>
          <ListGroupItem>
            Start Date:{"  "}
            <Moment format="MMM DD YYYY" unix={true}>
              {project.startDate}
            </Moment>
          </ListGroupItem>
          <ListGroupItem>
            Competion Date:{" "}
            <Moment format="MMM DD YYYY" unix={true}>
              {project.endDate}
            </Moment>
          </ListGroupItem>
          <ListGroupItem>
            Users
            <Badge className="float-right" color="warning">
              {project.users.length}
            </Badge>
          </ListGroupItem>
          <ListGroupItem>
            Colonies
            <Badge className="float-right" color="primary">
              {project.colonies.length}
            </Badge>
          </ListGroupItem>
          <ListGroupItem>
            Animals
            <Badge className="float-right" color="info">
              {project.animals.length}
            </Badge>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter color="secondary">
        <Button color="primary">View Project</Button>
      </CardFooter>
    </Card>
  );
};
