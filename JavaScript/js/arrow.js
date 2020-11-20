const cat = {
    sound: "야옹",
    soundPlay: function(){
        setTimeout(function(){
            console.log(this.sound);
        }.bind(this),1000);     //bind 사용
    }
}
cal.soundPlay();
//1초 후에.."meow"

let cat = {
    sound: "야옹",
    soundPlay: function(){
        setTimeout(() => console.log(this.sound),1000);
    }
}

cat.soundPlay();
cat.soundPlay1();