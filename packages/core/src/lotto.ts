import {getWarningMsg} from "@jjtang/github-actions-playground-util";

main();

function main() {
    // console.info('starting');
    // console.info(getNewResult());
}

export function getNewResult(): number[] {
    console.info(getWarningMsg());
    console.info('[1.1.0-5]');
    return Array.from({ length: 6 }, () => getRandomInt(10));
}

function getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
}
