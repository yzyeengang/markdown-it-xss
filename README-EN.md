# markdown-it-xss
[English Doc](./README-EN.md)

> a markdown-it plugin base on[@leizongmin/js-xss](https://github.com/leizongmin/js-xss)

## install 
```
npm install -S markdown-it-xss
```

## use 
#### BASE
```javascript
const md = require('markdown-it')({ html: true })
            .use(require('markdown-it-xss'),{
                 xss:{
                         escapeHtml(html) {
                               return html
                         },
                 }
            });

md.render(`<img onerror="alert('xss')" src="1">`); // => '<img>'
```

### Advanced
You can also configure your own filtering rules, as detailed in[xss](https://github.com/leizongmin/js-xss)
```javascript
const md = require('markdown-it')({ html: true })
            .use(require('markdown-it-xss'),{
                xss:function(xss){  // xss = require('xss')
                   return{
                       whiteList: Object.assign({}, xss.getDefaultWhiteList(), {
                               img: ['onerror','src'],
                           }),
                       css: {
                           whiteList: Object.assign({}, xss.getDefaultCSSWhiteList(), {}),
                       },
                       escapeHtml(html) {
                           return html
                       },
                   }
                }
                //or
                // xss:{...options}
            });

md.render(`<img onerror="alert('xss')" src="1">`); // => '<img onerror="alert('xss')" src="1">'
```
