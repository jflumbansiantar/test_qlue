const serveData = [
    {
        "username":"ali",
        "hair_color":"brown",
        "height":1.2
    },
    {
        "username":"marc",
        "hair_color":"blue",
        "height":1.4
    },
    {
        "username":"joe",
        "hair_color":"brown",
        "height":1.7
    },
    {
        "username":"zehua",
        "hair_color":"black",
        "height": 1.8
    }
]
function simplifyData(data) {
    let newData = JSON.parse(data);

    let simpData = newData.reduce((header, value) => {
        header['h'] = Object.keys(values)
        header['d'] = keys['d'] || [];
        header['d'].push(Object.values(values))
        return keys;
    }, {});

    return simpData;
}

console.log(simplifyData(serveData));