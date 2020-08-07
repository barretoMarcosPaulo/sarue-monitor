const electronStore = require('electron-store');
const store = new electronStore();

class HostFunctions{
    

    static deleteAll(){
        store.delete('storage-hosts');
    }
    static deleteOne(index){
        let allHosts = this.getAllHosts();
        allHosts.splice(index,1);
        store.set('storage-hosts', allHosts);
    }

    static getAllHosts(){
        return store.get('storage-hosts');
    }


}
