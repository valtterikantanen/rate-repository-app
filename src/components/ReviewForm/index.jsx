import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { CREATE_REVIEW } from '../../graphql/mutations';
import { Form } from '../Form';

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  review: '',
};

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100'),
  review: yup.string(),
});

const formFields = {
  inputs: [
    { name: 'repositoryOwnerName', placeholder: 'Repository owner name' },
    { name: 'repositoryName', placeholder: 'Repository name' },
    { name: 'rating', placeholder: 'Rating between 0 and 100', keyboardType: 'numeric' },
    { name: 'review', placeholder: 'Review', multiline: true },
  ],
  submitButton: { text: 'Create a review' },
};

export const NewReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();
  const onSubmit = async ({ repositoryOwnerName, repositoryName, rating, review }) => {
    const result = await mutate({
      variables: {
        ownerName: repositoryOwnerName,
        repositoryName,
        rating: parseInt(rating),
        text: review,
      },
    });
    navigate(`/repositories/${result.data.createReview.repositoryId}`, { replace: true });
    console.log(result);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} formFields={formFields} />}
    </Formik>
  );
};
