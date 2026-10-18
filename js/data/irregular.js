/* Irregular verbs: base|past|past participle|polish. */
const IRR_RAW = {
A1: `be|was/were|been|być
have|had|had|mieć
do|did|done|robić
go|went|gone|iść, jechać
come|came|come|przychodzić
see|saw|seen|widzieć
eat|ate|eaten|jeść
drink|drank|drunk|pić
get|got|got/gotten|dostawać, stawać się
make|made|made|robić (tworzyć)
say|said|said|powiedzieć
take|took|taken|brać
give|gave|given|dawać
know|knew|known|wiedzieć, znać
think|thought|thought|myśleć
buy|bought|bought|kupować
read|read|read|czytać
write|wrote|written|pisać
speak|spoke|spoken|mówić
sleep|slept|slept|spać
sit|sat|sat|siedzieć
stand|stood|stood|stać
run|ran|run|biegać
swim|swam|swum|pływać
sing|sang|sung|śpiewać
drive|drove|driven|prowadzić (samochód)
find|found|found|znajdować
put|put|put|kłaść
pay|paid|paid|płacić
meet|met|met|spotykać
tell|told|told|opowiadać, mówić (komuś)
leave|left|left|wyjeżdżać, zostawiać`,
A2: `become|became|become|stawać się
begin|began|begun|zaczynać
break|broke|broken|łamać, psuć
bring|brought|brought|przynosić
build|built|built|budować
catch|caught|caught|łapać
choose|chose|chosen|wybierać
cost|cost|cost|kosztować
cut|cut|cut|ciąć
draw|drew|drawn|rysować
dream|dreamt/dreamed|dreamt/dreamed|śnić, marzyć
fall|fell|fallen|spadać, upadać
feel|felt|felt|czuć
fight|fought|fought|walczyć
fly|flew|flown|latać
forget|forgot|forgotten|zapominać
grow|grew|grown|rosnąć, uprawiać
hear|heard|heard|słyszeć
hide|hid|hidden|chować
hit|hit|hit|uderzać
hold|held|held|trzymać
hurt|hurt|hurt|ranić, boleć
keep|kept|kept|trzymać, zachowywać
learn|learnt/learned|learnt/learned|uczyć się
lend|lent|lent|pożyczać (komuś)
let|let|let|pozwalać
lose|lost|lost|gubić, przegrywać
mean|meant|meant|znaczyć
ride|rode|ridden|jeździć (rowerem, konno)
ring|rang|rung|dzwonić
rise|rose|risen|wznosić się, rosnąć
sell|sold|sold|sprzedawać
send|sent|sent|wysyłać
shut|shut|shut|zamykać
spend|spent|spent|wydawać, spędzać
steal|stole|stolen|kraść
teach|taught|taught|uczyć (kogoś)
throw|threw|thrown|rzucać
understand|understood|understood|rozumieć
wake|woke|woken|budzić się
wear|wore|worn|nosić (ubranie)
win|won|won|wygrywać`,
B1: `bend|bent|bent|giąć
bite|bit|bitten|gryźć
blow|blew|blown|dmuchać, wiać
burn|burnt/burned|burnt/burned|palić, parzyć
cast|cast|cast|odlewać, rzucać
deal|dealt|dealt|zajmować się
dig|dug|dug|kopać
feed|fed|fed|karmić
forbid|forbade|forbidden|zabraniać
forgive|forgave|forgiven|wybaczać
freeze|froze|frozen|zamarzać
grind|ground|ground|szlifować, mielić
hang|hung|hung|wieszać
lay|laid|laid|kłaść (coś)
lead|led|led|prowadzić (przewodzić)
lie|lay|lain|leżeć
light|lit|lit|zapalać
overcome|overcame|overcome|pokonywać
seek|sought|sought|poszukiwać
set|set|set|ustawiać
shake|shook|shaken|potrząsać
shine|shone|shone|świecić
shoot|shot|shot|strzelać
show|showed|shown|pokazywać
sink|sank|sunk|tonąć
slide|slid|slid|ślizgać się
spill|spilt/spilled|spilt/spilled|rozlewać
split|split|split|rozszczepiać, dzielić
spread|spread|spread|rozprzestrzeniać
strike|struck|struck|uderzać mocno, strajkować
swing|swung|swung|huśtać (się)
tear|tore|torn|drzeć
wind|wound|wound|nawijać
withdraw|withdrew|withdrawn|wycofywać, wypłacać`
};
const IRR = [];
for (const lvl of ["A1", "A2", "B1"]) IRR_RAW[lvl].trim().split("\n").forEach(line => {
  const [en, past, pp, pl] = line.split("|");
  IRR.push({ id: "IRR:" + en, lvl, en, past, pp, pl, pos: "v", ex: "", irr: true });
});

/* Word formation (exam style): sentence with ___ | answer | BASE WORD */
