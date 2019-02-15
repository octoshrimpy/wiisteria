// include stuff
const {app, BrowserWindow} = require('electron')
const path = require('path')

//setup lviereload for dev work
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

// create window
function createWindow() {
  let window = new BrowserWindow({ width: 800, height: 600 })

  // load index as first window
  window.loadFile('index.html')

  // handle devtools
  // window.webContents.openDevTools()

  // reset window variable if window gets closed
  window.on('closed', () => {
    window = null
  })
}

//init
app.on('ready', createWindow)

//init from OSX dock
app.on('activate', () => {

  if(window === null) {
    createWindow()
  }
})



//
