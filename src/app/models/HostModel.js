
class Instance{
    constructor(name,username,address){
        this.name = name;
        this._username = username;
        this._address = address;
    }
     get infos(){
         return `${this.name},${this._username}, ${this._address}`;
     }
}
