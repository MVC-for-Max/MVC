{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 5,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 249.0, 103.0, 699.0, 764.0 ],
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
					"id" : "obj-54",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 273.0, 203.0, 351.0, 20.0 ],
					"text" : "This will load JSON files"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 77.0, 36.0, 351.0, 33.0 ],
					"text" : "Draft work for a batch import of preset files in the mvc.device to avoid having duplicate instance of mvc.presets in mvc.model."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-48",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 245.0, 231.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-46",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 204.0, 398.0, 29.5, 22.0 ],
					"text" : "t b l"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 204.0, 344.0, 129.0, 22.0 ],
					"text" : "tosymbol @separator ."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-44",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 204.0, 316.0, 55.0, 22.0 ],
					"text" : "zl ecils 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-41",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 235.5, 398.0, 232.0, 22.0 ],
					"text" : "name mvc.mccombHelper.presets.dict"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 204.0, 292.0, 143.0, 22.0 ],
					"text" : "fromsymbol @separator ."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "dict.view",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 204.0, 455.0, 209.0, 240.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-34",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 204.0, 368.0, 86.0, 22.0 ],
					"text" : "prepend name"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-31",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "dictionary", "", "", "" ],
					"patching_rect" : [ 204.0, 426.0, 50.5, 22.0 ],
					"saved_object_attributes" : 					{
						"embed" : 0,
						"parameter_enable" : 0,
						"parameter_mappable" : 0
					}
