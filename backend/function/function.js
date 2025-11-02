exports.monyenne = (tab) => {
    const coeficient = tab.reduce((acc,note)=> acc+note.coeficient,0);
    const sum = tab.reduce((acc,note)=> acc + (note.note * note.coeficient),0);
    const moyenne = sum / coeficient;
    return Math.round(moyenne);
}

exports.admisibility = (moy) => {
    if(moy >= 10){
        return 'admisible'
    }else{
        return 'echec'
    }
}

exports.Uppercase = (str) =>{
    return str.toUpperCase()
}