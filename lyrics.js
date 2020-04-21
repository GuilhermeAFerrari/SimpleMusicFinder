window.onload = function(){

    function findLyrics(band, music){
        return fetch(`https://api.lyrics.ovh/v1/${band}/${music}`);
    }

    const form = document.querySelector('#lyrics_form');

    form.addEventListener('submit', el => {

        el.preventDefault();
        doSubmit();
    })

    async function doSubmit(){
        const lyrics_el = document.querySelector('#lyrics');
        const band = document.querySelector('#band');
        const music = document.querySelector('#music');

        lyrics_el.innerHTML = '<div class="spinner-grow"></div>';

        //async await
        try{
        const lyricsResponse = await findLyrics(band.value, music.value);
        const data = await lyricsResponse.json();
            if(data.lyrics){
                lyrics_el.innerHTML = data.lyrics;
            }
            else{
                lyrics_el.innerHTML = data.error;
            }
        } catch(err){
            console.log(err);
        }
    }
}
