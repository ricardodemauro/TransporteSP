export default class Urls {
    static Github = 'Github'
    static Facebook = "Facebook"
    static get (name) {
        if(_urls[name]) {
            return _urls[name]
        }
        return `[${name}]`
    }
}

const _urls = {
    Github: 'https://github.com/ricardodemauro/TransporteSP/',
    Facebook: 'https://twitter.com/RicardoDeMauro/'
}