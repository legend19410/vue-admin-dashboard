import moment from "moment"
//Basic TImeline Chart
export let
    basicTimelineseries = [
        {
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-04').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-04').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-12').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-12').getTime(),
                        new Date('2019-03-18').getTime()
                    ]
                }
            ]
        }
    ],
    basicTimelineoptions = {
        chart: {
            height: 320,
            type: 'rangeBar'
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        colors: ["#845adf"],
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        }
    }

//Multiple Colored TImeline Chart
export let
    colordseries = [
        {
            data: [
                {
                    x: 'Analysis',
                    y: [
                        new Date('2019-02-27').getTime(),
                        new Date('2019-03-04').getTime()
                    ],
                    fillColor: '#845adf'
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-04').getTime(),
                        new Date('2019-03-08').getTime()
                    ],
                    fillColor: '#23b7e5'
                },
                {
                    x: 'Coding',
                    y: [
                        new Date('2019-03-07').getTime(),
                        new Date('2019-03-10').getTime()
                    ],
                    fillColor: '#f5b849'
                },
                {
                    x: 'Testing',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-12').getTime()
                    ],
                    fillColor: '#49b6f5'
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-12').getTime(),
                        new Date('2019-03-17').getTime()
                    ],
                    fillColor: '#e6533c'
                }
            ]
        }
    ],
    colouredoptions = {
        chart: {
            height: 320,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                var label = opts.w.globals.labels[opts.dataPointIndex]
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            borderColor: '#f2f5f7',
        }
    }

//Multi Series Timeline Chart
export let
    multiseries = [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-19').getTime()
                    ]
                }
            ]
        }
    ],
    multiopctions = {
        chart: {
            height: 320,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return diff + (diff > 1 ? ' days' : ' day')
            }
        },
        colors: ["#845adf", "#23b7e5"],
        grid: {
            borderColor: '#f2f5f7',
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        legend: {
            position: 'top'
        }
    }


//Advanced Timeline Chart
export let
    advanceseries = [
        {
            name: 'Bob',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-01').getTime(),
                        new Date('2019-03-03').getTime()
                    ],
                }
            ]
        },
        {
            name: 'Joe',
            data: [
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-16').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-10').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-20').getTime(),
                        new Date('2019-03-22').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Dan',
            data: [
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-17').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-09').getTime()
                    ],
                    goals: [
                        {
                            name: 'Break',
                            value: new Date('2019-03-07').getTime(),
                            strokeColor: '#CD2F2A'
                        }
                    ]
                },
            ]
        }
    ],
    advanceopctions = {
        chart: {
            height: 320,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        colors: ["#845adf", "#23b7e5", "#f5b849"],
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        }
    }

//Timeline-Grouped Rows
export let
    groupedseries = [
        // George Washington
        {
            name: "George Washington",
            data: [
                {
                    x: "President",
                    y: [
                        new Date(1789, 3, 30).getTime(),
                        new Date(1797, 2, 4).getTime(),
                    ],
                },
            ],
        },
        // John Adams
        {
            name: "John Adams",
            data: [
                {
                    x: "President",
                    y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
                },
                {
                    x: "Vice President",
                    y: [
                        new Date(1789, 3, 21).getTime(),
                        new Date(1797, 2, 4).getTime(),
                    ],
                },
            ],
        },
        // Thomas Jefferson
        {
            name: "Thomas Jefferson",
            data: [
                {
                    x: "President",
                    y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
                },
                {
                    x: "Vice President",
                    y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
                },
                {
                    x: "Secretary of State",
                    y: [
                        new Date(1790, 2, 22).getTime(),
                        new Date(1793, 11, 31).getTime(),
                    ],
                },
            ],
        },
        // Aaron Burr
        {
            name: "Aaron Burr",
            data: [
                {
                    x: "Vice President",
                    y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
                },
            ],
        },
        // George Clinton
        {
            name: "George Clinton",
            data: [
                {
                    x: "Vice President",
                    y: [
                        new Date(1805, 2, 4).getTime(),
                        new Date(1812, 3, 20).getTime(),
                    ],
                },
            ],
        },
        // John Jay
        {
            name: "John Jay",
            data: [
                {
                    x: "Secretary of State",
                    y: [
                        new Date(1789, 8, 25).getTime(),
                        new Date(1790, 2, 22).getTime(),
                    ],
                },
            ],
        },
        // Edmund Randolph
        {
            name: "Edmund Randolph",
            data: [
                {
                    x: "Secretary of State",
                    y: [
                        new Date(1794, 0, 2).getTime(),
                        new Date(1795, 7, 20).getTime(),
                    ],
                },
            ],
        },
        // Timothy Pickering
        {
            name: "Timothy Pickering",
            data: [
                {
                    x: "Secretary of State",
                    y: [
                        new Date(1795, 7, 20).getTime(),
                        new Date(1800, 4, 12).getTime(),
                    ],
                },
            ],
        },
        // Charles Lee
        {
            name: "Charles Lee",
            data: [
                {
                    x: "Secretary of State",
                    y: [
                        new Date(1800, 4, 13).getTime(),
                        new Date(1800, 5, 5).getTime(),
                    ],
                },
            ],
        },
        // John Marshall
        {
            name: "John Marshall",
            data: [
                {
                    x: "Secretary of State",
                    y: [
                        new Date(1800, 5, 13).getTime(),
                        new Date(1801, 2, 4).getTime(),
                    ],
                },
            ],
        },
        // Levi Lincoln
        {
            name: "Levi Lincoln",
            data: [
                {
                    x: "Secretary of State",
                    y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
                },
            ],
        },
        // James Madison
        {
            name: "James Madison",
            data: [
                {
                    x: "Secretary of State",
                    y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
                },
            ],
        },
    ],
    groupedopctions = {
        chart: {
            height: 320,
            type: "rangeBar",
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "50%",
                rangeBarGroupRows: true,
            },
        },
        colors: [
            "#845adf", "#23b7e5", "#f5b849", "#e6533c", "#5b67c7",
            "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
            "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
        ],
        grid: {
            borderColor: "#f2f5f7",
        },
        fill: {
            type: "solid",
        },
        xaxis: {
            type: "datetime",
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 600,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
        },
        legend: {
            position: "right",
        }, tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const fromYear = new Date(w.globals.seriesRangeStart[seriesIndex][dataPointIndex]).getFullYear();
                const toYear = new Date(w.globals.seriesRangeEnd[seriesIndex][dataPointIndex]).getFullYear();
                const name = w.globals.series[seriesIndex].name;
                return `
                    `;
            },
        },
    }