import Parser, { plugins } from "./parser";
import "./parser/util";
import "./parser/statement";
import "./parser/lval";
import "./parser/expression";
import "./parser/node";
import "./parser/location";
import "./parser/comments";

import { types as tokTypes } from "./tokenizer/types";
import "./tokenizer";
import "./tokenizer/context";

import flowPlugin from "./plugins/flow";
import jsxPlugin from "./plugins/jsx";
import monadPlugin from "./plugins/monad";
plugins.flow = flowPlugin;
plugins.jsx = jsxPlugin;
plugins.monad = monadPlugin;

export function parse(input, options) {
  return new Parser(options, input).parse();
}

export { tokTypes };
