'use strict';

const modal = {
    open: function () {
        document.getElementById('modal').classList.add('is-active');
    },
    close: function () {
        document.getElementById('modal').classList.remove('is-active');
    }
};