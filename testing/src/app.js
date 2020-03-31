const helloIronhack = () => 'Good Morning Ironhackers!'


const calculateMe = arr => {
    if (arr.length) {
        return arr.reduce((acc, elm) => acc + elm)
    }
}


person = {
    age: 33,
    grow(number) { console.log("YAY"); this.age += number }
}