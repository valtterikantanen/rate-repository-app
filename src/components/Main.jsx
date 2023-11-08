import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';

import theme from '../theme';
import AppBar from './AppBar';
import { MyReviews } from './MyReviews';
import RepositoryList from './RepositoryList';
import { NewReview } from './ReviewForm';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';
import { SignUp } from './SignUpForm';
import { SingleRepository } from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<SingleRepository />} />
        <Route path="/new-review" element={<NewReview />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
