const SSH = require('simple-ssh');
const HostViewFunction = HostView;

class SshController{
    constructor(address, username, password){
        this._address = address;
        this._username = username;
        this._password = password;
        this._currentDir = '~';
        this.connection = this.createNewSSHSession();
    }

    createNewSSHSession(){
        return new SSH({
            host: this._address,
            user: this._username,
            pass: this._password
        });
    }

    commandExec(command,functionExecute, currentDir=null){
        this.connection.exec(command, {
            out: function(stdout) {
                functionExecute(stdout, currentDir);
            }
        }).start();
    }

    initMonitor(){
        let renderFiles = HostViewFunction.renderFilesAndDir;
        this.commandExec('ls' , renderFiles);
    }

    nextDir(path){
        let renderFiles = HostViewFunction.renderFilesAndDir;
        this.commandExec(`ls ${this._currentDir}${path}`,renderFiles);
        console.log(this._currentDir);
        this._currentDir += path;
        console.log(this._currentDir);
    }
}