export default class Strings {
    static AppName = 'AppName'
    static Author = "Author"
    static get (name) {
        if(_strings[name]) {
            return _strings[name]
        }
        return `[${name}]`
    }

    static GoogleApi = ''
}

const _strings = {
    AppName: 'Transporte SP',
    Author: 'Ricardo'
}