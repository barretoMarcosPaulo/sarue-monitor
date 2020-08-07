const { app } = require('electron');
const { BrowserWindow } = require('electron');
const { ipcMain } = require('electron');

global.mainWindow = null;
global.FormNewinstanceWindow = null;


// Main Window
app.on('ready' , function(){
    app.allowRendererProcessReuse = true;
    mainWindow = new BrowserWindow({
        width:990,
        height:500,
        resizable:false,
        webPreferences:{
            nodeIntegration:true,
        },
        icon: __dirname + "/../assets/new-icon.png",
        backgroundColor:"black"
    })
    mainWindow.loadURL(`file://${__dirname}/../src/app/home.html`)
})


// Form New Instance Window
ipcMain.on('window-form-instance', () => {
    if (FormNewinstanceWindow == null) {
        FormNewinstanceWindow = new BrowserWindow({
            width: 580,
            height: 250,
            alwaysOnTop: true,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            },
            resizable: false,
            icon: __dirname + "/../assets/new-icon.png",

        })
        FormNewinstanceWindow.on('close', () => {
            FormNewinstanceWindow = null
        })
        FormNewinstanceWindow.loadURL(`file://${__dirname}/../src/app/new_instance.html`)
    }
})



ipcMain.on('close-form-new-instance', () => {
    FormNewinstanceWindow.close()
})
