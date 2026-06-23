// nome e nível do personagem
const name = "Cloud Strife"
let xpHave = 6980
let xpNeedNext = 0
let rank = ""

// sistema de rank e indicador de quanto xp falta para o próximo rank
function updateRank() {
    if (xpHave < 1000) {
        rank = "BRONZE"
        xpNeedNext = 1000
    } else if (xpHave < 2000) {
        rank = "IRON"
        xpNeedNext = 2000
    } else if (xpHave < 5000) {
        rank = "SILVER"
        xpNeedNext = 5000
    } else if (xpHave < 7000) {
        rank = "GOLD"
        xpNeedNext = 7000
    } else if (xpHave < 8000) {
        rank = "PLATINUM"
        xpNeedNext = 8000
    } else if (xpHave < 9000) {
        rank = "ASCENDANT"
        xpNeedNext = 9000
    } else if (xpHave < 10000) {
        rank = "IMMORTAL"
        xpNeedNext = 10000
    } else {
        rank = "GOD"
        xpNeedNext = "MAX"
    }
}

// equipamento para mostrar no inventário
let armor = "Soldier Outfit"
let weapon = "Buster Sword"

let equipment = [
    [armor, "Rank: " + 1, "Defense: " + 18, "Effects: You give 5% more damage if you have only 25% of your health"],
    ["Weapon: " + weapon, "Rank: " + 1, "Physical Damage: " + 35, "Magical Damage: " + 35, "Special Ability: Focus Strike"]
]

// função para exibição
function inventory() {
    console.log("|||||||||||||||||||||||||")
    console.log("||||||" + name + "|||||||")
    console.log("|||||||||||||||||||||||||")
    console.log("=======RANK=======")
    console.log(rank)
    console.log("XP: " + xpHave + "/" + xpNeedNext)
    console.log("=======ARMOR======")
    console.log(equipment[0].join("\n"))
    console.log("======WEAPON======")
    console.log(equipment[1].join("\n"))
    console.log("|||||||||||||||||||||||||")
}

// função de derrotar inimigo
function defeatEnemy(enemy, xpReward) {
    console.log("Você derrotou " + enemy)
    console.log("+" + xpReward + " XP")
    xpHave += xpReward
}

// função para rodar o update + inventário
function openInventory() {
    updateRank()
    inventory()
}

// operação
openInventory()

defeatEnemy("Bandido", 20)

openInventory()

defeatEnemy("Leviathan", 1200)

openInventory()

defeatEnemy("Bahamut", 5000)

openInventory()

// uso de laço de repetição
for (let timer = 10; timer >= 0; timer--) {
    console.log("Fuja! o reator vai explodir em " + timer)
    if (timer === 0) {
        console.log("BOOOOOOOM!!!")
    }
}

// exibição de acordo com o requisito
console.log("O Herói de nome: " + name + ". está no nivel de: " + rank)