import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS_FRAGMENT = gql`
  fragment RepositoryFields on Repository {
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
`;

export const REVIEW_FIELDS_FRAGMENT = gql`
  fragment ReviewFields on Review {
    id
    text
    rating
    createdAt
  }
`;
