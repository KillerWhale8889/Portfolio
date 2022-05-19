
$(document).ready(function () {

    var tdArr = $(this).find(".dimmed table tr td");
    var txt;
    $.each(tdArr, function(i, val){
        txt = $(val).text();

        if(txt == "-") $(this).find("a").attr("disabled",true);
        if(txt == "-") $(this).find("a").css("cursor","default");
        if(txt == "-") $(this).find("a").css("color","#c6c6c6");
        // if(txt == "-") $(this).addClass("layer");
    });

});





/* Main Crash user chart */

graph.ready([ "chart.builder", "util.time" ], function(builder, time) {
    
const data = [   
    { date : new Date("2022/03/21 00:00:00"), Function : 50, Resource : 15, Innovation : 10 },
    { date : new Date("2022/03/21 01:00:00"), Function : 30, Resource : 100, Innovation : 30 },
    { date : new Date("2022/03/21 02:00:00"), Function : 70, Resource : 55, Innovation : 20 },
    { date : new Date("2022/03/21 03:00:00"), Function : 100, Resource : 45, Innovation : 40 },
    { date : new Date("2022/03/21 04:00:00"), Function : 10, Resource : 0, Innovation : 5 },
];
 
    window.c = builder("#crash_chart", {
       
        padding: {
            top: 20,
            left: 30,
            right: 15,
            bottom: 18
        },
        axis : [
            {
                x : {
                    type : "date",
                    domain : [ new Date("2022/03/21"), new Date("2022/03/22") ],
                    interval : 1000 * 60 * 60 * 1, 
                    format : "HH",
                    key : "date",
                    line : false
                },
                y : {
                    type : "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    line : false,
                    orient : "left"
                },
                data: data,
                buffer: 10,
            
            },
            
            
        ],
        brush : [
            {
                type : "line",
                target : [ "Function", "Innovation" ],
                colors: ["#3366ff", "#02BC77"], 
                clip: false,
            },
            // {
            //     type : "scatter",
            //     target : [ "Function", "Resource", "Innovation" ],
            //     colors: ["#3366ff", "#02BC77", "#ffea6f"],
            //     symbol: "circle",
            //     size: 5
            // },
        ],
        
        widget : [ 
            {
                type : "legend",
                filter: false,
                orient: "top",
                align: "center",  
                dy: 5
            },
            {
                type : "tooltip",
                orient : "right",
                brush : 1,
        },
        {
                type : "tooltip",
                orient : "right",
                brush : 1,
        }
    
    
    ],
        
    });
});


/* Main google play chart */

graph.ready([ "chart.builder", "util.base" ], function(builder, _) {
    builder("#g-grade", {
        width: 140,
        height: 140,
        padding: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        },
        axis : [{
            c : {
                type : "panel",
            },
            data : [{ 
                title: false,               
                value : 4.2,
                max : 5,
                min : 0
            }]
        }],
        brush : [{
            type : "fullgauge",
            symbol : "round",
            startAngle : 0,
            size : 8,
            titleY : 100,
            showText : true,
            format : function(value) {
                return value;
            }, 
            animate : true           
        }],
        style : {
            gaugeFontSize : 30,
            colors: ["#ffea6f"],
            dy: 10,
                      
        }
    });
});

graph.ready([ "chart.builder" ], function(builder) {
    var data = [
        { quarter : "5", GooglePlay : 300 },
        { quarter : "4", GooglePlay : 200 },
        { quarter : "3", GooglePlay : 190  },
        { quarter : "2", GooglePlay : 260  },
      { quarter : "1", GooglePlay : 360  }
    ];

    builder("#g-graph", {
        height : 140,
        padding: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 10
        },
        theme : "classic",
        axis : {
            x : {          
                type : "range",
                step : 5,
                line : false,            
                domain : function(d) {
                    return 500;
                },
                orient : "top",
            },
            y : {
                type : "block",
                domain : "quarter",
                line : true
            },
            data : data
        },
        brush : [{
            type : "bar",
            target : [ "GooglePlay" ],
            size: 8 ,
            
        }],
        widget : [{
            type: "tooltip",
            
            orient: "right",
            format : function(data, key) {
                return {
                    key: key,
                    value: data[key]
                }
            }
        }],
        style : {
            tooltipBorderColor : "#3366ff"
        }
    });
});

/* Main app store chart */

graph.ready([ "chart.builder", "util.base" ], function(builder, _) {
    builder("#a-grade", {
        width: 140,
        height: 140,
        padding: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        },
        axis : [{
            c : {
                type : "panel",
            },
            data : [{ 
                title: false,               
                value : 4.2,
                max : 5,
                min : 0
            }]
        }],
        brush : [{
            type : "fullgauge",
            symbol : "round",
            startAngle : 0,
            size : 8,
            titleY : 100,
            showText : true,
            format : function(value) {
                return value;
            },
            animate : true
                        
        }],
        style : {
            gaugeFontSize : 30,
            colors: ["#ffea6f"],
            
        }
    });
});

