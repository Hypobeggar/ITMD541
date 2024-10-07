function countVowels(str){
    const vowels=['a', 'e', 'i', 'o', 'u']
    let count=0;
    for (const x of str){
        if (vowels.includes(x) )
            count+=1;
    }
    console.log(str,':',count,'vowels')
}
countVowels('hippopotamus')
countVowels('chocolate')
countVowels('fashion')
