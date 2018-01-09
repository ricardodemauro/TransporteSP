export default class Utils {
    static getYear () {
        return '2018'
    }

    static log(param) {
        console.log(param)
    }

    static getCurrentLocation (options) {
        return new Promise(function(resolve, reject) {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve)
            }
            else {
                reject('Location not avaiable')
            }
        })
    }
}