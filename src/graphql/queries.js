import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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

export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
