export const formattedDate = (date: string) => {
	return new Date(date).toLocaleDateString('default', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	});
};
