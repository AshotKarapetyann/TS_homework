var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, price, engine, color, doors) {
        this.model = model;
        this.price = price;
        this.engine = engine;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.getPrice = function () {
        return this.price;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getEngine = function () {
        return this.engine;
    };
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        var _this = _super.call(this) || this;
        _this.model = "Tesla";
        _this.price = 50000;
        _this.doors = 4;
        _this.color = "";
        _this.engine = "";
        return _this;
    }
    return Tesla;
}(Car));
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        var _this = _super.call(this) || this;
        _this.model = "Mercedes";
        _this.price = 65000;
        _this.doors = 4;
        _this.color = "";
        _this.engine = "";
        return _this;
    }
    return Mercedes;
}(Car));
var GreenColor = /** @class */ (function () {
    function GreenColor(car) {
        this.car = car;
    }
    GreenColor.prototype.getPrice = function () {
        return this.car.getPrice() + 500;
    };
    GreenColor.prototype.getColor = function () {
        return "color green";
    };
    return GreenColor;
}());
var RedColor = /** @class */ (function () {
    function RedColor(car) {
        this.car = car;
    }
    RedColor.prototype.getPrice = function () {
        return this.car.getPrice() + 500;
    };
    RedColor.prototype.getColor = function () {
        return "color red";
    };
    return RedColor;
}());
var HybridEngine = /** @class */ (function () {
    function HybridEngine(car) {
        this.car = car;
    }
    HybridEngine.prototype.getPrice = function () {
        return this.car.getPrice() + 5000;
    };
    HybridEngine.prototype.getEngine = function () {
        return "hybrid engine";
    };
    HybridEngine.prototype.getColor = function () {
        return this.car.getColor();
    };
    return HybridEngine;
}());
var OilEngine = /** @class */ (function () {
    function OilEngine(car) {
        this.car = car;
    }
    OilEngine.prototype.getPrice = function () {
        return this.car.getPrice() - 500;
    };
    OilEngine.prototype.getEngine = function () {
        return "oil engine";
    };
    OilEngine.prototype.getColor = function () {
        return this.car.getColor();
    };
    return OilEngine;
}());
var tesla = new Tesla();
tesla = new RedColor(tesla);
tesla = new HybridEngine(tesla);
console.log("Tesla with " + tesla.getColor() + " decorated and price " + tesla.getPrice() + "$ and your car has " + tesla.getEngine());
// let mercedes = new Mercedes();
// mercedes = new GreenColor(mercedes);
// mercedes = new OilEngine(mercedes);
// console.log(`Mercedes with ${mercedes.getColor()} decorated and price ${mercedes.getPrice()}$ and your car has ${mercedes.getEngine()}`);
