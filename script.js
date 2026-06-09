const cards = document.getElementById("cards");

let liveCount = 0;

streamers.forEach(streamer => {

    if(streamer.live){
        liveCount++;
    }

    cards.innerHTML += `
    <div class="card">

        <div class="top">

            <img class="avatar"
            src="${streamer.avatar}">

            <div>

                <div class="name">
                    ${streamer.name}
                </div>

                <div class="status ${streamer.live ? "live":"offline"}">
                    ${streamer.live ? "LIVE":"OFFLINE"}
                </div>

            </div>

        </div>

        <div class="open">

            <a href="${streamer.twitch}" target="_blank">
                OUVRIR ↗
            </a>

        </div>

    </div>
    `;

});

document.getElementById("liveCount").innerText = liveCount;
document.getElementById("totalCount").innerText = streamers.length;
