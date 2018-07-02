import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { CardDeck } from "reactstrap";
import { IUser, UserCard } from "../../../components";

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

export const UserCards = () => (
  <CardDeck>
    <Query query={blah}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }
        return data.qUsers.map((user: IUser) => (
          <UserCard user={user} key={user._id} />
        ));
      }}
    </Query>
  </CardDeck>
);
