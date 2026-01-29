const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        icon: 'Images/StrawberryCat.png',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('Weather.html');
    win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})