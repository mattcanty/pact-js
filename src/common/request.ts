"use strict";
// Polyfill Object.assign since it's missing in Popsicle
require("es6-object-assign").polyfill();

import * as Popsicle from "popsicle/dist/common";
import {Response} from "popsicle/dist/response";
import {logger} from "./logger";

export type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

export class Request {
  public send(method: HTTPMethod, url: string, body?: string): Promise<string> {
    const opts = {
      body,
      headers: {
        "Content-Type": "application/json",
        "X-Pact-Mock-Service": "true",
      },
      method,
      transport: Popsicle.createTransport({
        rejectUnauthorized: false, // Need to tell node to ignore bad ssl cert
        type: "text",
      }),
      url,
    };

    logger.info(`Sending request with opts: ${JSON.stringify(opts)}`);

    return Popsicle.request(opts)
      .then((res: Response) => {
        if (res.status >= 200 && res.status < 400) {
          logger.info("Resolving promise with: " + res.body);
          return res.body;
        } else {
          const msg = "Rejecting promise with: " + res.body;
          logger.info(msg);
          return Promise.reject(msg);
        }
      });
  }
}
