'use strict';

goog.provide('Blockly.Constants.Sprite');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    'type': 'sprite_index',
    'message0': '%1',
    'args0': [{
      'type': 'input_dummy',
      'name': 'index',
    }],
    "extensions": ["dynamic_menu_extension"],
    'output': 'Number',
  },
]);

Blockly.Extensions.register('dynamic_menu_extension',
  function() {
    this.getInput('index')
      .appendField(new Blockly.FieldDropdown(
        function() {
          var options = []
          for (var i = 0; i < gCurrentClients.length; i++) {
            var clientID = gCurrentClients[i];
            options.push([clientID, clientID]);
          }
          return options;
        }), 'index');
  });
