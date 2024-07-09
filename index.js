const cats= ["Milo", "Otis", "Garfield"]
cats.length=0
cats.push('Milo', 'Otis', 'Garfield')

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
}

function appendCat(name){
    return [...cats, "Broom"]
}

function prependCat(name){
    return ["Arnold", ...cats]
}

function removeLastCat(name){
    return cats.slice(0, -1)
}

function removeFirstCat(name){
    return cats.slice(1)
}