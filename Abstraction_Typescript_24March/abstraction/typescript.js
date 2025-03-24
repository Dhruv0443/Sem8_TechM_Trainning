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
var Plan = /** @class */ (function () {
    function Plan(rate) {
        this.rate = rate;
    }
    return Plan;
}());
var ElectricityBill = /** @class */ (function (_super) {
    __extends(ElectricityBill, _super);
    function ElectricityBill() {
        return _super.call(this, 5.5) || this; //Example rate per unit
    }
    ElectricityBill.prototype.getBill = function (units) {
        return units * this.rate;
    };
    return ElectricityBill;
}(Plan));
var WaterBill = /** @class */ (function (_super) {
    __extends(WaterBill, _super);
    function WaterBill() {
        return _super.call(this, 2.0) || this; //Example rate per unit
    }
    WaterBill.prototype.getBill = function (units) {
        return units * this.rate;
    };
    return WaterBill;
}(Plan));
var InternetBill = /** @class */ (function (_super) {
    __extends(InternetBill, _super);
    function InternetBill() {
        return _super.call(this, 10.0) || this; //Example rate per unit
    }
    InternetBill.prototype.getBill = function (units) {
        return units * this.rate;
    };
    return InternetBill;
}(Plan));
//Funtion to get plan instance based on selection
function getPlanInstance(planType) {
    switch (planType) {
        case "electricity":
            return new ElectricityBill();
        case "water":
            return new WaterBill();
        case "internet":
            return new InternetBill();
        default:
            throw new Error("Invalid plan type selected");
    }
}
//! Attach to window for acess in script.js
window.getPlanInstance = getPlanInstance;
