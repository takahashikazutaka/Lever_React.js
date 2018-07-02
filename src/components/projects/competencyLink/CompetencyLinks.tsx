import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { ListGroup } from "reactstrap";
import { CompetencyLink, ICompetencyLink } from "../../../components";
import "./style.css";

const blah = gql`
  {
    qCompetencyLinks {
      competency {
        name
        description
        _id
      }
      level
      _id
    }
  }
`;

export const CompetencyLinks = () => (
  <ListGroup flush={true}>
    <Query query={blah}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }
        return data.qCompetencyLinks.map((competencyLink: ICompetencyLink) => (
          <CompetencyLink
            competencyLink={competencyLink}
            key={competencyLink._id}
          />
        ));
      }}
    </Query>
  </ListGroup>
);
