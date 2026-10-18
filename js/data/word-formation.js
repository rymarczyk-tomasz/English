/* Word formation (exam style): sentence with ___|answer|BASE WORD. */
const WF_RAW = {
B1: `The ___ of the plane was delayed.|departure|DEPART
She is a very ___ person – she always helps.|helpful|HELP
It was a very ___ film.|boring|BORE
He drove ___ and nobody was hurt.|carefully|CARE
We need more ___ about the order.|information|INFORM
I'm not ___ with the results.|satisfied|SATISFY
The ___ of the river is 50 metres.|width|WIDE
Smoking is ___ for your health.|harmful|HARM
The ___ of the building took two years.|construction|CONSTRUCT
Thank you for your ___.|kindness|KIND
She's a famous ___.|journalist|JOURNAL
It's ___ to drive without a licence.|illegal|LEGAL
He was ___ late for work.|frequently|FREQUENT
The test was ___ difficult.|surprisingly|SURPRISE
We had a ___ holiday.|wonderful|WONDER
I was ___ with the hotel.|disappointed|DISAPPOINT
The ___ was cancelled because of the rain.|performance|PERFORM
He's the best ___ in our team.|welder|WELD
She gave a long ___ about safety.|speech|SPEAK
His ___ to the problem was simple.|solution|SOLVE
It's ___ to finish this today.|impossible|POSSIBLE
Be careful, the floor is ___.|slippery|SLIP`,
B2: `The project was a huge ___.|success|SUCCEED
Her ___ to stay calm is amazing.|ability|ABLE
The machine is completely ___.|reliable|RELY
There has been a ___ in costs.|reduction|REDUCE
He made a ___ comment about my work.|critical|CRITIC
We need to ___ the process.|simplify|SIMPLE
The ___ between the two parts is too big.|difference|DIFFER
The weather was ___ – it changed every hour.|unpredictable|PREDICT
She ___ the instructions and made a mistake.|misunderstood|UNDERSTAND
The ___ of the bridge is guaranteed for 50 years.|safety|SAFE
His ___ surprised everyone.|resignation|RESIGN
This is an ___ solution to the problem.|effective|EFFECT
The workers were ___ and asked for more money.|underpaid|PAY
There's a ___ of skilled welders.|shortage|SHORT
We were ___ about the new rules.|doubtful|DOUBT
The ___ of the factory created 200 jobs.|expansion|EXPAND
I have complete ___ in my team.|confidence|CONFIDENT
The report was full of ___.|inaccuracies|ACCURATE
He's very ___ – he never gives up.|determined|DETERMINE
The new law caused a lot of ___.|controversy|CONTROVERSIAL
Our main ___ is a Chinese company.|competitor|COMPETE
The ___ of the new system took six months.|implementation|IMPLEMENT
His explanation was very ___.|convincing|CONVINCE
He acted ___ and caused an accident.|irresponsibly|RESPONSIBLE
The job requires a lot of ___.|patience|PATIENT
The ___ of the parts must be checked.|thickness|THICK`,
C1: `He's known for his ___ to detail.|attention|ATTEND
The two reports show a clear ___.|inconsistency|CONSISTENT
The ___ of the project is still uncertain.|feasibility|FEASIBLE
Her ___ to help was obvious.|reluctance|RELUCTANT
The company's ___ grew by 20%.|profitability|PROFIT
The defect was ___ – nobody could see it.|invisible|VISIBLE
The machine ___ under heavy load.|malfunctioned|FUNCTION
The results were ___ – nobody expected them.|unforeseen|FORESEE
Safety is our top ___.|priority|PRIOR
The ___ of the old machines was expensive.|replacement|REPLACE
He spoke with great ___.|enthusiasm|ENTHUSIASTIC
The ___ of the evidence surprised everyone.|strength|STRONG
The rules are ___ – nobody follows them.|unenforceable|ENFORCE
We need to ___ the risks.|minimise|MINIMUM`
};
const WF = [];
for (const lvl of ["B1", "B2", "C1"]) WF_RAW[lvl].trim().split("\n").forEach(line => {
  const [ex, en, base] = line.split("|");
  WF.push({ id: "WF:" + en, lvl, en, pl: base, base, pos: "n", ex, wf: true });
});

/* Situations: level | instruction in Polish | accepted English answers (;) */
