'use strict';

module.exports = {
  foo() {
    console.log(this.header.body);
    return this.header.body;
  },
};
