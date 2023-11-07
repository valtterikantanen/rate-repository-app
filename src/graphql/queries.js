import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS_FRAGMENT } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS_FRAGMENT}

  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_FIELDS_FRAGMENT}

  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
