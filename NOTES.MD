# Electron-Tutorial

* Building cross platform desktop appln with JS, using Electron fwk
* Open source fwk by GitHub
* It combines the chromium rendering engine(used by chrome and edge) and nodejs runtime.
* Benefits of desktop apps: Data Security, Native APIs, Performance, Deployment
* Benefits of Electron: Single Codebase, Cost Effectiveness, Web Technologies, Desktop/Web Hybrid


* Creating 3 projects

## How Electron Works

* ![Image of How Electron works](/images/how_electron_works.PNG)
* One Main Process - responsible to interact with Native GUI and powered by nodejs runtime
* BrowserWindow runs its own process which is renderer process which displays html and uses css, js
* It uses chromium window with nodejs to render window
* Multiple renderer processes
* Main process - Backend and Renderer Process - Frontend
* IPC - interprocess communication to communicate between this process to send events(and data) back and forth




Global Shortcut

globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload());

Menu

const menu = [
    ...(
        isMac ? [{
            role: 'appMenu'
        }] : []
    ),
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+W',
                click: () => app.quit()
            }
        ]
    }
];

Electron Packager 

https://www.christianengvall.se/electron-packager-tutorial/

Electron store user datta

https://cameronnokes.com/blog/how-to-store-user-data-in-electron/