graph.ready([ "chart.builder" ], function(builder) {
    var data = [
        { quarter : "5", AppStore : 300 },
        { quarter : "4", AppStore : 200 },
        { quarter : "3", AppStore : 190  },
        { quarter : "2", AppStore : 260  },
        { quarter : "1", AppStore : 360  }
    ];

    var tpl_tooltip =
'<div id="chart_tooltip" class="popover popover-top">' +
    '<div class="head">dddddddddddddddddddddddd</div>' +
    '<div class="body">' +
        '<div class="image"><i class="icon-caution"></i></div>' +
        '<div class="message">dssssssssssssssssssssssssssssss</div>' +
    '</div>' +
'</div>';

    builder("#a-graph", {
        height : 140,
        padding: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 10
        },
        theme : "classic",
        axis : {
            x : {          
                type : "range",
                step : 5,
                line : false,            
                domain : function(d) {
                    return 500;
                },
                orient : "top"
            },
            y : {
                type : "block",
                domain : "quarter",
                line : true
            },
            data : data
        },
        brush : [{
            type : "bar",
            target : [ "AppStore" ],
            colors: ["#02bc77"],    
            size: 8        
        },
    ], tpl : {
        tooltip : tpl_tooltip
    },
    event : {
        mouseover : function(obj, e) {
            if(obj.brush.index == 1) {
                var $tooltip = $(this.tpl.tooltip({ data: obj.data }));
                $("body").append($tooltip);

                $tooltip.css({ "z-index": 10000, left: e.pageX - $tooltip.width() / 2, top: e.pageY - $tooltip.height() });
            }
        },

    },
        // widget : [{
        //     type: "tooltip",
        //     orient: "right",
        //     format : function(data, key) {
        //         return {
        //             key: key,
        //             value: data[key]
        //         }
        //     }
        // }],
        style : {
            tooltipBorderColor : "#3366ff"
        }
    });
});


/* popup resource chart */

graph.ready([ "chart.builder", "util.time" ], function(builder, time) {
    var start = new Date("2022/03/21 00:00:00"),
    end = new Date("2022/03/21 01:00:00")    
    data = [
        { date : new Date("2022/03/21 00:00:00"), CPU : 50,},        
        { date : new Date("2022/03/21 00:10:00"), CPU : 70, },
        { date : new Date("2022/03/21 00:15:00"), CPU : 100,  },
        { date : new Date("2022/03/21 00:20:30"), CPU : 10,  },
        { date : new Date("2022/03/21 00:25:00"), CPU : 50,},
        { date : new Date("2022/03/21 00:30:00"), CPU : 30,  },
        { date : new Date("2022/03/21 00:35:00"), CPU : 70, },
        { date : new Date("2022/03/21 00:40:00"), CPU : 100,  },
        { date : new Date("2022/03/21 00:45:00"), CPU : 10,  },
        { date : new Date("2022/03/21 00:50:00"), CPU : 50,},
        { date : new Date("2022/03/21 01:00:00"), CPU : 30,  },
    ];
     
        window.c = builder("#cpu_chart", {
            
            padding: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20
            },
            axis : [
                {
                    x : {
                        type : "date",
                        domain : [ start, end ],
                        interval : 1000 * 60 * 10,
                        format : "mm:ss",
                        key : "date",
                        line : false
                    },
                    
                    y : {
                        type : "range",
                        domain : [ 0, 100 ],
                        step : 5,
                        line : true,
                        orient : "left",
                    },
                    data: data,
                }
            ],
            brush : [
                {
                    type : "line",
                    target : [ "CPU"],
                    colors: ["#3366ff"],
                },
                {
                    type : "scatter",
                    target : [ "CPU"],
                    colors: ["#3366ff"],
                    symbol: "circle",
                    size: 5,
                },
            ],
            
            widget : [              
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            },
        {
            type : "zoom",
            interval : function(stime, etime) {
                var dist = etime - stime;
    
                if(dist < 1000 * 60) {
                    return 1000 * 10; // 10seconds
                } else if(dist < 1000 * 60 * 10) {
                    return 1000 * 60; // 1minutes
                }
    
                return 1000 * 60 * 10; // 10minutes
            },
            format : function(stime, etime) {
                var dist = etime - stime;
    
                if(dist < 1000 * 60) {
                    return "mm:ss";
                }
    
                return "mm:ss";
            }
            
        }
        
        ]
            
        });
    });


graph.ready([ "chart.builder", "util.time" ], function(builder, time) {

const data = [
{ date : new Date("2022/03/21 00:00:00"), Memory : 50,},
{ date : new Date("2022/03/21 01:00:00"), Memory : 30,  },
{ date : new Date("2022/03/21 02:00:00"), Memory : 70, },
{ date : new Date("2022/03/21 03:00:00"), Memory : 100,  },
{ date : new Date("2022/03/21 04:00:00"), Memory : 10,  },
];

window.c = builder("#memory_chart", {
    padding: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
    },
    axis : [
        {
            x : {
                type : "date",
                domain : [ new Date("2022/03/21"), new Date("2022/03/22") ],
                interval : 1000 * 60 * 60 * 6, 
                format : "HH",
                key : "date",
                line : false
            },
            y : {
                type : "range",
                domain : [ 0, 100 ],
                step : 5,
                line : true,
                orient : "left"
            },
            data: data
        }
    ],
    brush : [
        {
            type : "line",
            target : [ "Memory"],
            colors: ["#3366ff"],
            
        },
        {
            type : "scatter",
            target : [ "Memory"],
            colors: ["#3366ff"],
            symbol: "circle",
            size: 5
        },
    ],
    
    widget : [                
        {
            type : "tooltip",
            orient : "right",
            brush : 1
    }


],
    
});
});


