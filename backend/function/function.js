exports.monyenne = (tab) => {
      const notes = tab.map(n => ({
        note: Number(n.note),
        coefficient: Number(n.coefficient)
    }));
    console.log(notes);
    
    const coeficient = notes.reduce((acc,n)=> acc+n.coefficient,0);
    const sum = notes.reduce((acc,n)=> acc + (n.note * n.coefficient),0);
    const moyenne = sum / coeficient;
    console.log('la sum est',sum);
    console.log('la moyenne est',moyenne);
    console.log('le coeficient est',coeficient);
    const moyenneArrondi = Math.round(moyenne)
    return {
        moyenne: moyenneArrondi,
        total:sum
    };
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