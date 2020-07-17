const { ipcRenderer } = require('electron');
const electronStore = require('electron-store');
const store = new electronStore();
const keytar = require('keytar');

class HostController{

    constructor(host, passwordAccess){
        this._host = host;
        this._password = passwordAccess;
    }
    
    save(){

        if (!store.get('storage-hosts') ){
            const hosts_storage = new Array();
            store.set('storage-hosts', hosts_storage);
        }else{
            const hosts = store.get('storage-hosts');
            hosts.push(this._host);
            store.set('storage-hosts', hosts);
            
        }

    }

    delete(){
        store.delete(this._host.name);
    }

    testeConnection(){
        console.log("testando")
    }

    getAllHosts(){
        return store.get('storage-hosts');
    }


}