const a = {
    name: 'Vinh',
    age: '25',
    calculate: function(){
        var i = 0;
        for (i = 0; i < 3; i++){
            console.log(i);
        }
        for (i = 0; i < 4; i++){
            console.log(i);
        }
    }
}
console.log(a.calculate());