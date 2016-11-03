[![npm](https://img.shields.io/npm/dt/what-credit-card.svg)]([![npm](https://img.shields.io/npm/dm/localeval.svg?style=plastic)](https://github.com/crc442/whatCreditCard))

whatCreditCard
==============

> Check if the input is a valid credit card number; If valid, determines the type(name of issuing company) of credit card

## Install

```sh
$ npm install --save what-credit-card
```

## Usage

```js
var whatCreditCard = require('what-credit-card');

whatCreditCard.test('6011881489874922');
//=> MasterCard

creditCardRegex.test('4117733972344127');
//=> Visa

creditCardRegex.test('6031181485017922');
//=> invalid
```

## License

MIT © [Chirag Chauhan](https://github.com/crc442)

