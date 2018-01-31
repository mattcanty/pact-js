/* tslint:disable:no-unused-expression no-empty */
import * as chai from "chai";
import * as nock from "nock";
import {parse} from "url";
import {Request} from "./request";

const expect = chai.expect;

describe("Request", () => {
  let request: Request;

  beforeEach(() => {
    request = new Request();
  });

  context("#send", () => {
    afterEach(() => {
      nock.cleanAll();
    });

    describe("Promise", () => {
      it("Should return a promise", () => {
      });
      it("Should resolve when request succeeds with response body", () => {
      });
      it("Should reject when request fails with error message", () => {
      });
    });
    describe("Headers", () => {
      it("Should have Pact headers are sent with every request", () => {
      });
    });
    describe("SSL", () => {
      it("Should ignore self signed certificate errors", () => {
      });
    });
  });
});