graph.ready([ "chart.builder", "util.time" ], function(builder, time) {
    
    const data = [
        { date : new Date("2022/03/21 00:00:00"), Network : 50,},
        { date : new Date("2022/03/21 01:00:00"), Network : 30,  },
        { date : new Date("2022/03/21 02:00:00"), Network : 70, },
        { date : new Date("2022/03/21 03:00:00"), Network : 100,  },
        { date : new Date("2022/03/21 04:00:00"), Network : 10,  },
    ];
     
        window.c = builder("#network_chart", {
            padding: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20
            },
            axis : [
                {
                    x : {
                        type : "date",
                        domain : [ new Date("2022/03/21"), new Date("2022/03/22") ],
                        interval : 1000 * 60 * 60 * 6, 
                        format : "HH",
                        key : "date",
                        line : false
                    },
                    y : {
                        type : "range",
                        domain : [ 0, 100 ],
                        step : 5,
                        line : true,
                        orient : "left"
                    },
                    data: data
                }
            ],
            brush : [
                {
                    type : "line",
                    target : [ "Network"],
                    colors: ["#3366ff"],
                    
                },
                {
                    type : "scatter",
                    target : [ "Network"],
                    colors: ["#3366ff"],
                    symbol: "circle",
                    size: 5
                },
            ],
            
            widget : [                
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1
            }
        
        
        ],
            
        });
    });


    /* performance report */ 

graph.ready([ "chart.builder"], function(builder, time) {

    const data = [
        { date :"Mon", 이번주 : 50, 지난주 : 40},
        { date :"Tue", 이번주 : 40, 지난주 : 2},
        { date :"Wed", 이번주 : 50, 지난주 : 10},
        { date :"Thu", 이번주 : 10, 지난주 : 8},
        { date :"Fri", 이번주 : 5, 지난주 : 10},
        { date :"Sat", 이번주 : null, 지난주 : null},
        { date :"Sun", 이번주 : null, 지난주 : null},
    ];
        
        window.c = builder("#weeklyPerformanceReport", {

            padding: {
                top: 30,
                left: 30,
                right: 30,
                bottom: 60
            },
            axis : [
                {
                    x : {
                        type : "fullblock",
                        domain : "date",
                    },
                    y : {
                        type : "range",
                        domain : [ 0, 100 ],
                        step : 5,
                        line : true,
                        orient : "left"
                    },
                    data: data
                }
            ],
            brush : [
                {
                    type : "line",
                    target : [ "이번주", "지난주"],
                    colors: ["#4791ff","#02BC77"],
                    symbol: "curve",  
                          
                    
                },
                {
                    type : "scatter",
                    target : [ "이번주", "지난주"],
                    colors: ["#4791ff","#02BC77"],
                    size: 5,
                    // display : "all",
                },
                
            ],
            
            widget : [    
                {
                    type : "legend",
                    filter: false,
                    orient: "bottom",
                    align: "center",  
                },            
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1
            }
        
        
        ],
            
        });

        
});

graph.ready([ "chart.builder"], function(builder, time) {

    const data = [
        { date :"Mon", 이번달 : 50, 지난달 : 40},
        { date :"Tue", 이번달 : 40, 지난달 : 2},
        { date :"Wed", 이번달 : 50, 지난달 : 10},
        { date :"Thu", 이번달 : 10, 지난달 : 8},
        { date :"Fri", 이번달 : 5, 지난달 : 10},
        { date :"Sat", 이번달 : 20, 지난달 : 20},
        { date :"Son", 이번달 : 50, 지난달 : 20},
    ];
        
        window.c = builder("#monthlyPerformanceReport", {

            padding: {
                top: 30,
                left: 30,
                right: 30,
                bottom: 60
            },
            axis : [
                {
                    x : {
                        type : "fullblock",
                        domain : "date",
                    },
                    y : {
                        type : "range",
                        domain : [ 0, 100 ],
                        step : 5,
                        line : true,
                        orient : "left"
                    },
                    data: data
                }
            ],
            brush : [
                {
                    type : "line",
                    target : [ "이번달", "지난달"],
                    colors: ["#4791ff","#02BC77"],
                    symbol: "curve",  
                          
                    
                },
                {
                    type : "scatter",
                    target : [ "이번달", "지난달"],
                    colors: ["#4791ff","#02BC77"],
                    size: 5,
                    // display : "all",
                },
                
            ],
            
            widget : [    
                {
                    type : "legend",
                    filter: false,
                    orient: "bottom",
                    align: "center",  
                },            
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1
            }
        
        
        ],
            
        });

        
});


/* top5 device resource */

