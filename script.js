function stringChop(str, size) {
	if(!str) return [];
	let chucks = [];
	for(let i=0;i<str.length;i=i+size){
		let subStr = str.slice(i,i+size)
		chucks.push(subStr)
	}
	return chucks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
