import { useScrollToTop } from "@react-navigation/native";
import currentUser from './User';

class AppData{

  constructor() {
    //data used to keep people data. Will clear once it exits the app.
    this.data = [
      { id: 0,
        name: 'test',
        email: 'email@email.com',
        password: 'password',
        image: require('../images/user.bmp'),
        //require('../images/user.bmp'),
       }
    ]
    //book data - id = photoid , userid - who owns the photo, name and image.
    this.memories = [
      {id: 0,
      userid: 0,
      name: 'sample1',
      image: require('../images/sample1.png'),
      },
      {
        id: 1,
        userid: 0,
        name: 'sample2',
        image: require('../images/sample2.png'),
      },
      {id: 2,
        userid: 0,
        name: 'sample3',
        image: require('../images/sample3.png'),
      },
      {id: 3,
        userid: 0,
        name: 'sample4',
        image: require('../images/sample4.png'),
      },
      {id: 4,
        userid: 0,
        name: 'sample5',
        image: require('../images/sample5.png'),
      },
      {id: 5,
        userid: 0,
        name: 'sample6',
        image: require('../images/sample6.png'),
      },
        {id: 6,
          userid: 0,
        name: 'sample7',
        image: require('../images/sample7.png'),
      },
          {id: 7,
            userid: 0,
            name: 'sample8',
            image: require('../images/sample8.png'),
            },
            {id: 8,
              userid: 0,
              name: 'sample9',
              image: require('../images/sample9.png'),
              },
    ]
  }

//add user to data. 
  addUser(name, email, password, image) {
    this.data.push({id: this.data.length,
                     name: name, 
                    email: email,
                     password: password,
                    image: image,})
  }

  //return length of data
  getLength() {
    return this.data.length;
  }
  //return name of user 
  getName(id) {
    return this.data[id].name;
  }
  //return email of user
  getEmail(id) {
    return this.data[id].email;
  }
  //return image of user
  getImage(id) {
    return this.data[id].image;
  }
  //return password of the user
  getUserPassword(id) {
    return this.data[id].password;
  }
  //return id of user based on email - used in login
  getID(email) {
    return this.data.findIndex((user) => user.email === email);
    }
  //return memories based on the id
  getMemory(id) {
    return this.memories.filter((photos) => photos.userid === id);
  }
  //add photo to memories db
  addMemory(photo, userid, name) {
    this.memories.push({
      id: this.memories.length,
      userid: userid,
      name: name,
      image: photo,
    })
    console.log(this.memories[this.memories.length-1]);
  }
  //edit name of memory
  editMemname(id, name) {
    let memid = this.memories.findIndex(memories => {
      if(memories.id == id) {
        return true;
      }
    });
    this.memories[memid].name = name;
  }
  //delete memory
  deleteMemory(id) {
    if(this.memories.length <= 1 ) {
      return [];
    }
    //as the array gets smaller, it should find the index of the memory rather than delete the index

  let memid = this.memories.findIndex(memories => {
    if(memories.id == id) {
      return true;
    }
  });
  console.log("memid = " + memid)
  this.memories.splice(memid, 1);
  //idea from this video - https://www.youtube.com/watch?v=T15zdDPX3Do
  return [...this.memories];
}

}
//singleton
const users = new AppData();
//idea from https://stackoverflow.com/questions/61097362/javascript-singleton-how-to-change-properties-inside-a-class
Object.freeze(users);
export default users;