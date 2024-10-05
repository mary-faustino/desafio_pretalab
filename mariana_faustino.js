/* Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e 
calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o 
ranking de medalhas no formato:

#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

// SOMATORIO POR MEDALHAS 
function TotalMedalhas(ouro, prata, bronze) {
    return ouro + prata + bronze;
}

// DESTINGUINDO POR RANKING 
function RankingMedalhas(ranking) {
    console.log("Ranking de medalhas:");
    if (Object.keys(ranking).length === 0) {
        console.log("Nenhum país registrado.");
    } else {
        const rankingOrdenado = Object.entries(ranking).sort((a, b) => b[1] - a[1]);
        rankingOrdenado.forEach(([pais, total]) => {
            console.log(`${pais}: ${total} medalhas`);
        });
    }
}

// FUNÇÃO BASE 
function main() {
    const rankingMedalhas = {};

    while (true) {
        let pais = prompt("Digite o nome do país (ou 'sair' para terminar): ");

        if (pais.toLowerCase() === 'sair') {
            break;
        }

        const ouro = parseInt(prompt(`Digite o número de medalhas de ouro para ${pais}: `));
        const prata = parseInt(prompt(`Digite o número de medalhas de prata para ${pais}: `));
        const bronze = parseInt(prompt(`Digite o número de medalhas de bronze para ${pais}: `));

        if (isNaN(ouro) || isNaN(prata) || isNaN(bronze)) {
            alert("Por favor, insira valores válidos para o número de medalhas.");
            }

        const totalMedalhas = TotalMedalhas(ouro, prata, bronze);
        
        // Se o país já existir no ranking, soma as novas medalhas ao total atual
        if (rankingMedalhas[pais]) {
            rankingMedalhas[pais] += totalMedalhas;
        } else {
            rankingMedalhas[pais] = totalMedalhas;
        }
    }

    RankingMedalhas(rankingMedalhas);
}

main();
