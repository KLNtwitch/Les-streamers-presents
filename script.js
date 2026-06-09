const cards = document.getElementById("cards");

streamers.forEach(streamer=>{

cards.innerHTML += `
<div class="card">

<h2>${streamer.name}</h2>

<a href="${streamer.twitch}" target="_blank">
Voir la chaîne
</a>

</div>
`;

});
