const electronStore = require('electron-store');
const store = new electronStore();
const keytar = require('keytar')

class HostModel{
    
    constructor(name_id, username_id, address_id, password_id) {
        this.name = document.querySelector(`#${name_id}`).value;
        this._username = document.querySelector(`#${username_id}`).value;
        this._address = document.querySelector(`#${address_id}`).value;
        this._password = document.querySelector(`#${password_id}`).value;

        this._saveInStorage();
    }



    get infos() {
        return `${this.name},${this._username}, ${this._address}`;
    }



    _saveInStorage() {

        const hostWithoutPass = {
            name: this.name,
            username: this._username,
            address: this._address,
            infos:()=>{
                return `${name} em ${username}@${address}`
            }
        }

        if (!store.get('storage-hosts')) {
            const hosts_storage = new Array();
            hosts_storage.push(hostWithoutPass);
            store.set('storage-hosts', hosts_storage);
        } else {
            const hosts = store.get('storage-hosts');
            hosts.push(hostWithoutPass);
            store.set('storage-hosts', hosts);

        }

        this._savePasswordInSO(this._username, this._password);
    }



    _savePasswordInSO(account, password){
        keytar.setPassword('sarue-monitor', account, password);
        keytar.getPassword('sarue-monitor', account).then((pass)=>{
            console.log(">>", pass)
        })
    }

}