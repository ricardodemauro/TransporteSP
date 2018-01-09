export default class Strings {
    static AppName = 'AppName'
    static get (name) {
        switch(name)
        {
            case Strings.AppName:
                return 'Transporte SP'
            default:
                return name
        }
    }

    static GoogleApi = ''
}