$(document).ready(function () {

    function renderChart(config)
    {
        zingchart.render({
            id: 'myChart',
            data: config,
            height: "100%",
            width: '100%'
        });
    }

    /**
     * @param myConfig
     */
    function renderHappyBarChart(myConfig)
    {
        zingchart.render({
            id : 'myChart2',
            data : myConfig,
            height: 500,
            width: 725
        });
    }

    function buildHappyParamsFromResponse(emotionsData)
    {
        var angerColor     = '#c62828';
        var happinessColor = '#689f38';
        var sadnessColor   = '#ff9800';
        var contemptColor  = '#9c27b0';
        var disgustColor   = '#4a148c';
        var fearColor      = '#5d4037';
        var neutralColor   = '#4dd0e1';
        var surpriseColor  = '#aeea00';

        var angerMean     = parseInt(getMean(emotionsData, 'anger'));
        var happinessMean = parseInt(getMean(emotionsData, 'happiness'));
        var sadnessMean   = parseInt(getMean(emotionsData, 'sadness'));
        var contemptMean  = parseInt(getMean(emotionsData, 'contempt'));
        var disgustMean   = parseInt(getMean(emotionsData, 'disgust'));
        var fearMean      = parseInt(getMean(emotionsData, 'fear'));
        var neutralMean   = parseInt(getMean(emotionsData, 'neutral'));
        var surpriseMean  = parseInt(getMean(emotionsData, 'surprise'));

        var myConfig = {
            "type":"hbar",
            "font-family":"Arial",
            "title":{
                "text":"",
                "font-family":"Arial",
                "background-color":"none",
                "font-color":"#A4A4A4",
                "font-size":"18px"
            },
            "labels":[
                {
                    "text":"Emotions",
                    "font-size":"12px",
                    "font-color":"#9d9d9d",
                    "x":"13%",
                    "y":"10%"
                },
                {
                    "text":"",
                    "font-size":"12px",
                    "font-color":"#9d9d9d",
                    "x":"20%",
                    "y":"10%"
                },
                {
                    "text":"",
                    "font-size":"12px",
                    "font-color":"#9d9d9d",
                    "x":"4%",
                    "y":"10%"
                }
            ],
            "arrows":[
                {
                    "backgroundColor":"#CCCCCC",
                    "direction":"bottom",
                    "borderWidth": 0,
                    "to":{
                        "x": "6%",
                        "y": "27%"
                    },
                    "from":{
                        "x": "6%",
                        "y": "79%"
                    }
                }
            ],
            "shapes":[
                {
                    "type":"circle",
                    "x": 45,
                    "y": 99,
                    "backgroundColor": "white",
                    "borderColor":"#6FA6DF",
                    "borderWidth":3,
                    "size": 14
                },
                {
                    "type":"circle",
                    "x": 40,
                    "y": 95,
                    "backgroundColor": "#6FA6DF",
                    "size": 2
                },
                {
                    "type":"circle",
                    "x": 50,
                    "y": 95,
                    "backgroundColor": "#6FA6DF",
                    "size": 2
                },
                {
                    "type":"pie",
                    "background-color":"#5297b6",
                    "size":8,
                    "x":45,
                    "y":100,
                    "angle-start":0,
                    "angle-end":180,
                },
                {
                    "type":"pie",
                    "background-color":"#fff",
                    "size":6,
                    "x":45,
                    "y":100,
                    "angle-start":0,
                    "angle-end":180,
                },
                {
                    "type":"circle",
                    "x": 45,
                    "y": 433,
                    "backgroundColor": "white",
                    "borderColor":"#FA8452",
                    "borderWidth":3,
                    "size": 14
                },
                {
                    "type":"circle",
                    "x": 40,
                    "y": 429,
                    "backgroundColor": "#FA8452",
                    "size": 2
                },
                {
                    "type":"circle",
                    "x": 50,
                    "y": 429,
                    "backgroundColor": "#FA8452",
                    "size": 2
                },
                {
                    "type":"pie",
                    "background-color":"#FA8452",
                    "size":8,
                    "x":45,
                    "y":439,
                    "angle-start":170,
                    "angle-end":10,
                },
                {
                    "type":"pie",
                    "background-color":"#fff",
                    "size":5,
                    "x":45,
                    "y":440,
                    "angle-start":170,
                    "angle-end":10,
                }
            ],
            "plot":{
                "bars-overlap":"100%",
                "borderRadius":8,
                "hover-state":{
                    "visible":false
                },
                "animation": {
                    "delay": 0,
                    "effect": 0,
                    "speed": "0",
                    "method": "0",
                    "sequence": "0"
                }
            },
            "plotarea":{
                "margin":"60px 20px 20px 140px"
            },
            "scale-x":{
                "line-color":"none",
                "values":["Angry","Sad","Contempt","Disgust","Fear", "Neutral", "Surprised", "Happy"],
                "tick":{
                    "visible":false
                },
                "guide":{
                    "visible":false
                },
                "item":{
                    "font-size":"14px",
                    "padding-right":"20px",
                    "auto-align":true,
                    "rules":[
                        {
                            "rule":"%i==0",
                            "font-color":angerColor
                        },
                        {
                            "rule":"%i==1",
                            "font-color":sadnessColor
                        },
                        {
                            "rule":"%i==2",
                            "font-color":contemptColor
                        },
                        {
                            "rule":"%i==3",
                            "font-color":disgustColor
                        },
                        {
                            "rule":"%i==4",
                            "font-color":fearColor
                        },
                        {
                            "rule":"%i==5",
                            "font-color":neutralColor
                        },
                        {
                            "rule":"%i==6",
                            "font-color":surpriseColor
                        },
                        {
                            "rule":"%i==7",
                            "font-color":happinessColor
                        }

                    ]
                }
            },
            "scale-y":{
                "visible":false,
                "guide":{
                    "visible":false
                }
            },
            "series":[
                {
                    "values":[100,100,100,100,100,100,100,100],
                    "bar-width":"40px",
                    "background-color":"#f2f2f2",
                    "border-color": "#e8e3e3",
                    "border-width":2,
                    "fill-angle":90,
                    "tooltip":{
                        "visible":false
                    }
                },
                {
                    "values":[angerMean,sadnessMean,contemptMean,disgustMean,fearMean,neutralMean,surpriseMean,happinessMean],
                    "bar-width":"32px",
                    "max-trackers":0,
                    "value-box":{
                        "placement":"top-out",
                        "text":"%v",
                        "decimals":0,
                        "font-color":"#A4A4A4",
                        "font-size":"14px",
                        "alpha":0.6
                    },
                    "rules":[
                        {
                            "rule":"%i==0",
                            "background-color":angerColor
                        },
                        {
                            "rule":"%i==1",
                            "background-color":sadnessColor
                        },
                        {
                            "rule":"%i==2",
                            "background-color":contemptColor
                        },
                        {
                            "rule":"%i==3",
                            "background-color":disgustColor
                        },
                        {
                            "rule":"%i==4",
                            "background-color":fearColor
                        },
                        {
                            "rule":"%i==5",
                            "background-color":neutralColor
                        },
                        {
                            "rule":"%i==6",
                            "background-color":surpriseColor
                        },
                        {
                            "rule":"%i==7",
                            "background-color":happinessColor
                        }
                    ]
                }
            ]
        };

        return myConfig;
    }

    function updateChart()
    {
        $.ajax({
            url: '/get-summary',
            success: function (emotionsData){

                var myConfig = buildParamsFromResponse(emotionsData);
                renderChart(myConfig);

                var happyConfig = buildHappyParamsFromResponse(emotionsData);
                renderHappyBarChart(happyConfig);
            }
        });
    }
    
    /**
     * Get the mean of the emotion
     * @param emotionsData
     * @param emotionName
     * @returns {number}
     */
    function getMean(emotionsData, emotionName)
    {
        var sum     = 0;
        var entries = 0;

        for (i in emotionsData) {
            if (emotionsData[i].timeDifference > 10) {
                continue;
            }

            var emotionValue = parseFloat(emotionsData[i][emotionName]);

            entries++;
            sum += emotionValue;
        }

        var mean = sum * 100 / entries;
        mean = mean.toFixed(2);

        if (isNaN(mean)) {
            return 0;
        }

        return mean;
    }

    /**
     * 
     * @param number
     * @returns {number}
     */
    function formatFromNumberToTwoDecimals(number)
    {
        var newNumber = parseFloat(number) * 100;
        // newNumber = newNumber.toFixed(2);

        return newNumber;
    }

    /**
     * @param emotionsData
     * @returns {{anger: Array, contempt: Array, disgust: Array, fear: Array, happiness: Array, neutral: Array, sadness: Array, surprise: Array}}
     */
    function getPercentsByEmotion(emotionsData)
    {
        var numberByEmotion = {
            anger: [],
            contempt: [],
            disgust: [],
            fear: [],
            happiness: [],
            neutral: [],
            sadness: [],
            surprise: []
        };
        for (i in emotionsData) {
            var anger     = parseFloat(emotionsData[i].anger);
            var contempt  = parseFloat(emotionsData[i].contempt);
            var disgust   = parseFloat(emotionsData[i].disgust);
            var fear      = parseFloat(emotionsData[i].fear);
            var happiness = parseFloat(emotionsData[i].happiness);
            var sadness   = parseFloat(emotionsData[i].sadness);
            var surprise  = parseFloat(emotionsData[i].surprise);

            var total = anger + contempt + disgust + fear + happiness + sadness + surprise;

            numberByEmotion.anger.push(anger * 100 / total);
            numberByEmotion.contempt.push(contempt * 100 / total);
            numberByEmotion.disgust.push(disgust * 100 / total);
            numberByEmotion.fear.push(fear * 100 / total);
            numberByEmotion.happiness.push(happiness * 100 / total);
            numberByEmotion.sadness.push(sadness * 100 / total);
            numberByEmotion.surprise.push(surprise * 100 / total);
        }

        return numberByEmotion;
    }

    /**
     *
     * @param emotionsData
     * @returns
     */
    function buildLineGraph(emotionsData)
    {
        var angerColor     = '#c62828';
        var happinessColor = '#689f38';
        var sadnessColor   = '#ff9800';
        var contemptColor  = '#9c27b0';
        var disgustColor   = '#4a148c';
        var fearColor      = '#5d4037';
        var neutralColor   = '#4dd0e1';
        var surpriseColor  = '#aeea00';

        var numbersByEmotion = getPercentsByEmotion(emotionsData);
        var interval         = 60000; // one minute

        if (!emotionsData.length) {
            var firstTimestamp = new Date().getTime();
        } else {
            var firstTimestamp   = Date.parse(emotionsData[0].datetime);
        }

        var graph = {
            type: "line",
            title: {
                text: "Mood-o-meter",
                adjustLayout: true,
                "media-rules": [{
                    "max-width": 650,
                    "fontSize": 14
                }]
            },
            x: 0,
            y: "45%",
            width: "100%",
            height: "55%",
            "media-rules": [{
                "max-width": 650,
                "x": 0,
                "y": "60%",
                "width": '100%',
                "height": "40%%",
            }],
            scaleX: {
                minValue: firstTimestamp,
                step: interval,
                transform: {
                    type: "date",
                    all: "%D<br>%H:%i"
                }
            },
            "scale-y": {
                values: "0:100:10",
                placement: "default",
                lineColor: "#000000",
                tick: {
                    lineColor: "#69f0ae"
                },
                item: {
                    fontColor: "#000000",
                    bold: true
                }
            },
            plotarea: {
                margin: "dynamic",
                marginRight: "4%"
            },
            crosshairX: {
                lineColor: "#23211E",
                scaleLabel: {
                    backgroundColor: "#E3DEDA",
                    fontColor: "#414042"
                },
                plotLabel: {
                    backgroundColor: "#f0ece8",
                    fontColor: "#414042",
                    borderWidth: 1,
                    borderColor: "#000"
                }
            },
            tooltip: {
                visible: false
            },
            series: []
        };

        var angerSeries     = {
            values: numbersByEmotion.anger,
            lineColor: angerColor,
            text: "Anger",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: angerColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var happinessSeries = {
            values: numbersByEmotion.happiness,
            lineColor: happinessColor,
            text: "Happiness",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: happinessColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var sadnessSeries   = {
            values: numbersByEmotion.sadness,
            lineColor: sadnessColor,
            text: "Sadness",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: sadnessColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var contemptSeries  = {
            values: numbersByEmotion.contempt,
            lineColor: contemptColor,
            text: "Contempt",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: contemptColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var disgustSeries   = {
            values: numbersByEmotion.disgust,
            lineColor: disgustColor,
            text: "Sadness",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: disgustColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var fearSeries      = {
            values: numbersByEmotion.fear,
            lineColor: fearColor,
            text: "Fear",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: fearColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var neutralSeries   = {
            values: numbersByEmotion.neutral,
            lineColor: neutralColor,
            text: "Neutral",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: neutralColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };
        var surpriseSeries  = {
            values: numbersByEmotion.surprise,
            lineColor: "#FB301E",
            text: "Surprise",
            scales: "scale-x, scale-y",
            marker: {
                borderWidth: 2,
                borderColor: surpriseColor,
                backgroundColor: "#fff",
                type: "point"
            }
        };

        graph.series.push(angerSeries);
        graph.series.push(happinessSeries);
        graph.series.push(sadnessSeries);
        graph.series.push(contemptSeries);
        graph.series.push(disgustSeries);
        graph.series.push(fearSeries);
        graph.series.push(neutralSeries);
        graph.series.push(surpriseSeries);

        return graph;
    }

    function buildParamsFromResponse(emotionsData) {

        var angerColor     = '#c62828';
        var happinessColor = '#689f38';
        var sadnessColor   = '#ff9800';

        var fullGraph = {
            backgroundColor: "#fff",
            globals: {
                fontFamily: "Raleway",
                color: "#666"
            },
            graphset: []
        };

        var angerMean     = getMean(emotionsData, 'anger');
        var happinessMean = getMean(emotionsData, 'happiness');
        var sadnessMean   = getMean(emotionsData, 'sadness');

        var relativeAngerMean     = 0;
        var relativeHappinessMean = 0;
        var relativeSadnessMean   = 0;

        var totalEmotionsMean = parseFloat(angerMean) + parseFloat(happinessMean) + parseFloat(sadnessMean);

        if (totalEmotionsMean) {
            relativeAngerMean     = (angerMean * 100 / totalEmotionsMean).toFixed(2);
            relativeHappinessMean = (happinessMean * 100 / totalEmotionsMean).toFixed(2);
            relativeSadnessMean   = (sadnessMean * 100 / totalEmotionsMean).toFixed(2);
        }

        var angerGauge     = {
            type: "gauge",
            x: 0,
            y: 0,
            width: "31.5%",
            height: "50%",
            "media-rules": [{
                "max-width": 650,
                "x": 0,
                "y": "2%",
                "width": '100%',
                "height": "20%",
            },{
                "min-width": 651,
                x: 0,
                y: 0,
                width: "31.5%",
                height: "50%",
            }],
            title: {
                text: "Anger",
                "media-rules": [{
                    "max-width": 650,
                    "visible": false
                }]
            },
            scaleR: {
                aperture: 130,
                values: "0:100:10",
                guide: {
                    backgroundColor: "#E3DEDA",
                    alpha: 1
                },
                ring: {
                    backgroundColor: "#E3DEDA",
                    "media-rules": [{
                        "max-width": 650,
                        "visible": false
                    }]
                },
                center: {
                    size: 20,
                    borderWidth: 2,
                    borderColor: "#23211E",
                    "media-rules": [{
                        "max-width": 650,
                        "size": 10
                    }]
                },
                item: {
                    offsetR: 0
                },
                tick: {
                    visible: false
                },
                markers: [{
                    type: "area",
                    range: [0, relativeAngerMean],
                    backgroundColor: angerColor
                }]
            },
            plotarea: {
                marginTop: "35%"
            },
            plot: {
                csize: "3%",
                size: "100%"
            },
            scale: {
                sizeFactor: 1.2,
                "media-rules": [{
                    "max-width": 650,
                    sizeFactor: 1.6,
                }]
            },
            tooltip: {
                visible: false
            },
            series: [{
                values: [parseInt(relativeAngerMean)],
                backgroundColor: "#23211E",
                valueBox: {
                    text: "%v",
                    placement: "center",
                    fontColor: angerColor,
                    fontSize: 14,
                    "media-rules": [{
                        "max-width": 650,
                        "fontSize": 10
                    }]
                }
            }]
        };
        var happinessGauge = {
            type: "gauge",
            x: "34.5%",
            y: 0,
            width: "31.5%",
            height: "50%",
            "media-rules": [{
                "max-width": 650,
                "x": 0,
                "y": "20%",
                "width": '100%',
                "height": "20%",
            },{
                "min-width": 651,
                x: "34.5%",
                y: 0,
                width: "31.5%",
                height: "50%",
            }],
            title: {
                text: "Happiness",
                "media-rules": [{
                    "max-width": 650,
                    "visible": false
                }]
            },
            scaleR: {
                aperture: 130,
                values: "0:100:10",
                guide: {
                    backgroundColor: "#E3DEDA",
                    alpha: 1
                },
                ring: {
                    backgroundColor: "#E3DEDA",
                    "media-rules": [{
                        "max-width": 650,
                        "visible": false
                    }]
                },
                center: {
                    size: 20,
                    borderWidth: 2,
                    borderColor: "#23211E",
                    "media-rules": [{
                        "max-width": 650,
                        "size": 10
                    }]
                },
                item: {
                    offsetR: 0
                },
                tick: {
                    visible: false
                },
                markers: [{
                    type: "area",
                    range: [0, relativeHappinessMean],
                    backgroundColor: happinessColor
                }]
            },
            plotarea: {
                marginTop: "35%"
            },
            plot: {
                csize: "3%",
                size: "100%"
            },
            scale: {
                sizeFactor: 1.2,
                "media-rules": [{
                    "max-width": 650,
                    sizeFactor: 1.6,
                }]
            },
            tooltip: {
                visible: false
            },
            series: [{
                values: [parseInt(relativeHappinessMean)],
                backgroundColor: "#23211E",
                valueBox: {
                    text: "%v",
                    placement: "center",
                    fontColor: happinessColor,
                    fontSize: 14,
                    "media-rules": [{
                        "max-width": 650,
                        "fontSize": 10
                    }]
                }
            }]
        };
        var sadnessGauge   = {
            type: "gauge",
            x: "69%",
            y: 0,
            width: "31.5%",
            height: "50%",
            "media-rules": [{
                "max-width": 650,
                "x": 0,
                "y": "40%",
                "width": '100%',
                "height": "20%",
            },{
                "min-width": 651,
                "x": "69%",
                "y": 0,
                "width": "31.5%",
                "height": "50%",
            }],
            title: {
                text: "Sadness",
                "media-rules": [{
                    "max-width": 650,
                    "visible": false
                }]
            },
            scaleR: {
                aperture: 130,
                values: "0:100:10",
                guide: {
                    backgroundColor: "#E3DEDA",
                    alpha: 1
                },
                ring: {
                    backgroundColor: "#E3DEDA",
                    "media-rules": [{
                        "max-width": 650,
                        "visible": false
                    }]
                },
                center: {
                    size: 20,
                    borderWidth: 2,
                    borderColor: "#23211E",
                    "media-rules": [{
                        "max-width": 650,
                        "size": 10
                    }]
                },
                item: {
                    offsetR: 0
                },
                tick: {
                    visible: false
                },
                markers: [{
                    type: "area",
                    range: [0, relativeSadnessMean],
                    backgroundColor: sadnessColor
                }]
            },
            plotarea: {
                marginTop: "35%"
            },
            plot: {
                csize: "3%",
                size: "100%"
            },
            scale: {
                sizeFactor: 1.2,
                "media-rules": [{
                    "max-width": 650,
                    sizeFactor: 1.6,
                }]
            },
            tooltip: {
                visible: false
            },
            series: [{
                values: [parseInt(relativeSadnessMean)],
                backgroundColor: "#23211E",
                valueBox: {
                    text: "%v",
                    placement: "center",
                    fontColor: sadnessColor,
                    fontSize: 14,
                    "media-rules": [{
                        "max-width": 650,
                        "fontSize": 10
                    }]
                }
            }]
        };

        var fullLineGraph = buildLineGraph(emotionsData);

        fullGraph.graphset.push(angerGauge);
        fullGraph.graphset.push(happinessGauge);
        fullGraph.graphset.push(sadnessGauge);

        fullGraph.graphset.push(fullLineGraph);

        return fullGraph;
    }


    updateChart();
    setInterval(function () {
        updateChart();
    }, 10000);
});
