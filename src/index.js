module.exports = function reverse(n) {
	/*
		n = (n < 0) ? n * (-1) : n;
		let arr = (String(n).split('')).reverse();
		let result = '';
		for (let i = 0; i < arr.length; i++) result += arr[i];
		return Number(result);
	*/
	return Number(((String((n < 0) ? n * (-1) : n).split('')).reverse()).reduce((a, c) => a += c));
}

