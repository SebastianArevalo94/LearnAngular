import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/OOP/class';
import { Nacionalities } from 'src/app/data/nacionalities';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  nacionalities: Array<String> = Nacionalities;

  user: User = {
    name: '',
    age: null,
    nacionality: '',
  };

  constructor() {}

  ngOnInit(): void {}

  createPerson() {
    const newUser: User = new User(
      this.user.name,
      this.user.age,
      this.user.nacionality
    );
    this.users.push(newUser);
    this.user = {
      name: '',
      age: null,
      nacionality: '',
    };
  }
}
