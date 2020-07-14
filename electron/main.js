const { app } = require('electron');
const { BrowserWindow } = require('electron');
const { ipcMain } = require('electron');


app.on('ready' , function(){
    app.allowRendererProcessReuse = true;
    const mainWindow = new BrowserWindow({
        width:990,
        height:500,
        resizable:false,
        webPreferences:{
            nodeIntegration:true
        },
        icon: __dirname + "/../assets/new-icon.png",
        backgroundColor:"black"
    })
    mainWindow.loadURL(`file://${__dirname}/../src/app/home.html`)
})