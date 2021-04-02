// Generated from RFilter.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RFilter.

function RFilterVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RFilterVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RFilterVisitor.prototype.constructor = RFilterVisitor;

// Visit a parse tree produced by RFilter#stream.
RFilterVisitor.prototype.visitStream = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RFilter#eat.
RFilterVisitor.prototype.visitEat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RFilter#elem.
RFilterVisitor.prototype.visitElem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RFilter#atom.
RFilterVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RFilter#op.
RFilterVisitor.prototype.visitOp = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RFilterVisitor = RFilterVisitor;