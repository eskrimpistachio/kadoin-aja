const checkToken = () => {
  const isTokenAvailable = localStorage.getItem("token");

  return isTokenAvailable;
};

export { checkToken };
