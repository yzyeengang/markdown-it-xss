const jsxss = require('xss');

module.exports = function xssProtector(md, {xss} = {}) {
    const customXss = new jsxss.FilterXSS(typeof xss === 'function' ? xss(jsxss) : xss)

    function filterContent(str) {
        str = customXss.process(str)
        return str;
    }

    function xssProtector(state) {
        for (let i = 0; i < state.tokens.length; i++) {
            let cur = state.tokens[i];
            if (cur.type === 'html_block') {
                cur.content = filterContent(cur.content);
            }
            if (cur.type === 'inline') {
                let inlineTokens = cur.children;
                for (let ii = 0; ii < inlineTokens.length; ii++) {
                    if (inlineTokens[ii].type === 'html_inline') {
                        inlineTokens[ii].content = filterContent(inlineTokens[ii].content);
                    }
                }
            }

        }
    }

    md.core.ruler.after('linkify', 'xss', xssProtector)
}