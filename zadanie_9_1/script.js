function getTriangleArea(a, h) {
		if (a > 0 && h > 0) {
			return ((a * h) / 2);
		}

		else {
			return (console.log('nieprawidłowe dane'));
		}
}

console.log(getTriangleArea(0, 6)); 