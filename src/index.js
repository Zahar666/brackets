module.exports = function check(str, bracketsConfig) {

  function get_type(c, bracketsConfig) {
    let type = 0
    while (bracketsConfig[type][0] != c && bracketsConfig[type][1] != c) {
      type++
    }
    return type
  }


  if (str.length == 0)
		return true;

  let types = []
  let sums = []
  
	let index = -1;

	for (let i = 0; i < str.length; i++) {
		let c = str[i];
		let type = get_type(c, bracketsConfig);

		if (index < 0)
		{
			index = 0;
			types[index] = type;
			sums[index] = 0;
		}
		else
		{
			if (type != types[index])
			{
				++index;
				types[index] = type;
				sums[index] = 0;
			}
		}

		let open = bracketsConfig[types[index]][0];
		let close = bracketsConfig[types[index]][1];

		if (open != close)
		{
			if (c == open)
				++sums[index];
			else
				--sums[index];
		}
		else
		{
			sums[index] = sums[index] == 0 ? 1 : 0;
		}

		if (sums[index] == 0)
			--index;
    if (sums[index] < 0) 
      return false
	}

	return index == -1;
}
