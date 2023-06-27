{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 9,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 532.0, 366.0, 1031.0, 616.0 ],
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
					"id" : "obj-44",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 624.0, 461.5, 87.0, 22.0 ],
					"text" : "name blah, init"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 679.0, 517.0, 132.0, 22.0 ],
					"text" : "name ga bu.{1..10}, init"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-34",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 508.0, 554.0, 187.0, 22.0 ],
					"text" : "mvc.parameter 6456.onepole test"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-33",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 428.0, 486.0, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-24",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 251.0, 516.0, 197.0, 22.0 ],
					"text" : "mvc.mc.onepole~ dev myOnepole2",
					"varname" : "mvc.mc.onepole~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-43",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 107.0, 449.0, 50.0, 22.0 ],
					"text" : "1000."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-41",
					"linecount" : 3,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 258.0, 448.0, 50.0, 49.0 ],
					"text" : "remote initialized"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 419.0, 294.0, 94.0, 22.0 ],
					"text" : "aim.mc.biquad~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-38",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 75.0, 9.0, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 819.0, 233.0, 183.0, 22.0 ],
					"text" : "preset channel.3 Oneoneoneone"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-28",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 819.0, 164.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 819.0, 191.0, 144.0, 22.0 ],
					"text" : "param channel.{1..3}/* $1"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-25",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 758.5, 68.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-22",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 758.5, 99.0, 171.0, 22.0 ],
					"text" : "param channel.1/frequency $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 689.0, 331.5, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "mvc.mc.cascade~", "dev", "mc.cas" ],
					"patching_rect" : [ 539.0, 360.0, 176.0, 22.0 ],
					"text" : "t mvc.mc.cascade~ dev mc.cas",
					"varname" : "mvc.mc.cascade~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 669.0, 81.5, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "mvc.cascade~", "dev", "cas" ],
					"patching_rect" : [ 532.5, 111.0, 137.0, 22.0 ],
					"text" : "t mvc.cascade~ dev cas",
					"varname" : "aim.cascade~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 637.0, 35.0, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "mvc.biquad~", "dev", "biq" ],
					"patching_rect" : [ 540.0, 67.0, 126.0, 22.0 ],
					"text" : "t mvc.biquad~ dev biq",
					"varname" : "aim.biquad~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-36",
					"lastchannelcount" : 1,
					"maxclass" : "mc.live.gain~",
					"numinlets" : 1,
					"numoutlets" : 4,
					"orientation" : 1,
					"outlettype" : [ "multichannelsignal", "", "float", "list" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 539.0, 395.0, 136.0, 30.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "mc.live.gain~",
							"parameter_mmax" : 6.0,
							"parameter_mmin" : -70.0,
							"parameter_shortname" : "mc.live.gain~",
							"parameter_type" : 0,
							"parameter_unitstyle" : 4
						}

					}
