const color = {
    red: '\x1b[31m',
    strong_red: '\x1b[38;5;196m',
    orange: '\x1b[38;5;202m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    white: '\x1b[37m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m'
}

function yellow(message) {
    console.log(`${color.yellow}${message}${color.reset}`);
}

function orange(message) {
    console.log(`${color.orange}${message}${color.reset}`);
}

function red(message) {
    console.log(`${color.red}${message}${color.reset}`);
}

function green(message) {
    console.log(`${color.green}${message}${color.reset}`);
}

function blue(message) {
    console.log(`${color.blue}${message}${color.reset}`);
}

function white(message) {
    console.log(`${color.white}${message}${color.reset}`);
}

function log(message) {
    console.log(`${color.cyan}${message}${color.reset}`);
}

function normal(message) {
    console.log(`${message}${color.reset}`);
}

function reset(message) {
    console.log(`${color.reset}`);
}

function critical(message) {
    console.log(`${color.strong_red}${message}${color.reset}`);
}

critical("asd")

module.exports = { yellow, orange, red, green, blue, white, log, normal, reset, critical, color };

