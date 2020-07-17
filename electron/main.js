const { app } = require('electron');
const { BrowserWindow } = require('electron');
const { ipcMain } = require('electron');
// const keytar = require('keytar');

// Main Window
app.on('ready' , function(){
    app.allowRendererProcessReuse = true;
    const mainWindow = new BrowserWindow({
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
let FormNewinstanceWindow = null
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

// ipcMain.on('set-safe-password', (event, user, password) => {
//     const PROCESS_NAME = "sarue-monitor"; 
//     keytar.setPassword(PROCESS_NAME, user, password);
    
// })