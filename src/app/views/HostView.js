const { controllers } = require("chart.js");

class HostView{
    
    static renderHosts(id_element_dom){

        const elementDOM = document.querySelector(`#${id_element_dom}`);
        const hosts = HostFunctions.getAllHosts();
        
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
            iconTrash.setAttribute('onclick','HostFunctions.deleteOne(this.id)');

            divElement.appendChild(iconPower);
            divElement.appendChild(spanElement);
            divElement.appendChild(iconTrash);

            elementDOM.appendChild(divElement);
        }
    }

    static renderFilesAndDir(content){
        const elements = content.split('\n');

        let divBoxFiles = document.querySelector('#list-items');
        divBoxFiles.innerHTML='';        
        
        for(let index in elements){
            if(elements[index]!= ""){

                let divGroupItem = document.createElement('div');
                divGroupItem.className = "item";
    
                let icon = document.createElement('i');
                
                let fileExtension = elements[index].split('.');
                if(fileExtension.length > 1 ){
                    icon.className = "fas fa-file file-color";
                }else{
                    icon.className = "fas fa-folder-open folder-color";
                    icon.id = `/${elements[index]}`;
                    icon.setAttribute('onclick', 'connection.changeDir(this.id)');
                }
                
                let textContent = document.createElement('label');
                textContent.appendChild(document.createTextNode(elements[index]) );
    
                divGroupItem.appendChild(icon);
                divGroupItem.appendChild(textContent);
                divBoxFiles.appendChild(divGroupItem);

            }

            

        }

    }

 
}