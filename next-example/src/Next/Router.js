import router from "next/router";

export const _on = function (event) {
    return function (cb) {
        return function () {
            router.events.on(event, cb);
        };
    };
};

export const _off = function (event) {
    return function (cb) {
        return function () {
            router.events.off(event, cb);
        };
    };
};
