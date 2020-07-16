const electronStore = require('electron-store');
const store = new electronStore();


class HostController{

    constructor(host, passwordAccess){
        this._host = host;
        this._password = passwordAccess;
    }
    
    save(){
        if ( !store.get(this._host.name) ){
            store.set(this._host.name, this._host);
            return this._host;
        }else{
            return false;
        }
    }

    delete(){
        store.delete(this._host.name);
    }

    testeConnection(){
        console.log("testando")
    }

}