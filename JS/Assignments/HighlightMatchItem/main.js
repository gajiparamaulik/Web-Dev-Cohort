const inputEle = document.getElementById('inputField');
const listItems = document.querySelectorAll('.list-group-item');

inputEle.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();

    listItems.forEach(item => {
        const text = item.textContent;
        const lowerText = text.toLowerCase();

        if (searchText && lowerText.includes(searchText)) {
            const startIndex = lowerText.indexOf(searchText);
            const endIndex = startIndex + searchText.length;

            item.innerHTML =
                text.substring(0, startIndex) +
                '<span style="background-color: yellow; font-weight: bold;">' +
                text.substring(startIndex, endIndex) +
                '</span>' +
                text.substring(endIndex);
        } else {
            // Reset item text if no match
            item.innerHTML = text;
        }
    });
});
