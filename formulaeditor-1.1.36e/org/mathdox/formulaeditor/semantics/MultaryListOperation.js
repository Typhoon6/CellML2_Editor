$package("org.mathdox.formulaeditor.semantics");

$identify("org/mathdox/formulaeditor/semantics/MultaryListOperation.js");

$require("org/mathdox/formulaeditor/semantics/Node.js");
$require("org/mathdox/formulaeditor/semantics/MultaryOperation.js");
$require("org/mathdox/formulaeditor/presentation/Row.js");
$require("org/mathdox/formulaeditor/presentation/Symbol.js");

$main(function(){

  /**
   * Representation of an n-ary infix operation.
   */
  org.mathdox.formulaeditor.semantics.MultaryListOperation =
    $extend(org.mathdox.formulaeditor.semantics.MultaryOperation, {
     
      // options to overrule for hints for bracketed output other than braces 
      bracketedRule : null,
      // options to overrule for hints for bracketed output other than bracesWithSeparatedArguments
      bracketedRuleArgs : null,

      /**
       * See org.mathdox.formulaeditor.semantics.Node.getPresentation(context)
       */
      getPresentation : function(context) {

        var presentation = org.mathdox.formulaeditor.presentation;

        // construct an array of the presentation of operand nodes interleaved
        // with operator symbols
        var pres = {};

        if (this.bracketedRule) {
          pres.rule = this.bracketedRule;
        }

        if (this.bracketedRuleArgs) {
          pres.ruleArgs = this.bracketedRuleArgs;
        }

        pres.array = [];
        var i;
        if (this.style != "invisible" && this.symbol.onscreen instanceof Array) {
          if (this.symbol.onscreen[0]!=="") {
            this.addPresentationBracketOpen(context, pres, this.symbol.onscreen[0]);
          }
        }
        for (i=0; i<this.operands.length; i++) {
          var operand = this.operands[i];
          if (i>0 && this.style != "invisible" ) {
            if (this.symbol.onscreen instanceof Array) {
              // NOTE: use listSeparator
              pres.array.push(new presentation.Row(context.listSeparator));
            }
            else {
              pres.array.push(new presentation.Row(this.symbol.onscreen));
            }
          }
          if (operand.getPrecedence && operand.getPrecedence(context) != 0 && operand.getPrecedence(context) < this.getPrecedence(context)) {
            this.addPresentationBracketOpen(context, pres, "(");
            pres.array.push(operand.getPresentation(context));
            this.addPresentationBracketClose(context, pres, ")");
          }
          else {
            pres.array.push(operand.getPresentation(context));
          }
        }
        if (this.style != "invisible" && this.symbol.onscreen instanceof Array) {
          if (this.symbol.onscreen[2]!=="") {
            this.addPresentationBracketClose(context, pres, this.symbol.onscreen[2]);
          }
        }

        // create and return new presentation row using the constructed array
        var result = new presentation.Row();
        result.initialize.apply(result, pres.array);
        return result;

      }

    });

});
