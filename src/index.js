//nome e nível do personagem
const name = "Cloud Striffe"
let xphave = 6980
let xpneednext = 0
let rank = ""
//sistema de rank e indicador de quanto xp falta para o próximo rank
function updaterank() {
    if (xphave < 1000) {
    rank = "BRONZE"
    xpneednext = 1000
} else if (xphave < 2000) {
    rank = "IRON"
    xpneednext = 2000
} else if (xphave < 5000) {
    rank = "SILVER"
    xpneednext = 5000
} else if (xphave < 7000) {
    rank = "GOLD"
    xpneednext = 7000
} else if (xphave < 8000) {
    rank = "PLATINUM"
    xpneednext = 8000
} else if (xphave < 9000) {
    rank = "ASCENDANT"
    xpneednext = 9000
} else if (xphave < 10000) {
    rank = "IMORTAL"
    xpneednext = 10000
} else if (xphave >= 10000) { 
    rank = "GOD"
    xpneednext = "MAX"
}
}
//equipamento para mostrar no inventario
let armor = "Soldier Outfit"
let weapon = "Buster Sword"
let equipment = [
    [armor , "Rank: " + 1 , "Defense: " + 18 , "Effects: You give 5% more damage if you have only 25% of your health"],
    ["Weapon: " + weapon , "Rank: " + 1 , "Physical Damage: " + 35 , "Magical Damage: " + 35 , "Special Ability: Focus Strike"]
]
//função para exibição
function inventory () {
    console.log("|||||||||||||||||||||||||")
    console.log("||||||" + name + "||||||")
    console.log("|||||||||||||||||||||||||")
    console.log("=======RANK=======")
    console.log(rank)
    console.log("XP: " + xphave + "/" + xpneednext)
    console.log("=======ARMOR======")
    console.log(equipment[0].join("\n"))
    console.log("======WEAPON======")
    console.log(equipment[1].join("\n"))
    console.log("|||||||||||||||||||||||||")
}
//função de derrotar inimigo
function defeatenemy (enemy , xpreward) {
    console.log("Você derrotou " + enemy)
    console.log("+" + xpreward + " XP")
    xphave += xpreward
}
//função para rodar o update + inventario
function openinventory() {
    updaterank()
    inventory()
}
//operação
openinventory()

defeatenemy("Bandido" , 20)

openinventory()

defeatenemy("Leviathan" ,  1200)

openinventory()

defeatenemy("Bahamuth" ,  5000)

openinventory()
//uso de laço de repetição n vi nenhum uso interessante ou prático no resto do código então fiz esse só pra cumprir o requisito do desafio.
for (let timer = 10 ; timer >= 0 ; timer --) {
    console.log("Fuja! o reator vai explodir em " + timer)
    if (timer === 0) {
        console.log("BOOOOOOOM!!!")
    }
}