graph.ready([ "chart.builder"], function(builder) {

    const data = [
        { title : "Device 1", value : 98, max : 150 },
        { title : "Device 2", value : 88, max : 150 },
        { title : "Device 3", value : 57, max : 150 },
        { title : "Device 4", value : 22, max : 150 },
        { title : "Device 5", value : 15, max : 150 }
       
    ];
        
        window.c = builder("#cpu_resource", {
         
            height : 200,
            padding: {
                top: 30,
                left: 10,
                right: 10,
            },
            axis : [{
                data : data,  
                         
            },],
            brush : [
                
                {
                type : "bargauge",
                axis : 0,
                format : function(data) {
                    return data
                },        
            }],
            style : {
                colors:  ["#ffd30f", "#ffe14b", "#ffea6f", "#fff29f", "#fff9cf"],                 
            },
            
            widget : [ 
                {
                    type : "title",
                    text : "CPU",
                },             
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [
        { title : "Device 1", value : 98, max : 150 },
        { title : "Device 2", value : 88, max : 150 },
        { title : "Device 3", value : 57, max : 150 },
        { title : "Device 4", value : 22, max : 150 },
        { title : "Device 5", value : 15, max : 150 }
    ];
        
        window.c = builder("#memory_resource", {
           
            height : 200,
            padding: {
                top: 30,
                left: 10,
                right: 10,
            },
            axis : [{
                data : data,                
            }],
            brush : [
                {
                type : "bargauge",
                axis : 0,
                format : function(data) {
                    return data
                },             
            }],
            style : {
                colors:  ["#ff2366", "#fe578a", "#ff7fa6", "#ffb9ce", "#ffd9e5"],
                
            },
            
            widget : [ 
                {
                    type : "title",
                    text : "Memory",
                },             
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [
        { title : "Device 1", value : 98, max : 150 },
        { title : "Device 2", value : 88, max : 150 },
        { title : "Device 3", value : 57, max : 150 },
        { title : "Device 4", value : 22, max : 150 },
        { title : "Device 5", value : 15, max : 150 }
    ];
        
        window.c = builder("#network_resource", {
            
            height : 200,
            padding: {
                top: 30,
                left: 10,
                right: 10,
                bottom: 0
            },
            axis : [{
                data : data,                
            }],
            brush : [
                {
                type : "bargauge",
                axis : 0,
                format : function(data) {
                    return data
                },             
            }],
            style : {
                colors:  ["#ff6128", "#ff935d", "#ffb27e", "#ffd1a9", "#ffebd3"],
                
            },
            
            widget : [ 
                {
                    type : "title",
                    text : "Network",
                },             
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [
        { device1 : 98, device2 : 70, device3 : 70, device4 : 1, device5 : 55 },
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },
        { device1 : 98, device2 : 60, device3 : 50, device4 : 30, device5 : 70 },
        { device1 : 98, device2 : 20, device3 : 40, device4 : 45, device5 : 60 },
        { device1 : 98, device2 : 10, device3 : 7, device4 : 30, device5 : 36 },
    ];
        

        window.c = builder("#time_resource", {
            padding: {
                top: 40,
                left: 25,
                right: 20,
            },
            axis : {
                x : {
                    type : "fullblock",
                    domain : [ "00-01", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-00" ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "area",
                target : [ "device1", "device2","device3","device4","device5" ],
                
            },
             {
                type : "scatter",   
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
                symbol: "circle",
                size : 5,
                display : "all",
            }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [  
                {
                    type : "title",
                    text : "Hourly Report",
                    orient: "top",
                },       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });

    graph.ready([ "chart.builder"], function(builder) {

        const data = [
            { "This Month AOS" : 0, 이번달iOS : 2, 전체평균 : 4.2, },
            { "This Month AOS" : 1, 이번달iOS : 3, 전체평균 : 4.7, },
            { "This Month AOS" : 5, 이번달iOS : 5, 전체평균 : 3.2, },
            { "This Month AOS" : 2, 이번달iOS : 1, 전체평균 : 2.5, },

        ];
        
        window.c = builder("#review_grade", {
            padding: {
                top: 30,
                left: 20,
                right: 20,
            },
            axis : {
                x : {
                    type : "fullblock",
                    domain : [ "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31" ],
                    
                },
                y : {
                    type: "range",
                    domain : [ -0.1, 5.5 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [
                {
                    type : "line",
                    target : [ "This Month AOS", "이번달iOS", "전체평균" ],
                    colors: ["#02bc77","#4791ff","#b7b7b7"],
                    // active : "전체평균",
                    // activeEvent : "mouseover",
                    symbol:"curve",
                    clip: false,
                    
                },
                {
                    type : "scatter",
                    target : [ "This Month AOS", "이번달iOS", "전체평균" ],
                    colors: ["#02bc77","#4791ff","#b7b7b7"],
                    size: 1,
                    display : "all",
                },
            ],
            widget : [  
                {
                    type : "legend",
                    filter: false,
                    orient: "bottom",
                    align: "center",                      
                },       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 0,
                }
        
        
        ],
            
        });
});

/* dashboard 2 chart */    

graph.ready(["chart.brush.core", "chart.widget.tooltip", "chart.builder"], function( _, _, builder) {

    const data = [
        { Function : 0, VoC : 5, User : 3 },
        { Function : 2, VoC : 0, User : 1 },
        { Function : 10, VoC : 6, User : -8 },
        { Function : 2, VoC : 4, User : 5 },
        { Function : 3, VoC : 4, User : 3 },
        { Function : 2, VoC : -4, User : 1 },
        { Function : 1, VoC : 3, User : 8 },
        { Function : 2, VoC : 4, User : 5 },
        { Function : 3, VoC : 4, User : 3 },
        { Function : 2, VoC : 3, User : 1 },
        { Function : 9, VoC : 6, User : 8 },
        { Function : -6, VoC : 7, User : 3 },
        { Function : 3, VoC : 5, User : 3 },
        { Function : 2, VoC : 3, User : 1 },
        { Function : 9, VoC : 6, User : 8 },
        { Function : 6, VoC : 7, User : 5 },
        { Function : 3, VoC : 5, User : 3 },
        { Function : 2, VoC : 3, User : 1 },
        { Function : -1, VoC : 6, User : 8 },
        { Function : 2, VoC : 7, User : 5 },
        { Function : 3, VoC : 5, User : 3 },
        { Function : 2, VoC : 3, User : 1 },
        { Function : 9, VoC : 6, User : 8 },
        { Function : 6, VoC : -7, User : 5 },
        { Function : 3, VoC : 5, User : 3 },
        { Function : 2, VoC : 3, User : 1 },
        { Function : 1, VoC : 6, User : 8 },
        { Function : 2, VoC : 7, User : 5 },
        { Function : 3, VoC : 5, User : -3 },
        { Function : 2, VoC : 3, User : 1 },
        { Function : 1, VoC : 6, User : 8 }
    ];

    const lineData = [
        { Total: 9 },        { Total: 0 },        { Total: 6 },        { Total: 1 },        { Total: null },
        { Total: 2 },        { Total: 8 },        { Total: 7 },        { Total: 2 },        { Total: 3 },
        { Total: 6 },        { Total: 1 },        { Total: -2 },        { Total: 8 },        { Total: 4 },
        { Total: -5 },        { Total: 0 },        { Total: 2 },        { Total: 3 },        { Total: 4 },
        { Total: 9 },        { Total: 6 },        { Total: 1 },        { Total: -2 },        { Total: 2 },
        { Total: 0 },        { Total: 9 },        { Total: 7 },        { Total: 4 },        { Total: 3 },
        { Total: 2 },
    ];

    const lineData2 = [
        { "f-drift": 5 },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },        { "f-drift": null },
        { "f-drift": null },        { "f-drift": null },        { "f-drift": 6 },
    ];

    const lineData3 = [
        { "v-drift": 0 },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },        { "v-drift": null },
        { "v-drift": null },        { "v-drift": null },        { "v-drift": 1 },

    ];

    const lineData4 = [
        { "u-drift": 3 },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },        { "u-drift": null },
        { "u-drift": null },        { "u-drift": null },        { "u-drift": 8 },

    ];
    
        
    window.c = builder("#total_chart", {


        padding: {
            top: 20,
            left: 10,
            right: 30,
            bottom: 30
        },
        axis : [{
            x : {
                
                type : "block",
                domain : [ "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31" ],
                line : true
            },
            y : {
                hide : true,
                type : "range",
                step : 1,
                line : true,
                domain : [ -5, 5 ],
                orient : "right"
            },
            data : data
        },
        {  
            data : lineData,
            extend : 0
        },
        {
            data : lineData2,
            extend : 1
        },
        {
            data : lineData3,
            extend : 2
        },
        {
            data : lineData4,
            extend : 3
        },
    
    ],

        brush : [{
            type : "column",
            target : [ "Function", "VoC", "User"],
            // colors: ["#3366ff", "#02BC77", "#ffea6f"],
            colors: ["#3366ff", "#3f99ff", "#ffd30f"],
            size: 8,
            display : "all",
        },
        {
            type : "line",
            target : "Total",
            colors : [ "#ff2366" ],
            axis : 1,
            display: "all",
        },
        // {
        //     type : "scatter",
        //     target : "Total",
        //     colors : [ "#ff2366" ],
        //     axis : 1,
           
        //     size: 5,
        // },
        {
            type : "line",
            target : "f-drift",
            colors : [ "#3366ff" ],
            axis : 2,
            symbol: "curve",
        },
        {
            type : "line",
            target : "v-drift",
            colors : [ "#3f99ff" ],
            axis : 3,
            symbol: "curve",
        },
        {
            type : "line",
            target : "u-drift",
            colors : [ "#ffd30f" ],
            axis : 4,
            symbol: "curve",
        },
    
    ],


        widget : [
            { type : "title" },
            { type : "legend",
              orient: "top",
              align: "center",
              dy: 8,
              brushSync : true,
              brush: [0]

            },
            { type : "legend",
              orient: "top",
              align: "center",
              dy: 8,
              brushSync : true,
              brush: [1]

            },
        //     { type : "tooltip",
        //       brush: [0,1,2]
        //  },
        ],
        style : {
            lineBorderDashArray : "6, 3"
        },    
    });
});


graph.ready([ "chart.builder"], function(builder) {

const data = [

{ device1 : 98, device2 : 70, device3 : 80, device4 : 1, device5 : 55 },
];


window.c = builder("#time_resource1", {
padding: {
    top: 40,
    left: 0,
    right: 0,
},
axis : {
    x : {
        type : "block",
        domain : [ "00-01"],
        line : true,

    },
    y : {
        type: "range",
        domain : [ 0, 100 ],
        step : 5,
        
    },
    data : data
},
brush : [{
    type : "fullstackcolumn",
    target : [ "device1", "device2","device3","device4","device5" ],
    clip:false,
    showText : function(k) {
        var h = "";

        if(k == "32") h = "device1 " ;
        else if(k == "23") h = "device2 ";
        else if(k == "26") h = "device3 ";
        else if(k == "1") h = "device4 ";
        else if(k == "18") h = "device5 ";

        return h + k + "%" ;
    }
   
},
//  {
//     type : "scatter",   
//     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
//     symbol: "circle",
//     size : 5,
//     display : "all",
// }
],
style : {
    colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
},
widget : [  
            
    {
        type : "tooltip",
        orient : "right",
        brush : 1,
}


],

});
});

graph.ready([ "chart.builder"], function(builder) {

const data = [          
{ device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];


window.c = builder("#time_resource2", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "01-02",  ],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText : function(k) {
            var h = "";
    
            if(k == "37") h = "device1 " ;
            else if(k == "19") h = "device2 ";
            else if(k == "26") h = "device3 ";
            else if(k == "6") h = "device4 ";
            else if(k == "13") h = "device5 ";
    
            return h + k + "%" ;
        }
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [       
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }


],
    
});
});

graph.ready([ "chart.builder"], function(builder) {

const data = [          
    { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];
    

    window.c = builder("#time_resource3", {
        padding: {
            top: 40,
            left: 0,
            right: 0,
        },
        axis : {
            x : {
                type : "block",
                domain : [ "02-03",  ],
                line : true
            },
            y : {
                type: "range",
                domain : [ 0, 100 ],
                step : 5,
                
            },
            data : data
        },
        brush : [{
            type : "fullstackcolumn",
            target : [ "device1", "device2","device3","device4","device5" ],
            showText : true
        },
        //  {
        //     type : "scatter",   
        //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
        //     symbol: "circle",
        //     size : 5,
        //     display : "all",
        // }
    ],
        style : {
            colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
        },
        widget : [       
            {
                type : "tooltip",
                orient : "right",
                brush : 1,
        }
    
    
    ],
        
    });
});

graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource4", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "03-04",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource5", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "04-05",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource6", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "05-06",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [
    
    { device1 : 98, device2 : 70, device3 : 70, device4 : 1, device5 : 55 },
    ];
    
    
    window.c = builder("#time_resource7", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "06-07"],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText: true,
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
    ],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [  
                
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }
    
    
    ],
    
    });
    });
        
graph.ready([ "chart.builder"], function(builder) {

const data = [          
{ device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];


window.c = builder("#time_resource8", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "07-08",  ],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText : true
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [       
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }


],
    
});
});
        
graph.ready([ "chart.builder"], function(builder) {

const data = [          
    { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];
    

    window.c = builder("#time_resource9", {
        padding: {
            top: 40,
            left: 0,
            right: 0,
        },
        axis : {
            x : {
                type : "block",
                domain : [ "08-09",  ],
                line : true
            },
            y : {
                type: "range",
                domain : [ 0, 100 ],
                step : 5,
                
            },
            data : data
        },
        brush : [{
            type : "fullstackcolumn",
            target : [ "device1", "device2","device3","device4","device5" ],
            showText : true
        },
        //  {
        //     type : "scatter",   
        //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
        //     symbol: "circle",
        //     size : 5,
        //     display : "all",
        // }
    ],
        style : {
            colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
        },
        widget : [       
            {
                type : "tooltip",
                orient : "right",
                brush : 1,
        }
    
    
    ],
        
    });
});
        
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource10", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "09-10",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });
        
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource11", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "10-11",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });
        
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource12", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "11-12",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });   

graph.ready([ "chart.builder"], function(builder) {

    const data = [
    
    { device1 : 98, device2 : 70, device3 : 70, device4 : 1, device5 : 55 },
    ];
    
    
    window.c = builder("#time_resource13", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "12-13"],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText: true,
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
    ],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [  
                
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }
    
    
    ],
    
    });
    });
                
