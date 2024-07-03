/*
Algorithmic Tournament winner

- Only two teams compete against each other at a time.
- One team is designated as the home team, while the other is the away team.
- There's only a winner. No ties.
- Teams earn 3 points for a win and 0 points for a loss.
- The team with the highest total points win.
- Input: two parameters(Array competitions, Array results)
- competitions = [[homeTeam, awayTeam]...]
- results = 1 means that the home team won, and a 0 means that the away team won.
*/

function determinateWinner(competitions, results) {
  const totalPoints = {};
  let winner = "";
  
  competitions.forEach((competition, index) => {
    const [homeTeam, awayTeam] = competition;
    const winningTeam = results[index] === 1 ? homeTeam : awayTeam;
    
    totalPoints[winningTeam] = (totalPoints[winningTeam] || 0) + 3;
    
    if (!winner || totalPoints[winningTeam] > totalPoints[winner]) {
      winner = winningTeam;
    }
  });
  
  console.log(`The winner is ${winner}`);
}

const competitions = [
  ["JavaScript", "C#"],
  ["C#", "Python"],
  ["Python", "JavaScript"]
];

const results = [0, 0, 1];

determinateWinner(competitions, results);