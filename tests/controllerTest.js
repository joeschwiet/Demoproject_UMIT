const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI');

// Unittest for Conversion Celsius to Fahrenheit:
describe('Conversion Celsius to Fahrenheit', function() {
    it('should convert 100 Grad Celsius to 212 Grad Fahrenheit', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(100))).to.equal(212);
    });
    it('should convert 38 Grad Celsius to 100 Grad Fahrenheit', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(37))).to.equal(99);
    });
    it('should convert -40 Grad Celsius to -40 Grad Fahrenheit', function() {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-40))).to.equal(-40);
    });
});

// Unittest for Conversion Fahrenheit to Celsius:
describe('Conversion Fahrenheit to Celsius', function() {
    it('should convert 212 Grad Fahrenheit to 100 Grad Celsius', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(32))).to.equal(0);
    });
    it('should convert 50 Grad Fahrenheit to 10 Grad Celsius', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(0))).to.equal(-18);
    });
    it('should convert -4 Grad Fahrenheit to -20 Grad Celsius', function() {
        expect(Math.round(apiTemperature.fahrenheitToCelsius(122))).to.equal(50);
    });
});

// Unittest for getGreetingDependOnTime:
describe('getGreetingDependOnTime', function() {
    it('should return "Guten Morgen" for a time between 06:00 and 21:59 (set:08:00)' , function() {
        const morningTime = new Date('2020-01-01 10:04:20');
        expect(apiTemperature.getGreetingDependOnTime(morningTime)).to.equal('Guten Morgen');
    });  
    it('should return "Guten Morgen" for a time exactly at 06:00 (set:06:00)', function() {
        const morningTime = new Date('2020-01-01 09:30:04');
        expect(apiTemperature.getGreetingDependOnTime(morningTime)).to.equal('Guten Morgen');
    });
    it('should return "Guten Morgen" for a time exactly at 06:01 (set:06:01)', function() {
        const morningTime = new Date('2020-01-01 07:01:34');
        expect(apiTemperature.getGreetingDependOnTime(morningTime)).to.equal('Guten Morgen');
    }); 
});