function getColumnId(columnNum) {
	if (typeof columnNum !== 'number') { return; }

	let columnId = '';

	while (columnNum > 26) {
		columnId += String.fromCharCode(65); // OR 'A';
		columnNum -= 26;
	}

	columnId += String.fromCharCode(columnNum + 64);

	return columnId;
}