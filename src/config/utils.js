const checkToken = () => {
    const isTokenAvailable =
    localStorage.getItem("filafest_award_dG9rZW4") &&
    localStorage.getItem("filafest_award_ZGF0YQ") &&
    Date.now() < localStorage.getItem("filafest_award_ZXhwaXJl") * 1000;

if (!isTokenAvailable) {
    localStorage.removeItem("filafest_award_dG9rZW4");
    localStorage.removeItem("filafest_award_ZGF0YQ");
    localStorage.removeItem("filafest_award_ZXhwaXJl");
}

return isTokenAvailable;
};

const getUserData = () => {
return JSON.parse(atob(localStorage.getItem("filafest_award_ZGF0YQ")));
};

export { checkToken, getUserData };