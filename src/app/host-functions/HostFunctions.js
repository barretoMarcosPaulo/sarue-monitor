const electronStore = require('electron-store');
const store = new electronStore();

class HostFunctions{
    

    deleteAll(){
        store.delete('storage-hosts');
    }
    deleteOne(index){
        let allHosts = this.getAllHosts();
        allHosts.splice(index,1);
        // store.delete('')
        store.set('storage-hosts', allHosts);
    }

    getAllHosts(){
        return store.get('storage-hosts');
    }
    renderHosts(id_element_dom){

        const elementDOM = document.querySelector(`#${id_element_dom}`);
        const hosts = this.getAllHosts();
        
        for(let index in hosts){

            const divElement = document.createElement('div');
            divElement.className = 'server-stored';
            divElement.id = `box-host-${index}`
            divElement.setAttribute('title', `
                ${hosts[index].name} em ${hosts[index].username}@${hosts[index].address}
            `);

            const iconPower = document.createElement('i');
            iconPower.className = 'fas fa-plug button-power' 
            iconPower.id = index;

            const spanElement = document.createElement('span');
            const textContentSpan = document.createTextNode(hosts[index].name);
            spanElement.appendChild(textContentSpan);

            const iconTrash = document.createElement('i');
            iconTrash.className = "fas fa-trash-alt btn-del";
            iconTrash.id = index;
            iconTrash.setAttribute('onclick','removeHost(this)');

            divElement.appendChild(iconPower);
            divElement.appendChild(spanElement);
            divElement.appendChild(iconTrash);

            elementDOM.appendChild(divElement);
        }

        
    }


}
