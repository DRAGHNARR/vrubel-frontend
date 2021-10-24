const systems = [
    {
        title: "southstreams",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "aggregations",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
]

const southstreams = [
    {
        title: "FORTS",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "restart",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "MICEX",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "DERINT",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "EQCLIENT",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "FXCLIENT",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "stream1",
        status: "live",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "stream2",
        status: "disabled",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
    {
        title: "stream3",
        status: "dead",
        actions: [
            {
                title: "start",
                exec: () => {
                    console.log(123);
                },
            },
            {
                title: "stop",
                exec: () => {
                    console.log(123);
                },
            },
        ],
    },
]

export {systems, southstreams};