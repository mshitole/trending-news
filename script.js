fetch("news.json")
.then(res => res.json())
.then(news => {

    let html = "";

    news.forEach(article => {

        html += `
        <div class="card">
            <h3>${article.title}</h3>
            <p>${article.published}</p>

            <a href="${article.link}" target="_blank">
                Read More
            </a>
        </div>
        `;

    });

    document.getElementById("news").innerHTML = html;

});
