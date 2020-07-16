const { ipcRenderer } = require('electron');

function FormAddInstance(){
    ipcRenderer.send('window-form-instance');
}