{
    "patcher": {
        "fileversion": 1,
        "appversion": {
            "major": 9,
            "minor": 1,
            "revision": 2,
            "architecture": "x64",
            "modernui": 1
        },
        "classnamespace": "box",
        "rect": [ 65.0, 178.0, 1176.0, 708.0 ],
        "subpatcher_template": "mvc_help-file_template",
        "showrootpatcherontab": 0,
        "showontab": 0,
        "boxes": [
            {
                "box": {
                    "id": "obj-4",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 0.0, 26.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [
                            {
                                "box": {
                                    "id": "obj-46",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 498.5, 81.0, 94.0, 20.0 ],
                                    "presentation_linecount": 2,
                                    "text": "reset third value"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-45",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 478.0, 53.0, 89.0, 20.0 ],
                                    "presentation_linecount": 2,
                                    "text": "reset all values"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-43",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 450.0, 80.0, 45.0, 22.0 ],
                                    "presentation_linecount": 2,
                                    "text": "reset 3"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-38",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 533.0, 349.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-39",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 533.0, 306.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-40",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 533.0, 280.0, 277.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/queryDemoParam.1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-37",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 604.0, 170.0, 145.0, 20.0 ],
                                    "presentation_linecount": 3,
                                    "text": "get some attribute's value"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-31",
                                    "items": [ "address", ",", "addresscount", ",", "addresslist", ",", "attributes", ",", "description", ",", "uid", ",", "min", ",", "max", ",", "clip", ",", "mvc-type", ",", "options", ",", "type" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 503.0, 169.0, 100.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-30",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 544.0, 197.0, 73.0, 22.0 ],
                                    "text": "prepend get"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-23",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 563.0, 137.0, 84.0, 20.0 ],
                                    "presentation_linecount": 2,
                                    "text": "get third value"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-22",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 531.0, 109.0, 79.0, 20.0 ],
                                    "text": "get all values"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-15",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 489.0, 136.0, 73.0, 22.0 ],
                                    "presentation_linecount": 2,
                                    "text": "get values 3"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-14",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 466.0, 108.0, 63.0, 22.0 ],
                                    "text": "get values"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-9",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 39.0, 407.0, 181.5, 22.0 ],
                                    "text": "pack 0. 0"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-8",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 39.0, 434.0, 114.0, 22.0 ],
                                    "text": "print queried-values"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-6",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 201.5, 346.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-2",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 366.0, 427.5, 100.0, 35.0 ],
                                    "text": "print queried-attr @popup 1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-25",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 436.0, 52.0, 35.0, 22.0 ],
                                    "text": "reset"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-28",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 65.0, 374.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-16",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 533.0, 465.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-52",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 27.0, 80.0, 406.0, 20.0 ],
                                    "text": "Range and clipping mode can be applied to values, depending on the type."
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-49",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 364.0, 197.0, 31.0, 22.0 ],
                                    "text": "max"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-44",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 315.5, 197.0, 29.5, 22.0 ],
                                    "text": "min"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-35",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 221.5, 164.0, 43.0, 22.0 ],
                                    "text": "clip $1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-41",
                                    "items": [ "free", ",", "low", ",", "high", ",", "both", ",", "wrap", ",", "fold" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 181.0, 140.0, 100.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-42",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 112.5, 164.0, 48.0, 22.0 ],
                                    "text": "type $1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-20",
                                    "items": [ "undefined", ",", "integer", ",", "bool", ",", "decimal", ",", "vector", ",", "dict", ",", "string", ",", "list" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 72.0, 140.0, 100.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-32",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 347.0, 140.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-33",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 347.0, 164.0, 48.0, 22.0 ],
                                    "text": "max $1"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-27",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 285.0, 140.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-24",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 285.0, 164.0, 45.0, 22.0 ],
                                    "text": "min $1"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-7",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 533.0, 422.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-5",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 533.0, 396.0, 277.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/queryDemoParam.3"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-4",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 39.0, 346.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-1",
                                    "linecount": 3,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 39.0, 291.5, 346.0, 49.0 ],
                                    "text": "mvc.parameter ParameterHelper queryDemoParam.{1..4} @type decimal @default 200 @min 100 @max 300 @clip both @unit parsec @description \"Distance to my car\""
                                }
                            },
                            {
                                "box": {
                                    "border": 0,
                                    "filename": "helpname.js",
                                    "id": "obj-19",
                                    "ignoreclick": 1,
                                    "jsarguments": [ "mvc.parameter" ],
                                    "maxclass": "jsui",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 10.0, 10.0, 318.6319885253906, 57.599853515625 ]
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-2", 0 ],
                                    "source": [ "obj-1", 2 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-4", 0 ],
                                    "source": [ "obj-1", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-6", 0 ],
                                    "source": [ "obj-1", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-14", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-15", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-42", 0 ],
                                    "source": [ "obj-20", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-24", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-25", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-24", 0 ],
                                    "source": [ "obj-27", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-30", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-30", 0 ],
                                    "source": [ "obj-31", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-33", 0 ],
                                    "source": [ "obj-32", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-33", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-35", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-38", 0 ],
                                    "order": 1,
                                    "source": [ "obj-39", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-40", 0 ],
                                    "midpoints": [ 542.5, 338.0, 520.5, 338.0, 520.5, 269.0, 542.5, 269.0 ],
                                    "order": 0,
                                    "source": [ "obj-39", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "midpoints": [ 48.5, 378.0, 26.5, 378.0, 26.5, 277.28125, 48.5, 277.28125 ],
                                    "order": 1,
                                    "source": [ "obj-4", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-28", 0 ],
                                    "order": 0,
                                    "source": [ "obj-4", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-9", 0 ],
                                    "order": 2,
                                    "source": [ "obj-4", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-39", 0 ],
                                    "source": [ "obj-40", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-35", 0 ],
                                    "source": [ "obj-41", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-42", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-43", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-44", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-49", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-7", 0 ],
                                    "source": [ "obj-5", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-9", 1 ],
                                    "source": [ "obj-6", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-16", 0 ],
                                    "order": 1,
                                    "source": [ "obj-7", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-5", 0 ],
                                    "midpoints": [ 542.5, 454.0, 520.5, 454.0, 520.5, 385.0, 542.5, 385.0 ],
                                    "order": 0,
                                    "source": [ "obj-7", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-8", 0 ],
                                    "source": [ "obj-9", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "Jamoma_highlighted_orange",
                                "default": {
                                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "ksliderWhite",
                                "default": {
                                    "color": [ 1, 1, 1, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjBlue-1",
                                "default": {
                                    "accentcolor": [ 0.317647, 0.654902, 0.976471, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjGreen-1",
                                "default": {
                                    "accentcolor": [ 0, 0.533333, 0.168627, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "numberGold-1",
                                "default": {
                                    "accentcolor": [ 0.764706, 0.592157, 0.101961, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap",
                                "default": {
                                    "fontname": [ "Lato Light" ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap-dark",
                                "default": {
                                    "editing_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "fontname": [ "Ableton Sans Light Regular" ],
                                    "locked_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "textcolor": [ 0.847058823529412, 0.847058823529412, 0.847058823529412, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 243.0, 81.0, 61.0, 22.0 ],
                    "presentation_linecount": 2,
                    "text": "p Queries"
                }
            },
            {
                "box": {
                    "id": "obj-6",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 38.5, 195.0, 175.0, 22.0 ],
                    "text": "mvc.helpfiller mvc.parameter"
                }
            },
            {
                "box": {
                    "id": "obj-5",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 430.0, 166.0, 124.0, 22.0 ],
                    "text": "jsargs mvc.parameter"
                }
            },
            {
                "box": {
                    "border": 0,
                    "filename": "helpdetails.js",
                    "id": "obj-2",
                    "ignoreclick": 1,
                    "jsarguments": [ "mvc.parameter" ],
                    "maxclass": "jsui",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 69.0, 298.0, 566.0, 149.0 ]
                }
            },
            {
                "box": {
                    "border": 0,
                    "filename": "helpname.js",
                    "id": "obj-3",
                    "ignoreclick": 1,
                    "jsarguments": [ "mvc.parameter" ],
                    "maxclass": "jsui",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 10.0, 10.0, 318.6319885253906, 57.599853515625 ]
                }
            },
            {
                "box": {
                    "id": "obj-1",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 0.0, 26.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [],
                        "lines": [],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 487.0, 80.060059, 25.0, 22.0 ],
                    "text": "p ?"
                }
            },
            {
                "box": {
                    "id": "obj-68",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 65.0, 204.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-20",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 23.0, 255.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-7",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 23.0, 281.0, 80.0, 22.0 ],
                                    "text": "setvalue 2 $1"
                                }
                            },
                            {
                                "box": {
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-6",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 89.0, 517.0, 290.0, 35.0 ],
                                    "text": "Access a parameter state remotely using mvc.remote (see mvc.remote maxhelp for further information)",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-1",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 284.5, 634.0, 191.0, 25.0 ],
                                    "text": "Or use ready-made GUI objects",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-19",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 550.0, 308.5, 162.0, 37.0 ],
                                    "text": "Use the \"reset\" message to recall the default value."
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-18",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 513.0, 316.0, 35.0, 22.0 ],
                                    "text": "reset"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-15",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 100.0, 395.0, 54.0, 24.0 ],
                                    "text": "value"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-13",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 337.0, 395.0, 92.0, 24.0 ],
                                    "text": "param index"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-14",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 285.0, 396.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-12",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 245.0, 582.0, 92.0, 24.0 ],
                                    "text": "param index"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-10",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 126.0, 582.0, 54.0, 24.0 ],
                                    "text": "value"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-2",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 193.0, 583.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-33",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 647.0, 159.0, 30.0, 22.0 ],
                                    "text": "GUI"
                                }
                            },
                            {
                                "box": {
                                    "args": [ "ParameterHelper/resistance{1..19}", "@active", 1 ],
                                    "bgmode": 0,
                                    "border": 1,
                                    "clickthrough": 0,
                                    "enablehscroll": 0,
                                    "enablevscroll": 0,
                                    "id": "obj-39",
                                    "lockeddragscroll": 0,
                                    "lockedsize": 0,
                                    "maxclass": "bpatcher",
                                    "name": "mvc.GUI.number.maxpat",
                                    "numinlets": 2,
                                    "numoutlets": 2,
                                    "offset": [ 0.0, 0.0 ],
                                    "outlettype": [ "", "" ],
                                    "patching_rect": [ 63.0, 638.0, 229.0, 17.0 ],
                                    "viewvisibility": 1
                                }
                            },
                            {
                                "box": {
                                    "border": 0,
                                    "filename": "helpdetails.js",
                                    "id": "obj-5",
                                    "ignoreclick": 1,
                                    "jsarguments": [ "mvc.parameter" ],
                                    "maxclass": "jsui",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 10.0, 10.0, 553.0, 129.66936350069614 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-4",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 513.0, 391.0, 82.0, 22.0 ],
                                    "text": "print dumpout"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 0,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-11",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 410.5, 217.0, 225.0, 64.0 ],
                                    "text": "Parameters need a parent model, either an mvc.device or an mvc.model.",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.23921568627451, 0.345098039215686, 0.505882352941176, 1.0 ],
                                    "fontsize": 18.0,
                                    "id": "obj-8",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "" ],
                                    "patching_rect": [ 425.0, 186.0, 241.0, 29.0 ],
                                    "text": "mvc.device ParameterHelper",
                                    "varname": "mvc.device"
                                }
                            },
                            {
                                "box": {
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-25",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 68.5, 180.0, 241.0, 35.0 ],
                                    "text": "Set a parent node and a name as arguments to declare a parameter in the namespace",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-23",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 73.0, 309.5, 340.0, 35.0 ],
                                    "text": "mvc.parameter can hold values for various manipulations such as mapping, storing & recalling presets, building GUI interfaces",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-22",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 73.0, 582.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-21",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 57.0, 396.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.749019607843137, 0.513725490196078, 0.294117647058824, 1.0 ],
                                    "id": "obj-17",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 73.0, 554.0, 259.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/resistance{1..19}"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-16",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 57.0, 349.0, 475.0, 35.0 ],
                                    "text": "mvc.parameter ParameterHelper resistance{1..3} @default 1024 @description \"Futile resistance\" @unit Ω @type decimal @range 1 1000000 @clip both"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-67",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 57.0, 220.0, 264.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_parameter"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-57",
                                    "maxclass": "newobj",
                                    "numinlets": 0,
                                    "numoutlets": 0,
                                    "patcher": {
                                        "fileversion": 1,
                                        "appversion": {
                                            "major": 9,
                                            "minor": 1,
                                            "revision": 2,
                                            "architecture": "x64",
                                            "modernui": 1
                                        },
                                        "classnamespace": "box",
                                        "rect": [ 351.0, 171.0, 362.0, 632.0 ],
                                        "subpatcher_template": "mvc_help-file_template",
                                        "boxes": [
                                            {
                                                "box": {
                                                    "id": "obj-28",
                                                    "linecount": 3,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 42.0, 325.0, 47.0 ],
                                                    "text": "Note : this attribute can be retrieved for designing the GUI.\nThe range and type attributes also constrains the output on the mvc.parameter side."
                                                }
                                            },
                                            {
                                                "box": {
                                                    "fontname": "Arial Bold",
                                                    "fontsize": 14.0,
                                                    "id": "obj-27",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 14.0, 152.0, 22.0 ],
                                                    "text": "Parameters attributes"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-13",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 25.0, 528.5, 159.0, 20.0 ],
                                                    "text": "@default : the default value"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-11",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 25.0, 578.0, 305.0, 20.0 ],
                                                    "text": "@decription : a short text decscription for the parameter"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-8",
                                                    "linecount": 8,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 25.0, 392.0, 159.0, 114.0 ],
                                                    "text": "@clip : clipping the paraleter's value\n- free\n- low\n- high\n- both\n- wrap\n- fold"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-5",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 44.0, 351.0, 236.0, 20.0 ],
                                                    "text": "eg : @options lowpass bandpass highpass"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-6",
                                                    "linecount": 2,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 25.0, 303.0, 262.0, 33.0 ],
                                                    "text": "@options : \nset of possible options for a parameter value"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-4",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 38.0, 262.0, 159.0, 20.0 ],
                                                    "text": "eg : @range 0 1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-3",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 19.0, 240.0, 250.0, 20.0 ],
                                                    "text": "@range, @min, @max : min and max values"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-2",
                                                    "linecount": 8,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 19.0, 103.0, 150.0, 114.0 ],
                                                    "text": "@type :\n- decimal\n- integer\n- bool\n- string\n- vector\n- dict\n- list/undefined (default)"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "angle": 270.0,
                                                    "bgcolor": [ 0.3686274509803922, 0.3686274509803922, 0.3686274509803922, 1.0 ],
                                                    "border": 1,
                                                    "bordercolor": [ 0.0, 0.0, 0.0, 0.18 ],
                                                    "id": "obj-25",
                                                    "maxclass": "panel",
                                                    "mode": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 564.0, 316.0, 48.0 ],
                                                    "proportion": 0.5
                                                }
                                            },
                                            {
                                                "box": {
                                                    "angle": 270.0,
                                                    "bgcolor": [ 0.3686274509803922, 0.3686274509803922, 0.3686274509803922, 1.0 ],
                                                    "border": 1,
                                                    "bordercolor": [ 0.0, 0.0, 0.0, 0.18 ],
                                                    "id": "obj-24",
                                                    "maxclass": "panel",
                                                    "mode": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 520.0, 316.0, 37.0 ],
                                                    "proportion": 0.5
                                                }
                                            },
                                            {
                                                "box": {
                                                    "angle": 270.0,
                                                    "bgcolor": [ 0.3686274509803922, 0.3686274509803922, 0.3686274509803922, 1.0 ],
                                                    "border": 1,
                                                    "bordercolor": [ 0.0, 0.0, 0.0, 0.18 ],
                                                    "id": "obj-22",
                                                    "maxclass": "panel",
                                                    "mode": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 384.0, 316.0, 122.0 ],
                                                    "proportion": 0.5
                                                }
                                            },
                                            {
                                                "box": {
                                                    "angle": 270.0,
                                                    "bgcolor": [ 0.3686274509803922, 0.3686274509803922, 0.3686274509803922, 1.0 ],
                                                    "border": 1,
                                                    "bordercolor": [ 0.0, 0.0, 0.0, 0.18 ],
                                                    "id": "obj-21",
                                                    "maxclass": "panel",
                                                    "mode": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 296.0, 316.0, 81.0 ],
                                                    "proportion": 0.5
                                                }
                                            },
                                            {
                                                "box": {
                                                    "angle": 270.0,
                                                    "bgcolor": [ 0.3686274509803922, 0.3686274509803922, 0.3686274509803922, 1.0 ],
                                                    "border": 1,
                                                    "bordercolor": [ 0.0, 0.0, 0.0, 0.18 ],
                                                    "id": "obj-20",
                                                    "maxclass": "panel",
                                                    "mode": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 232.0, 316.0, 57.00000000000003 ],
                                                    "proportion": 0.5
                                                }
                                            },
                                            {
                                                "box": {
                                                    "angle": 270.0,
                                                    "bgcolor": [ 0.3686274509803922, 0.3686274509803922, 0.3686274509803922, 1.0 ],
                                                    "border": 1,
                                                    "bordercolor": [ 0.0, 0.0, 0.0, 0.18 ],
                                                    "id": "obj-19",
                                                    "maxclass": "panel",
                                                    "mode": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 15.0, 92.0, 316.0, 134.0 ],
                                                    "proportion": 0.5
                                                }
                                            }
                                        ],
                                        "lines": [],
                                        "styles": [
                                            {
                                                "name": "AudioStatus_Menu",
                                                "default": {
                                                    "bgfillcolor": {
                                                        "angle": 270.0,
                                                        "autogradient": 0,
                                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                                        "proportion": 0.39,
                                                        "type": "color"
                                                    }
                                                },
                                                "parentstyle": "",
                                                "multi": 0
                                            }
                                        ]
                                    },
                                    "patching_rect": [ 765.0, 224.91216322222215, 68.0, 22.0 ],
                                    "text": "p attributes"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-58",
                                    "maxclass": "newobj",
                                    "numinlets": 0,
                                    "numoutlets": 0,
                                    "patcher": {
                                        "fileversion": 1,
                                        "appversion": {
                                            "major": 9,
                                            "minor": 1,
                                            "revision": 2,
                                            "architecture": "x64",
                                            "modernui": 1
                                        },
                                        "classnamespace": "box",
                                        "rect": [ 116.0, 146.0, 1099.0, 385.0 ],
                                        "subpatcher_template": "mvc_help-file_template",
                                        "boxes": [
                                            {
                                                "box": {
                                                    "id": "obj-11",
                                                    "maxclass": "number",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 279.0, 169.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "bubble": 1,
                                                    "id": "obj-29",
                                                    "linecount": 2,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 864.0, 182.0, 176.0, 37.0 ],
                                                    "text": "... or use setvalue to chose which address to talk to."
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-27",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 767.0, 135.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-24",
                                                    "maxclass": "number",
                                                    "maximum": 4,
                                                    "minimum": 0,
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 826.0, 135.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-20",
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 767.0, 164.0, 78.0, 22.0 ],
                                                    "text": "pack 0. 1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-18",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 767.0, 196.0, 87.0, 22.0 ],
                                                    "text": "setvalue $2 $1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-9",
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 767.0, 226.0, 275.0, 22.0 ],
                                                    "text": "mvc.remote ParameterHelper/myPolyParam.{1..4}"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-19",
                                                    "maxclass": "newobj",
                                                    "numinlets": 1,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 170.0, 196.0, 85.0, 22.0 ],
                                                    "text": "prepend cutoff"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-16",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 170.0, 169.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-10",
                                                    "maxclass": "newobj",
                                                    "numinlets": 1,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 170.0, 241.0, 53.0, 22.0 ],
                                                    "text": "prepend"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-12",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 279.0, 196.0, 89.0, 22.0 ],
                                                    "text": "set setvalue $1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-3",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 531.0, 216.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-4",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 531.0, 240.0, 196.0, 35.0 ],
                                                    "text": "mvc.remote ParameterHelper/myPolyParam.3"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-5",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 531.0, 286.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-6",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 531.0, 310.0, 196.0, 35.0 ],
                                                    "text": "mvc.remote ParameterHelper/myPolyParam.4"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "bubble": 1,
                                                    "bubbleside": 2,
                                                    "id": "obj-1",
                                                    "linecount": 2,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 448.0, 19.0, 210.0, 52.0 ],
                                                    "text": "Then tweak these values to see how they are forwarded into the poly~"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "bubble": 1,
                                                    "bubbleside": 2,
                                                    "id": "obj-34",
                                                    "linecount": 2,
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 21.0, 172.0, 137.0, 52.0 ],
                                                    "text": "Open voices 1 and 2 to see what's happening"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-33",
                                                    "maxclass": "number",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 78.0, 226.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-30",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 78.0, 254.0, 52.0, 22.0 ],
                                                    "text": "open $1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-23",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 531.0, 73.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-2",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 531.0, 97.0, 196.0, 35.0 ],
                                                    "text": "mvc.remote ParameterHelper/myPolyParam.1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-15",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 531.0, 144.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-13",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 531.0, 168.0, 196.0, 35.0 ],
                                                    "text": "mvc.remote ParameterHelper/myPolyParam.2"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-26",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 170.0, 118.0, 237.0, 35.0 ],
                                                    "text": "mvc.parameter ParameterHelper myPolyParam.{1..4} @default 12."
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-31",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 170.0, 291.5, 305.0, 35.0 ],
                                                    "text": "poly~ mvc.parameter.helper.polyexample.p 4 @args ParameterHelper"
                                                }
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-31", 0 ],
                                                    "source": [ "obj-10", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-12", 0 ],
                                                    "source": [ "obj-11", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-10", 0 ],
                                                    "midpoints": [ 288.5, 231.5, 179.5, 231.5 ],
                                                    "source": [ "obj-12", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-13", 0 ],
                                                    "source": [ "obj-15", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-19", 0 ],
                                                    "source": [ "obj-16", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-9", 0 ],
                                                    "source": [ "obj-18", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-10", 0 ],
                                                    "source": [ "obj-19", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-18", 0 ],
                                                    "source": [ "obj-20", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-2", 0 ],
                                                    "source": [ "obj-23", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-20", 1 ],
                                                    "source": [ "obj-24", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-11", 0 ],
                                                    "source": [ "obj-26", 1 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-16", 0 ],
                                                    "source": [ "obj-26", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-20", 0 ],
                                                    "source": [ "obj-27", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-4", 0 ],
                                                    "source": [ "obj-3", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-31", 0 ],
                                                    "source": [ "obj-30", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-30", 0 ],
                                                    "source": [ "obj-33", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-6", 0 ],
                                                    "source": [ "obj-5", 0 ]
                                                }
                                            }
                                        ],
                                        "styles": [
                                            {
                                                "name": "AudioStatus_Menu",
                                                "default": {
                                                    "bgfillcolor": {
                                                        "angle": 270.0,
                                                        "autogradient": 0,
                                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                                        "proportion": 0.39,
                                                        "type": "color"
                                                    }
                                                },
                                                "parentstyle": "",
                                                "multi": 0
                                            }
                                        ]
                                    },
                                    "patching_rect": [ 765.0, 197.91216322222215, 210.0, 22.0 ],
                                    "text": "p \"using for poly~ based components\""
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-60",
                                    "maxclass": "newobj",
                                    "numinlets": 0,
                                    "numoutlets": 0,
                                    "patcher": {
                                        "fileversion": 1,
                                        "appversion": {
                                            "major": 9,
                                            "minor": 1,
                                            "revision": 2,
                                            "architecture": "x64",
                                            "modernui": 1
                                        },
                                        "classnamespace": "box",
                                        "rect": [ 306.0, 499.0, 732.0, 346.0 ],
                                        "subpatcher_template": "mvc_help-file_template",
                                        "boxes": [
                                            {
                                                "box": {
                                                    "id": "obj-14",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 397.5, 171.0, 101.0, 22.0 ],
                                                    "text": "get addresscount"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-7",
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "bang", "" ],
                                                    "patching_rect": [ 397.5, 142.0, 34.0, 22.0 ],
                                                    "text": "sel 1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-16",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 325.0, 171.0, 57.0, 22.0 ],
                                                    "text": "chans $1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-10",
                                                    "maxclass": "number",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 325.0, 142.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-6",
                                                    "maxclass": "newobj",
                                                    "numinlets": 3,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "", "" ],
                                                    "patching_rect": [ 325.0, 113.5, 164.0, 22.0 ],
                                                    "text": "route addresscount initialized"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-5",
                                                    "maxclass": "number",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 188.0, 142.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-23",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 543.0, 79.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.749019607843137, 0.513725490196078, 0.294117647058824, 1.0 ],
                                                    "id": "obj-24",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 543.0, 107.0, 169.0, 35.0 ],
                                                    "text": "mvc.remote ParameterHelper/frequency.1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-19",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 69.0, 251.0, 173.0, 22.0 ],
                                                    "text": "setvalue 4 cutoff 440."
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-17",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 51.0, 142.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "format": 6,
                                                    "id": "obj-15",
                                                    "maxclass": "flonum",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "bang" ],
                                                    "parameter_enable": 0,
                                                    "patching_rect": [ 543.0, 161.0, 50.0, 22.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.749019607843137, 0.513725490196078, 0.294117647058824, 1.0 ],
                                                    "id": "obj-13",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 543.0, 189.0, 169.0, 35.0 ],
                                                    "text": "mvc.remote ParameterHelper/frequency.2"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-12",
                                                    "maxclass": "newobj",
                                                    "numinlets": 3,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "multichannelsignal" ],
                                                    "patching_rect": [ 51.0, 294.0, 61.0, 22.0 ],
                                                    "text": "mc.lores~"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-11",
                                                    "maxclass": "newobj",
                                                    "numinlets": 1,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 51.0, 171.0, 85.0, 22.0 ],
                                                    "text": "prepend cutoff"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-8",
                                                    "maxclass": "newobj",
                                                    "numinlets": 1,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 51.0, 211.0, 53.0, 22.0 ],
                                                    "text": "prepend"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-4",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 188.0, 171.0, 89.0, 22.0 ],
                                                    "text": "set setvalue $1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-22",
                                                    "maxclass": "comment",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 51.0, 28.0, 414.0, 20.0 ],
                                                    "text": "When using MC, the parameter syntax helps addressing MC objects directly."
                                                }
                                            },
                                            {
                                                "box": {
                                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                                    "id": "obj-1",
                                                    "linecount": 2,
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "int", "" ],
                                                    "patching_rect": [ 51.0, 66.0, 293.0, 35.0 ],
                                                    "text": "mvc.parameter ParameterHelper frequency.{1..4} @default 440"
                                                }
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-17", 0 ],
                                                    "source": [ "obj-1", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-5", 0 ],
                                                    "source": [ "obj-1", 1 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-6", 0 ],
                                                    "source": [ "obj-1", 2 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-16", 0 ],
                                                    "source": [ "obj-10", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-8", 0 ],
                                                    "source": [ "obj-11", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-15", 0 ],
                                                    "midpoints": [ 552.5, 230.0, 536.5, 230.0, 536.5, 150.0, 552.5, 150.0 ],
                                                    "source": [ "obj-13", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-1", 1 ],
                                                    "midpoints": [ 407.0, 203.0, 503.75, 203.0, 503.75, 55.0, 334.5, 55.0 ],
                                                    "source": [ "obj-14", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-13", 0 ],
                                                    "source": [ "obj-15", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-12", 0 ],
                                                    "midpoints": [ 334.5, 282.0, 60.5, 282.0 ],
                                                    "source": [ "obj-16", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-11", 0 ],
                                                    "source": [ "obj-17", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-24", 0 ],
                                                    "source": [ "obj-23", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-23", 0 ],
                                                    "midpoints": [ 552.5, 139.0, 534.5, 139.0, 534.5, 68.0, 552.5, 68.0 ],
                                                    "source": [ "obj-24", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-8", 0 ],
                                                    "midpoints": [ 197.5, 201.5, 60.5, 201.5 ],
                                                    "source": [ "obj-4", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-4", 0 ],
                                                    "source": [ "obj-5", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-10", 0 ],
                                                    "source": [ "obj-6", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-7", 0 ],
                                                    "source": [ "obj-6", 1 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-14", 0 ],
                                                    "source": [ "obj-7", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-12", 0 ],
                                                    "order": 1,
                                                    "source": [ "obj-8", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-19", 1 ],
                                                    "midpoints": [ 60.5, 241.5, 232.5, 241.5 ],
                                                    "order": 0,
                                                    "source": [ "obj-8", 0 ]
                                                }
                                            }
                                        ],
                                        "styles": [
                                            {
                                                "name": "AudioStatus_Menu",
                                                "default": {
                                                    "bgfillcolor": {
                                                        "angle": 270.0,
                                                        "autogradient": 0,
                                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                                        "proportion": 0.39,
                                                        "type": "color"
                                                    }
                                                },
                                                "parentstyle": "",
                                                "multi": 0
                                            }
                                        ]
                                    },
                                    "patching_rect": [ 765.0, 170.43994099999998, 168.0, 22.0 ],
                                    "text": "p \"usage for MC components\""
                                }
                            },
                            {
                                "box": {
                                    "angle": 270.0,
                                    "bgcolor": [ 0.6862745098039216, 0.6862745098039216, 0.6862745098039216, 1.0 ],
                                    "id": "obj-24",
                                    "maxclass": "panel",
                                    "mode": 0,
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 53.0, 628.0, 429.0, 37.0 ],
                                    "proportion": 0.5
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-14", 0 ],
                                    "source": [ "obj-16", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-21", 0 ],
                                    "source": [ "obj-16", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-4", 0 ],
                                    "source": [ "obj-16", 2 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-2", 0 ],
                                    "source": [ "obj-17", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-22", 0 ],
                                    "source": [ "obj-17", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-16", 1 ],
                                    "source": [ "obj-18", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-7", 0 ],
                                    "source": [ "obj-20", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-16", 0 ],
                                    "midpoints": [ 66.5, 428.0, 44.5, 428.0, 44.5, 338.0, 66.5, 338.0 ],
                                    "source": [ "obj-21", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-17", 0 ],
                                    "midpoints": [ 82.5, 611.0, 59.0, 611.0, 59.0, 548.0, 82.5, 548.0 ],
                                    "source": [ "obj-22", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-8", 1 ],
                                    "source": [ "obj-33", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-16", 0 ],
                                    "source": [ "obj-7", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "Jamoma_highlighted_orange",
                                "default": {
                                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "ksliderWhite",
                                "default": {
                                    "color": [ 1, 1, 1, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjBlue-1",
                                "default": {
                                    "accentcolor": [ 0.317647, 0.654902, 0.976471, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjGreen-1",
                                "default": {
                                    "accentcolor": [ 0, 0.533333, 0.168627, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "numberGold-1",
                                "default": {
                                    "accentcolor": [ 0.764706, 0.592157, 0.101961, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap-dark",
                                "default": {
                                    "editing_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "fontname": [ "Ableton Sans Light Regular" ],
                                    "locked_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "textcolor": [ 0.847058823529412, 0.847058823529412, 0.847058823529412, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 43.5, 80.060059, 47.0, 22.0 ],
                    "text": "p basic",
                    "varname": "basic"
                }
            },
            {
                "box": {
                    "id": "obj-64",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 0.0, 26.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [
                            {
                                "box": {
                                    "id": "obj-57",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 125.0, 219.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-52",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 177.0, 219.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-44",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 125.0, 246.5, 71.0, 22.0 ],
                                    "text": "pak 1 0."
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-43",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "" ],
                                    "patcher": {
                                        "fileversion": 1,
                                        "appversion": {
                                            "major": 9,
                                            "minor": 1,
                                            "revision": 2,
                                            "architecture": "x64",
                                            "modernui": 1
                                        },
                                        "classnamespace": "box",
                                        "rect": [ 0.0, 0.0, 640.0, 480.0 ],
                                        "subpatcher_template": "mvc_help-file_template",
                                        "boxes": [
                                            {
                                                "box": {
                                                    "id": "obj-33",
                                                    "maxclass": "newobj",
                                                    "numinlets": 1,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "bang", "int" ],
                                                    "patching_rect": [ 50.0, 100.0, 65.0, 22.0 ],
                                                    "text": "t b i"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-32",
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "" ],
                                                    "patching_rect": [ 50.0, 159.0, 65.0, 22.0 ],
                                                    "text": "zl.nth"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-30",
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "", "" ],
                                                    "patching_rect": [ 50.0, 130.0, 38.0, 22.0 ],
                                                    "text": "zl.reg"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-27",
                                                    "maxclass": "message",
                                                    "numinlets": 2,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 206.0, 160.0, 86.0, 22.0 ],
                                                    "text": "get addresslist"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-13",
                                                    "maxclass": "newobj",
                                                    "numinlets": 2,
                                                    "numoutlets": 2,
                                                    "outlettype": [ "bang", "" ],
                                                    "patching_rect": [ 206.0, 130.0, 34.0, 22.0 ],
                                                    "text": "sel 1"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "id": "obj-11",
                                                    "maxclass": "newobj",
                                                    "numinlets": 3,
                                                    "numoutlets": 3,
                                                    "outlettype": [ "", "", "" ],
                                                    "patching_rect": [ 141.0, 100.0, 149.0, 22.0 ],
                                                    "text": "route addresslist initialized"
                                                }
                                            },
                                            {
                                                "box": {
                                                    "comment": "",
                                                    "id": "obj-36",
                                                    "index": 1,
                                                    "maxclass": "inlet",
                                                    "numinlets": 0,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 50.0, 40.0, 30.0, 30.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "comment": "",
                                                    "id": "obj-39",
                                                    "index": 2,
                                                    "maxclass": "inlet",
                                                    "numinlets": 0,
                                                    "numoutlets": 1,
                                                    "outlettype": [ "" ],
                                                    "patching_rect": [ 141.0, 40.0, 30.0, 30.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "comment": "",
                                                    "id": "obj-40",
                                                    "index": 1,
                                                    "maxclass": "outlet",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 50.0, 242.0, 30.0, 30.0 ]
                                                }
                                            },
                                            {
                                                "box": {
                                                    "comment": "",
                                                    "id": "obj-41",
                                                    "index": 2,
                                                    "maxclass": "outlet",
                                                    "numinlets": 1,
                                                    "numoutlets": 0,
                                                    "patching_rect": [ 206.0, 242.0, 30.0, 30.0 ]
                                                }
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-13", 0 ],
                                                    "source": [ "obj-11", 1 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-30", 1 ],
                                                    "source": [ "obj-11", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-27", 0 ],
                                                    "source": [ "obj-13", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-41", 0 ],
                                                    "source": [ "obj-27", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-32", 0 ],
                                                    "source": [ "obj-30", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-40", 0 ],
                                                    "source": [ "obj-32", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-30", 0 ],
                                                    "source": [ "obj-33", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-32", 1 ],
                                                    "source": [ "obj-33", 1 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-33", 0 ],
                                                    "source": [ "obj-36", 0 ]
                                                }
                                            },
                                            {
                                                "patchline": {
                                                    "destination": [ "obj-11", 0 ],
                                                    "source": [ "obj-39", 0 ]
                                                }
                                            }
                                        ]
                                    },
                                    "patching_rect": [ 277.5, 361.0, 172.0, 22.0 ],
                                    "text": "p index to address"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-35",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 58.5, 390.0, 238.0, 22.0 ],
                                    "text": "ParameterHelper/dummy"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-9",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 277.5, 334.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-21",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 287.9959716796875, 246.5, 29.5, 22.0 ],
                                    "text": "get"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubblepoint": 0.55,
                                    "bubbleside": 2,
                                    "id": "obj-20",
                                    "linecount": 4,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 236.0, 141.0, 182.0, 79.0 ],
                                    "text": "Similarly, get followed by an optional index gets the corresponding value. Index 0 or no index will return all value."
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubblepoint": 0.53,
                                    "bubbleside": 2,
                                    "id": "obj-19",
                                    "linecount": 4,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 45.0, 141.0, 186.0, 79.0 ],
                                    "text": "Message \"setvalue\" followed by index and values sets the corresponding index in the mvc.parameter's namespace."
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-14",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 125.0, 274.0, 87.0, 22.0 ],
                                    "text": "setvalue $1 $2"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-12",
                                    "maxclass": "number",
                                    "minimum": 0,
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 322.0, 219.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-10",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 322.0, 246.5, 80.0, 22.0 ],
                                    "text": "get values $1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-2",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 170.0, 571.0, 153.0, 20.0 ],
                                    "text": "send to a subset of params"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-4",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 118.0, 571.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.749019607843137, 0.513725490196078, 0.294117647058824, 1.0 ],
                                    "id": "obj-7",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 118.0, 600.0, 326.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/speaker.{front_left|front_right}"
                                }
                            },
                            {
                                "box": {
                                    "border": 0,
                                    "filename": "helpname.js",
                                    "id": "obj-5",
                                    "ignoreclick": 1,
                                    "jsarguments": [ "mvc.parameter" ],
                                    "maxclass": "jsui",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 10.0, 10.0, 318.6319885253906, 57.599853515625 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-42",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 898.0, 233.0, 97.0, 20.0 ],
                                    "text": "multiple ranges"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-8",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 898.0, 255.0, 150.0, 22.0 ],
                                    "text": "address matrix.{0..4}.{0..8}"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-55",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 430.0, 182.0, 153.0, 20.0 ],
                                    "text": "declare a range of params"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-54",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 177.0, 468.0, 153.0, 20.0 ],
                                    "text": "send to a subset of params"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-51",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 125.0, 468.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.749019607843137, 0.513725490196078, 0.294117647058824, 1.0 ],
                                    "id": "obj-49",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 125.0, 497.0, 244.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/lowpass.{4..7}"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-37",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 719.0, 211.0, 97.0, 20.0 ],
                                    "text": "enum"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-38",
                                    "linecount": 3,
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 719.0, 233.0, 162.0, 49.0 ],
                                    "text": "address speaker.{front_left\\,front_right\\,rear_left\\,rear_right\\,sub}"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-26",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 603.0, 260.0, 97.0, 20.0 ],
                                    "text": "alphabetic range"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-25",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 597.0, 234.0, 78.0, 20.0 ],
                                    "text": "signed range"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-24",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 574.0, 210.0, 79.0, 20.0 ],
                                    "text": "integer range"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-18",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 446.0, 233.0, 139.0, 22.0 ],
                                    "text": "address bipolar.{-10..10}"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-53",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 463.0, 260.0, 132.0, 22.0 ],
                                    "text": "address alphabet.{a..u}"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-15",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 65.0, 306.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-3",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 430.0, 209.0, 136.0, 22.0 ],
                                    "text": "address lowpass.{1..64}"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-1",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 125.0, 306.0, 324.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper dummy @default 13.7"
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-15", 0 ],
                                    "source": [ "obj-1", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-43", 1 ],
                                    "source": [ "obj-1", 2 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-9", 0 ],
                                    "source": [ "obj-1", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-10", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-10", 0 ],
                                    "source": [ "obj-12", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-14", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-15", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-18", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-21", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-3", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "midpoints": [ 728.5, 292.0, 439.5, 292.0 ],
                                    "source": [ "obj-38", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-7", 0 ],
                                    "source": [ "obj-4", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "midpoints": [ 440.0, 393.0, 460.75, 393.0, 460.75, 295.0, 439.5, 295.0 ],
                                    "source": [ "obj-43", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-35", 1 ],
                                    "source": [ "obj-43", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-14", 0 ],
                                    "source": [ "obj-44", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-51", 0 ],
                                    "midpoints": [ 134.5, 529.0, 117.5, 529.0, 117.5, 457.0, 134.5, 457.0 ],
                                    "source": [ "obj-49", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-49", 0 ],
                                    "source": [ "obj-51", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-44", 1 ],
                                    "source": [ "obj-52", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-53", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-44", 0 ],
                                    "source": [ "obj-57", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-4", 0 ],
                                    "midpoints": [ 127.5, 632.0, 110.5, 632.0, 110.5, 560.0, 127.5, 560.0 ],
                                    "source": [ "obj-7", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "midpoints": [ 907.5, 298.5, 439.5, 298.5 ],
                                    "source": [ "obj-8", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-43", 0 ],
                                    "source": [ "obj-9", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "Jamoma_highlighted_orange",
                                "default": {
                                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 403.0, 80.060059, 66.0, 22.0 ],
                    "text": "p Multiples"
                }
            },
            {
                "box": {
                    "id": "obj-63",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 0.0, 26.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [
                            {
                                "box": {
                                    "id": "obj-25",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 255.75, 268.0, 35.0, 22.0 ],
                                    "text": "reset"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-28",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 59.0, 381.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-16",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 538.5, 374.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-52",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 27.0, 80.0, 406.0, 20.0 ],
                                    "text": "Range and clipping mode can be applied to values, depending on the type."
                                }
                            },
                            {
                                "box": {
                                    "contdata": 1,
                                    "ghostbar": 70,
                                    "id": "obj-43",
                                    "maxclass": "multislider",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 101.5, 346.0, 203.0, 45.0 ],
                                    "setminmax": [ -10.0, 10.0 ],
                                    "signed": 1,
                                    "size": 10,
                                    "spacing": 1
                                }
                            },
                            {
                                "box": {
                                    "contdata": 1,
                                    "ghostbar": 70,
                                    "id": "obj-34",
                                    "maxclass": "multislider",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 538.5, 239.0, 203.0, 45.0 ],
                                    "setminmax": [ -10.0, 10.0 ],
                                    "signed": 1,
                                    "size": 10,
                                    "spacing": 1
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-49",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 364.0, 197.0, 31.0, 22.0 ],
                                    "text": "max"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-48",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 397.0, 189.5, 154.0, 37.0 ],
                                    "text": "Min or max without value removes the limit."
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-44",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 315.5, 197.0, 29.5, 22.0 ],
                                    "text": "min"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-35",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 221.5, 164.0, 43.0, 22.0 ],
                                    "text": "clip $1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-41",
                                    "items": [ "free", ",", "low", ",", "high", ",", "both", ",", "wrap", ",", "fold" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 181.0, 140.0, 100.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-42",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 112.5, 164.0, 48.0, 22.0 ],
                                    "text": "type $1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-20",
                                    "items": [ "undefined", ",", "integer", ",", "bool", ",", "decimal", ",", "vector", ",", "dict", ",", "string", ",", "list" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 72.0, 140.0, 100.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-32",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 347.0, 140.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-33",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 347.0, 164.0, 48.0, 22.0 ],
                                    "text": "max $1"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-27",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 285.0, 140.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-24",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 285.0, 164.0, 45.0, 22.0 ],
                                    "text": "min $1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-21",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 742.5, 541.5, 238.0, 33.0 ],
                                    "text": "This mvc.remote instance is attached to 2 different parameters with different ranges."
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-6",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 714.0, 602.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-18",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 714.0, 576.0, 345.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/{float_with_min|float_with_range}"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-38",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 433.0, 604.0, 94.0, 22.0 ],
                                    "text": "prepend symbol"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-39",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 433.0, 547.0, 57.0, 22.0 ],
                                    "text": "tosymbol"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-40",
                                    "items": [ "lowpass", ",", "highpass", ",", "bandpass", ",", "not", "a", "possible", "option", ",", "nor", "this", "one" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 434.0, 512.0, 141.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-37",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 38.0, 617.0, 94.0, 22.0 ],
                                    "text": "prepend symbol"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-36",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 38.0, 550.0, 57.0, 22.0 ],
                                    "text": "tosymbol"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-29",
                                    "items": [ "lowpass", ",", "highpass", ",", "bandpass", ",", "not", "a", "possible", "option", ",", "nor", "this", "one" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 39.0, 515.0, 135.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-22",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 433.0, 576.0, 257.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/some_choices"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-26",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 38.0, 576.0, 313.0, 35.0 ],
                                    "text": "mvc.parameter ParameterHelper some_choices @type string @options lowpass highpass bandpass"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-10",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 733.0, 448.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-11",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 733.0, 422.0, 257.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/float_with_range"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-12",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 433.0, 448.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-13",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 433.0, 422.0, 257.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/float_with_range"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-15",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 39.0, 463.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-17",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 39.0, 424.0, 279.5, 35.0 ],
                                    "text": "mvc.parameter ParameterHelper float_with_range @type decimal @range 0 127 @clip wrap"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-8",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 838.5, 331.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-9",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 838.5, 305.0, 251.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/boundedParam"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-7",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 538.5, 331.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-5",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 538.5, 305.0, 251.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/boundedParam"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-4",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 39.0, 346.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-1",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 39.0, 305.0, 344.0, 35.0 ],
                                    "text": "mvc.parameter ParameterHelper boundedParam @type decimal @default 4 @min -2 @max 4 @clip both"
                                }
                            },
                            {
                                "box": {
                                    "border": 0,
                                    "filename": "helpname.js",
                                    "id": "obj-19",
                                    "ignoreclick": 1,
                                    "jsarguments": [ "mvc.parameter" ],
                                    "maxclass": "jsui",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 10.0, 10.0, 318.6319885253906, 57.599853515625 ]
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-4", 0 ],
                                    "order": 1,
                                    "source": [ "obj-1", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-43", 0 ],
                                    "order": 0,
                                    "source": [ "obj-1", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-11", 0 ],
                                    "midpoints": [ 742.5, 480.0, 720.5, 480.0, 720.5, 411.0, 742.5, 411.0 ],
                                    "source": [ "obj-10", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-10", 0 ],
                                    "source": [ "obj-11", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-13", 0 ],
                                    "midpoints": [ 442.5, 480.0, 420.5, 480.0, 420.5, 411.0, 442.5, 411.0 ],
                                    "source": [ "obj-12", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-12", 0 ],
                                    "source": [ "obj-13", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-17", 0 ],
                                    "midpoints": [ 48.5, 495.0, 33.5, 495.0, 33.5, 413.0, 48.5, 413.0 ],
                                    "source": [ "obj-15", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-15", 0 ],
                                    "source": [ "obj-17", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-6", 0 ],
                                    "source": [ "obj-18", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-42", 0 ],
                                    "source": [ "obj-20", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-38", 0 ],
                                    "source": [ "obj-22", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-24", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-25", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-37", 0 ],
                                    "source": [ "obj-26", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-24", 0 ],
                                    "source": [ "obj-27", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-36", 0 ],
                                    "source": [ "obj-29", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-33", 0 ],
                                    "source": [ "obj-32", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-33", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-5", 0 ],
                                    "source": [ "obj-34", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-35", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-26", 0 ],
                                    "source": [ "obj-36", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-29", 0 ],
                                    "midpoints": [ 47.5, 649.0, 33.5, 649.0, 33.5, 504.0, 48.5, 504.0 ],
                                    "source": [ "obj-37", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-40", 0 ],
                                    "midpoints": [ 442.5, 646.0, 428.5, 646.0, 428.5, 501.0, 443.5, 501.0 ],
                                    "source": [ "obj-38", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-22", 0 ],
                                    "source": [ "obj-39", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "midpoints": [ 48.5, 378.0, 26.5, 378.0, 26.5, 294.0, 48.5, 294.0 ],
                                    "order": 1,
                                    "source": [ "obj-4", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-28", 0 ],
                                    "order": 0,
                                    "source": [ "obj-4", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-39", 0 ],
                                    "source": [ "obj-40", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-35", 0 ],
                                    "source": [ "obj-41", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-42", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-44", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-49", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-7", 0 ],
                                    "source": [ "obj-5", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-18", 0 ],
                                    "midpoints": [ 723.5, 634.0, 701.5, 634.0, 701.5, 565.0, 723.5, 565.0 ],
                                    "source": [ "obj-6", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-16", 0 ],
                                    "order": 1,
                                    "source": [ "obj-7", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-5", 0 ],
                                    "midpoints": [ 548.0, 363.0, 526.0, 363.0, 526.0, 294.0, 548.0, 294.0 ],
                                    "order": 0,
                                    "source": [ "obj-7", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-9", 0 ],
                                    "midpoints": [ 848.0, 363.0, 826.0, 363.0, 826.0, 294.0, 848.0, 294.0 ],
                                    "source": [ "obj-8", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-8", 0 ],
                                    "source": [ "obj-9", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "Jamoma_highlighted_orange",
                                "default": {
                                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "ksliderWhite",
                                "default": {
                                    "color": [ 1, 1, 1, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjBlue-1",
                                "default": {
                                    "accentcolor": [ 0.317647, 0.654902, 0.976471, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjGreen-1",
                                "default": {
                                    "accentcolor": [ 0, 0.533333, 0.168627, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "numberGold-1",
                                "default": {
                                    "accentcolor": [ 0.764706, 0.592157, 0.101961, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap",
                                "default": {
                                    "fontname": [ "Lato Light" ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap-dark",
                                "default": {
                                    "editing_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "fontname": [ "Ableton Sans Light Regular" ],
                                    "locked_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "textcolor": [ 0.847058823529412, 0.847058823529412, 0.847058823529412, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 166.5, 80.060059, 54.0, 22.0 ],
                    "text": "p Range"
                }
            },
            {
                "box": {
                    "id": "obj-62",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 0.0, 26.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-6",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 103.0, 134.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "id": "obj-4",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 337.0, 239.0, 436.0, 24.0 ],
                                    "text": "The mvc.GUI.number abstraction automatically retrieves description and unit."
                                }
                            },
                            {
                                "box": {
                                    "args": [ "ParameterHelper/pole_temperature", "@active", 1 ],
                                    "bgmode": 0,
                                    "border": 1,
                                    "clickthrough": 0,
                                    "enablehscroll": 0,
                                    "enablevscroll": 0,
                                    "id": "obj-2",
                                    "lockeddragscroll": 0,
                                    "lockedsize": 0,
                                    "maxclass": "bpatcher",
                                    "name": "mvc.GUI.number.maxpat",
                                    "numinlets": 2,
                                    "numoutlets": 2,
                                    "offset": [ 0.0, 0.0 ],
                                    "outlettype": [ "", "" ],
                                    "patching_rect": [ 103.0, 241.0, 229.0, 19.0 ],
                                    "viewvisibility": 1
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-1",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 103.0, 164.0, 496.0, 35.0 ],
                                    "text": "mvc.parameter ParameterHelper pole_temperature @description \"Temperature at the pole\" @unit °C @default -83 @type decimal @range -200 100 @clip both"
                                }
                            },
                            {
                                "box": {
                                    "border": 0,
                                    "filename": "helpname.js",
                                    "id": "obj-19",
                                    "ignoreclick": 1,
                                    "jsarguments": [ "mvc.parameter" ],
                                    "maxclass": "jsui",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 10.0, 10.0, 318.6319885253906, 57.599853515625 ]
                                }
                            },
                            {
                                "box": {
                                    "angle": 270.0,
                                    "bgcolor": [ 0.6862745098039216, 0.6862745098039216, 0.6862745098039216, 1.0 ],
                                    "id": "obj-24",
                                    "maxclass": "panel",
                                    "mode": 0,
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 103.0, 232.0, 232.0, 31.0 ],
                                    "proportion": 0.5
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-6", 0 ],
                                    "midpoints": [ 112.5, 206.0, 92.5, 206.0, 92.5, 122.0, 112.5, 122.0 ],
                                    "source": [ "obj-1", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-6", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "Jamoma_highlighted_orange",
                                "default": {
                                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 344.0, 80.060059, 46.0, 22.0 ],
                    "text": "p Units"
                }
            },
            {
                "box": {
                    "id": "obj-61",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 0,
                    "patcher": {
                        "fileversion": 1,
                        "appversion": {
                            "major": 9,
                            "minor": 1,
                            "revision": 2,
                            "architecture": "x64",
                            "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [ 0.0, 26.0, 1176.0, 682.0 ],
                        "subpatcher_template": "mvc_help-file_template",
                        "showontab": 2,
                        "boxes": [
                            {
                                "box": {
                                    "id": "obj-13",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 244.0, 379.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-24",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 650.0, 340.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-61",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 609.0, 77.0, 69.0, 35.0 ],
                                    "text": "vector",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "contdata": 1,
                                    "ghostbar": 70,
                                    "id": "obj-34",
                                    "maxclass": "multislider",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 682.0, 109.0, 203.0, 45.0 ],
                                    "setminmax": [ -10.0, 10.0 ],
                                    "signed": 1,
                                    "size": 4,
                                    "spacing": 1
                                }
                            },
                            {
                                "box": {
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-56",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 267.0, 571.5, 221.0, 21.0 ],
                                    "text": "truncate floats (bool = 1 iff float >=1)",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "contdata": 1,
                                    "ghostbar": 70,
                                    "id": "obj-37",
                                    "maxclass": "multislider",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 682.0, 35.0, 203.0, 45.0 ],
                                    "setminmax": [ -10.0, 10.0 ],
                                    "signed": 1,
                                    "size": 4,
                                    "spacing": 1
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-18",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 1124.0, 55.0, 29.5, 22.0 ],
                                    "text": "get"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-1",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 682.0, 83.5, 461.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_vector @type vector @default -7 2 3 4"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-51",
                                    "linecount": 2,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 902.0, 306.5, 191.5, 33.0 ],
                                    "text": "Note : dictionary content is stored explicitely in the preset files."
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-49",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 590.0, 255.5, 88.0, 35.0 ],
                                    "text": "dictionary",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-44",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 697.5, 346.0, 143.0, 22.0 ],
                                    "text": "0"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-36",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 682.0, 306.5, 211.0, 22.0 ],
                                    "text": "mvc.remote ParameterHelper/my_dict"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-35",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 776.0, 187.5, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "data": {
                                        "salami": "7.99",
                                        "bologna": 1.99,
                                        "drink": {
                                            "hot": {
                                                "coffee": {
                                                    "origin": "sumatra",
                                                    "sizes": [ "small", "medium", "large", "mega-grande" ]
                                                }
                                            }
                                        },
                                        "meatloaf": {
                                            "price": "priceless",
                                            "lyric": "I would do anything for love but I won't eat that"
                                        }
                                    },
                                    "id": "obj-33",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 5,
                                    "outlettype": [ "dictionary", "", "", "", "" ],
                                    "patching_rect": [ 776.0, 222.5, 111.0, 22.0 ],
                                    "saved_object_attributes": {
                                        "embed": 1,
                                        "legacy": 1,
                                        "parameter_enable": 0,
                                        "parameter_mappable": 0
                                    },
                                    "text": "dict someOtherDict"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-32",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 682.0, 262.0, 310.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_dict @type dict"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-29",
                                    "maxclass": "dict.view",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 682.0, 376.5, 296.0, 281.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-26",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 682.0, 187.5, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "data": {
                                        "wheels": {
                                            "front": {
                                                "spokecount": 24,
                                                "lacing": "radial",
                                                "tirewidth": 21
                                            },
                                            "rear": {
                                                "spokecount": 3334,
                                                "lacing": "2-cross",
                                                "tirewidth": 23
                                            }
                                        },
                                        "drivetrain": {
                                            "chainring": {
                                                "make": "FSA",
                                                "cogs": [ 53, 39 ]
                                            },
                                            "cassette": {
                                                "make": "Campagnolo",
                                                "cogs": [ 12, 13, 14, 15, 16, 17, 19, 21, 23, 13 ],
                                                "pogs": "foo gooi iuu"
                                            }
                                        }
                                    },
                                    "id": "obj-22",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 5,
                                    "outlettype": [ "dictionary", "", "", "", "" ],
                                    "patching_rect": [ 682.0, 222.5, 81.0, 22.0 ],
                                    "saved_object_attributes": {
                                        "embed": 1,
                                        "legacy": 1,
                                        "parameter_enable": 0,
                                        "parameter_mappable": 0
                                    },
                                    "text": "dict someDict"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-5",
                                    "maxclass": "button",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 178.0, 630.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-54",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 192.5, 491.0, 91.0, 22.0 ],
                                    "text": "print @popup 1"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-53",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 249.0, 418.0, 57.0, 22.0 ],
                                    "text": "whatever"
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-28",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 213.0, 570.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-31",
                                    "maxclass": "newobj",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 178.0, 515.0, 100.0, 22.0 ],
                                    "text": "prepend symbol"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-43",
                                    "linecount": 3,
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 58.0, 111.0, 120.0, 64.0 ],
                                    "text": "List (equivalent to \"undefined\", is the default).",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-42",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 178.0, 167.0, 229.0, 22.0 ],
                                    "text": "1 2 3 4 anything"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-41",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 287.0, 97.0, 92.0, 22.0 ],
                                    "text": "any kind of stuff"
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-40",
                                    "maxclass": "message",
                                    "numinlets": 2,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "patching_rect": [ 178.0, 97.0, 96.0, 22.0 ],
                                    "text": "1 2 3 4 anything"
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-38",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 178.0, 132.0, 399.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_list @type list @default foo bar 3.14"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-27",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 64.0, 593.0, 114.0, 35.0 ],
                                    "text": "Boolean values",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-25",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 203.0, 630.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-23",
                                    "maxclass": "toggle",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "int" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 178.0, 570.0, 24.0, 24.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-21",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 178.0, 599.5, 413.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_boolean @type bool @min -3 @max 8"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-20",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 76.0, 449.5, 102.0, 35.0 ],
                                    "text": "String values",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-16",
                                    "items": [ "uno", ",", "dos", ",", "tres", ",", "not", "a", "possible", "item", ",", "nor", "this", "one" ],
                                    "maxclass": "umenu",
                                    "numinlets": 1,
                                    "numoutlets": 3,
                                    "outlettype": [ "int", "", "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 137.5, 418.5, 100.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-15",
                                    "linecount": 2,
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 178.0, 449.5, 313.0, 35.0 ],
                                    "text": "mvc.parameter ParameterHelper my_string @type string @default dos @options uno dos tres"
                                }
                            },
                            {
                                "box": {
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-14",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 301.0, 311.5, 150.0, 21.0 ],
                                    "text": "floats get truncated as ints",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "id": "obj-12",
                                    "maxclass": "number",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 178.0, 311.5, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-7",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 66.0, 339.0, 112.0, 35.0 ],
                                    "text": "Integer values ",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-8",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 178.0, 370.5, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-9",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 249.0, 311.5, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-10",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 178.0, 345.5, 362.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_int @type integer @default 3"
                                }
                            },
                            {
                                "box": {
                                    "bubble": 1,
                                    "bubbleside": 3,
                                    "bubbletextmargin": 10,
                                    "fontname": "Lato Regular",
                                    "fontsize": 12.0,
                                    "id": "obj-6",
                                    "maxclass": "comment",
                                    "numinlets": 1,
                                    "numoutlets": 0,
                                    "patching_rect": [ 13.0, 236.5, 165.0, 35.0 ],
                                    "text": "Decimal (=floating point)",
                                    "textcolor": [ 0.882352941176471, 0.874509803921569, 0.866666666666667, 1.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-4",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 178.0, 267.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "format": 6,
                                    "id": "obj-3",
                                    "maxclass": "flonum",
                                    "numinlets": 1,
                                    "numoutlets": 2,
                                    "outlettype": [ "", "bang" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 178.0, 219.0, 50.0, 22.0 ]
                                }
                            },
                            {
                                "box": {
                                    "color": [ 0.407843137254902, 0.529411764705882, 0.36078431372549, 1.0 ],
                                    "id": "obj-2",
                                    "maxclass": "newobj",
                                    "numinlets": 2,
                                    "numoutlets": 3,
                                    "outlettype": [ "", "int", "" ],
                                    "patching_rect": [ 178.0, 243.0, 315.0, 22.0 ],
                                    "text": "mvc.parameter ParameterHelper my_float @type decimal"
                                }
                            },
                            {
                                "box": {
                                    "border": 0,
                                    "filename": "helpname.js",
                                    "id": "obj-19",
                                    "ignoreclick": 1,
                                    "jsarguments": [ "mvc.parameter" ],
                                    "maxclass": "jsui",
                                    "numinlets": 1,
                                    "numoutlets": 1,
                                    "outlettype": [ "" ],
                                    "parameter_enable": 0,
                                    "patching_rect": [ 10.0, 10.0, 318.6319885253906, 57.599853515625 ]
                                }
                            }
                        ],
                        "lines": [
                            {
                                "patchline": {
                                    "destination": [ "obj-34", 0 ],
                                    "source": [ "obj-1", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-8", 0 ],
                                    "source": [ "obj-10", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-10", 0 ],
                                    "source": [ "obj-12", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-31", 0 ],
                                    "order": 1,
                                    "source": [ "obj-15", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-54", 0 ],
                                    "order": 0,
                                    "source": [ "obj-15", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-15", 0 ],
                                    "source": [ "obj-16", 1 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 1 ],
                                    "source": [ "obj-18", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-4", 0 ],
                                    "source": [ "obj-2", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-25", 0 ],
                                    "order": 0,
                                    "source": [ "obj-21", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-5", 0 ],
                                    "order": 1,
                                    "source": [ "obj-21", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-32", 0 ],
                                    "source": [ "obj-22", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-21", 0 ],
                                    "source": [ "obj-23", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-22", 0 ],
                                    "source": [ "obj-26", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-21", 0 ],
                                    "source": [ "obj-28", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-2", 0 ],
                                    "source": [ "obj-3", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-16", 0 ],
                                    "source": [ "obj-31", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-32", 0 ],
                                    "source": [ "obj-33", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-33", 0 ],
                                    "source": [ "obj-35", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-24", 0 ],
                                    "order": 2,
                                    "source": [ "obj-36", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-29", 0 ],
                                    "order": 1,
                                    "source": [ "obj-36", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-44", 1 ],
                                    "midpoints": [ 691.5, 336.75, 831.0, 336.75 ],
                                    "order": 0,
                                    "source": [ "obj-36", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-1", 0 ],
                                    "source": [ "obj-37", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-42", 1 ],
                                    "midpoints": [ 187.5, 160.0, 397.5, 160.0 ],
                                    "source": [ "obj-38", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-38", 0 ],
                                    "source": [ "obj-40", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-38", 0 ],
                                    "midpoints": [ 296.5, 125.0, 187.5, 125.0 ],
                                    "source": [ "obj-41", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-15", 0 ],
                                    "source": [ "obj-53", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-13", 0 ],
                                    "source": [ "obj-8", 0 ]
                                }
                            },
                            {
                                "patchline": {
                                    "destination": [ "obj-10", 0 ],
                                    "midpoints": [ 258.5, 337.5, 187.5, 337.5 ],
                                    "source": [ "obj-9", 0 ]
                                }
                            }
                        ],
                        "styles": [
                            {
                                "name": "AudioStatus_Menu",
                                "default": {
                                    "bgfillcolor": {
                                        "angle": 270.0,
                                        "autogradient": 0,
                                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                                        "proportion": 0.39,
                                        "type": "color"
                                    }
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "Jamoma_highlighted_orange",
                                "default": {
                                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "ksliderWhite",
                                "default": {
                                    "color": [ 1, 1, 1, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjBlue-1",
                                "default": {
                                    "accentcolor": [ 0.317647, 0.654902, 0.976471, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "newobjGreen-1",
                                "default": {
                                    "accentcolor": [ 0, 0.533333, 0.168627, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "numberGold-1",
                                "default": {
                                    "accentcolor": [ 0.764706, 0.592157, 0.101961, 1 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap",
                                "default": {
                                    "fontname": [ "Lato Light" ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            },
                            {
                                "name": "tap-dark",
                                "default": {
                                    "editing_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "fontname": [ "Ableton Sans Light Regular" ],
                                    "locked_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                                    "textcolor": [ 0.847058823529412, 0.847058823529412, 0.847058823529412, 1.0 ]
                                },
                                "parentstyle": "",
                                "multi": 0
                            }
                        ]
                    },
                    "patching_rect": [ 103.5, 80.060059, 50.0, 22.0 ],
                    "text": "p Types"
                }
            }
        ],
        "lines": [
            {
                "patchline": {
                    "destination": [ "obj-2", 0 ],
                    "order": 0,
                    "source": [ "obj-5", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-3", 0 ],
                    "order": 1,
                    "source": [ "obj-5", 0 ]
                }
            }
        ],
        "autosave": 0,
        "styles": [
            {
                "name": "AudioStatus_Menu",
                "default": {
                    "bgfillcolor": {
                        "angle": 270.0,
                        "autogradient": 0,
                        "color": [ 0.294118, 0.313726, 0.337255, 1 ],
                        "color1": [ 0.454902, 0.462745, 0.482353, 0.0 ],
                        "color2": [ 0.290196, 0.309804, 0.301961, 1.0 ],
                        "proportion": 0.39,
                        "type": "color"
                    }
                },
                "parentstyle": "",
                "multi": 0
            },
            {
                "name": "Jamoma_highlighted_orange",
                "default": {
                    "accentcolor": [ 1.0, 0.5, 0.0, 1.0 ]
                },
                "parentstyle": "",
                "multi": 0
            },
            {
                "name": "ksliderWhite",
                "default": {
                    "color": [ 1, 1, 1, 1 ]
                },
                "parentstyle": "",
                "multi": 0
            },
            {
                "name": "newobjBlue-1",
                "default": {
                    "accentcolor": [ 0.317647, 0.654902, 0.976471, 1 ]
                },
                "parentstyle": "",
                "multi": 0
            },
            {
                "name": "newobjGreen-1",
                "default": {
                    "accentcolor": [ 0, 0.533333, 0.168627, 1 ]
                },
                "parentstyle": "",
                "multi": 0
            },
            {
                "name": "numberGold-1",
                "default": {
                    "accentcolor": [ 0.764706, 0.592157, 0.101961, 1 ]
                },
                "parentstyle": "",
                "multi": 0
            },
            {
                "name": "tap-dark",
                "default": {
                    "editing_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                    "fontname": [ "Ableton Sans Light Regular" ],
                    "locked_bgcolor": [ 0.133333, 0.133333, 0.133333, 1.0 ],
                    "textcolor": [ 0.847058823529412, 0.847058823529412, 0.847058823529412, 1.0 ]
                },
                "parentstyle": "",
                "multi": 0
            }
        ]
    }
}