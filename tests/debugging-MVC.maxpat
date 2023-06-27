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
		"rect" : [ 59.0, 106.0, 760.0, 523.0 ],
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
					"id" : "obj-17",
					"logfreq" : 1,
					"maxclass" : "spectroscope~",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 74.0, 201.0, 300.0, 100.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 74.0, 121.0, 44.0, 22.0 ],
					"text" : "noise~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 237.0, 121.0, 30.0, 22.0 ],
					"text" : "GUI"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501960784313725, 0.501960784313725, 0.501960784313725, 1.0 ],
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "multichannelsignal", "" ],
					"patching_rect" : [ 74.0, 158.0, 198.0, 22.0 ],
					"text" : "mvc.mc.cascade~ ts mcCascade1",
					"varname" : "mvc.mc.cascade~"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.501960784313725, 0.501960784313725, 0.501960784313725, 1.0 ],
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 62.0, 50.0, 81.0, 22.0 ],
					"text" : "mvc.device ts",
					"varname" : "aim.device"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-1::obj-35::obj-30::obj-18::obj-7" : [ "live.toggle[1]", "live.toggle", 0 ],
			"obj-3::obj-3::obj-61::obj-20.1::obj-16::obj-8::obj-7" : [ "live.toggle[4]", "live.toggle", 0 ],
			"obj-3::obj-3::obj-61::obj-20.1::obj-5::obj-49::obj-8::obj-7" : [ "live.toggle[3]", "live.toggle", 0 ],
			"obj-3::obj-3::obj-61::obj-20.1::obj-5::obj-5::obj-12::obj-8::obj-7" : [ "live.toggle[2]", "live.toggle", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"parameter_overrides" : 			{
				"obj-1::obj-35::obj-30::obj-18::obj-7" : 				{
					"parameter_longname" : "live.toggle[1]"
				}
,
				"obj-3::obj-3::obj-61::obj-20.1::obj-16::obj-8::obj-7" : 				{
					"parameter_longname" : "live.toggle[4]"
				}
,
				"obj-3::obj-3::obj-61::obj-20.1::obj-5::obj-49::obj-8::obj-7" : 				{
					"parameter_longname" : "live.toggle[3]"
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "aim.GUI.nicetabs.bp.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/AIM/patchers/GUI",
				"patcherrelativepath" : "../../AIM/patchers/GUI",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "aim.nicetabs.js",
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
				"name" : "mvc.GUI.menu.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.GUI.nicetabs.maxpat",
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
				"name" : "mvc.biquad~.gui.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
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
				"name" : "mvc.brace.expansion.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.cascade~.gui.maxpat",
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
				"name" : "mvc.filtergraph~.p.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/patchers",
				"patcherrelativepath" : "../patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mvc.hatches.UI.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
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
				"name" : "mvc.mc.cascade~.gui.maxpat",
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
				"name" : "mvc.osc2dict.maxpat",
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
