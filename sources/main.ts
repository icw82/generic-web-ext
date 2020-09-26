import { test } from './modules/test/test.js';


const main = (): void => {
    // chrome.runtime.reload();
    console.log('MAIN SCRIPT');

    test.log();
};


export {
    main,
};
