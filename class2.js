function enumeration(namesToValues) {
    var enumeration = function () {
        throw "Can't Instantiate Enumerations";
    }

    var proto = enumeration.prototype = {
        constructor: enumeration,
        toString: function () { return this.name; },
        valueOf: function () { return this.value; },
        toJSON: function () { return this.name; }
    }

    enumeration.values = [];
    for (name in namesToValues) {
        var e = Object.create(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }

    enumeration.foreach = function (f, c) {
        for (var i = 0; i < this.values.length; i++) {
            f.call(c, this.values[i]);
        }
    }

    return enumeration;
}

var Coin = enumeration({ Penny: 1, Nickel: 5, Dime: 10, Quarter: 25 });

var c = Coin.Dime;
console.log(c instanceof Coin);
console.log(c.constructor == Coin);
console.log(Coin.Quarter + 3 * Coin.Nickel);
console.log(Coin.Dime == 10);
