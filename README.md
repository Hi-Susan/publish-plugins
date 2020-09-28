# publish-plugins
將npm plugins 匯出到指定的資料夾

1. 載入 Node.js: fs-extra

``` 
npm install fs-extra
```
2. 將 npm 資料夾放入專案中

3. 編輯 package.json, scripts 加入 plugins 指令

```json
"scripts": {
  "plugins": "node npm/Publish.js -v"
}
```
4. 編輯 npm/Plugins.js, 指定插件及匯出位置 （示範匯出 jquery)

5. 執行匯出
```
npm run plugins
```