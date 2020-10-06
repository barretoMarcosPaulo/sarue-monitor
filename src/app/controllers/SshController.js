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

    commandExec(command,functionExecute){
        let countControl = 0;
        this.connection.exec(command, {
            out: function(stdout) {
                if(countControl<1){
                    functionExecute(stdout);
                }

                countControl++;
            }
        }).start();
    }

    initMonitor(){
        let renderFiles = HostViewFunction.renderFilesAndDir;
        this.commandExec('ls' , renderFiles);
    }

    changeDir(path){
        let renderFiles = HostViewFunction.renderFilesAndDir;
        this.commandExec(`ls ${this._currentDir}${path}`,renderFiles);
        this._currentDir += path;
    }
    backDir(){
        if(this._currentDir != '~'){
            let dirBack = this._currentDir.split('/');
            dirBack.pop();
            let newDir = "";
            for(let index in dirBack){
                if(index == dirBack.length){
                    break;
                }
                else{
                    newDir+=`${dirBack[index]}/`
                }
            }
            newDir = newDir.substring(0,newDir.length-1);
            let renderFiles = HostViewFunction.renderFilesAndDir;
            this.commandExec(`ls ${newDir}`,renderFiles);
            this._currentDir = newDir;

        }
    }
}