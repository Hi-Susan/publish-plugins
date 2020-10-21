# publish-plugins
將npm plugins 匯出到指定的資料夾

1. 載入 Node.js: fs-extra 、 file-match

``` 
npm install fs-extra file-match
```
2. 將 npm 資料夾放入專案中

3. 編輯 package.json, scripts 加入 plugins 指令

```json
"scripts": {
  "plugins": "node npm/Publish.js -v"
}
```
4. 編輯 npm/Plugins.js, 指定插件及匯出位置 （示範匯出 jquery)
  - from : 來源位置
  - to : 輸出位置
  - filter : 排除檔案, 寫法請參考 [file-match](https://www.npmjs.com/package/file-match)

5. 執行匯出
```
npm run plugins
```