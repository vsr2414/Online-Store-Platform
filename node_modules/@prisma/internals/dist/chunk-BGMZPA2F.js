"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_BGMZPA2F_exports = {};
__export(chunk_BGMZPA2F_exports, {
  missingDatasource: () => missingDatasource
});
module.exports = __toCommonJS(chunk_BGMZPA2F_exports);
var import_chunk_I6WLABB2 = require("./chunk-I6WLABB2.js");
var import_chunk_VNIE2AZB = require("./chunk-VNIE2AZB.js");
var import_chunk_PG5FDKSF = require("./chunk-PG5FDKSF.js");
var missingDatasource = `
You don't have any ${(0, import_chunk_PG5FDKSF.bold)("datasource")} defined in your ${(0, import_chunk_PG5FDKSF.bold)("schema.prisma")}.
You can define a datasource like this:

${(0, import_chunk_PG5FDKSF.bold)(
  (0, import_chunk_VNIE2AZB.highlightDatamodel)(`datasource db {
  provider = "postgresql"
}`)
)}

More information in our documentation:
${(0, import_chunk_I6WLABB2.link)("https://pris.ly/d/prisma-schema")}
`;
