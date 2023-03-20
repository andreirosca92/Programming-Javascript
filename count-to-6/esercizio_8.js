/*
module.exports = (x = 0, y = 1) => (x + y) / 2;

*/
module.exports = function midpoint (lowerbound=0, upperbound=1){
	return (lowerbound+upperbound)/2;
};
