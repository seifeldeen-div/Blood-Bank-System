const cards = document.querySelectorAll('.Places .card');
const items = document.querySelectorAll('.about .item');


items.forEach(item => item.style.display = 'none');

document.getElementById('Cairo').style.display = 'flex';

cards.forEach(card => {
    card.addEventListener('click', () => {
        items.forEach(item => item.style.display = 'none');

        const cityClass = [...card.classList].find(c => c !== 'card');
        const targetId = cityClass === 'portSaid' ? 'PortSaid' : cityClass;
        const targetItem = document.getElementById(targetId);

        if (targetItem) {
            targetItem.style.display = 'flex';
        }
    });
});