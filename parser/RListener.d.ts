import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {ProgContext} from './RParser';

import {ExprContext} from './RParser';

import {ExprlistContext} from './RParser';

import {FormlistContext} from './RParser';

import {FormContext} from './RParser';

import {SublistContext} from './RParser';

import {SubContext} from './RParser';


export declare class RListener implements ParseTreeListener {
    constructor();
    
    enterProg(ctx: ProgContext): void;
    
    exitProg(ctx: ProgContext): void;
    
    enterExpr(ctx: ExprContext): void;
    
    exitExpr(ctx: ExprContext): void;
    
    enterExprlist(ctx: ExprlistContext): void;
    
    exitExprlist(ctx: ExprlistContext): void;
    
    enterFormlist(ctx: FormlistContext): void;
    
    exitFormlist(ctx: FormlistContext): void;
    
    enterForm(ctx: FormContext): void;
    
    exitForm(ctx: FormContext): void;
    
    enterSublist(ctx: SublistContext): void;
    
    exitSublist(ctx: SublistContext): void;
    
    enterSub(ctx: SubContext): void;
    
    exitSub(ctx: SubContext): void;
    
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}
