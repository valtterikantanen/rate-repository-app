import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      ownerAvatarUrl
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      url
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
