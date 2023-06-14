{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 6,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 62.0, 199.0, 553.0, 494.0 ],
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
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-40",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 53.0, 261.0, 217.0, 22.0 ],
					"text" : "mvc.mc.cascade~ dev myMcCascade5"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 53.0, 232.0, 217.0, 22.0 ],
					"text" : "mvc.mc.cascade~ dev myMcCascade4"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-38",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 53.0, 198.0, 217.0, 22.0 ],
					"text" : "mvc.mc.cascade~ dev myMcCascade3"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-37",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 53.0, 165.0, 217.0, 22.0 ],
					"text" : "mvc.mc.cascade~ dev myMcCascade2"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-34",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 53.0, 131.0, 220.0, 22.0 ],
					"text" : "mvc.mc.cascade~ dev myMcCascade 1",
					"varname" : "mvc.mc.cascade~"
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
					"patching_rect" : [ 40.0, 54.0, 91.0, 22.0 ],
					"text" : "mvc.device dev",
					"varname" : "aim.device"
				}

			}
 ],
		"lines" : [  ],
		"parameters" : 		{
			"obj-3::obj-35::obj-30::obj-18::obj-7" : [ "live.toggle[1]", "live.toggle", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
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
				"name" : "aim.GUI.activeToggle.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/GUI",
				"patcherrelativepath" : "../../AIM/patchers/GUI",
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
				"name" : "aim.GUI.preset.description.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/GUI",
				"patcherrelativepath" : "../../AIM/patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.GUI.presets.maxpat",
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
				"name" : "aim.benchmarker.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/GUI",
				"patcherrelativepath" : "../../AIM/patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.brace.expansion.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
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
				"name" : "aim.createfolder.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "aim.device.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
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
				"name" : "aim.import.presets.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
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
				"name" : "aim.locatePatcherWindow.js",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/javascript",
				"patcherrelativepath" : "../../AIM/javascript",
				"type" : "TEXT",
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
				"name" : "aim.noblabang.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/lib",
				"patcherrelativepath" : "../../AIM/patchers/lib",
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
				"name" : "aim.polyreceive.p.maxpat",
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
				"name" : "aim.remote.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/core",
				"patcherrelativepath" : "../../AIM/patchers/core",
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
				"name" : "aim.stripes10.purple.png",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/media",
				"patcherrelativepath" : "../../AIM/media",
				"type" : "PNG",
				"implicit" : 1
			}
, 			{
				"name" : "aim.wildcard-node.js",
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
				"name" : "icon.png",
				"bootpath" : "~/Documents/Max 8/Packages/AIM",
				"patcherrelativepath" : "../../AIM",
				"type" : "PNG",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.biquad~.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.cascade~.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
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
				"name" : "mvc.mc.cascade~.maxpat",
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
				"name" : "mvc.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.declare.js",
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
				"name" : "thru.maxpat",
				"bootpath" : "C74:/patchers/m4l/Pluggo for Live resources/patches",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
