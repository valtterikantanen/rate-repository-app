import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS_FRAGMENT, REVIEW_FIELDS_FRAGMENT } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS_FRAGMENT}

  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
  ${REVIEW_FIELDS_FRAGMENT}

  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
      url
      reviews {
        edges {
          node {
            ...ReviewFields
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
  ${REVIEW_FIELDS_FRAGMENT}

  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            id
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
`;
