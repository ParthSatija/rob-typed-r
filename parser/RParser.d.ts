import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class ProgContext extends ParserRuleContext {
    
}

export declare class ExprlistContext extends ParserRuleContext {
    
}

export declare class FormlistContext extends ParserRuleContext {
    
}

export declare class FormContext extends ParserRuleContext {
    
    ID(): TerminalNode;
    
    expr(): ExprContext;
    
}

export declare class SublistContext extends ParserRuleContext {
    
}

export declare class SubContext extends ParserRuleContext {
    
    expr(): ExprContext;
    
    ID(): TerminalNode;
    
    STRING(): TerminalNode;
    
}

export declare class ExprContext extends ParserRuleContext {
    
    formlist(): FormlistContext;
    
    exprlist(): ExprlistContext;
    
    ID(): TerminalNode;
    
    STRING(): TerminalNode;
    
    HEX(): TerminalNode;
    
    INT(): TerminalNode;
    
    FLOAT(): TerminalNode;
    
    COMPLEX(): TerminalNode;
    
    USER_OP(): TerminalNode;
    
    sublist(): SublistContext;
    
}


export declare class RParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    prog(): ProgContext;

    exprlist(): ExprlistContext;

    formlist(): FormlistContext;

    form(): FormContext;

    sublist(): SublistContext;

    sub(): SubContext;

}
