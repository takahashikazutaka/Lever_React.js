import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { ListGroup } from "reactstrap";
import { IProject, ProjectHorizontal } from "../../../components";

const queryProjects = gql`
  {
    qProjects {
      _id
      name
      description
      startDate
      endDate
      colonies {
        name
        description
      }
      users {
        _id
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
      animals {
        _id
      }
    }
  }
`;

export const ProjectHorizontals = () => (
  <ListGroup flush={true}>
    <Query query={queryProjects}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }
        return data.qProjects.map((project: IProject) => (
          <ProjectHorizontal project={project} key={project._id} />
        ));
      }}
    </Query>
  </ListGroup>
);
