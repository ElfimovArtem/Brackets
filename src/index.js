module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length;) {
        let brackets = bracketsConfig[i].join('');

        if (str.includes(brackets)) {
            str = str.replace(brackets, '');
            i = 0;
        } else {
            i++;
        }
    }

    let test;
    if (str.length > 0) {
        test = false;
    } else {
        test = true;
    }
    return test;
};
