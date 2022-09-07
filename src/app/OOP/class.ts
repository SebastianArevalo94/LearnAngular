export class User {
    name: string;
    age: number|null;
    nacionality:string;
    constructor(name:string, age:number|null, nacionality: string){
        this.name = name;
        this.age = age;
        this.nacionality = nacionality;
    }
}