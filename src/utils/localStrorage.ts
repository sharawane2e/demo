class localStrorageUtils {
  static getUserName() {
    return localStorage.getItem("username");
  }

  static setUserName(username: string) {
    return localStorage.setItem("username", username);
  }
}

export default localStrorageUtils;
