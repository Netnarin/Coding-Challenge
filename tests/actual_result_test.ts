import "mocha";
import "should";

import { actual_result } from "../src/actual_result";

describe("actual_result", () => {

    let tested: actual_result;

    beforeEach(() => tested = new actual_result());

    describe("Test Case #1", () => {

        it("Original material in tonnes, 2022", () => {
            const result = tested.actual_result(1000,25,100);
            const expected = 1000;
            result.should.be.equal(expected);
        });

        it("Original material in tonnes, 2023", () => {
            const result = tested.actual_result(1500,25,100);
            const expected = 1500;
            result.should.be.equal(expected);
        });
        
        it("Original material in tonnes, 2024", () => {
            const result = tested.actual_result(450,25,100);
            const expected = 900;
            result.should.be.equal(expected);
        });

        it("Original material in tonnes, 2025", () => {
            const result = tested.actual_result(500,25,100);
            const expected = 1000;
            result.should.be.equal(expected);
        });


        it("Original material in tonnes, 2026", () => {
            const result = tested.actual_result(600,25,100);
            const expected = 1200;
            result.should.be.equal(expected);
        });
    });

});
