// Daily Coding Problem #212
// Spreadsheets often use this alphabetical encoding for its columns:
// "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....
// Given a column number, return its alphabetical column id.
// For example, given 1, return "A". Given 27, return "AA".

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