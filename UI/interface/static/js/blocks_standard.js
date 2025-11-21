Blockly.defineBlocksWithJsonArray([
  {
    "type": "set_key_value",
    "message0": "setze %1 auf %2",
    "args0": [
      {"type": "field_input", "name": "KEY", "text": "key"},
      {"type": "field_input", "name": "VALUE", "text": "value"}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "server_box",
    "message0": "Die Grundlegenden Server Einstellungen\nPort: %1\nServer Name: %2\nBroadcast %3\n Logging %4 (für die Statistik)\n\n",
    "args0": [
      {"type": "field_number", "name": "BW_PORT", "value": "8080", "min": "5000", "max": "99999"},
      {"type": "field_input", "name": "BW_NAME", "text": "Standard Server"},
      {"type": "field_checkbox", "name": "BW_BC", "checked": "false"},
      {"type": "field_checkbox", "name": "BW_LOGGING", "checked": "true"},
    ],
    "message1": "Routen:\n%1\n\n",
    "args1": [
      {"type": "input_statement", "name": "BW_ROUTES", 'check': ['routen']}
    ],
    "message2": "Routen Config:\n%1",
    "args2": [
      {"type": "input_statement", "name": "BW_ROUTES", 'check': ['routen_block']}
    ],
    "colour": "#009ee0",
    "tooltip": "Dies ist der Standard Block für die Config"
  },
  {
    "type": "routen",
    "message0": "Route: %1",
    "args0": [
      {"type": "field_input", "name": "BW_ROUTE_CONFIG", "text": "Route1"},
    ],
    "colour": "#d0ff00",
    "previousStatement": "routen",
    "nextStatement": "routen"
  },
  {
    "type": "routen_block",
    "message0": "Route: %1\n\n",
    "args0": [
      {"type": "field_input", "name": "BW_ROUTE_NAME", "text": "Route1"},
    ],
    "message1": "Module / Plugin\n%1",
    "args1": [
      {"type": "input_statement", "name": "BW_MODULE_PLUGIN", 'check': ['module_base', 'plugin_base']},
    ],
    "colour": "#d0ff00",
    "previousStatement": "routen_block",
    "nextStatement": "routen_block"
  }
]);
