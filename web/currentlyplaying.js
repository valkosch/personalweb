async function fetchNowPlaying() {
    const response = await fetch("/currently-playing");
    const data = await response.json();

    const el = document.getElementById("nowplaying");
    const cover = document.getElementById("cover");
    if (data.playing) {
        el.innerText = `${data.title} — ${data.artist}`;
        cover.src = data.image;
        cover.style.display = "block";
    } else {
        el.innerText = "I'm listening to the silence right now :((, come back later!";
        cover.style.display = "none";
    }
}

setInterval(fetchNowPlaying, 10000);
fetchNowPlaying();
