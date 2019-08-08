'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    'type': 'basic_input',
    'message0': '%{BKY_BASIC_INPUT} %1',
    'args0': [{
      'type': 'input_value',
      'name': 'hint',
      'check': 'String'
    }],
    'output': 'String',
    'style': 'math_blocks',
  },
  {
    'type': 'basic_output',
    'message0': '%{BKY_BASIC_OUTPUT} %1',
    'args0': [{
      'type': 'input_value',
      'name': 'output_content',
      'check': 'String'
    }],
    'style': 'math_blocks',
  },
]);
