const sheeps = [0, 1, 1, 0, 1, 0, 1, 0, 1]

const empty = []

for (x = 0; x <= sheeps.length; x++) {
    if (sheeps[x]) {
        empty.push(sheeps[x])
    }
}

