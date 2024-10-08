function introduce(people){
    people.sort((a,b)=>a.age-b.age)
    console.log(people)
    for( let x of people){
        console.log(x.name, 'is', x.age, 'and from', x.city)
    }

}

introduce([
    { name: 'John', age: 23, city: 'New York' },
    { name: 'Emma', age: 30, city: 'Chicago' },
    { name: 'Lucas', age: 25, city: 'Los Angeles' },
    { name: 'Sophia', age: 28, city: 'San Francisco' },
    { name: 'Liam', age: 27, city: 'Seattle' }]
)
introduce([
    { name: 'Charlotte', age: 27, city: 'San Diego' },
    { name: 'Benjamin', age: 30, city: 'Dallas' },
    { name: 'Amelia', age: 23, city: 'Austin' },
    { name: 'Henry', age: 26, city: 'Columbus' },
    { name: 'Harper', age: 25, city: 'Fort Worth' },
    { name: 'Jack', age: 24, city: 'Indianapolis' },
    { name: 'Evelyn', age: 29, city: 'Charlotte' }
])