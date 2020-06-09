const path = require('path');
const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
    constructor(file, isDev) {
        super({
            title: 'SysTop',
            width: isDev ? 800 : 355,
            height: 500,
            // icon: path.join('assets', 'icons', 'icon.png'),
            resizable: isDev ? true : false,
            show: isDev ? true : false,
            opacity: 0.9,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            },
        })

        this.loadFile(file);

        if (isDev) {
            this.webContents.openDevTools();
            this.setPosition(1650, 150);
        }

    }
}

module.exports = MainWindow;