graph.ready([ "chart.builder"], function(builder) {

const data = [          
{ device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];


window.c = builder("#time_resource14", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "13-14",  ],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText : true
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [       
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }


],
    
});
});
                
graph.ready([ "chart.builder"], function(builder) {

const data = [          
    { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];
    

    window.c = builder("#time_resource15", {
        padding: {
            top: 40,
            left: 0,
            right: 0,
        },
        axis : {
            x : {
                type : "block",
                domain : [ "14-15",  ],
                line : true
            },
            y : {
                type: "range",
                domain : [ 0, 100 ],
                step : 5,
                
            },
            data : data
        },
        brush : [{
            type : "fullstackcolumn",
            target : [ "device1", "device2","device3","device4","device5" ],
            showText : true
        },
        //  {
        //     type : "scatter",   
        //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
        //     symbol: "circle",
        //     size : 5,
        //     display : "all",
        // }
    ],
        style : {
            colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
        },
        widget : [       
            {
                type : "tooltip",
                orient : "right",
                brush : 1,
        }
    
    
    ],
        
    });
});
                
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource16", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "15-16",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });
                
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource17", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "16-17",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });
                
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource18", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "17-18",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });

graph.ready([ "chart.builder"], function(builder) {

    const data = [
    
    { device1 : 98, device2 : 70, device3 : 70, device4 : 1, device5 : 55 },
    ];
    
    
    window.c = builder("#time_resource19", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "18-19"],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText: true,
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
    ],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [  
                
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }
    
    
    ],
    
    });
    });
                        
