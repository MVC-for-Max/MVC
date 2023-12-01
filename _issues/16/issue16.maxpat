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
		"rect" : [ 59.0, 106.0, 640.0, 480.0 ],
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
					"format" : 6,
					"id" : "obj-9",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 60.0, 303.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 324.5, 101.0, 45.0, 22.0 ],
					"text" : "get uid"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 277.0, 303.0, 175.0, 22.0 ],
					"text" : "hetero 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 433.0, 221.0, 63.0, 22.0 ],
					"text" : "get parent"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 311.0, 221.0, 90.0, 22.0 ],
					"text" : "prepend parent"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 3,
					"outlettype" : [ "", "int", "" ],
					"patching_rect" : [ 60.0, 269.0, 392.0, 22.0 ],
					"text" : "mvc.remote5 myParam"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 3,
					"outlettype" : [ "", "int", "" ],
					"patching_rect" : [ 53.0, 178.0, 228.0, 22.0 ],
					"text" : "mvc.parameter 123 myParam @default 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 311.0, 183.0, 55.0, 22.0 ],
					"text" : "route uid"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 53.0, 147.0, 277.0, 22.0 ],
					"text" : "mvc.model 123 issue16 myModel @type whatever"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501961, 0.501961, 0.501961, 1.0 ],
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 39.0, 69.0, 113.0, 22.0 ],
					"text" : "mvc.device issue16"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 1 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 1 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 1 ],
					"source" : [ "obj-7", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 1 ],
					"source" : [ "obj-8", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "LAM.f.recurse.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/lam-lib/patchers",
				"patcherrelativepath" : "../../../lam-lib/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fit_jweb_to_bounds.js",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.listselector.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/GUI",
				"patcherrelativepath" : "../../patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.windowsettings.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/GUI",
				"patcherrelativepath" : "../../patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.brace.expansion.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.address.expand.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.address.expandOnParentAndFilter.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.model.expand-declare.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.param.declare.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.param.expand-declare.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.param.sender.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.state.declare.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.state.expand-declare.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.core.state.sender.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.createfolder.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.device.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.device.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.flatten.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.flatten.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.interpolate.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.join.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict.route.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dict2osc.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.dllb.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.f.call.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.f.io.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.input.attr.format.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.input.i.initialized.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.intnogap.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.isloading.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.list.thindex.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.message.declare.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.declareWithAttr.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.i.initialized.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.initialized.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.model.presets.load.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.noblabang.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.osc2dict.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.declareWithAttr.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.internal.ON.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.internal.preset-description.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.internal.preset-name.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameter.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.parameters.values.presetinit.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.remote5.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.setMaxObjColor.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.state.declareWithAttr.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.state.internal.chained-ON.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.state.internal.preset-editflag.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.type.undefined.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers/core",
				"patcherrelativepath" : "../../patchers/core",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.wildcard-matching.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.wildcard-node.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "n4m.monitor.maxpat",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "resize_n4m_monitor_patcher.js",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
