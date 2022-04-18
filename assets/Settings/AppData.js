import { useScrollToTop } from "@react-navigation/native";
import currentUser from './User';

class AppData{

  constructor() {
    //this.data =  [[0, 'test', 'email@email.com', 'password']]
    this.data = [
      { id: 0,
        name: 'test',
        email: 'email@email.com',
        password: 'password',
        image: "",
        //require('../images/user.bmp'),
       }
    ]

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
  // var instanceuser = [[0, 'test', 'email@email.com', 'password']];
  }


  addUser(name, email, password, image) {
    //this.data[this.data.length] = ([this.data.length, name, email, password]);
    this.data.push({id: this.data.length,
                     name: name, 
                    email: email,
                     password: password,
                    image: image,})
  }

  getLength() {
    return this.data.length;
  }
  static getInstance() {
    if(this.length <= 1) {
      AppData.data = new AppData();
      Object.freeze(data);
    } 
    return this.data;
  }

  getName(id) {
    return this.data[id].name;
  }

  getEmail(id) {
    return this.data[id].email;
  }

  getUserPassword(id) {
    return this.data[id].password;
  }
  getID(email) {
    return this.data.findIndex((user) => user.email === email);
    }
  
  getMemory(id) {
    return this.memories.filter((photos) => photos.userid === id);
  }

  addMemory(photo, userid, name) {
    this.memories.push({
      id: this.memories.length,
      userid: userid,
      name: name,
      image: photo,
    })
    console.log(this.memories[this.memories.length-1]);
  }

  editMemname(id, name) {
    let memid = this.memories.findIndex(memories => {
      if(memories.id == id) {
        return true;
      }
    });
    this.memories[memid].name = name;
  }

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