graph.ready([ "chart.builder"], function(builder) {

const data = [          
{ device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];


window.c = builder("#time_resource20", {
    padding: {
        top: 40,
        left: 0,
        right: 0,
    },
    axis : {
        x : {
            type : "block",
            domain : [ "19-20",  ],
            line : true
        },
        y : {
            type: "range",
            domain : [ 0, 100 ],
            step : 5,
            
        },
        data : data
    },
    brush : [{
        type : "fullstackcolumn",
        target : [ "device1", "device2","device3","device4","device5" ],
        showText : true
    },
    //  {
    //     type : "scatter",   
    //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
    //     symbol: "circle",
    //     size : 5,
    //     display : "all",
    // }
],
    style : {
        colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
    },
    widget : [       
        {
            type : "tooltip",
            orient : "right",
            brush : 1,
    }


],
    
});
});
                        
graph.ready([ "chart.builder"], function(builder) {

const data = [          
    { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

];
    

    window.c = builder("#time_resource21", {
        padding: {
            top: 40,
            left: 0,
            right: 0,
        },
        axis : {
            x : {
                type : "block",
                domain : [ "20-21",  ],
                line : true
            },
            y : {
                type: "range",
                domain : [ 0, 100 ],
                step : 5,
                
            },
            data : data
        },
        brush : [{
            type : "fullstackcolumn",
            target : [ "device1", "device2","device3","device4","device5" ],
            showText : true
        },
        //  {
        //     type : "scatter",   
        //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
        //     symbol: "circle",
        //     size : 5,
        //     display : "all",
        // }
    ],
        style : {
            colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
        },
        widget : [       
            {
                type : "tooltip",
                orient : "right",
                brush : 1,
        }
    
    
    ],
        
    });
});
                        
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource22", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "21-22",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });
                        
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource23", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "22-23",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });
                        
graph.ready([ "chart.builder"], function(builder) {

    const data = [          
        { device1 : 98, device2 : 50, device3 : 70, device4 : 15, device5 : 35 },

    ];
        

        window.c = builder("#time_resource24", {
            padding: {
                top: 40,
                left: 0,
                right: 0,
            },
            axis : {
                x : {
                    type : "block",
                    domain : [ "23-24",  ],
                    line : true
                },
                y : {
                    type: "range",
                    domain : [ 0, 100 ],
                    step : 5,
                    
                },
                data : data
            },
            brush : [{
                type : "fullstackcolumn",
                target : [ "device1", "device2","device3","device4","device5" ],
                showText : true
            },
            //  {
            //     type : "scatter",   
            //     colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],           
            //     symbol: "circle",
            //     size : 5,
            //     display : "all",
            // }
        ],
            style : {
                colors:  ["#02bc77", "#1cdc95", "#2ef5ab", "#69fec7", "#a5ffde" ],
            },
            widget : [       
                {
                    type : "tooltip",
                    orient : "right",
                    brush : 1,
            }
        
        
        ],
            
        });
    });


    graph.ready([ "chart.builder"], function(builder) {
    
        const data = [
            { xdata :"Screen1", device1 : 2, device2 : 3, device3 : 4, device4 : 1, device5 : 2,},
            { xdata :"Screen2", device1 : 3, device2 : 6, device3 : 3, device4 : 4, device5 : 1, },
            { xdata :"Screen3", device1 : 5, device2 : 4, device3 : 1, device4 : 2, device5 : 7, },
            { xdata :"Screen4", device1 : 1, device2 : 2, device3 : 2, device4 : 5, device5 : 6, },
            { xdata :"Screen5", device1 : 4, device2 : 5, device3 : 7, device4 : 6, device5 : 2, },
            { xdata :"Screen6", device1 : 6, device2 : 3, device3 : 3, device4 : 9, device5 : 9, },
            { xdata :"Screen7", device1 : 8, device2 : 4, device3 : 8, device4 : 2, device5 : 7, },
            { xdata :"Screen8", device1 : 9, device2 : 2, device3 : 2, device4 : 4, device5 : 6, },
            { xdata :"Screen9", device1 : 0, device2 : 1, device3 : 9, device4 : 3, device5 : 8, },
            { xdata :"Screen10", device1 : 3, device2 : 3, device3 : 3, device4 : 4, device5 : 3, },

        ];

        var showEvent = function(obj) {
            alert( obj.dataKey + "=" + obj.data[obj.dataKey]);
        }

        var tpl_tooltip =
'<div id="chart_tooltip" class="popover popover-top">' +
    '<div class="head">Sales & Profit Tooltip</div>' +
    '<div class="body">' +
        '<div class="image"><i class="icon-caution"></i></div>' +
        '<div class="message"><b>Quarter</b>:   <b>Sales</b>:  <b>Profit</b>:</div>' +
    '</div>' +
'</div>';
         
            window.c = builder("#responseTime_chart", {
               
                padding: {
                    top: 30,
                    left: 40,
                    right: 45,
                    bottom: 18
                },
                axis : [
                    {
                        x : {
                            type : "fullblock",
                            domain : "xdata",
                            line : true
                        },
                        y : {
                            type : "range",
                            domain : [ 0, 10 ],
                            step : 10,
                            line : true,
                            orient : "left"
                        },
                        data: data
                    },
                    
                ],
                brush : [
                    {
                        type : "area",
                        target : [ "device1", "device2", "device3", "device4", "device5",  ],
                         colors: ["#E24DC6", "#02A0FC", "#4339F2", "#34B53A", "#FFB200",  ],
                        // symbol : "curve",    
                        clip: false  ,
                               
                    },
                    {
                        type : "scatter",
                        target : [ "device1", "device2", "device3", "device4", "device5", ],
                        // colors: ["#E24DC6", "#02A0FC", "#4339F2", "#34B53A", "#FFB200",  ],
                        symbol : "circle",    
                        size: 5,
                        clip: false,        
                    },
                ],
                event : {
                    click : function(obj) {
                        showEvent(obj);
                    }
                },

                tpl : {
                    tooltip : tpl_tooltip
                },
                event : {
                    mouseover : function(obj, e) {
                        if(obj.brush.index == 0) {
                            var tooltip = $(this.tpl.tooltip({ data: obj.data }));
                            $("body").append(tooltip);
                            $("#chart_tooltip").show();
            
                            // $tooltip.css({ "z-index": 10000, left: e.pageX - $tooltip.width() / 2, top: e.pageY - $tooltip.height() });
                        }
                    },
                    mouseout : function(obj, e) {
                        if(obj.brush.index == 1) {
                            $("#chart_tooltip").remove();
                        }
                    }
                },
                
                widget : [ 
                    {
                        type : "legend",
                        orient: "top",
                        align: "center",  
                        dy: 10,
                        brushSync: true,
                        brush: [0,1]
                    },
                //     {
                //         type : "tooltip",
                //         orient : "top",
                //         brush : 0,
                //         // all : true
                        
                // },
            
            
            ],
                
            });
        });

graph.ready([ "chart.builder"], function(builder) {

    const data = [
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
        { Device1 : 5, Device2 : 1, Device3 : 2, Device4 : 2, Device5 : 8, },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2,  },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
        { Device1 : 5, Device2 : 1, Device3 : 2, Device4 : 2, Device5 : 8,  },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2,  },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
        { Device1 : 5, Device2 : 1, Device3 : 2, Device4 : 2, Device5 : 8, },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2,  },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2, },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
        { Device1 : 5, Device2 : 1, Device3 : 2, Device4 : 2, Device5 : 8,  },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2, },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2, },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2,  },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2, },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
        { Device1 : 5, Device2 : 1, Device3 : 2, Device4 : 2, Device5 : 8,  },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2, },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
        { Device1 : 5, Device2 : 1, Device3 : 2, Device4 : 2, Device5 : 8,  },
        { Device1 : 1, Device2 : 2, Device3 : 9, Device4 : 1, Device5 : 2,  },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2,  },
       
    ];
 
        
    window.c = builder("#appStartTime_chart", {


        padding: {
            top: 40,
            left: 30,
            right: 35,
            bottom: 200
        },
        axis : [{
            x : {
                    type : "fullblock",
                    domain : [ "00:00", "01:00", "02:00", "03:00", 
                                "04:00", "05:00", "06:00", "07:00",
                                "08:00", "09:00", "10:00", "11:00",
                                "12:00", "13:00", "14:00", "15:00",
                                "16:00", "17:00", "18:00", "19:00",
                                "20:00", "21:00", "22:00", "23:00",
                                "24:00",],
                    line : false,
                    clip : false ,
            },
            y : {
                // hide : true,
                type : "range",
                step : 10,
                line : true,
                domain : [ 0, 10 ],
                orient : "left"
            },
            data : data
        }],

        brush : [{
            type : "scatter",
            target : [ "Device1", "Device2", "Device3", "Device4", "Device5", "Device6", "Device7", "Device8", "Device9", "Device10",],
            // colors: ["#3366ff", "#3f99ff", "#ffd30f"],
            size: 8,
            clip: false,
        },
],

        widget : [
            { type : "title" },
            { type : "tooltip", 
              clip : false },
            { type : "legend",
                orient: "top",
                align: "center",
                dy: 8,
                filter: true
            },
        ],
    
    });
});

