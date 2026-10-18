/* Phrasal verbs and prepositions: level|sentence with ___|missing word|polish meaning. */
const PHR_RAW = `A2|Please turn ___ the light. It's dark.|on|włączyć
A2|Turn ___ the machine before you clean it.|off|wyłączyć
A2|I'm looking ___ my keys.|for|szukać
A2|Put ___ your jacket, it's cold.|on|założyć
A2|Get ___ the bus at the next stop.|off|wysiąść
A2|Can you pick me ___ at the station?|up|odebrać
A2|Who looks ___ your children when you work?|after|opiekować się
A2|Please fill ___ this form.|in|wypełnić
A2|I'm waiting ___ the delivery.|for|czekać na
A2|Listen ___ me, please.|to|słuchać
A2|I'm afraid ___ spiders.|of|bać się
A2|She's good ___ maths.|at|dobry w
B1|He gave ___ smoking two years ago.|up|rzucić (nałóg)
B1|Look ___ the word in the dictionary.|up|sprawdzić (w słowniku)
B1|We set ___ early in the morning.|off|wyruszyć
B1|Our car broke ___ on the motorway.|down|zepsuć się
B1|Carry ___, I'm listening.|on|kontynuować
B1|It took her weeks to get ___ the flu.|over|dojść do siebie
B1|He turned ___ an hour late.|up|pojawić się
B1|I came ___ an old photo in a drawer.|across|natknąć się
B1|I'll sort ___ the problem tomorrow.|out|załatwić
B1|We've run ___ of milk.|out|skończyć się
B1|I'm looking forward ___ the holiday.|to|nie móc się doczekać
B1|It depends ___ the weather.|on|zależeć od
B1|I'm interested ___ aviation.|in|interesować się
B1|Who is responsible ___ this project?|for|odpowiedzialny za
B1|I applied ___ a job in Germany.|for|ubiegać się o
B1|Does this bag belong ___ you?|to|należeć do
B1|I agree ___ you.|with|zgadzać się z
B1|She's proud ___ her son.|of|dumny z
B1|This model is similar ___ the old one.|to|podobny do
B1|He's very different ___ his brother.|from|różny od
B1|We have to deal ___ this problem.|with|zająć się
B2|She came ___ with a brilliant idea.|up|wymyślić
B2|Don't put ___ the decision any longer.|off|odkładać
B2|We carried ___ a survey of our customers.|out|przeprowadzić
B2|A big company took ___ the firm last year.|over|przejąć
B2|She turned ___ the job offer.|down|odrzucić
B2|I can't figure ___ how this works.|out|rozgryźć
B2|He set ___ his own company.|up|założyć
B2|I get along ___ my boss.|with|dogadywać się
B2|She pointed ___ a mistake in the report.|out|wskazać
B2|I can't put up ___ this noise any more.|with|znosić
B2|The meeting was called ___ because of the storm.|off|odwołać
B2|Let's go ___ the figures again.|over|przejrzeć
B2|The plane took ___ on time.|off|wystartować
B2|Prices went ___ by 10%.|up|wzrosnąć
B2|We need to cut ___ on costs.|down|ograniczyć
B2|He insisted ___ paying for dinner.|on|nalegać na
B2|They accused him ___ lying.|of|oskarżyć o
B2|She apologised ___ being late.|for|przeprosić za
B2|I succeeded ___ passing the exam.|in|udać się
B2|The success of the project relies ___ teamwork.|on|polegać na
B2|There's been an increase ___ prices.|in|wzrost (czegoś)
B2|We need a solution ___ this problem.|to|rozwiązanie (czegoś)
C1|The project fell ___ because of a lack of funding.|through|nie dojść do skutku
C1|We need to iron ___ a few problems before the launch.|out|wyeliminować
C1|He was let ___ with a warning.|off|upiec się (komuś)
C1|Don't rule ___ the possibility of a delay.|out|wykluczać
C1|The new rules will be phased ___ next year.|in|wprowadzać stopniowo
C1|Our sales have tailed ___ recently.|off|stopniowo spadać
C1|She's very adept ___ handling difficult clients.|at|biegły w
C1|The decision is contingent ___ the results of the test.|on|zależny od
C1|He seems oblivious ___ the risks.|to|nieświadomy
C1|Smoking is detrimental ___ your health.|to|szkodliwy dla`;

/* Reading and listening texts with questions. Line format of qs: question|correct|wrong;wrong */
