{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 1,
			"revision" : 6,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 56.0, 100.0, 815.0, 713.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 223.0, 219.0, 78.0, 22.0 ],
					"text" : "print address"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 129.0, 114.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"args" : [ "mvc.dict2osc", "@description", "Convert dictionary  to concatenated OSC adresses.", "@categories", "system", "utilities" ],
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-5",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "mvc.helpheader.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ -1.5, 0.060059000000001, 802.0, 57.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 129.0, 219.0, 59.0, 22.0 ],
					"text" : "print data"
				}

			}
, 			{
				"box" : 				{
					"data" : 					{
						"my-string-array" : [ "a", "b", "c" ],
						"my-int-array" : [ 3, 4, 5 ],
						"my-simple-param" : "toto",
						"my-simple-dict" : 						{
							"dict-key1" : "one",
							"dict-key2" : "two",
							"my-nested-dict" : 							{
								"nested-dict-key1" : "nested-one",
								"nested-dict-key2" : "nested-two",
								"nested-dict-key3" : "nested-three"
							}

						}
,
						"my-sub-dict" : 						{
							"ohlala" : [ 12, "am", 13, 								{
									"inside" : "test"
								}
, "stram", 23, "gram" ],
							"my-array-of-dict" : [ 								{
									"frequency" : 1000,
									"resonance" : 0.1
								}
, 								{
									"frequency" : 2000,
									"resonance" : 0.2
								}
, 								{
									"frequency" : 3000,
									"resonance" : 0.3
								}
, 								{
									"frequency" : 4000,
									"resonance" : 0.4
								}
 ]
						}
,
						"just another simple value" : 3.1416
					}
,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-49",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "dictionary", "", "", "" ],
					"patching_rect" : [ 129.0, 155.0, 142.0, 23.0 ],
					"saved_object_attributes" : 					{
						"embed" : 1,
						"parameter_enable" : 0,
						"parameter_mappable" : 0
					}
,
					"text" : "dict bicycle @embed 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 129.0, 184.0, 113.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "mvc.dict2osc.js",
						"parameter_enable" : 0
					}
,
					"text" : "js mvc.dict2osc.js / /"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "mvc.dict2osc.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.helpheader.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/lib",
				"patcherrelativepath" : "../patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "AudioStatus_Menu",
				"default" : 				{
					"bgfillcolor" : 					{
						"type" : "color",
						"color" : [ 0.294118, 0.313726, 0.337255, 1 ],
						"color1" : [ 0.454902, 0.462745, 0.482353, 0.0 ],
						"color2" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ]
	}

}
