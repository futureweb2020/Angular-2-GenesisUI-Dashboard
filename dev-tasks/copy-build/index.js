const fs = require('fs-extra')
const path = require('path')
const username = require('username')
const dateFormat = require('dateformat')
const magicIncrement = require('magic-increment')

const config = require('./config.json')

const user = username.sync()
const srcDir = config.buildDir
const userDir = config.destUserDirs[user]
const now = new Date()

if (userDir == undefined)
  throw new Error('Username "' + user + '" not defined in the ' + path.join(__dirname, 'config.json'))

const validateUniqueDestDir = path => {
  let isUniqueDir = false
  let newPath = path

  while (!isUniqueDir) {
    let exists = fs.existsSync(newPath)

    isUniqueDir = exists ? false : true

    if (isUniqueDir) return newPath

    let lastChar = newPath.substr(newPath.length - 1) //get char
    let newChar = magicIncrement.inc(lastChar) //inc char
    newPath = newPath.slice(0, newPath.length - 1) + newChar
  }

  return newPath
}

let destDir = path.join(userDir, 'build.' + dateFormat(now, "yyyymmdd") + 'a')
destDir = validateUniqueDestDir(destDir)

fs.removeSync(destDir)
console.log('\ncopying dist build from ' + srcDir + ' to ' + destDir)
fs.copySync(srcDir, destDir)
