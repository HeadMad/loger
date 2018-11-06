const colors = {
    Reset:      "\x1b[0m",
    Bright:     "\x1b[1m",
    Dim:        "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink:      "\x1b[5m",
    Reverse:    "\x1b[7m",
    Hidden:     "\x1b[8m",

    fgBlack:    "\x1b[30m",
    fgRed:      "\x1b[31m",
    fgGreen:    "\x1b[32m",
    fgYellow:   "\x1b[33m",
    fgBlue:     "\x1b[34m",
    fgMagenta:  "\x1b[35m",
    fgCyan:     "\x1b[36m",
    fgWhite:    "\x1b[37m",
    fgCrimson:  "\x1b[38m",
    fgGray:     "\x1b[93;30m",

    bgBlack:    "\x1b[40m",
    bgRed:      "\x1b[41m",
    bgGreen:    "\x1b[42m",
    bgYellow:   "\x1b[43m",
    bgBlue:     "\x1b[44m",
    bgMagenta:  "\x1b[45m",
    bgCyan:     "\x1b[46m",
    bgWhite:    "\x1b[47m",
    bgCrimson:  "\x1b[48m",

};

function time (date) {
    let result = {};
    ['getHours', 'getMinutes', 'getSeconds'].forEach(function (item) {
        let i = date[item]();
        result[item] = i < 10 ? '0' + i : i;
    });
    return result;
}

const t = time(new Date);
const timeString = `[${colors.fgGray}${t.getHours}:${t.getMinutes}:${t.getSeconds}${colors.Reset}]`;


function Loger (type = 'default') {
    let types = {
        default: colors.fgWhite,
        danger:  colors.fgRed,
        success: colors.fgGreen,
        warning: colors.fgYellow,
        primary: colors.fgBlue,
        info:    colors.fgCyan
    };
    return function (message, ...messages) {
        console.log(timeString + types[type], message + colors.Reset, ...messages);
    }
}

module.exports = Loger;