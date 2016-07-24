let obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}`)
        return Reflect.get(target, key, receiver)
    },
    set: function (trarget, key, value, receiver) {
        console.log(`setting ${key}`)
        return Reflect.set(target, key, value, receiver)
    }
})

obj.idx = 1     //getting idx
obj.idx++       //getting idx, setting idx