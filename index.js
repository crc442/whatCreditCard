var Visa = '^4[0-9]{12}(?:[0-9]{3})?$';
var MasterCard = '^5[1-5][0-9]{14}$';
var AmericanExpress = '^3[47][0-9]{13}$';
var DinersClub = '^3(?:0[0-5]|[68][0-9])[0-9]{11}$';
var Discover = '^6(?:011|5[0-9]{2})[0-9]{12}$';
var JCB = '^(?:2131|1800|35\d{3})\d{11}$';
// var all = [Visa, MasterCard, AmericanExpress, DinersClub, Discover, JCB].join('|');


function main_function (card) {
	if (testIfValid(card)) {
		return whatCard(card);
		// console.log(whatCard(card));
	}
	else{
		return 'invalid';
		// console.log('invalid');
	}
}

/**
* 
* If valid, what kind of credit card
* Returns 'valid', if the type card not found.
* @param String {input}
* @api public
*/

function whatCard (input) {

 	var re = new RegExp(Visa);
 	if(re.test(input)){
 		return 'Visa';
 	}

 	var re = new RegExp(MasterCard);
 	if(re.test(input)){
 		return 'MasterCard';
 	}

 	var re = new RegExp(AmericanExpress);
 	if(re.test(input)){
 		return 'AmericanExpress';
 	}

 	var re = new RegExp(DinersClub);
 	if(re.test(input)){
 		return 'DinersClub';
 	}

 	var re = new RegExp(Discover);
 	if(re.test(input)){
 		return 'Discover';
 	}

 	var re = new RegExp(JCB);
 	if(re.test(input)){
 		return 'JCB';
 	}

 	return 'valid';
 } 



/**
* Test is the input is valid;
* If valid, what kind of MasterCard
*
* @param String {cardNumber}
* @api public
*/

function testIfValid(cardNumber) {
  cardNumber = cardNumber.split('');
  var i;
  for (i = 0, l = cardNumber.length; i < l; i ++) {
    if (i % 2 === 0) {
      cardNumber[i] = cardNumber[i] * 2;
    }
  }

  return sumString(cardNumber.join('')) % 10 === 0;

};


function sumString(string) {
  var s = string.split('');
  var i;
  var result = 0;
  for (i = 0, l = s.length; i < l; i++) {
    result = result + ~~s[i];
  }

  return result;
}



/**
* exports modules
*/
modules.exports.main_function = test(card);


