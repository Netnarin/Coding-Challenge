import "mocha";
import "should";

import { actual_result } from "../src/actual_result";

describe("actual_result", () => {

    let tested: actual_result;

    beforeEach(() => tested = new actual_result());

    describe("Test Case #1 ( 50% )", () => {
        it("Original material in tonnes, 2022 : 1000 *( False )", () => {
            const result = tested.actual_result(1000,50,100);
            const expected = 1000;
            result.should.be.equal(expected);
        });
        it("Original material in tonnes, 2023 : 1500 *( False )", () => {
            const result = tested.actual_result(1500,50,100);
            const expected = 1500;
            result.should.be.equal(expected);
        });        
        it("Original material in tonnes, 2024 : 450", () => {
            const result = tested.actual_result(450,50,100);
            const expected = 900;
            result.should.be.equal(expected);
        });
        it("Original material in tonnes, 2025 : 500", () => {
            const result = tested.actual_result(500,50,100);
            const expected = 1000;
            result.should.be.equal(expected);
        });
        it("Original material in tonnes, 2026 : 600", () => {
            const result = tested.actual_result(600,50,100);
            const expected = 1200;
            result.should.be.equal(expected);
        });
    });
    
    describe("Test Case #2 ( 25% )", () => {
        it("Original material in tonnes, 2022 : 700 *( False )", () => {
            const result = tested.actual_result(700,25,100);
            const expected = 1000;
            result.should.be.equal(expected);
        });
        it("Original material in tonnes, 2023 : 375", () => {
            const result = tested.actual_result(375,25,100);
            const expected = 1500;
            result.should.be.equal(expected);
        });        
        it("Original material in tonnes, 2024 : 225", () => {
            const result = tested.actual_result(225,25,100);
            const expected = 900;
            result.should.be.equal(expected);
        });
        it("Original material in tonnes, 2025 : 250", () => {
            const result = tested.actual_result(250,25,100);
            const expected = 1000;
            result.should.be.equal(expected);
        });
        it("Original material in tonnes, 2026 : 300", () => {
            const result = tested.actual_result(300,25,100);
            const expected = 1200;
            result.should.be.equal(expected);
        });
    });
});
