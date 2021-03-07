function fishLand(input = []) {
    let [skumriqPrice, cacaPrice, palamud, safrid, midi] = [...input].map(Number);
    // •	Паламуд – 60% по-скъп от скумрията
    // •	Сафрид – 80% по-скъп от цацата
    // •	Миди – 7.50 лв. за килограм
    let palamudPrice = skumriqPrice * 1.6; // 60% more
    let safridPrice = cacaPrice * 1.8; // 80% more
    let midiPrice = 7.5;

    let totalPrice = (palamudPrice * palamud) + (safridPrice * safrid) + (midiPrice * midi);
    return totalPrice.toFixed(2);
}
// console.log(fishLand([6.90, 4.20, 1.5, 2.5, 1]));
// console.log(fishLand([5.55, 3.57, 4.3, 3.6, 7]));
// console.log(fishLand([7.79, 5.35, 9.3, 0, 0]));