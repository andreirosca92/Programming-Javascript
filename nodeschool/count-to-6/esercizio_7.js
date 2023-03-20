/*
module.exports = (...args) => {
        var sum = args.reduce((soFar, value) => soFar + value, 0);
        return sum / args.length;
    };


*/


module.exports = function average(...args){
	let length=0;
	let total=0;
	args.forEach( function (value){
		total+=value;
		length+=1;
	});
	return total/length;
};