graph.ready([ "chart.builder"], function(builder) {

    const data = [
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
        { Device1 : 2, Device2 : 3, Device3 : 4, Device4 : 7, Device5 : 2 },
    ];    
 
    window.c = builder("#appStartTimeResult", {


        padding: {
            top: 40,
            left: 30,
            right: 35,
            bottom: 90
        },
        axis : [{
            x : {
                    type : "fullblock",
                    domain : [ "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",  
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00", "22.04.01 13:00:00",
                                "22.04.01 13:00:00", "22.04.01 13:00:00", 
                            ],
                    line : true,
                    textRotate : -90
                   
            },
            y : {
                // hide : true,
                type : "range",
                step : 10,
                line : true,
                domain : [ 0, 10 ],
                orient : "left"
            },
            data : data,
        },

        ],

        brush : [{
            type : "scatter",
            target : [ "Device1", "Device2", "Device3", "Device4", "Device5",],
            // colors: ["#3366ff", "#3f99ff", "#ffd30f"],
            size: 8,
        },
        ],
        widget : [
          
            { type : "title" },
            // { type : "tooltip" 
               
            // }, 
            { type : "legend",
                orient: "top",
                align: "center",
                dy: 12,
                // filter: true
            },
           
        ],
        style: {
            gridTickPadding: 22
        }
    });
});


