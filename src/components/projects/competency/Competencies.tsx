import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { ListGroup } from "reactstrap";
import { Competency, ICompetency } from "../../../components";
import "./style.css";

const blah = gql`
  {
    qCompetencies {
      name
      description
      _id
    }
  }
`;

export const Competencies = () => (
  <ListGroup flush={true}>
    <Query query={blah}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }
        return data.qCompetencies.map((competency: ICompetency) => (
          <Competency competency={competency} key={competency._id} />
        ));
      }}
    </Query>
  </ListGroup>
);
