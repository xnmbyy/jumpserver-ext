function activate (content) {
    goby.registerCommand('importIP', function (content) {
        let path = __dirname + '/dist/index.html'
        console.log(path)
        goby.showIframeDia(path, '导入', "500", '500')
    });
}

exports.activate = activate;