/* error trace */

jui.ready([ "ui.tree" ], function(treeFunc) {
    tree_3 = treeFunc(".tree", {
        root: { title: "Something bad happened", symbol: "dir" },
        rootHide: true,
        drag: true,
        dragChild: true,
        tpl: {
            node: $("#tpl_tree").html()
        },
        event: {
            dragend: function(node, e) {
                if(node && node.data.symbol == "file") {
                    return false;
                }
            },
            dragover: function(node, e) {
                if(node && node.data.symbol == "file") {
                    return false;
                }
            }
        }
    });

    tree_3.append({ title: "Something bad happened 1", symbol: "dir1" });
    tree_3.append("0", { title: "at org.", symbol: "file" });
    tree_3.append("0", { title: "at org.", symbol: "file" });
    
    tree_3.append({ title: "Something bad happened 2", symbol: "dir1" });
    tree_3.append("1", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 3", symbol: "dir1" });
    tree_3.insert("2.0", { title: "at org.", symbol: "dir2" });
    tree_3.insert("2.0.0", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 4", symbol: "dir1" });
    tree_3.append("3", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 5", symbol: "dir1" });
    tree_3.append("4", { title: "at org.", symbol: "file" });
    tree_3.insert("4.0", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 6", symbol: "dir1" });
    tree_3.insert("5.0", { title: "at org.", symbol: "file" });
    tree_3.insert("5.0.0", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 7", symbol: "dir1" });
    tree_3.append("6", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 8", symbol: "dir1" });
    tree_3.append("7", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 9", symbol: "dir1" });
    tree_3.append("8", { title: "at org.", symbol: "file" });
    tree_3.insert("8.0", { title: "at org.", symbol: "file" });

    tree_3.append({ title: "Something bad happened 10", symbol: "dir1" });
    tree_3.append("9", { title: "at org.", symbol: "file" });

   
   
    tree_3.fold("0");
    tree_3.fold("1");
    tree_3.fold("2");
    tree_3.fold("2.0");
    tree_3.fold("3");
    tree_3.fold("4");
    tree_3.fold("5");
    tree_3.fold("5.0");
    tree_3.fold("6");
    tree_3.fold("7");
    tree_3.fold("8");
    tree_3.open("9");
});