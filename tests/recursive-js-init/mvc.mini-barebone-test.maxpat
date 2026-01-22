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
        "rect": [ -84.0, -975.0, 1429.0, 904.0 ],
        "boxes": [
            {
                "box": {
                    "id": "obj-65",
                    "maxclass": "number",
                    "numinlets": 1,
                    "numoutlets": 2,
                    "outlettype": [ "", "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 651.0, 669.0, 50.0, 22.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-57",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 3,
                    "outlettype": [ "", "int", "" ],
                    "patching_rect": [ 708.0, 669.0, 246.0, 22.0 ],
                    "text": "mvc.parameter 111 channelcount @default 3"
                }
            },
            {
                "box": {
                    "id": "obj-24",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 1343.0, 39.0, 50.0, 22.0 ],
                    "text": "clear"
                }
            },
            {
                "box": {
                    "id": "obj-42",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 1307.0, 39.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-45",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 1309.0, 67.0, 148.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict mvc.states.values.dict"
                }
            },
            {
                "box": {
                    "id": "obj-51",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 1308.0, 97.0, 143.0, 271.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-5",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "patching_rect": [ 994.0, 4.0, 58.0, 22.0 ],
                    "text": "loadbang"
                }
            },
            {
                "box": {
                    "id": "obj-29",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 1180.0, 40.0, 50.0, 22.0 ],
                    "text": "clear"
                }
            },
            {
                "box": {
                    "id": "obj-30",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 1144.0, 40.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-32",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 1146.0, 68.0, 177.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict mvc.parameters.values.dict"
                }
            },
            {
                "box": {
                    "id": "obj-33",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 1145.5, 98.0, 143.0, 271.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-9",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 314.0, 190.0, 132.0, 22.0 ],
                    "text": "address ga bu.{1..4} zo"
                }
            },
            {
                "box": {
                    "id": "obj-3",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "patching_rect": [ 23.0, 332.0, 58.0, 22.0 ],
                    "text": "loadbang"
                }
            },
            {
                "box": {
                    "id": "obj-23",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 314.0, 156.0, 135.0, 22.0 ],
                    "text": "address myModel.{1..3}"
                }
            },
            {
                "box": {
                    "id": "obj-75",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 172.0, 99.0, 50.0, 22.0 ],
                    "text": "test"
                }
            },
            {
                "box": {
                    "id": "obj-31",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 23.0, 364.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-34",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 1028.0, 40.0, 50.0, 22.0 ],
                    "text": "clear"
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
                    "patching_rect": [ 994.0, 42.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-48",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 995.0, 68.0, 118.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict mvc.inputs.dict"
                }
            },
            {
                "box": {
                    "id": "obj-52",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 995.0, 98.0, 143.0, 271.0 ]
                }
            },
            {
                "box": {
                    "format": 6,
                    "id": "obj-61",
                    "maxclass": "flonum",
                    "numinlets": 1,
                    "numoutlets": 2,
                    "outlettype": [ "", "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 356.0, 93.0, 50.0, 22.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-54",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 313.0, 84.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-50",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 313.0, 31.0, 29.5, 22.0 ],
                    "text": "1"
                }
            },
            {
                "box": {
                    "id": "obj-47",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 3,
                    "outlettype": [ "int", "float", "bang" ],
                    "patching_rect": [ 313.0, 60.0, 104.0, 22.0 ],
                    "text": "mvc.benchmarker"
                }
            },
            {
                "box": {
                    "id": "obj-36",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 781.0, 405.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-37",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 781.0, 431.0, 100.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict yup.attr"
                }
            },
            {
                "box": {
                    "id": "obj-38",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 781.0, 462.0, 182.0, 184.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-19",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 23.0, 401.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-20",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 23.0, 431.0, 121.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict mvc-root.attr"
                }
            },
            {
                "box": {
                    "id": "obj-21",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 23.0, 462.0, 182.0, 183.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-97",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 242.0, 98.0, 51.0, 22.0 ],
                    "text": "address"
                }
            },
            {
                "box": {
                    "id": "obj-87",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 1162.0, 405.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-88",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 1162.0, 431.0, 85.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict bu.attr"
                }
            },
            {
                "box": {
                    "id": "obj-89",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 1162.0, 462.0, 182.0, 184.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-64",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 591.0, 338.0, 50.0, 22.0 ],
                    "text": "clear"
                }
            },
            {
                "box": {
                    "id": "obj-62",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 878.0, 40.0, 50.0, 22.0 ],
                    "text": "clear"
                }
            },
            {
                "box": {
                    "id": "obj-58",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 843.0, 40.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-59",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 845.0, 68.0, 118.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict mvc.models.dict"
                }
            },
            {
                "box": {
                    "id": "obj-60",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 845.0, 98.0, 143.0, 271.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-49",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 280.0, 262.0, 100.0, 22.0 ],
                    "text": "print ---myModel"
                }
            },
            {
                "box": {
                    "id": "obj-46",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 242.0, 262.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-39",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 973.0, 405.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-40",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 973.0, 431.0, 100.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict ga.attr"
                }
            },
            {
                "box": {
                    "id": "obj-41",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 973.0, 462.0, 182.0, 184.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-25",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 591.0, 405.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-26",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 591.0, 431.0, 100.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict bar.attr"
                }
            },
            {
                "box": {
                    "id": "obj-28",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 591.0, 462.0, 182.0, 184.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-15",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 313.0, 124.0, 103.0, 22.0 ],
                    "text": "address myModel"
                }
            },
            {
                "box": {
                    "id": "obj-11",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 402.0, 405.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-12",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 402.0, 431.0, 100.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict foo.attr"
                }
            },
            {
                "box": {
                    "id": "obj-13",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 402.0, 462.0, 176.0, 309.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-8",
                    "maxclass": "button",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 211.0, 401.0, 24.0, 24.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-4",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 5,
                    "outlettype": [ "dictionary", "", "", "", "" ],
                    "patching_rect": [ 211.0, 431.0, 121.0, 22.0 ],
                    "saved_object_attributes": {
                        "legacy": 0,
                        "parameter_enable": 0,
                        "parameter_mappable": 0
                    },
                    "text": "dict myModel.attr"
                }
            },
            {
                "box": {
                    "id": "obj-2",
                    "maxclass": "dict.view",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 211.0, 462.0, 183.0, 309.0 ]
                }
            },
            {
                "box": {
                    "id": "obj-27",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 242.0, 227.0, 212.0, 22.0 ],
                    "text": "mvc.minimodel 111 mvc-root myModel"
                }
            },
            {
                "box": {
                    "id": "obj-10",
                    "maxclass": "comment",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 63.0, 42.0, 206.0, 20.0 ],
                    "text": "testing recursive calls for initialisation"
                }
            },
            {
                "box": {
                    "id": "obj-7",
                    "maxclass": "newobj",
                    "numinlets": 0,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 55.5, 84.0, 117.0, 22.0 ],
                    "text": "r mvc.model.declare"
                }
            },
            {
                "box": {
                    "id": "obj-6",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "patching_rect": [ 53.0, 163.0, 49.0, 22.0 ],
                    "text": "forward"
                }
            },
            {
                "box": {
                    "filename": "mvc.mini.node.declare.js",
                    "id": "obj-1",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 53.0, 132.0, 163.0, 22.0 ],
                    "saved_object_attributes": {
                        "parameter_enable": 0
                    },
                    "text": "v8 mvc.mini.node.declare.js",
                    "textfile": {
                        "filename": "mvc.mini.node.declare.js",
                        "flags": 0,
                        "embed": 0,
                        "autowatch": 1
                    }
                }
            }
        ],
        "lines": [
            {
                "patchline": {
                    "destination": [ "obj-6", 0 ],
                    "source": [ "obj-1", 0 ]
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
                    "destination": [ "obj-13", 0 ],
                    "source": [ "obj-12", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-20", 0 ],
                    "source": [ "obj-19", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-21", 0 ],
                    "source": [ "obj-20", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-45", 0 ],
                    "source": [ "obj-24", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-26", 0 ],
                    "source": [ "obj-25", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-28", 0 ],
                    "source": [ "obj-26", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-46", 0 ],
                    "source": [ "obj-27", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-32", 0 ],
                    "source": [ "obj-29", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-31", 0 ],
                    "source": [ "obj-3", 0 ]
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
                    "destination": [ "obj-11", 0 ],
                    "order": 4,
                    "source": [ "obj-31", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-19", 0 ],
                    "order": 6,
                    "source": [ "obj-31", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-25", 0 ],
                    "order": 3,
                    "source": [ "obj-31", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-36", 0 ],
                    "order": 2,
                    "source": [ "obj-31", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-39", 0 ],
                    "order": 1,
                    "source": [ "obj-31", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-8", 0 ],
                    "order": 5,
                    "source": [ "obj-31", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-87", 0 ],
                    "order": 0,
                    "source": [ "obj-31", 0 ]
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
                    "destination": [ "obj-48", 0 ],
                    "source": [ "obj-34", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-48", 0 ],
                    "source": [ "obj-35", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-37", 0 ],
                    "source": [ "obj-36", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-38", 0 ],
                    "source": [ "obj-37", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-40", 0 ],
                    "source": [ "obj-39", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-2", 0 ],
                    "source": [ "obj-4", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-41", 0 ],
                    "source": [ "obj-40", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-45", 0 ],
                    "source": [ "obj-42", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-51", 0 ],
                    "source": [ "obj-45", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-47", 1 ],
                    "midpoints": [ 251.5, 310.3828125, 461.79296875, 310.3828125, 461.79296875, 50.0, 407.5, 50.0 ],
                    "source": [ "obj-46", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-54", 0 ],
                    "source": [ "obj-47", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-61", 0 ],
                    "source": [ "obj-47", 1 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-52", 0 ],
                    "source": [ "obj-48", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-30", 0 ],
                    "order": 1,
                    "source": [ "obj-5", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-35", 0 ],
                    "order": 2,
                    "source": [ "obj-5", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-42", 0 ],
                    "order": 0,
                    "source": [ "obj-5", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-58", 0 ],
                    "order": 3,
                    "source": [ "obj-5", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-47", 0 ],
                    "source": [ "obj-50", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-23", 0 ],
                    "source": [ "obj-54", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-65", 0 ],
                    "source": [ "obj-57", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-59", 0 ],
                    "source": [ "obj-58", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-60", 0 ],
                    "source": [ "obj-59", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-59", 0 ],
                    "source": [ "obj-62", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-12", 0 ],
                    "order": 4,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-20", 0 ],
                    "order": 6,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-26", 0 ],
                    "order": 3,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-37", 0 ],
                    "order": 2,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-4", 0 ],
                    "order": 5,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-40", 0 ],
                    "order": 1,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-88", 0 ],
                    "order": 0,
                    "source": [ "obj-64", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-57", 0 ],
                    "source": [ "obj-65", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-7", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-75", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-4", 0 ],
                    "source": [ "obj-8", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-88", 0 ],
                    "source": [ "obj-87", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-89", 0 ],
                    "source": [ "obj-88", 0 ]
                }
            }
        ],
        "autosave": 0
    }
}