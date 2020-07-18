[![NPM Version][npm-image]][npm-url]

TextInput is shaking when inputing with CJK.

**This problem has been fixed in RN v0.63.1, But if you can't use this version, this patch will fix the problem for you!**

# Usage

### Install
Once installed, react-native's TextInput is automatically patched.
```bash
yarn add react-native-cjk-textinput-patch --dev
```

`postinstall`, `postuninstall` should be added to prevent this patch from being restored whenever packages are changed.
```javascript
{
  ...
  "scripts": {
    ...,
    "postinstall": "yarn run cjk-textinput-patch",
    "postuninstall": "yarn run cjk-textinput-patch"
  }
}
```

If you were already using `postinstall`, you can add the patch script later.
```javascript
"postinstall": "yarn run jetify; yarn run cjk-textinput-patch"
```

### Execute manually
You can execute the patch manually with the command below.
```bash
yarn run cjk-textinput-patch
```

### Uninstall
Just delete the command you added to `postinstall`, `postuninstall` and remove my package.

[npm-image]: https://img.shields.io/npm/v/react-native-cjk-textinput-patch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-native-cjk-textinput-patch
