const API_URL = "https://raw.githubusercontent.com/Loscou/extension-links/main/extension.json";

document.addEventListener('DOMContentLoaded', function () {
    cardEl = document.getElementById('container-item');
    loaderEl = document.getElementById('loader');

    showLoader(true);

    getData().then((data) => {
        buildCardLinks(data);
        showLoader(false);
    });
});

async function getData() {
    return await fetch(API_URL)
        .then((res) => {
            return res.json();
        }).then((data) => {
            return data;
        });
}

function buildCardLinks(data) {
    if (!data?.length) return;

    const cardLinkList = `
        <ul class="container-items">
            ${data.map(value => buildItem(value)).join(" ")}
        </ul>
    `;

    cardEl.innerHTML = cardLinkList;
}

function buildItem(data) {
    return `
        <li class="item-list">
            <a class="item" href="${data.link}" target="_blank">
                <span class="title">${data.title}</span>
                <p class="author">by ${data.author}</p>
            </a>
        </li>
    `;
}

function showLoader(show) {
    if (show) {
        loaderEl.classList.remove('invisible');
        cardEl.classList.add('invisible');
    } else {
        loaderEl.classList.add('invisible');
        cardEl.classList.remove('invisible');
    }
}
