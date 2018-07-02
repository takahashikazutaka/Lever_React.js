import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { ListGroup } from "reactstrap";
import { IUser, UserHorizontal } from "../../../components";

const blah = gql`
  {
    qUsers {
      username
      firstName
      lastName
      picturePath
      email
      phone
      privilege
      competencyLinks {
        _id
        level
        competency {
          _id
          name
          description
        }
      }
    }
  }
`;

export const UserHorizontals = () => (
  <ListGroup flush={true}>
    <Query query={blah}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }
        return data.qUsers.map((user: IUser) => (
          <UserHorizontal user={user} key={user._id} />
        ));
      }}
    </Query>
  </ListGroup>
);
