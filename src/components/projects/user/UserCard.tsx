import * as React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { IUserComponent } from "../../../components";

export const UserCard = ({ user }: IUserComponent) => {
  let privilegeBadgeColor;
  if (user.privilege === "ADMIN") {
    privilegeBadgeColor = "success";
  } else {
    privilegeBadgeColor = "warning";
  }

  return (
    <Card style={{ "max-width": "350px", "min-width": "300px" }}>
      <CardImg
        top={true}
        height="200px"
        style={{ objectFit: "cover" }}
        src={user.picturePath}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>
          {user.firstName} {user.lastName}{" "}
          <Badge className="float-right" color={privilegeBadgeColor}>
            {user.privilege}
          </Badge>
        </CardTitle>
        <CardText>{user.username}</CardText>
        <ListGroup flush={true}>
          <ListGroupItem>Phone: {user.phone}</ListGroupItem>
          <ListGroupItem>Email: {user.email}</ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter>
        <Button color="primary">Visit Profile</Button>
      </CardFooter>
    </Card>
  );
};
