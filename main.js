let message = "There is no war in Ba Sing Se"
console.log(message.split(" ").length)
let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']
for (let i = 0; i < capital.length; i++) {
    console.log("country:", countries[i],"capital:",capital[i])
}
let numberr = Math.floor(Math.random() * 4)
if (numberr === 0) {
  console.log("A certain victory")
} else if (numberr === 1) {
  console.log("not so certain victory")
} else if (numberr === 2) {
  console.log("an uneasy victory")
} else {
  console.log("Your fate is unclear, ô chosen undead")
}

function checkSeason(monthh) {
  let m = monthh.toLowerCase()
  if (m === 'december' || m === 'january' || m === 'february') return 'Winter'
  if (m === 'march' || m === 'april' || m === 'may') return 'Spring'
  if (m === 'june' || m === 'july' || m === 'august') return 'Summer'
  if (m === 'september' || m === 'october' || m === 'november') return 'Autumn'
  return 'No month right'
}
