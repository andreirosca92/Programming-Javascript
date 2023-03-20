/*
module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);


*/


module.exports= function makeImportant( value, n=value.length){
	const symbol='!';
	return `${value}${symbol.repeat(n)}`;
};
