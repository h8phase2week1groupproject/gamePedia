function cariVideo(character, game){
    $("#resultsYoutube").empty()
    $('#loading_detail').show()

    console.log('show youtube', character, game)
    $.ajax({
        url:`https://www.googleapis.com/youtube/v3/search`,
        method:'GET',
        data:{
            key:'AIzaSyBLYRr8oVVLltzRbDQ3F9eerFgKbVU1AOc',
            part: "snippet",
            q: `how to play ${character} ${game}`,
            type:"video",
            maxResults: 1,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z",
        }
    })
    .done((response)=>{
        $('#loading_detail').hide()
        $("#resultsYoutube").empty()
        response.items.forEach(el => {
            $("#resultsYoutube").append(
                `
                <h2>${character}</h2>
                <div class="item">
                    <iframe class="video w100" width="100%" height="355" center-align src="//www.youtube.com/embed/${el.id.videoId}" frameborder="0" allowfullscreen></iframe>
                </div>`
            );     
        });
    })
    .fail((jqXHR, textStatus)=>{
        console.log(`request failed ${textStatus}`)
    })
}