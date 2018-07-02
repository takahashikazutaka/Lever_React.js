import * as React from "react";
import {
  Badge,
  Card,
  CardImg,
  ListGroupItem,
  ListGroupItemHeading
} from "reactstrap";
import { IUserComponent } from "../../../components";

export const UserHorizontal = ({ user }: IUserComponent) => {
  const imageSize = "60px";

  let privilegeBadgeColor;
  if (user.privilege === "ADMIN") {
    privilegeBadgeColor = "success";
  } else {
    privilegeBadgeColor = "warning";
  }

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
          style={{ objectFit: "cover" }}
          src={user.picturePath}
          alt="Card image cap"
        />
      </Card>
      <ListGroupItemHeading style={{ width: "100%", "margin-left": "10px" }}>
        {user.firstName} {user.lastName}{" "}
        <Badge className="float-right" color={privilegeBadgeColor}>
          {user.privilege}
        </Badge>
      </ListGroupItemHeading>
    </ListGroupItem>
  );
};
