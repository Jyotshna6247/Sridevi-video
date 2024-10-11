function createCard(thumbnail,title,chName,views,monthsold,duration){
    document.querySelector(".thumbnail").src = thumbnail;
    document.querySelector(".duration").innerHTML=duration;
    document.querySelector(".title").innerHTML = title;
    
    if(views >= 1000000){
        views = views/1000000 +" M";
    }
    else if(views >= 1000){
        views = views/1000 + " K"
    }


    document.querySelector(".details").innerHTML = chName +" . "+views+" views.  "+monthsold+" months ago";
}

createCard("https://i.ytimg.com/vi/550qbihvWnk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOg5n9SMlNLlAlScRhk3f8R5aRfA","Sridevi Eagerly Wants To learn English | English Vinglish - Best Scenes | Comedy & Emotional Scenes .","Eros Now Music",1300000,24,"20:48",)