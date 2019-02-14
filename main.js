const {app, BrowserWindow} = require('electron')

const path = require('path')
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

function createWindow() {
  let window = new BrowserWindow({ width: 800, height: 600 })

  window.loadFile('index.html')

  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('activate', () => {

  if(window === null) {
    createWindow()
  }
})









//