,
					"showname" : 0,
					"varname" : "mc.live.gain~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-26",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 539.0, 330.0, 60.0, 22.0 ],
					"text" : "mc.*~ 0.1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 539.0, 470.0, 54.0, 22.0 ],
					"text" : "mc.dac~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-31",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 540.0, 306.0, 121.0, 22.0 ],
					"text" : "mc.noise~ @chans 6"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 93.0, 268.0, 40.0, 22.0 ],
					"text" : "*~ 0.1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 129.0, 326.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 93.0, 366.0, 35.0, 22.0 ],
					"text" : "dac~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 93.0, 327.0, 34.0, 22.0 ],
					"text" : "*~ 0."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 94.0, 244.0, 44.0, 22.0 ],
					"text" : "noise~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 289.0, 384.0, 195.0, 22.0 ],
					"text" : "address dev/myOnepole/frequency"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-4",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "mvc.GUI.number.maxpat",
					"numinlets" : 2,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 75.0, 411.0, 233.0, 22.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-10",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 112.0, 183.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "initialized" ],
					"patching_rect" : [ 189.0, 183.0, 215.0, 22.0 ],
					"text" : "mvc.remote dev/myOnepole/frequency"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 93.0, 81.5, 384.0, 47.0 ],
					"text" : "Dans le mvc.model, inutile de déclarer dans \"p \"declare addresses\"\",\nvu qu'on le fait ensuite quand on remet les index d'uid\nJuste besoin d'effacer ceux qui sont partis"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 819.0, 268.0, 205.0, 22.0 ],
					"text" : "preset channel.{3..4} Oneoneoneone"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 619.0, 229.0, 102.0, 22.0 ],
					"text" : "preset justTesting"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 315.0, 348.0, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 224.0, 252.0, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 261.0, 252.0, 65.0, 22.0 ],
					"text" : "preset test"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 94.0, 296.0, 171.0, 22.0 ],
					"text" : "mvc.onepole~ dev myOnepole",
					"varname" : "mvc.onepole~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 25.0, 10.0, 29.5, 22.0 ],
					"text" : "init"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 25.0, 39.0, 91.0, 22.0 ],
					"text" : "mvc.device dev",
					"varname" : "aim.device"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 1 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 1 ],
					"order" : 0,
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"order" : 1,
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 1 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-26", 0 ],
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 1 ],
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-41", 1 ],
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 1 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 1 ],
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 1 ],
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 1 ],
					"source" : [ "obj-5", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-24::obj-5::obj-61::obj-20.1::obj-19::obj-8::obj-7" : [ "live.toggle[2]", "live.toggle", 0 ],
			"obj-24::obj-5::obj-61::obj-20.1::obj-5::obj-12::obj-8::obj-7" : [ "live.toggle[3]", "live.toggle", 0 ],
			"obj-36" : [ "mc.live.gain~", "mc.live.gain~", 0 ],
			"obj-3::obj-35::obj-30::obj-18::obj-7" : [ "live.toggle[1]", "live.toggle", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"parameter_overrides" : 			{
				"obj-24::obj-5::obj-61::obj-20.1::obj-5::obj-12::obj-8::obj-7" : 				{
					"parameter_longname" : "live.toggle[3]"
				}
,
				"obj-3::obj-35::obj-30::obj-18::obj-7" : 				{
					"parameter_longname" : "live.toggle[1]"
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "aim.DSPrefresh.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.GUI.listselector.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/GUI",
				"patcherrelativepath" : "../../AIM/patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.GUI.windowsettings.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/GUI",
				"patcherrelativepath" : "../../AIM/patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.biquad~.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/components",
				"patcherrelativepath" : "../../AIM/patchers/components",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.channellayout2channelcount.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.dict.flatten.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "aim.dict.flatten.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.dict.join.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "aim.dict.keyrename.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.dict.route.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "aim.dllb.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.f.call.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.f.io.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.filtergraph~.p.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/components",
				"patcherrelativepath" : "../../AIM/patchers/components",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.intnogap.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.isloading.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.mc.biquad~.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/components",
				"patcherrelativepath" : "../../AIM/patchers/components",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.model.initialize.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.model.initialized.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.newgone.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.noblabla.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.osc2dict.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.parameter.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.presets.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.qlow.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.setMaxObjColor.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "aim.wildcard.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "aim.wildcard.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.wildcard2.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.DSPrefresh.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.activeToggle.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.channel-layout.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.channeltabs.bp.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.channeltabs.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.listselector.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.number.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.preset.description.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.presets.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.tabbing.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.windowsettings.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.brace.expansion.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.bypass.mono.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.bypass.multi.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.channellayout2channelcount.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.createfolder.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.device.init.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.device.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.device.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.device.parameters.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.flatten.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.flatten.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.join.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.keyrename.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.route.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dllb.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.f.call.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.f.io.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.import.presets.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.intnogap.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.isloading.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.list.thindex.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.locatePatcherWindow.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.mc.onepole~.gui.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.mc.onepole~.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.declare.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.gui.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.initialize.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.initialized.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.nicetabs.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.noblabang.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.noblabla.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.onepole~.gui.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.onepole~.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.onepole~.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.osc2dict.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.declare2.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.polyreceive.p.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.qlow.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.remote.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.setMaxObjColor.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.stripes10.purple.png",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/media",
				"patcherrelativepath" : "../media",
				"type" : "PNG",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.tab2subGUI.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.wildcard-node.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.wildcard.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.wildcard.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.wildcard2.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "thru.maxpat",
				"bootpath" : "C74:/patchers/m4l/Pluggo for Live resources/patches",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
