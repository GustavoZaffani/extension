var cardEl = document.getElementById('card');

this.getData().then(function (data) {
    this.buildCardLinks(data);
});

function getData() {
    return new Promise(resolve => {
        fetch("https://raw.githubusercontent.com/GustavoZaffani/projetoClient/master/package-lock.json")
            .then(function (res) {
                return res.json();
            }).then(function (data) {
            resolve(data);
        });

    })
}

function buildCardLinks(data) {
    console.log(data);
}

