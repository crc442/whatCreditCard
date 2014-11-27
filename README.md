whatCreditCard
==============

> Check if the input is a valid credit card number.

## Install

```sh
$ npm install --save what-credit-card
```

## Usage

```js
var whatCreditCard = require('what-credit-card');

whatCreditCard.test('6011881485017922');
//=> MasterCard

creditCardRegex.test('4117733979986127');
//=> Visa

creditCardRegex.test('6031181485017922');
//=> invalid
```

## License

MIT © [Chirag Chauhan](https://github.com/crc442)

