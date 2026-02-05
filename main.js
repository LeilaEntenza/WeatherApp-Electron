const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 500,
        icon: 'Images/StrawberryCat.png',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        },
        titleBarStyle: 'hiden',
        ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {})    });

    win.loadFile('Weather.html');
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})