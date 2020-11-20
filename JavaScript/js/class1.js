class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        //if (value <0){
           //throw Error ('니 나이가 어떻게 -1 이되냐?');
          //  alert('니 나이가 어떻게 -1 이되냐?');
         
       // }
        //this._name= value;s
        this._firstName = value == 'Lee' ? 'Kim' :value;
    }
}