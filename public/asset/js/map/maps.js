
 $(function () {
           
     
    var countries= { 
"Algeria" : "Non Member",
"Andorra" : "Non Member",
"Angola" : "Non Member",
"Argentina" : "Non Member",
"Armenia" : "Non Member",
"Australia" : "Non Member",
"Austria" : "Non Member",
"Bangladesh" : "Non Member",
"Burundi" : "Non Member",
"Benin" : "Non Member",
"Burkina-Faso" :"Non Member",
"Canada" : "Non Member",
"Cameroon" : "Non Member",
"Chad" : "Non Member",
"China" : "Non Member",
        "Chile" : "Non Member",
"Congo" :"Non Member",
"Croatia" : "Non Member",
"Democratic-Republic-of-the-Congo" : "Non Member",
"Denmark" : "Non Member",
"Djibouti" :"Non Member",
"El-Salvador" : "Non Member",
"Equatorial-Guinea" : "Non Member",
"Fiji" : "Non Member",
"Finland" : "Non Member",
"France" : "Non Member",
"Gabon" :"Non Member",
"Gambia" : "Non Member",
"Georgia" : "Non Member",
"Germany" : "Non Member",
"Guinea" : "Non Member",
"Hungary" : "Non Member",
"Iceland" : "Non Member",
 "India" : "Non Member",
"India-border" :  "Non Member",
"Indonesia" : "Non Member",
"Ireland" : "Non Member",
"Israel" : "Non Member",
"Italy" :"Non Member",
"Jamaica" : "Non Member",
"Japan" : "Non Member",
"Jordan" : "Non Member",
"Kazakhstan" : "Non Member",
"Kenya" : "Non Member",
"Kuwait" : "Non Member",


"Latvia" : "Non Member",

"Lesotho" : "Non Member",
"Lithuania" :"Non Member",
"Luxembourg" : "Non Member",
"Madagascar" :"Non Member",

"Marshall-Islands" : "Non Member",
"Mauritania" : "Non Member",

"The-Federated-States-of-Micronesia" : "Non Member",

"Monaco" : "Non Member",


"Morocco" : "Non Member",

"Myanmar" : "Non Member",
"Namibia" : "Non Member",
"Nauru" : "Non Member",
"Mali": "Non Member",

"New-Zealand" : "Non Member",
"Nicaragua" :"Non Member",
"Niger" : "Non Member",

        
    
"Pakistan" : "Non Member",
"Paraguay" : "Non Member",
"Peru" : "Non Member",
"Philippines" : "Non Member",
"Poland" : "Non Member",

"Qatar" :"Non Member",
"Republic-of-Korea" : "Non Member",
"Romania" : "Non Member",
"Russian-Federation" : "Non Member",

"Samoa" :"Non Member",

"Sao-Tome-and-Principe" :"Non Member",

"Senegal" : "Non Member",
"Serbia" : "Non Member",
"Seychelles" : "Non Member",
"Solomon-Islands" : "Non Member",

 "JandK":"Non Member",
"Spain" : "Non Member",
"Sweden" : "Non Member",

"Thailand" : "Non Member",
"Timor-Leste" : "Non Member",
"Tonga" : "Non Member",
"Trinidad-and-Tobago" : "Non Member",
"Tuvalu" :"Non Member",
"Uganda" : "Non Member",
"Ukraine" :"Non Member",
"United-Arab-Emirates" : "Non Member",
"United-Kingdom" : "Non Member",
"Uruguay" : "Non Member",
"Vanuatu" :"Non Member",
"Viet-Nam" : "Non Member",
"Yemen" : "Non Member",
"Zambia" : "Non Member",
"Zimbabwe" : "Non Member",                  

                     
                                         



    };
        
        var getElemID = function(elem) {
                // Show element ID
                country=$(elem.node).attr("data-id");
                country=country.replace(/-/g, ' '); 
                return country+": " + countries[$(elem.node).attr("data-id")];
         };
           
         var getElemID1 = function(elem) {
                // Show element ID
    
                return countries[$(elem.node).attr("data-id")];
         };
           
            $(".mapcontainer_un").mapael({
                map: {
                    name: "world_countries_un",
                    zoom: {
                        enabled: true,
                        maxLevel: 15
                    },  
                      
                    
                     defaultArea: {
                        value: getElemID1,
                        attrs: {
                         	fill: "#5d5d5d",
                        	stroke: "#5d5d5d",
                        	"stroke-width": 0.2,
                        	"stroke-linejoin": "round"
                    	},
                    
                          
                    tooltip: {
                        content: getElemID
                        }
                    },
                   
                    defaultPlot: {
                        size: 19
                    }
                 
                },
                
                legend: {
                    area: {
                        title: "Parliament ",
                        slices: [{
                            size: 48,
                            attrs: {
                                fill: "#E98300",
                                size:70
                            },
                            label: "Endorsed",
                        
                            sliceValue: "Non Member"
                        }, {
                            size: 48,
                            attrs: {
                                fill: "#5d5d5d"
                            },
                            label: "Not Endorsed",
                            sliceValue: "Member",
                        }]
                    }
                },
             
                areas: {   

                    
'Afghanistan' : {value:countries['Afghanistan'],attrs: {"stroke-width":0.1,}, },
"Albania" : {value:countries["Albania" ],  attrs: {"stroke-width":0.1,} ,},
"Algeria" : {value:countries["Algeria" ] ,  attrs: {"stroke-width":0.1,}},
"Andorra" : { value:countries["Andorra" ],attrs: {"stroke-width":0.1,} },
"Angola" : {value:countries["Angola" ],  attrs: {"stroke-width":0.1,} },
"Antigua-and-Barbuda" : {value:countries["Antigua-and-Barbuda" ],},
"Argentina" : {value:countries["Argentina" ],attrs: {"stroke-width":0.1,} },
"Armenia" : {value:countries["Armenia"],attrs: {"stroke-width":0.1,}},
"Asia and the Pacific" : {value:countries["Asia and the Pacific"], attrs: {"stroke-width":0.1,}, },
"Australia" : {value:countries["Australia"], attrs: {"stroke-width":0.1,}, },
"Austria" : {value:countries["Austria"], attrs: {"stroke-width":0.1,},},
"Azerbaijan" : { value:countries["Azerbaijan"], },
"Bahamas" : { value:countries["Bahamas"],},
"Bahrain" : {value:countries["Afghanistan" ]  },
"Bangladesh" : { value:countries["Bangladesh"],  },
"Barbados" : {value:countries["Barbados"  ], },
"Belarus" : { value:countries["Belarus" ],  },
 "Belgium" : { value:countries["Belgium"], },
"Belize" : { value:countries["Belize"],},
"Benin" : { value:countries["Benin"] },
"Bhutan" : { value:countries["Bhutan"] },
"Bolivia-Plurinational-State-of" : {value:countries["Bolivia-Plurinational-State-of"],},
"Bosnia-and-Herzegovina" : { value:countries["Bosnia-and-Herzegovina"],  },
"Botswana" : {value:countries["Botswana"],  },
"Brazil" : {value:countries["Brazil"  ],  },
"Brunei-Darussalam" : {value:countries["Brunei-Darussalam"],},
"Bulgaria" : {value:countries["Bulgaria"],},
"Burkina-Faso" : { value:countries["Burkina-Faso"],  },
"Burundi" : { value:countries["Burundi"],  },
"Cambodia" : { value:countries["Cambodia"], },
"Cameroon" : { value:countries["Cameroon"],   },
"Canada" : {value:countries["Canada"],  },
"Cape-Verde" : { value:countries["Cape-Verde"],  },
"Central-African-Republic" : {value:countries["Central-African-Republic"],},
"Chad" : {value:countries["Chad"],},
"Chile" : { value:countries["Chile" ],},
"China" : {value:countries["China"],},
"Colombia" : { value:countries["Colombia" ],},
"Comoros" : {value:countries["Comoros"  ],},
"Congo" : {value:countries["Congo"],},
"Costa-Rica" : {value:countries["Costa-Rica"],},
"Côte-d’Ivoire" : { value:countries["Côte-d’Ivoire" ],},
"Croatia" : { value:countries["Croatia" ], },
"Cuba" : {value:countries["Cuba"], },
"Cyprus" : { value:countries["Cyprus"],},
"Czech-Republic" : { value:countries["Czech-Republic"], },
"Democratic-Peoples-Republic-of-Korea" : {value:countries["Democratic-Peoples-Republic-of-Korea"],},
"Democratic-Republic-of-the-Congo" : {value:countries["Democratic-Republic-of-the-Congo"], },
"Denmark" : { value:countries["Denmark"], },
"Djibouti" : {value:countries["Djibouti"], },
"Dominica" : {value:countries["Dominica"], },
"Dominican-Republic" : { value:countries["Dominican-Republic"],},
"Ecuador" : { value:countries["Ecuador"], },
"El-Salvador" : { value:countries["El-Salvador"], },
"Equatorial-Guinea" : { value:countries["Equatorial-Guinea"], },
"Eritrea" : { value:countries["Eritrea"], },
"Estonia" : { value:countries["Estonia"],},
"Ethiopia" : {value:countries["Ethiopia"], },
"Europe and the CIS" : { value:countries["Europe and the CIS"], },
"Fiji" : { value:countries["Fiji"],},
"Finland" : { value:countries["Finland"], },
"Former-Yugoslav-Republic-of-Macedonia" : { value:countries["Former-Yugoslav-Republic-of-Macedonia"], },
"France" : { value:countries["France"], },
"Gabon" : {value:countries["Gabon"], },
"Gambia" : { value:countries["Gambia"],},
"Georgia" : { value:countries["Georgia"],},
"Germany" : { value:countries["Germany"], },
"Ghana" : {value:countries["Ghana"], },
"Greece" : {value:countries["Greece"], },
"Grenada" : { value:countries["Grenada" ], },
"Guatemala" : { value:countries["Guatemala"], },
"Guinea" : { value:countries["Guinea" ], },
"Guinea-Bissau" : {value:countries["Guinea-Bissau" ], },
"Guyana" : { value:countries["Guyana"], },
"Haiti" : { value:countries["Haiti"], },
"Honduras" : { value:countries["Honduras"],},
"Hungary" : { value:countries["Hungary"], },
"Iceland" : { value:countries["Iceland"], },
"Indonesia" : { value:countries["Indonesia"], },
"Iran-Islamic-Republic-of" : {value:countries["Iran-Islamic-Republic-of"], },
"Iraq" : {  value:countries["Iraq" ], },
"Ireland" : { value:countries["Ireland"], },
"Israel" : {  value:countries["Israel"], },
"Italy" : { value:countries["Italy"], },
"Jamaica" : { value:countries["Jamaica"], },
"Japan" : { value:countries["Japan"],},
"Jordan" : {value:countries["Jordan"], },
"Kazakhstan" : { value:countries["Kazakhstan"], },
"Kenya" : {value:countries["Kenya"], },
"Kiribati" : {value:countries["Kiribati"],},
"Kuwait" : { value:countries["Kuwait"], },
"Kyrgyzstan" : { value:countries["Kyrgyzstan"],},
"Lao-People's-Democratic-Republic" : { value:countries["Lao-People's-Democratic-Republic"],},
"Latvia" : { value:countries["Latvia"],},
"Lebanon" : {value:countries["Lebanon"],},
"Lesotho" : { value:countries["Lesotho"], },
"Liberia" : {value:countries["Liberia"], },
"Libya" : { value:countries["Libya"],},
"Liechtenstein" : { value:countries["Liechtenstein"], },
"Lithuania" : { value:countries["Lithuania"], },
"Luxembourg" : { value:countries["Luxembourg" ], },
"Madagascar" : { value:countries["Madagascar"], },
"Malawi" : { value:countries["Malawi"], },
"Malaysia" : { value:countries["Malaysia"], },
"Maldives" : { value:countries["Maldives"], },
"Mali" : { value:countries["Mali"], },
"Malta" : { value:countries["Malta"], },
"Marshall-Islands" : { value:countries["Marshall-Islands"], },
"Mauritania" : { value:countries["Mauritania"], },
"Mauritius" : { value:countries["Mauritius"], },
"Mexico" : { value:countries["Mexico"], },
"The-Federated-States-of-Micronesia" : {value:countries["The-Federated-States-of-Micronesia"], },
"Moldova" : {value:countries["Moldova"], },
"Monaco" : { value:countries["Monaco"], },
"Mongolia" : {value:countries["Mongolia"],},
"Montenegro" : { value:countries["Montenegro"], },
"Morocco" : { value:countries["Morocco"], },
"Mozambique" : { value:countries["Mozambique"], },
"Myanmar" : {value:countries["Myanmar"], },
"Namibia" : {value:countries["Namibia"], },
"Nauru" : { value:countries["Nauru"] },
"Nepal" : { value:countries["Nepal"] },
"Netherlands" : { value:countries["Netherlands"] },
"New-Zealand" : {value:countries["New-Zealand"]},
"Nicaragua" : {value:countries["Nicaragua"] },
"Niger" : { value:countries["Niger"]},
"Nigeria" : { value:countries["Nigeria"] },
"Niue" : { value:countries["Niue"]},
"North-Africa-and-Middle-East" : { value:countries["North-Africa-and-Middle-East"]},
"Norway" : {value:countries["Norway"]},
"Oman" : { value:countries["Oman"],},
"Palau" : {value:countries["Palau" ], },
"Panama" : {value:countries["Panama"],},
"Papua-New-Guinea" : {value:countries["Papua-New-Guinea"], },
"Paraguay" : { value:countries["Paraguay"], },
"Peru" : { value:countries["Peru"],},
"Philippines" : { value:countries["Philippines"], },
"Poland" : { value:countries["Poland"],},
"Portugal" : { value:countries["Portugal"], },
"Qatar" : { value:countries["Qatar"], },
"Republic-of-Korea" : { value:countries["Republic-of-Korea"],},
"Romania" : { value:countries["Romania"],},
"Russian-Federation" : {value:countries["Russian-Federation"], },
"Rwanda" : { value:countries["Rwanda"],},
"Saint-Kitts-and-Nevis" : {value:countries["Saint-Kitts-and-Nevis"], },
"Saint-Lucia" : { value:countries["Saint-Lucia"], },
"Saint-Vincent-and-the-Grenadines" : { value:countries["Saint-Vincent-and-the-Grenadines"],},
"Samoa" : { value:countries["Samoa"],},
"San-Marino" : { value:countries["San-Marino"],},
"Sao-Tome-and-Principe" : {value:countries["Sao-Tome-and-Principe"], },
"Saudi-Arabia" : { value:countries["Saudi-Arabia"],},
"Senegal" : {value:countries["Senegal"],},
"Serbia" : {value:countries["Serbia"],},
"Seychelles" : {value:countries["Seychelles"],},
"Sierra-Leone" : { value:countries["Sierra-Leone"],},
"Singapore" : {value:countries["Singapore"],},
"Slovakia" : { value:countries["Slovakia"],},
"Slovenia" : {value:countries["Slovenia"],},
"Solomon-Islands" : { value:countries["Solomon-Islands"],},
"Somalia" : { value:countries["Somalia"], },
"South-Africa" : { value:countries["South-Africa"], },
"Spain" : { value:countries["Spain"],},
"Sri-Lanka" : { value:countries["Sri-Lanka"],},
"Sub-Saharan-Africa" : { value:countries["Sub-Saharan-Africa"],},
"Suriname" : {value:countries["Suriname"], },
"Swaziland" : {value:countries["Swaziland"],},
"Sweden" : {value:countries["Sweden"],},
"Switzerland" : { value:countries["Switzerland"], },
"Syrian-Arab-Republic" : { value:countries["Syrian-Arab-Republic"], },
"Tajikistan" : { value:countries["Tajikistan"], },
"Thailand" : { value:countries["Thailand"],},
"The-Americas-and-the-Caribbean" : { value:countries["The-Americas-and-the-Caribbean"], },
"Timor-Leste" : { value:countries["Timor-Leste" ], },
"Togo" : {value:countries["Togo"], },
"Tonga" : {value:countries["Tonga"], },
"Trinidad-and-Tobago" : { value:countries["Trinidad-and-Tobago"],},
"Tunisia" : { value:countries["Tunisia"], },
"Turkey" : {  value:countries["Turkey"], },
"Turkmenistan" : {  value:countries["Tunisia"],},
"Tuvalu" : {  value:countries["Tuvalu"], },
"Uganda" : {  value:countries["Uganda"], },
"Ukraine" : {  value:countries["Ukraine"],},
"United-Arab-Emirates" : {  value:countries["United-Arab-Emirates"], },
"United-Kingdom" : {value:countries["United-Kingdom"], },
"United-Republic-of-Tanzania" : {  value:countries["United-Republic-of-Tanzania"], },
"United-States-of-America" : {value:countries["United-States-of-America"], },
"Uruguay" : { value:countries["Uruguay" ],},
"Uzbekistan" : {  value:countries["Uzbekistan"],},
"Vanuatu" : {  value:countries["Vanuatu"],},
"Venezuela" : {  value:countries["Venezuela"], },
"Viet-Nam" : { value:countries["Viet-Nam"],},
"Yemen" : {  value:countries["Yemen"],},
"Zambia" : { value:countries["Zambia" ],},
"Zimbabwe" : {  value:countries["Zimbabwe"], },                    
"Cyprus" : {  value:countries["Cyprus"], }, 
"Western-Sahara" : {  value:countries["Western-Sahara"],"tooltip": { "content": "Western Sahara",  }, 
"Pakistan" : {  value:countries["Pakistan" ],},
"Jammu-and-Kashmir" : { "value": "56",  "tooltip": { "content": "Jammu and Kashmir: Non Member",  },attrs: {fill: "white","stroke-width":0.1, } },  
"Gaza" : {"tooltip": { "content": "Gaza",  },attrs: {fill: "white","stroke-width":0.1, }  }, 
"South-Sudan" : { value:countries["South-Sudan"], attrs : {stroke : "none", } }, 
"Egypt" : { value:countries["Egypt"], },
"Sudan" : { value:countries["Sudan"],attrs : {stroke : "none", }  }, 
"West-Bank" : {value:countries["West-Bank"],}, 
"Republic-of-Korea" : {value:countries["Republic-of-Korea"], }, 
"Democratic-People's-Republic-of-Korea" : { value:countries["Democratic-People's-Republic-of-Korea"], },
"India" : {value:countries["India"], } , 
  },
		
"Greenland" : {
value:countries["Greenland"],"tooltip": {"content": "Greenland (Denmark)", 
}
},
"French-Southern-and-Antarctic-Lands"	 : {
value:countries["Tunisia"], attrsHover : {
				transform : "s3"
					, animDuration : 300
				}
}, 
/*"Taiwan-Province-of-China"   : {
"value": "56",
"href": "http://iknowpolitics.org/"+lang+"/region/China",
"tooltip": {
"content": "Taiwan, Province of China", 
}
},*/

    "Falkland-Islands"  : {
    "value": "103",
    "tooltip": {
    "content": "Falkland Islands (Malvinas): Non Member<br>Note:A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas).", 
    }, 
    attrs: {fill: "white","stroke-width":0.1,},
     attrsHover : {
                    transform : "s3"
                        , animDuration : 300

                    }
    },


    "French Guiana " : {
     value:countries["Tunisia"],},


    "New Caledonia (France)" : { value:countries["Tunisia"], attrsHover : {transform : "s3", animDuration : 300 }},
        //NC
     "Egypt2" : {
     "tooltip": {"content": "Egypt2", },
         attrsHover : {         fill : "none"
                                , animDuration : 0,
                            },attrs : {
                            fill: "none",
                        "stroke-dasharray" :".", 
                        }
        },

        "Aksai Chin"  : {tooltip: {content: ""}, attrsHover : {fill : "none", animDuration : 0, } },
    "KE-SD"  : { attrsHover : {
                            fill : "none",
                             animDuration : 0,
                        },attrs : {
                        fill : "none",
                        "stroke-dasharray" :".",  // stroke : "red",
                    }
    },
    "DRPK-ROK"  : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                        fill: "none",
                        "stroke-dasharray" :".",  // stroke : "red",

                    }
    },
    "Somalia2" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                            "stroke-dasharray" :".",  
                                             stroke : "saddlebrown",
                    }
    },

    "JandK" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                             stroke : "none",
                                            "stroke-dasharray" :".", 

                    }
    },

    "JandK2" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",

                                            "stroke-dasharray" :".", 
                    }
    },


    "JandK4"  : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                            //"stroke-dasharray" :".", 
                    }
    },
    "JandK5"  : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : 0,
                        },attrs : {
                                            fill: "none",
                                            "stroke-dasharray" :".", 
                    }
    },
    "South-Sudan2" : {
    "value": "2",
     attrsHover : {
                            fill : "none"
                            , animDuration : "1",
                        },attrs : {
                                            fill: "none",
                                            //stroke : "red",
                                            "stroke-dasharray" :".", 
                    }
    },
      "Sudan-border" : {"value": "2",attrsHover : {fill : "none", animDuration : "0",},attrs : {
                                            fill: "none",
                                            //"stroke-dasharray" :".",
      }},
    "India-border"   : {
    "value": countries["India-border"],
     attrsHover : {fill : "none", animDuration : "0",},attrs : {fill: "none",//"stroke-dasharray" :".", 
                    }},

    "JandK-border"  : {"value": "2",attrsHover : { fill : "none", animDuration : "0",},attrs : {fill: "none",

                    }},

                                             
                    
                    //non members COUNTRIES
              "Aksai Chin"  : {
                           attrs: {
                            fill: "white",
                              "stroke-width":0.1,
                          
                           
                        }
                        , attrsHover: {
                            
                        }
                    },
                     
                                         
                                        
                                         
                      "Puerto-Rico": {
                        attrs: {
                           
                              "stroke-width":0.1,
                         
                        }
                          
                          
                        , attrsHover: {
                       }
                    }
                  
                },

               
            });
        });
        
                    
      
      