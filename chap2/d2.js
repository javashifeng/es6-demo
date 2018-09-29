
let arr = [1, 2, 3];
let {0: first, [arr.length -1] : last} = arr;

console.log(first);
console.log(last);


let {toString : s} = 123;
console.log(s  === Number.prototype.toString);


function move ({x = 0, y = 0} = {}) {
	return [x, y];
}

console.log(move({x: 3, y: 8}));
console.log(move({}));

//let [(a)] = [1];
//([b]) = [5];
//console.log(b);

([(c)] = [3]);

console.log(c);
console.log("\u{20BB7}")
console.log("\u20BB7")