,
					"text" : "dict"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "int" ],
					"patching_rect" : [ 83.0, 233.0, 39.0, 22.0 ],
					"text" : "folder"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-29",
					"items" : [ "mvc.average.presets.dict.json", ",", "mvc.averageHelper.presets.dict.json", ",", "mvc.biquad.presets.dict.json", ",", "mvc.biquadHelper.presets.dict.json", ",", "mvc.braceModelHelperContext.presets.dict.json", ",", "mvc.cascade.presets.dict.json", ",", "mvc.cascadeHelper.presets.dict.json", ",", "mvc.clip.presets.dict.json", ",", "mvc.clipHelper.presets.dict.json", ",", "mvc.comb.presets.dict.json", ",", "mvc.combHelper.presets.dict.json", ",", "mvc.comp.presets.dict.json", ",", "mvc.compHelper.presets.dict.json", ",", "mvc.cross.presets.dict.json", ",", "mvc.crossHelper.presets.dict.json", ",", "mvc.degrade.presets.dict.json", ",", "mvc.degradeHelper.presets.dict.json", ",", "mvc.delay.presets.dict.json", ",", "mvc.delayHelper.presets.dict.json", ",", "mvc.deviceHelperContext.presets.dict.json", ",", "mvc.dspRefreshHelper.presets.dict.json", ",", "mvc.fakeBiquadFilterModel.presets.dict.json", ",", "mvc.fakeModel.presets.dict.json", ",", "mvc.fffb.presets.dict.json", ",", "mvc.fffbHelper.presets.dict.json", ",", "mvc.gain.presets.dict.json", ",", "mvc.gainHelper.presets.dict.json", ",", "mvc.groove.presets.dict.json", ",", "mvc.grooveHelper.presets.dict.json", ",", "mvc.grooveHelperHelper.presets.dict.json", ",", "mvc.GUImulticomponentHelper.presets.dict.json", ",", "mvc.GUInamespaceHelper.presets.dict.json", ",", "mvc.guiRemoteHelper.presets.dict.json", ",", "mvc.limiter.presets.dict.json", ",", "mvc.limiterHelper.presets.dict.json", ",", "mvc.lores.presets.dict.json", ",", "mvc.loresHelper.presets.dict.json", ",", "mvc.mc.average.presets.dict.json", ",", "mvc.mc.biquad.presets.dict.json", ",", "mvc.mc.biquad.presets.dict.jsonyoupiyoupi.json", ",", "mvc.mc.cascade.presets.dict.json", ",", "mvc.mc.clip.presets.dict.json", ",", "mvc.mc.comb.presets.dict.json", ",", "mvc.mc.comp.presets.dict.json", ",", "mvc.mc.cross.presets.dict.json", ",", "mvc.mc.degrade.presets.dict.json", ",", "mvc.mc.delay.presets.dict.json", ",", "mvc.mc.gain.presets.dict.json", ",", "mvc.mc.groove.presets.dict.json", ",", "mvc.mc.limiter.presets.dict.json", ",", "mvc.mc.lores.presets.dict.json", ",", "mvc.mc.onepole.presets.dict.json", ",", "mvc.mc.overdrive.presets.dict.json", ",", "mvc.mc.pitchshift.presets.dict.json", ",", "mvc.mc.pong.presets.dict.json", ",", "mvc.mc.rand.presets.dict.json", ",", "mvc.mc.scale.presets.dict.json", ",", "mvc.mc.slide.presets.dict.json", ",", "mvc.mc.slide~.presets.dict.json", ",", "mvc.mc.tapdelay~.presets.dict.json", ",", "mvc.McAverageHelper.presets.dict.json", ",", "mvc.mcbiquadHelper.presets.dict.json", ",", "mvc.mcCascadeHelper.presets.dict.json", ",", "mvc.MCclipHelper.presets.dict.json", ",", "mvc.mccombHelper.presets.dict.json", ",", "mvc.MCcompHelper.presets.dict.json", ",", "mvc.McCrossHelper.presets.dict.json", ",", "mvc.mcDegradeHelper.presets.dict.json", ",", "mvc.McDelayHelper.presets.dict.json", ",", "mvc.McGainHelper.presets.dict.json", ",", "mvc.MCgrooveHelper.presets.dict.json", ",", "mvc.mcLimiterHelper.presets.dict.json", ",", "mvc.MCloresHelper.presets.dict.json", ",", "mvc.MConepoleHelper.presets.dict.json", ",", "mvc.MCoverdriveHelper.presets.dict.json", ",", "mvc.MCpitchshiftHelper.presets.dict.json", ",", "mvc.MCpongHelper.presets.dict.json", ",", "mvc.MCrandHelper.presets.dict.json", ",", "mvc.MCscaleHelper.presets.dict.json", ",", "mvc.MCslideHelper.presets.dict.json", ",", "mvc.mcTapDelayHelper.presets.dict.json", ",", "mvc.MessageHelper.presets.dict.json", ",", "mvc.messageRemoteHelper.presets.dict.json", ",", "mvc.mixermatrix.presets.dict.json", ",", "mvc.mixerMatrixHelperContext.presets.dict.json", ",", "mvc.modelGuiHelper.presets.dict.json", ",", "mvc.modelHelperContext.presets.dict.json", ",", "mvc.myGUImenuHelperContext.presets.dict.json", ",", "mvc.myGUInumberHelper.presets.dict.json", ",", "mvc.onepole.presets.dict.json", ",", "mvc.onepoleHelper.presets.dict.json", ",", "mvc.OSCforward-helper.presets.dict.json", ",", "mvc.overdrive.presets.dict.json", ",", "mvc.overdriveHelper.presets.dict.json", ",", "mvc.ParameterHelper.presets.dict.json", ",", "mvc.pitchshift.presets.dict.json", ",", "mvc.pitchshiftHelper.presets.dict.json", ",", "mvc.pong.presets.dict.json", ",", "mvc.pongHelper.presets.dict.json", ",", "mvc.rand.presets.dict.json", ",", "mvc.randHelper.presets.dict.json", ",", "mvc.RemoteHelper.presets.dict.json", ",", "mvc.RemoteHeteroHelper.presets.dict.json", ",", "mvc.scale.presets.dict.json", ",", "mvc.scaleHelper.presets.dict.json", ",", "mvc.slide.presets.dict.json", ",", "mvc.slideHelper.presets.dict.json", ",", "mvc.slide~.presets.dict.json", ",", "mvc.snapshotHelper.presets.dict.json", ",", "mvc.StateHelper.presets.dict.json", ",", "mvc.stateRemoteHelper.presets.dict.json", ",", "mvc.subModelHelperContext.presets.dict.json", ",", "mvc.tapDelayHelper.presets.dict.json", ",", "mvc.tapdelay~.presets.dict.json", ",", "mvc.typeOfChild-1.presets.dict.json", ",", "mvc.typeOfChild-2.presets.dict.json", ",", "mvc.typeOfParent.presets.dict.json", ",", "mvc.undefined.presets.dict.json" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 83.0, 262.0, 261.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 133.0, 158.0, 109.0, 22.0 ],
					"text" : "prepend loadfolder"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 83.0, 95.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"patching_rect" : [ 83.0, 128.0, 90.0, 22.0 ],
					"text" : "opendialog fold"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 253.0, 158.0, 94.0, 22.0 ],
					"text" : "prepend loadfile"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 253.0, 95.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"patching_rect" : [ 253.0, 128.0, 103.0, 22.0 ],
					"text" : "opendialog JSON"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 103.0, 158.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 133.0, 203.0, 131.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "mvc.presets-loader.js",
						"parameter_enable" : 0
					}
,
					"text" : "js mvc.presets-loader.js"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"order" : 0,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"order" : 1,
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"source" : [ "obj-29", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-41", 1 ],
					"order" : 0,
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"order" : 1,
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 0 ],
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"source" : [ "obj-46", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "mvc.presets-loader.js",
				"bootpath" : "~/Documents/Max 8/Packages/MVC/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
