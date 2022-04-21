class User {
  //used to store current user details.
  constructor() {
    this.id = 0;
    this.email = "";
    this.name = "";
    this.image = "";
  }
  //updates the current user.
  updateall(id,email, name, image) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.image = image;
  }
  //returns the id only
  showUser() {
    return this.id;
  }

}

const currentUser = new User;
export default currentUser;