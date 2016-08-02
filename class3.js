//类工厂
function filteredSetSubclass(superclass, filter) {
    var consturctor = function () {
        superclass.apply(this, arguments);
    }

    var proto = constructor.prototype = Object.create(superclass.prototype);
    proto.consturctor = constructor;

    proto.add = function () {
        for (var i = 0, len = arguments.length; i < len; i++) {
            if (!filter(arguments[i])) {
                throw 'error';
            }
        }

        superclass.prototype.add.apply(this, arguments);
    }

    return constructor;
}

//组合
var FilterSet = Set.extend(
    function FilteredSet(set, filter) {
        this.set = set;
        this.filter = filter;
    },
    {
        add: function () {
            if (this.filter) {
                for (var i = 0, len = arguments.length; i < len; i++) {
                    if (!this.filter(arguments[i])) {
                        throw "filter rejected";
                    }
                }
            }

            this.set.add.apply(this, arguments);
            return this;
        },
        remove: function () {
            this.set.remove.apply(this, arguments);
            return this;
        },
        constains: function (v) {
            return this.set.constains(v);
        }
    }
)

//接口
function abstractmethod() { throw new Error("abstract method"); }

//类，包含一个抽象方法
function AbstractSet() { throw new Error("Can't instantiate abstract classes"); }
AbstractSet.prototype.constians = abstract;

//继承了AbstractSet类，并实现了上面的抽象方法
var NotSet = AbstractSet.extend(
    function NotSet(set) { this.set = set; },
    {
        constains: function (x) { return !this.set.constains(x); },
        toString: function () { return "~" + this.set.toString(); }
    }
)

//模块
var sets = {};
sets.SingletonSet = sets.AbstractSet.extend();