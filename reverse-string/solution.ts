function reverse(value: string):string {
    let newstring = "";
    for (let i = value.length; i > 0; i--) {
        newstring += value[i - 1];
    }
    return newstring;
}

reverse("I am a boy")


export {}