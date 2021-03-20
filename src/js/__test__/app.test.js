import destructuring from '../app';

test('destricturing character', () => {
	const character = {
		name: 'Лучник',
		type: 'Bowman',
		health: 50,
		level: 3,
		attack: 40,
		defence: 10,
		special: [
			{
				id: 8,
				name: 'Двойной выстрел',
				icon: 'http://...',
				description: 'Двойной выстрел наносит двойной урон',
			},
			{
				id: 9,
				name: 'Нокаутирующий удар',
				icon: 'http://...',
			},
		],
	};

	const expected = [
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон',
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			description: 'Описание недоступно',
		},
	];
	const received = destructuring(character);
	expect(received).toEqual(expected);
});
