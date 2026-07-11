fetch("news.json")
.then(res => res.json())
.then(news => {

    let html = "";

    news.forEach(article => {

        html += `
        <div class="card">
            <h3>${article.title}</h3>
            <div class="date">${article.published}</div>

            <a href="${article.link}" target="_blank">
                Read Full Article →
            </a>
        </div>
        `;

    });

    document.getElementById("news").innerHTML = html;

});
