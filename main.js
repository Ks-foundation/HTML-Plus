function tagname(tagName) {
    return function(attrs, ...children) {
        const element = document.createElement(tagName);
        for (const [attr, value] of Object.entries(attrs || {})) {
            element.setAttribute(attr, value);
        }
        for (const child of children) {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        }
        return element;
    };
}
