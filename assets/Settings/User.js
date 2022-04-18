class User {
  constructor() {
    this.id = 0;
    this.email = "";
    this.name = "";
    this.image = "";
    //require('../images/user.bmp')
  }
  updateall(id,email, name, image) {
    console.log("values below");
    console.log(id + email, name, image);
    this.id = id;
    this.email = email;
    this.name = name;
    this.image = image;
  }


  update(id) {
    console.log('currentuser '+ id);
    this.id = id;
  }

  showUser() {
    return this.id;
  }

}
const currentUser = new User;
export default currentUser;