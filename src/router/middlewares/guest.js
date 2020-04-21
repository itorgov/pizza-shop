export default ({ next, store }) => {
  if (store.getters['user/isAuthenticated']) {
    return next({
      name: 'profile',
    });
  }

  return next();
};
