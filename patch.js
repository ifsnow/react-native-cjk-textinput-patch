#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '.');

const packageFile = fs.readFileSync(`${rootPath}/../react-native/package.json`);
const package = JSON.parse(packageFile);

const version = package.version.split('.');
const majorVersion = parseInt(version[0], 10);
const minorVersion = parseInt(version[1], 10);
const patchVersion = parseInt(version[2], 10);

if (minorVersion !== 62) {
  console.log('[!] This patch is for React Native 0.62.x!');
  process.exit(1);
}

fs.copyFileSync(
  `${rootPath}/patches/RCTUITextView.m`,
  `${rootPath}/../react-native/Libraries/Text/TextInput/Multiline/RCTUITextView.m`,
);

fs.copyFileSync(
  `${rootPath}/patches/RCTUITextField.m`,
  `${rootPath}/../react-native/Libraries/Text/TextInput/Singleline/RCTUITextField.m`,
);

console.log('[!] TextInput was patched!');
