/* Grammar topics: rules in Polish and exercises. */
const GRAMMAR = [
{ id: "art-a-an", lvl: "A1", title: "Przedimki a / an", sum: "Kiedy „a”, a kiedy „an”.",
  rules: ["**a** przed spółgłoską w wymowie: a car, a dog, a university (czyt. juniwersity – zaczyna się od „j”).",
    "**an** przed samogłoską w wymowie: an apple, an engineer, an hour (czyt. ałer – h jest nieme).",
    "Liczy się dźwięk, nie litera: a European (czyt. juropijen), an MBA (czyt. em-bi-ej).",
    "a/an tylko z policzalnymi w liczbie pojedynczej: a pen, ale nie „a water”.",
    "Przy zawodach zawsze stawiamy przedimek (po polsku nic), a wybór a czy an zależy od pierwszego dźwięku: She's **an** engineer, he's **a** pilot."],
  ex: `I'm ___ welder.|a|an;the|„Welder” (czyt. łelder) zaczyna się od spółgłoski.
She is ___ engineer.|an|a;–|„Engineer” (czyt. endżinija) zaczyna się samogłoską.
We waited for ___ hour.|an|a;–|„Hour” czytamy „ałer” – h jest nieme, więc słychać samogłoskę.
He studies at ___ university in Kraków.|a|an;–|„University” czytamy „juniwersity” – zaczyna się od „j”, czyli spółgłoski.
I need ___ umbrella.|an|a;–|„Umbrella” (czyt. ambrela) zaczyna się samogłoską.
It's ___ old house.|an|a;–|Liczy się pierwsze słowo po przedimku: old.
It's ___ big old house.|a|an;–|Teraz po przedimku stoi big, więc a.
Can I have ___ glass of water?|a|an;–|„Glass” zaczyna się spółgłoską.
My dad is ___ pilot.|a|an;–|„Pilot” (czyt. pajlet) zaczyna się od spółgłoski, więc a. Przy zawodach zawsze stawiamy a albo an (po polsku nic).
She has ___ MBA.|an|a;the|Litery czytamy „em-bi-ej”, czyli od samogłoski.` },
{ id: "art-the", lvl: "A1", title: "The, a czy nic?", sum: "Konkretne, nowe i ogólne rzeczy.",
  rules: ["**a/an** – coś nowego, jedno z wielu: I saw **a** plane.",
    "**the** – coś konkretnego, już wspomnianego lub jedynego: **The** plane was red. **the** sun.",
    "**the** – gdy z sytuacji wiadomo, o co chodzi: Close **the** door.",
    "**bez przedimka** – ogólnie, w liczbie mnogiej lub niepoliczalne: I like dogs. Steel is strong.",
    "Bez przedimka zwykle: kraje, miasta, posiłki, języki, dni: in Poland, have lunch. Ale: **the** UK, **the** USA."],
  ex: `I have a dog and a cat. ___ dog is called Rex.|The|A;–|Pies był już wspomniany, więc the.
Look at ___ moon!|the|a;–|Księżyc jest jeden.
I love ___ music.|–|the;a|Muzyka ogólnie, rzeczownik niepoliczalny.
___ steel is stronger than aluminium.|–|The;A|Materiał w ogólnym sensie.
Can you close ___ window, please?|the|a;–|Wiadomo, o które okno chodzi.
We had ___ breakfast at 7.|–|the;a|Posiłki zwykle bez przedimka.
She lives in ___ USA.|the|–;a|Nazwy ze States, Kingdom, Republic mają the.
He lives in ___ Poland.|–|the;a|Większość krajów bez przedimka.
I saw ___ interesting film yesterday.|an|the;–|Film pojawia się pierwszy raz.
We checked one weld yesterday. ___ weld is cracked.|The|A;–|Spoina była już wspomniana, więc the.` },
{ id: "be", lvl: "A1", title: "Czasownik to be", sum: "am, is, are, was, were.",
  rules: ["I **am**, you / we / they **are**, he / she / it **is**.",
    "Skróty: I'm, you're, he's, it's, we're, they're.",
    "Przeczenie: I'm not, he **isn't**, they **aren't**.",
    "Pytanie – zamiana szyku: **Are** you ready? **Is** she at work?",
    "Przeszłość: I / he / she / it **was**, you / we / they **were**."],
  ex: `I ___ a technologist.|am|is;are
They ___ from Poland.|are|is;am
___ your boss at work today?|Is|Are;Am
The parts ___ ready.|are|is;am|Parts – liczba mnoga.
My brother ___ a pilot.|is|are;am
We ___ at home yesterday.|were|was;are|Yesterday to przeszłość, a we → were.
It ___ very cold last night.|was|were;is
I ___ not tired.|am|is;are
___ you busy now?|Are|Is;Am
The machine ___ broken.|is|are;am|Machine – liczba pojedyncza.` },
{ id: "pres-simple", lvl: "A1", title: "Present Simple", sum: "Zwyczaje, fakty, rutyna.",
  rules: ["Zwyczaje, stałe sytuacje i fakty: I work in a factory. Water boils at 100°C.",
    "he / she / it dostaje **-s**: she work**s**, he go**es**, it watch**es**; spółgłoska + y → **-ies**: study → stud**ies**; have → **has**.",
    "Przeczenie: **don't / doesn't** + czasownik bez -s: He doesn't work.",
    "Pytanie: **Do / Does** + osoba + czasownik: Does she speak English?",
    "Sygnały: always, usually, often, sometimes, never, every day."],
  ex: `She ___ in an office.|works|work;working|She → dodajemy -s.
I ___ coffee every morning.|drink|drinks;drinking
He ___ like fish.|doesn't|don't;isn't
___ you speak German?|Do|Does;Are
___ your sister live in Gdańsk?|Does|Do;Is
The shift ___ at 6 a.m.|starts|start;starting|The shift = it, więc -s.
We ___ work on Sundays.|don't|doesn't;aren't
My dad ___ TV in the evening.|watches|watchs;watch|Po -ch dodajemy -es.
Does he ___ a car?|have|has;having|Po does czasownik bez -s.
Water ___ at 100 degrees.|boils|boil;is boil|Fakt – Present Simple.` },
{ id: "prep-time", lvl: "A1", title: "Przyimki czasu: in, on, at", sum: "at 7, on Monday, in July.",
  rules: ["**at** – godziny i momenty: at 7 o'clock, at noon, at night, at the weekend.",
    "**on** – dni i daty: on Monday, on 5 May, on my birthday.",
    "**in** – miesiące, lata, pory roku, części dnia: in July, in 2024, in winter, in the morning.",
    "Bez przyimka z this / next / last / every: next week, every day."],
  ex: `The meeting is ___ 10 o'clock.|at|on;in
I was born ___ 1990.|in|on;at
See you ___ Monday!|on|in;at
We go skiing ___ winter.|in|on;at
I work ___ the morning.|in|on;at
The shop is closed ___ Christmas Day.|on|in;at|Konkretny dzień, więc on.
I can't sleep ___ night.|at|in;on|Wyjątek: at night.
Her birthday is ___ 3 May.|on|in;at
We met ___ last week.|–|on;in|Z last, next, this nie ma przyimka.
The delivery arrives ___ July.|in|on;at` },
{ id: "there-is", lvl: "A1", title: "There is / there are", sum: "Coś jest, coś się znajduje.",
  rules: ["**There is** + liczba pojedyncza lub niepoliczalne: There is a crack in the weld.",
    "**There are** + liczba mnoga: There are five welders on this shift.",
    "Pytanie: **Is there...? Are there...?** Przeczenie: there isn't / there aren't.",
    "Przeszłość: there **was** / there **were**.",
    "Nie myl z it is: There's a car outside. **It's** red."],
  ex: `___ a problem with the machine.|There is|There are;It is
___ three bolts missing.|There are|There is;They are
___ any milk in the fridge?|Is there|Are there;There is
___ many people at the meeting yesterday.|There were|There was;There are
There ___ any questions.|aren't|isn't;not
There's a new forklift in the hall. ___ yellow.|It's|There's;Its|Opisujemy rzecz już wspomnianą, więc it.
Are there ___ mistakes in the drawing?|any|some;a
There ___ a storm last night.|was|were;is` },
{ id: "possessive", lvl: "A1", title: "Zaimki dzierżawcze i ’s", sum: "my, your, its, their, Tom's.",
  rules: ["I → **my**, you → **your**, he → **his**, she → **her**, it → **its**, we → **our**, they → **their**.",
    "**its** (jego / jej – o rzeczach i zwierzętach) to nie **it's** (it is).",
    "**their** (ich) ≠ **there** (tam) ≠ **they're** (they are).",
    "Dopełniacz ’s: Tom**'s** car; liczba mnoga: my parents**'** house.",
    "Bez the przed zaimkiem: my car, nie „the my car”."],
  ex: `This is Anna and this is ___ husband.|her|his;their
We love ___ new flat.|our|us;we
The company changed ___ logo.|its|it's;his|Its = jego (firmy); it's = it is.
___ late, let's go.|It's|Its;It|Tu potrzebujemy it is.
They parked ___ car outside.|their|there;they're
This is ___ car.|Tom's|Toms;Tom|Dopełniacz: Tom's.
My mum and dad live here. It's my ___ house.|parents'|parent's;parents|Dwoje rodziców (liczba mnoga na -s) – apostrof po s.
Is this ___ phone?|your|you;you're` },
{ id: "plural", lvl: "A1", title: "Liczba mnoga", sum: "boxes, cities, knives, children.",
  rules: ["Zwykle + **-s**: car → cars, bolt → bolts.",
    "Po -s, -sh, -ch, -x + **-es**: box → boxes, watch → watches.",
    "Spółgłoska + y → **-ies**: city → cities; ale samogłoska + y: day → days.",
    "-f / -fe → zwykle **-ves**: knife → knives, shelf → shelves (ale: roof → roofs, chef → chefs).",
    "Nieregularne: man → **men**, woman → **women**, child → **children**, person → **people**, foot → **feet**, tooth → **teeth**."],
  ex: `I have two ___.|children|childs;childrens
There are three ___ in the drawer.|knives|knifes;knive
We need new ___.|boxes|boxs;boxies
Many ___ live in this street.|people|persons;peoples|Zwykła liczba mnoga od person to people.
These ___ are very old.|cities|citys;cityes
My ___ hurt after the shift.|feet|foots;feets
Two ___ and a woman came in.|men|mans;mens
I clean my ___ twice a day.|teeth|tooths;teeths
The ___ are full of tools.|shelves|shelfs;shelvs
We worked three ___ last week.|days|daies;dayes|Samogłoska + y, więc tylko -s.` },
{ id: "this-that", lvl: "A1", title: "This, that, these, those", sum: "Blisko czy daleko, jedno czy wiele.",
  rules: ["**this** – ten / ta / to (blisko, jedno): this bolt.",
    "**these** – te (blisko, wiele): these bolts.",
    "**that** – tamten (daleko, jedno): that plane up there.",
    "**those** – tamte (daleko, wiele): those people over there.",
    "Przedstawianie: **This is** my wife. Czas: this week (ten tydzień), that day (tamtego dnia)."],
  ex: `___ is my brother, Tom.|This|These;Those
___ bolts here are too short.|These|This;That
Look at ___ plane up there!|that|this;these
Who are ___ people over there?|those|that;these
I like ___ shoes I'm wearing.|these|those;this
Do you remember ___ day we met?|that|these;those
Is ___ your car over there?|that|this;these
___ week I'm working nights.|This|These;Those` },
{ id: "pronouns", lvl: "A1", title: "I czy me? Zaimki osobowe", sum: "he – him, she – her, they – them.",
  rules: ["Podmiot (kto robi): **I, you, he, she, it, we, they**.",
    "Dopełnienie (po czasowniku i przyimku): **me, you, him, her, it, us, them**: Call **me**. Give it to **him**.",
    "Po polsku to m.in. „mnie / mi, ciebie / ci, go / mu, ją / jej, nas / nam, was / wam, ich / im”.",
    "I zawsze wielką literą."],
  ex: `Can you help ___?|me|I;my
I know Anna. I see ___ every day.|her|she;hers
Where is Tom? I can't find ___.|him|he;his
We're here! Wait for ___!|us|we;our
These bolts are loose. Tighten ___, please.|them|they;their
___ is my best friend.|He|Him;His|Podmiot – he.
The drawing? I sent ___ yesterday.|it|its;them
Tell ___ about your trip!|us|we;our` },
{ id: "have-got", lvl: "A1", title: "Have got", sum: "Mam, masz, ma.",
  rules: ["**have got / has got** = mieć (rzeczy, rodzina, choroby): I've got a car. She's got two kids.",
    "Przeczenie: **haven't got / hasn't got**.",
    "Pytanie: **Have** you **got**...? **Has** he **got**...?",
    "Krótkie odpowiedzi: Yes, I have. / No, he hasn't.",
    "W przeszłości po prostu **had**."],
  ex: `I ___ got two brothers.|have|has;am
She ___ got a new car.|has|have;is
___ you got a pen?|Have|Has;Do
He ___ got a car. He goes by bus.|hasn't|haven't;isn't
Have they got a garden? – Yes, they ___.|have|got;has
We ___ got any milk.|haven't|hasn't;don't
___ your boss got a company car?|Has|Have;Is
I've ___ a headache.|got|get;have` },
{ id: "can", lvl: "A1", title: "Can i can't", sum: "Umiem, mogę, nie mogę.",
  rules: ["**can** + czasownik bez to: I can swim (nie: I can to swim).",
    "Ta sama forma dla wszystkich: he **can** (nie: he cans).",
    "Przeczenie: **can't / cannot**. Pytanie: **Can** you...?",
    "Także prośba i pozwolenie: Can I open the window?",
    "Przeszłość: **could**: When I was five, I could read."],
  ex: `She ___ speak three languages.|can|cans;can to
I can ___ a car.|drive|to drive;driving
___ you help me, please?|Can|Do;Are
He ___ swim. He never learned.|can't|don't can;isn't
When I was five, I ___ read.|could|can;could to
___ I open the window?|Can|Do;Am
We can ___ the meeting at 10.|start|to start;starting
Can you ___ me?|hear|to hear;hearing` },
{ id: "imperative", lvl: "A1", title: "Tryb rozkazujący", sum: "Open the door! Don't touch!",
  rules: ["Polecenie – sam czasownik: **Open** the door. **Sit** down.",
    "Zakaz: **Don't** + czasownik: Don't touch!",
    "Grzeczniej z **please**: Please wait. / Wait here, please.",
    "Propozycja: **Let's** + czasownik: Let's go.",
    "Typowe w instrukcjach: Wear goggles. Do not smoke."],
  ex: `___ the door, please.|Close|Closes;To close
___ touch the hot metal!|Don't|Not;No
___ go to the cinema tonight.|Let's|Let;Lets us
Please ___ here.|wait|waiting;to wait
___ late again!|Don't be|Not be;Don't
___ safety goggles in this area.|Wear|Wearing;You wearing
___ me, please.|Help|Helps;Helping
Let's ___ a break.|take|to take;taking` },
{ id: "questions", lvl: "A1", title: "Pytania", sum: "What, where, when, who, why, how.",
  rules: ["**what** (co), **where** (gdzie), **when** (kiedy), **who** (kto), **why** (dlaczego), **how** (jak), **which** (który).",
    "**how much** (ile – niepoliczalne, cena), **how many** (ile – policzalne), **how old** (ile lat).",
    "Szyk: słowo pytające + do / does / did / be + osoba + czasownik: Where **do** you live?",
    "Pytanie o podmiot – bez do: **Who called** you?"],
  ex: `___ do you live? – In Gliwice.|Where|What;Who
___ is your birthday? – In May.|When|Where;Who
___ is that man? – My boss.|Who|What;Which
___ are you late? – Because of the traffic.|Why|How;What
___ old are you?|How|What;Which
How ___ is this jacket?|much|many;old
Where ___ you work?|do|does;are
What time ___ the train leave?|does|do;is
___ colour do you like – red or blue?|Which|Who;Where
___ you at work yesterday?|Were|Did;Was` },
{ id: "freq", lvl: "A1", title: "Always, usually, never", sum: "Jak często i gdzie w zdaniu.",
  rules: ["**always** (zawsze), **usually** (zwykle), **often** (często), **sometimes** (czasami), **rarely** (rzadko), **never** (nigdy).",
    "Przed zwykłym czasownikiem: I **always** get up at 6.",
    "Po to be: He is **always** late.",
    "Po czasownikach posiłkowych i modalnych (can, will, have w Present Perfect): I can **never** remember. I have **never** been there.",
    "Pytanie: **How often**...? Once / twice a week – na końcu zdania."],
  ex: `I ___ at six.|always get up|get up always;always am get up
She ___ late.|is never|never is;never
He ___ to work by bus.|usually goes|goes usually;usually go
We go swimming twice ___ week.|a|the;in
How ___ do you go to the gym?|often|much;many
I can ___ remember his name.|never|not never;ever
They are ___ tired after the night shift.|always|ever;never not
Do you ___ eat fish?|often|much;many` },
{ id: "pres-cont", lvl: "A2", title: "Present Simple czy Continuous?", sum: "Zawsze czy teraz.",
  rules: ["**Present Continuous** (am / is / are + -ing) – teraz, w tej chwili, tymczasowo: I'm working nights this week.",
    "**Present Simple** – zwyczaje, stałe sytuacje, fakty: I work in Gliwice.",
    "Sygnały: now, at the moment, this week → continuous; always, usually, every day → simple.",
    "Czasowniki stanu bez -ing: know, like, want, need, understand: I **know** (nie: I'm knowing).",
    "Ustalone plany: I'm meeting the client tomorrow."],
  ex: `Look! It ___.|'s raining|rains;rain
I usually ___ to work by car.|drive|am driving;drives
Be quiet, the baby ___.|is sleeping|sleeps;sleep
She ___ three languages.|speaks|is speaking;speak|Stała umiejętność.
I ___ what you mean.|know|am knowing;knows|Know to czasownik stanu.
We ___ the client tomorrow at 10.|are meeting|meet;meets|Ustalony plan.
What ___ now?|are you doing|do you do;you doing
Water ___ at 0°C.|freezes|is freezing;freeze
This week I ___ the night shift.|'m working|work;works|Sytuacja tymczasowa.
He ___ coffee. He prefers tea.|doesn't like|isn't liking;don't like` },
{ id: "past-simple", lvl: "A2", title: "Past Simple", sum: "Zakończone wydarzenia w przeszłości.",
  rules: ["Zakończone czynności z określonym czasem: yesterday, last week, in 2019, two days ago.",
    "Regularne: + **-ed**: worked, stopped, studied.",
    "Nieregularne trzeba znać: go → **went**, see → **saw**, buy → **bought**, make → **made**.",
    "Przeczenie i pytanie: **didn't / did** + forma podstawowa: I didn't go. Did you see it?",
    "to be: was / were."],
  ex: `I ___ to London last year.|went|goed;go
We ___ the report yesterday.|finished|finish;finishes
She ___ come to work on Monday.|didn't|doesn't;wasn't
___ you see the match?|Did|Do;Were
Did he ___ the bolts?|tighten|tightened;tightens|Po did forma podstawowa.
They ___ a new machine two weeks ago.|bought|buyed;buy
I ___ my keys this morning.|lost|losed;lose
The plane ___ at 6 p.m.|landed|land;landing
He ___ tired after the shift.|was|were;did
We ___ in the hotel for three nights.|stayed|staied;stay` },
{ id: "prep-place", lvl: "A2", title: "Przyimki miejsca: in, on, at", sum: "in the box, on the wall, at work.",
  rules: ["**in** – wewnątrz, w obszarze: in the box, in the hall, in Poland, in the car.",
    "**on** – na powierzchni: on the table, on the wall, on the second floor; środki transportu: on the bus / train / plane.",
    "**at** – w punkcie lub miejscu, gdzie coś się robi: at the door, at work, at home, at the airport.",
    "Inne: under, next to, between, behind, in front of, opposite."],
  ex: `The keys are ___ the table.|on|in;at
I'm ___ work until 5.|at|in;on
She lives ___ Kraków.|in|at;on
The drawing is ___ the wall.|on|in;at
We met ___ the airport.|at|on;in
The parts are ___ the box.|in|on;at
I'm ___ the train now.|on|in;at|Transport publiczny – on.
My office is ___ the second floor.|on|in;at
Wait for me ___ the entrance.|at|in;on
He sat ___ me and Anna.|between|among;next|Między dwiema osobami – between.` },
{ id: "comparatives", lvl: "A2", title: "Stopniowanie przymiotników", sum: "cheaper, the most expensive, better.",
  rules: ["Jednosylabowe: **-er / -est**: cheap → cheaper → the cheapest. Krótka samogłoska + spółgłoska – podwajamy: big → bigger → the biggest.",
    "Dwusylabowe na -y: easy → easier → the easiest.",
    "Pozostałe dwusylabowe i dłuższe: **more / the most**: expensive → more expensive → the most expensive.",
    "Nieregularne: good → better → the best; bad → worse → the worst.",
    "Porównanie: **than**; równość: **as ... as**: Steel is heavier than aluminium. TIG isn't as fast as MIG."],
  ex: `This machine is ___ than the old one.|faster|more fast;fastest
It's the ___ building in the city.|tallest|taller;most tall
This method is ___ than laser cutting.|cheaper|more cheap;cheapest
Stainless steel is ___ than carbon steel.|more expensive|expensiver;most expensive
Today is ___ than yesterday.|worse|badder;worst
She is the ___ welder in our team.|best|better;goodest
This exercise is ___ than the last one.|easier|easyer;more easy
TIG is not as fast ___ MIG.|as|than;like
Steel is heavier ___ aluminium.|than|that;as
It's the ___ expensive option.|most|more;much` },
{ id: "countable", lvl: "A2", title: "Some, any, much, many", sum: "Policzalne i niepoliczalne.",
  rules: ["Niepoliczalne nie mają liczby mnogiej: water, money, information, advice, equipment, furniture, news.",
    "**some** w zdaniach twierdzących, **any** w pytaniach i przeczeniach: We need some bolts. Have we got any gas?",
    "**some** także w prośbach i propozycjach: Would you like some coffee?",
    "**many** + policzalne, **much** + niepoliczalne; **a lot of** – do obu.",
    "**a few** + policzalne, **a little** + niepoliczalne. How many? / How much?"],
  ex: `We don't have ___ time.|much|many;a few
How ___ welders work here?|many|much;lot
Can you give me some ___?|advice|advices;an advice|Advice jest niepoliczalne.
There are ___ bolts in the box.|some|any;much
Is there ___ coffee left?|any|some;many
I need ___ information about the order.|some|an;a few
We have ___ problems with this machine.|a lot of|much;a little
I've got ___ questions.|a few|a little;much
Would you like ___ tea?|some|any;many|Propozycja – some.
How ___ does it cost?|much|many;lot` },
{ id: "future", lvl: "A2", title: "Przyszłość: will i going to", sum: "Plany, decyzje, przewidywania.",
  rules: ["**going to** – plany podjęte wcześniej: I'm going to get a pilot licence.",
    "**going to** – przewidywanie na podstawie tego, co widać: Look at the clouds – it's going to rain.",
    "**will** – decyzja w chwili mówienia: I'll call him now.",
    "**will** – obietnice, prośby, opinie o przyszłości: I think it will be fine.",
    "Present Continuous – ustalone terminy: I'm flying to Rome on Friday."],
  ex: `The phone is ringing. I ___ answer it.|'ll|'m going to;answer|Decyzja w chwili mówienia.
I ___ start flying lessons next year. I've already paid.|'m going to|will;am|Plan podjęty wcześniej.
Look at that sky! It ___ rain.|'s going to|will;is|Widać, że będzie padać.
I think the project ___ be a success.|will|is going;is
I promise I ___ be late.|won't|am not going;don't
___ you help me with this box?|Will|Are;Do|Prośba – will.
We ___ to Berlin on Monday. The tickets are booked.|are flying|fly;will flying
The forecast says it ___ sunny tomorrow.|will be|is being;be` },
{ id: "modals", lvl: "A2", title: "Must, have to, should, can", sum: "Obowiązek, zakaz, rada, możliwość.",
  rules: ["**must** – mówiący uważa, że trzeba; też napisy i regulaminy: You must wear goggles.",
    "**have to** – obowiązek narzucony przez innych lub okoliczności (szef, grafik): I have to start at 6. Przeszłość: **had to**.",
    "**mustn't** – zakaz! **don't have to** – nie musisz, nie ma potrzeby.",
    "**should / shouldn't** – rada: You should check the gas flow.",
    "**can / can't** – umiejętność, możliwość; **could** – przeszłość albo uprzejma prośba."],
  ex: `You ___ smoke near the gas cylinders. It's dangerous.|mustn't|don't have to;can|To zakaz.
It's Saturday, I ___ go to work.|don't have to|mustn't;can't|Nie ma potrzeby, a nie zakaz.
You look tired. You ___ go to bed.|should|must to;have
Yesterday I ___ stay late at work.|had to|must;have to|Przeszłość od must to had to.
___ you swim?|Can|Must;Should
___ you open the window, please?|Could|Must;Should|Uprzejma prośba.
All visitors ___ wear a helmet.|must|should to;can
You ___ to show your passport at the gate.|have|must;should|Po must i should nie ma to.` },
{ id: "irregular", lvl: "A2", title: "Czasowniki nieregularne", sum: "go – went – gone.",
  rules: ["Wiele czasowników ma nieregularną 2. formę (Past Simple) i 3. formę (Present Perfect, strona bierna).",
    "go – **went** – **gone**, see – **saw** – **seen**, be – **was / were** – **been**.",
    "Trzy takie same formy: put – put – put, cut, cost, let, hit.",
    "Dwie takie same: buy – **bought** – **bought**, make – **made** – **made**.",
    "Wszystkie formy przećwiczysz w trybie **„Nieregularne”**."],
  ex: `Yesterday I ___ a new phone.|bought|buyed;buy
Have you ever ___ to Italy?|been|be;was
She ___ me a great idea.|gave|gived;given
I have ___ my keys.|lost|losed;lose
We ___ the match last Sunday.|won|winned;win
The bridge was ___ in 1990.|built|builded;build
They ___ to the airport at 5.|drove|drived;driven
I've ___ a lot of water today.|drunk|drank;drinked|Present Perfect – 3. forma.
The machine ___ a lot of money last year.|cost|costed;costs|Cost – cost – cost.
He has ___ three emails this morning.|written|wrote;writed` },
{ id: "past-cont", lvl: "A2", title: "Past Continuous", sum: "I was working when...",
  rules: ["**was / were + -ing** – czynność w toku w przeszłości: At 8 p.m. I **was watching** TV.",
    "Tło dla krótkiego wydarzenia: I **was driving** when the phone **rang**.",
    "**while** + Past Continuous: While I was welding, the power went off.",
    "Dwie równoczesne czynności: She was reading and he was cooking.",
    "Czasowniki stanu (know, like) bez -ing."],
  ex: `At 9 p.m. yesterday I ___ TV.|was watching|watched;were watching
They ___ football when it started to rain.|were playing|was playing;played
I ___ when the phone rang.|was driving|drove;were driving
What ___ you doing at 6 a.m.?|were|was;did
While she ___, the power went off.|was welding|welded;were welding
We ___ lunch when the boss came in.|were having|was having;had
He ___ the bolts when he hurt his hand.|was tightening|tightened;were tightening
It ___ all morning, so we stayed inside.|was raining|were raining;is raining` },
{ id: "adverbs", lvl: "A2", title: "Quick czy quickly?", sum: "Przymiotnik i przysłówek.",
  rules: ["Przymiotnik opisuje rzecz lub osobę: a **careful** driver.",
    "Przysłówek opisuje czynność: he drives **carefully**.",
    "Tworzymy przez **-ly**: slow → slowly; -y → **-ily**: easy → easily.",
    "Nieregularne: good → **well**, fast → fast, hard → hard, late → late, early → early.",
    "Po **be, look, feel, sound, seem** – przymiotnik: You look tired."],
  ex: `He drives very ___.|carefully|careful;carefuly
She speaks English very ___.|well|good;goodly
He works ___.|hard|hardly;hardy|Hardly znaczy „ledwie”.
Please speak ___.|slowly|slow;slowy
You look ___. Are you OK?|tired|tiredly;tiring|Po look przymiotnik.
I passed the exam ___.|easily|easy;easyly
The weld looks ___.|good|well;goodly|Po look przymiotnik.
She is a ___ worker.|quick|quickly;quicky` },
{ id: "too-enough", lvl: "A2", title: "Too i enough", sum: "Za dużo, za mało, wystarczająco.",
  rules: ["**too** + przymiotnik = za, zbyt: too hot, too expensive.",
    "przymiotnik + **enough** = wystarczająco: big enough, old enough.",
    "**enough** + rzeczownik: enough time, enough bolts.",
    "**not ... enough** = za mało: It isn't warm enough.",
    "**too much** + niepoliczalne, **too many** + policzalne."],
  ex: `This coffee is ___ hot to drink.|too|enough;very
He isn't old ___ to drive.|enough|too;so
We don't have ___ time.|enough|too;too many
There are ___ people here.|too many|too much;enough of
This bolt isn't long ___.|enough|too;very
The car is ___ expensive for me.|too|enough;much
I drank ___ coffee today.|too much|too many;enough too
Is the room big ___ for ten people?|enough|too;so` },
{ id: "prep-move", lvl: "A2", title: "Przyimki ruchu", sum: "into, out of, across, through.",
  rules: ["**into** (do środka), **out of** (z wnętrza), **onto** (na).",
    "**across** (na drugą stronę), **through** (przez, na wskroś), **along** (wzdłuż).",
    "**up / down** (w górę / w dół), **past** (obok, mijając), **towards** (w kierunku), **over** (nad).",
    "Ruch: walk **into** the hall; miejsce: be **in** the hall."],
  ex: `He walked ___ the room.|into|in;on
She took the keys ___ her bag.|out of|out;from in
We walked ___ the river to the bridge.|along|across;into
The cat jumped ___ the table.|onto|into;along
We drove ___ the tunnel.|through|across;along
Go ___ the stairs to the first floor.|up|on;over
The plane flew ___ the clouds.|over|along;onto
Walk ___ the bank and turn left.|past|into;onto` },
{ id: "like-would", lvl: "A2", title: "Like czy would like?", sum: "Lubię czy chciałbym.",
  rules: ["**like** = lubić (ogólnie): I like coffee. **like + -ing**: I like flying.",
    "**would like** ('d like) = chciałbym (teraz, grzecznie): I'd like a coffee, please.",
    "**would like + to**: I'd like to fly.",
    "**Would you like**...? – propozycja. **Do you like**...? – pytanie o gust."],
  ex: `I ___ coffee. I drink it every day.|like|'d like;would like
___ a cup of tea? – Yes, please.|Would you like|Do you like;Are you like
I'd like ___ a table for two.|to book|booking;book
___ swimming? – Yes, I love it.|Do you like|Would you like;Are you like
I'd like ___ the manager, please.|to see|seeing;see
She likes ___ in the garden.|working|work;to working
What ___ to drink?|would you like|do you like;you like
One day I ___ to fly to New York.|'d like|like;am like` },
{ id: "pp-intro", lvl: "A2", title: "Present Perfect – pierwsze kroki", sum: "Have you ever...? I've never...",
  rules: ["**have / has + 3. forma** – doświadczenie życiowe: I **have been** to London.",
    "**ever** (kiedykolwiek) w pytaniach: Have you ever flown a plane?",
    "**never** (nigdy): I've never seen it.",
    "**been** = byłem i wróciłem; **gone** = pojechał i nadal tam jest.",
    "Krótkie odpowiedzi: Yes, I have. / No, I haven't."],
  ex: `Have you ___ been to Spain?|ever|never;yet
I've ___ eaten sushi. I'd like to try it.|never|ever;yet
She ___ visited Paris three times.|has|have;is
Have you ___ a plane?|ever flown|flown ever;ever flew
Tom isn't here. He's ___ to the shop.|gone|been;go|Poszedł i jeszcze nie wrócił.
I've ___ to Rome. It was great.|been|gone;go
Have you seen this film? – Yes, I ___.|have|did;am
They ___ never worked abroad.|have|has;are` },
{ id: "pres-perfect", lvl: "B1", title: "Present Perfect czy Past Simple?", sum: "Doświadczenia kontra konkretna przeszłość.",
  rules: ["**Present Perfect** (have / has + 3. forma) – doświadczenie bez podania, kiedy: I've been to London.",
    "Skutek widoczny teraz: I've lost my keys (i nadal ich nie mam).",
    "Z **already, yet, just, ever, never** i **for / since**: I've worked here for 5 years / since 2019.",
    "**Past Simple** – gdy mówimy, kiedy: yesterday, ago, last year, in 2019 → zawsze Past Simple.",
    "**for** = przez (okres), **since** = od (punkt w czasie)."],
  ex: `I ___ to Spain three times.|have been|went;was|Doświadczenie bez podania, kiedy.
I ___ to Spain in 2018.|went|have been;have gone|Jest konkretny rok, więc Past Simple.
Have you ___ flown a plane?|ever|yet;already
She ___ here since 2015.|has worked|works;worked|Since + trwa do teraz.
I've lived here ___ ten years.|for|since;from
I've lived here ___ 2016.|since|for;from
We ___ the order yet.|haven't finished|didn't finish;don't finish
He ___ the job two weeks ago.|started|has started;starts|Ago → Past Simple.
I've ___ finished the report. Here it is.|just|yet;ever
___ you seen my calliper? I can't find it.|Have|Did;Do` },
{ id: "cond-1-2", lvl: "B1", title: "Okresy warunkowe 0, 1 i 2", sum: "If it rains... / If I were...",
  rules: ["**Zerowy**: If + Present Simple, Present Simple – zawsze prawda: If you heat ice, it melts.",
    "**Pierwszy**: If + Present Simple, **will** – realne w przyszłości: If it rains, we'll stay home.",
    "**Drugi**: If + Past Simple, **would** – nierealne, hipotetyczne: If I had money, I would buy a plane.",
    "W drugim okresie **were** dla wszystkich osób: If I / he / she **were**... Rada: **If I were you**, I would...",
    "Po **if** nie ma will: If he comes (nie: if he will come). **unless** = if not."],
  ex: `If it ___ tomorrow, we'll cancel the flight.|rains|will rain;rained|Po if nie ma will.
If I ___ rich, I would buy a plane.|were|am;will be|Drugi okres: were (też dla I).
If you heat water to 100°C, it ___.|boils|would boil;boiled
If you don't hurry, you ___ the bus.|'ll miss|miss;would miss
If I ___ you, I'd take the job.|were|am;would be|Stała rada: If I were you.
What would you do if you ___ the lottery?|won|win;will win
I don't want to go alone. I won't go ___ you come with me.|unless|if;when|Unless = if not: nie pójdę, jeśli ty nie pójdziesz.
If she ___ more time, she would learn Spanish.|had|has;will have
We'll start the test if the parts ___ on time.|arrive|will arrive;arrived` },
{ id: "passive", lvl: "B1", title: "Strona bierna", sum: "The frame is welded...",
  rules: ["**be + 3. forma** – ważna czynność, nie wykonawca: The frame **is welded** in Hall 2.",
    "Czasy: is made / was made / has been made / will be made; z modalem: must **be checked**.",
    "Wykonawca z **by**: The bridge was designed by a famous engineer.",
    "Bardzo częsta w instrukcjach i dokumentacji technicznej."],
  ex: `The parts ___ in Germany.|are made|make;are making
This bridge ___ in 1920.|was built|built;is built
All welds must ___ before painting.|be inspected|inspected;inspect
The report ___ yet.|hasn't been sent|didn't send;doesn't send
The new machine ___ next week.|will be delivered|will deliver;is delivering
The plane ___ by an experienced pilot.|was flown|flew;was flew
English ___ all over the world.|is spoken|speaks;is speaking
The holes ___ after welding.|are drilled|drill;are drilling` },
{ id: "gerund", lvl: "B1", title: "-ing czy to + czasownik?", sum: "enjoy flying, want to fly.",
  rules: ["Po **enjoy, finish, avoid, mind, suggest, consider, keep, practise** → **-ing**: I enjoy flying.",
    "Po **want, decide, plan, hope, agree, refuse, manage, afford, learn** → **to** + czasownik: I want to learn.",
    "Po przyimkach zawsze **-ing**: interested in flying, good at welding, before leaving.",
    "**like, love, hate, start** – oba możliwe. **would like** + to: I'd like to try.",
    "**stop smoking** (przestać palić) ≠ **stop to smoke** (zatrzymać się, żeby zapalić)."],
  ex: `I enjoy ___ in the mountains.|walking|to walk;walk
We decided ___ a new machine.|to buy|buying;buy
He's interested in ___ a pilot.|becoming|to become;become|Po przyimku -ing.
Would you mind ___ the window?|opening|to open;open
I can't afford ___ a new car.|to buy|buying;buy
She finished ___ the report at 5.|writing|to write;write
Avoid ___ the weld too quickly.|cooling|to cool;cool
I'd like ___ you for your help.|to thank|thanking;thank
He stopped ___ ten years ago. Now he doesn't smoke.|smoking|to smoke;smoke` },
{ id: "relative", lvl: "B1", title: "Zdania względne", sum: "who, which, that, where, whose.",
  rules: ["**who** – ludzie: The welder who fixed it is new.",
    "**which** – rzeczy: The machine which broke is old.",
    "**that** – ludzie i rzeczy w zdaniach definiujących (bez przecinków, informacja niezbędna): The man that called you is here.",
    "**where** – miejsca; **whose** – czyj: the man whose car was stolen.",
    "Dodatkowa informacja w przecinkach – tylko who / which, nie that: My boss, who is from Berlin, ..."],
  ex: `The engineer ___ designed this is on holiday.|who|which;where
This is the hall ___ we assemble the frames.|where|which;who
The machine ___ we bought last year is broken.|that|who;where
That's the man ___ car was stolen.|whose|who;which
My boss, ___ is from Berlin, speaks Polish.|who|that;which|W przecinkach nie używamy that.
The drawing, ___ I sent yesterday, has an error.|which|that;what
Do you know anyone ___ speaks Japanese?|who|which;whose
I like the town ___ I grew up.|where|which;that` },
{ id: "used-to", lvl: "B1", title: "Used to i be used to", sum: "Kiedyś tak było / jestem przyzwyczajony.",
  rules: ["**used to** + czasownik – dawne zwyczaje i stany, które minęły: I used to smoke.",
    "Przeczenie i pytanie: **didn't use to**, **Did you use to...?**",
    "**be used to + -ing** – być przyzwyczajonym: I'm used to working nights.",
    "**get used to + -ing** – przyzwyczajać się: You'll get used to it."],
  ex: `I ___ live in Wrocław, but now I live in Gliwice.|used to|use to;was used to
Did you ___ play football at school?|use to|used to;using to|Po did – use to.
I'm used to ___ early.|getting up|get up;got up
She didn't ___ like coffee.|use to|used to;uses to
It's hard, but you'll get used to ___ English at work.|speaking|speak;spoke
There ___ be a cinema here.|used to|is used to;use to` },
{ id: "reported", lvl: "B1", title: "Mowa zależna", sum: "He said (that) he was tired.",
  rules: ["Czas zwykle cofa się o krok: \"I am tired\" → He said he **was** tired.",
    "Present → Past, Past i Present Perfect → Past Perfect, will → **would**, can → **could**.",
    "Zmieniają się określenia: today → that day, tomorrow → the next day, here → there.",
    "**say** (bez osoby) / **tell** + osoba: She said that... / She told me that...",
    "Pytania mają szyk zdania twierdzącego: She asked where I **lived**.",
    "Pytania tak / nie: **if / whether**: \"Are you ready?\" → He asked **if** I was ready."],
  ex: `"I'm busy." → He said he ___ busy.|was|is;were
"I will call you." → She said she ___ call me.|would|will;can
She ___ me that she was leaving.|told|said;spoke|Tell + osoba.
He ___ that the parts were ready.|said|told;talked|Say bez osoby.
"Where do you live?" → He asked me where I ___.|lived|do live;did live
"Can you help?" → She asked if I ___ help.|could|can;will
"I've finished." → He said he ___ finished.|had|has;have` },
{ id: "past-perfect", lvl: "B1", title: "Past Perfect", sum: "Coś stało się wcześniej.",
  rules: ["**had + 3. forma** – coś wydarzyło się wcześniej niż inne zdarzenie w przeszłości: When I arrived, the train **had left**.",
    "Porównaj: When I arrived, the train **left** (odjechał, kiedy przyjechałem).",
    "Często z already, just, never, before, **by the time**.",
    "W mowie zależnej: He said he **had finished**."],
  ex: `When we got to the station, the train ___.|had left|has left;leaves
I ___ never seen the sea before I was ten.|had|have;was
By the time the boss arrived, we ___ the job.|had finished|have finished;finish
She was tired because she ___ all night.|hadn't slept|hasn't slept;doesn't sleep
I realised I ___ my keys at home.|had left|have left;leave
After he ___ the report, he went home.|had written|has written;writes
They ___ already eaten when we came.|had|have;were
It was the first time I ___ a plane.|had flown|have flown;fly` },
{ id: "pp-cont", lvl: "B1", title: "Present Perfect Continuous", sum: "I've been working here since...",
  rules: ["**have / has been + -ing** – czynność trwa od przeszłości do teraz: I've been working here for 5 years.",
    "Z **for / since** i **How long...?**",
    "Nacisk na czas trwania. Present Perfect Simple – na wynik: I've written 3 emails / I've been writing emails all morning.",
    "Widoczny skutek: You're tired – have you been running?",
    "Czasowniki stanu bez -ing: I've **known** him for years."],
  ex: `I ___ here since 2018.|have been working|am working;work
How long ___ you been learning English?|have|did;are
She's tired. She ___ all day.|has been working|is working;works
It ___ for three hours.|has been raining|is raining;rains
I've ___ him for ten years.|known|been knowing;know|Know to czasownik stanu.
We've been waiting ___ 9 o'clock.|since|for;from
I've ___ three emails this morning.|written|been writing;wrote|Liczymy wynik, więc Present Perfect Simple.
Your hands are dirty. ___ you been repairing the bike?|Have|Did;Are` },
{ id: "tags", lvl: "B1", title: "Question tags", sum: "It's cold, isn't it?",
  rules: ["Krótkie pytanie na końcu („prawda?”, „nie?”).",
    "Zdanie twierdzące → przeczący tag: It's cold, **isn't it**?",
    "Zdanie przeczące → twierdzący tag: You aren't busy, **are you**?",
    "Ten sam czasownik posiłkowy: You work here, **don't you**? She can swim, **can't she**? They went, **didn't they**?",
    "Wyjątki: I'm → **aren't I**? Let's → **shall we**?"],
  ex: `It's cold today, ___?|isn't it|is it;doesn't it
You work in Gliwice, ___?|don't you|do you;aren't you
She can't drive, ___?|can she|can't she;does she
They finished the job, ___?|didn't they|haven't they;did they
You aren't tired, ___?|are you|aren't you;do you
He has been to London, ___?|hasn't he|doesn't he;isn't he
I'm late, ___?|aren't I|am I;isn't I
Let's go, ___?|shall we|will we;don't we` },
{ id: "indirect", lvl: "B1", title: "Pytania pośrednie", sum: "Could you tell me where...?",
  rules: ["Grzeczne pytania: **Could you tell me...**, **Do you know...**, **I wonder...**",
    "Po takim wstępie szyk zdania twierdzącego, bez do / does / did.",
    "Where is the station? → Could you tell me where **the station is**?",
    "What time does it start? → Do you know what time **it starts**?",
    "Pytania tak / nie: **if / whether**: Do you know if he's coming?"],
  ex: `Could you tell me where ___?|the station is|is the station;does the station
Do you know what time ___?|the shop opens|does the shop open;opens the shop
I wonder ___ he will come.|if|that;what
Can you tell me how much ___?|it costs|does it cost;costs it
Do you know ___ she lives?|where|where does;that
Could you tell me when ___?|the train leaves|does the train leave;leaves the train
I'd like to know why ___ late.|you were|were you;did you
Do you know ___ the parts have arrived?|whether|that;what` },
{ id: "dep-prep", lvl: "B1", title: "Przyimki po czasownikach i przymiotnikach", sum: "depend on, interested in, good at.",
  rules: ["Wiele słów łączy się ze stałym przyimkiem – ucz się ich w parach.",
    "Czasowniki: depend **on**, wait **for**, listen **to**, apply **for**, belong **to**, agree **with**, pay **for**.",
    "Przymiotniki: interested **in**, good **at**, afraid **of**, proud **of**, responsible **for**, similar **to**, different **from**.",
    "Po przyimku czasownik z **-ing**: I'm good at welding."],
  ex: `It depends ___ the weather.|on|of;from
I'm interested ___ aviation.|in|on;for
She's very good ___ maths.|at|in;on
He's afraid ___ flying.|of|from;for
We're waiting ___ the delivery.|for|on;to
Who is responsible ___ quality control?|for|of;on
I applied ___ a new job.|for|to;on
This model is similar ___ the old one.|to|with;as
Listen ___ me!|to|–;on
I agree ___ you.|with|to;on` },
{ id: "make-do", lvl: "B1", title: "Make czy do?", sum: "make a mistake, do homework.",
  rules: ["**make** – tworzenie, produkcja, rezultat: make a decision, make a mistake, make money, make a plan, make a phone call, make friends, make noise.",
    "**do** – czynności, praca, obowiązki: do homework, do the shopping, do your best, do business, do a job, do exercise, do someone a favour.",
    "Pytanie o zawód: What **do** you **do**?"],
  ex: `I need to ___ a decision.|make|do;have
Everyone ___ mistakes.|makes|does;takes
Can you ___ me a favour?|do|make;give
I ___ my homework in the evening.|do|make;take
We ___ a lot of money last year.|made|did;took
Let's ___ business together.|do|make;work
Don't ___ so much noise!|make|do;have
I'll ___ my best.|do|make;have
She ___ friends easily.|makes|does;has
Who ___ the shopping in your house?|does|makes;goes` },
{ id: "both-either", lvl: "B1", title: "Both, either, neither, each, every", sum: "Oba, któryś, żaden, każdy.",
  rules: ["**both** – obaj, oba: Both machines are new. **both ... and**.",
    "**either** – jeden lub drugi (obojętnie który): You can use either drill. **either ... or**.",
    "**neither** – żaden z dwóch: Neither answer is correct. **neither ... nor**.",
    "**each** – każdy z osobna; **every** – każdy (ogólnie); **all** – wszyscy, wszystkie."],
  ex: `___ my brothers are pilots.|Both|Either;Neither
You can take ___ bus – both go to the centre.|either|both;neither
___ of the answers is correct. They're both wrong.|Neither|Either;Both
I like ___ tea and coffee.|both|either;neither
We can meet ___ on Monday or on Tuesday.|either|neither;both
___ he nor his wife speaks English.|Neither|Either;Both
___ worker has a locker.|Every|All;Both
___ the parts were checked.|All|Every;Each` },
{ id: "reflexive", lvl: "B1", title: "Myself, yourself, each other", sum: "Zaimki zwrotne.",
  rules: ["**myself, yourself, himself, herself, itself, ourselves, yourselves, themselves** – gdy podmiot robi coś sobie: I cut **myself**.",
    "Także „sam”: I did it **myself**. **by myself** = w pojedynkę.",
    "**each other** = nawzajem: They help each other.",
    "Zwykle bez zaimka po: wash, dress, relax, feel, meet: I feel tired (nie: feel myself)."],
  ex: `Be careful, don't cut ___!|yourself|you;yourselves
She made the cake ___.|herself|her;himself
We enjoyed ___ at the party.|ourselves|us;ourself
The machine turns ___ off.|itself|it;himself
They love ___ – they're getting married.|each other|themselves;theirselves
I live by ___.|myself|me;mine
He hurt ___ at work.|himself|him;hisself
Help ___ to some coffee.|yourself|you;yours` },
{ id: "time-clauses", lvl: "B1", title: "When, as soon as, until + czas teraźniejszy", sum: "I'll call you when I arrive.",
  rules: ["Po **when, as soon as, before, after, until, while** o przyszłości – czas teraźniejszy, nie will: I'll call you when I **arrive**.",
    "We won't start until the parts **arrive**.",
    "Można też Present Perfect: I'll go home when I **have finished**.",
    "**will** stoi w drugiej części zdania."],
  ex: `I'll call you when I ___.|arrive|will arrive;arrived
As soon as the parts ___, we'll start.|arrive|will arrive;arrived
We won't leave until the rain ___.|stops|will stop;stopped
Before you ___ the machine, check the oil.|start|will start;started
I'll go home after I ___ the report.|have finished|will finish;had finished
She ___ you when she gets back.|will call|calls;called
Wait here until I ___ back.|come|will come;came
When I ___ my licence, I'll fly to Gdańsk.|get|will get;got` },
{ id: "confusing-1", lvl: "B1", title: "Często mylone słowa", sum: "borrow / lend, say / tell, lose / loose.",
  rules: ["**borrow** (pożyczać od kogoś) / **lend** (pożyczać komuś).",
    "**say** (powiedzieć coś) / **tell** (powiedzieć komuś).",
    "**lose** (gubić) / **loose** (luźny).",
    "**bored** (znudzony) / **boring** (nudny). **fun** (zabawa) / **funny** (zabawny).",
    "**sympathetic** = współczujący (nie „sympatyczny” – to **nice**). **eventually** = w końcu (nie „ewentualnie”)."],
  ex: `Can I ___ your pen?|borrow|lend;rent
Could you ___ me some money?|lend|borrow;rent
She ___ me the truth.|told|said;spoke
He ___ that he was tired.|said|told;spoke
Don't ___ your ticket!|lose|loose;miss
This bolt is ___. Tighten it.|loose|lose;lost
The film was very ___. I fell asleep.|boring|bored;bore
I was ___, so I went for a walk.|bored|boring;bore
We had a lot of ___ at the party.|fun|funny;funs
Our new boss is very ___. Everyone likes him.|nice|sympathetic;sensible|Sympathetic znaczy „współczujący”.
After many hours we ___ found the problem.|eventually|actually;possibly` },
{ id: "cond-3", lvl: "B2", title: "Trzeci okres warunkowy i I wish", sum: "Gdybym wtedy... / Szkoda, że...",
  rules: ["**Trzeci**: If + Past Perfect, **would have** + 3. forma – przeszłość nie do zmiany: If I had left earlier, I would have caught the train.",
    "**Mieszany**: If + Past Perfect, **would** + czasownik – skutek teraz: If I had studied, I would be an engineer now.",
    "**I wish / If only** + Past Simple – żal o teraźniejszość: I wish I had more time.",
    "**I wish** + Past Perfect – żal o przeszłość: I wish I hadn't said that.",
    "**I wish** + would – irytacja: I wish you would stop."],
  ex: `If we ___ the weld, the frame wouldn't have cracked.|had checked|checked;would check
If I had known, I ___ you.|would have told|would tell;had told
If she hadn't missed the flight, she ___ here now.|would be|would have been;is|Skutek teraz – okres mieszany.
I wish I ___ more free time.|had|have;will have
I wish I ___ that email. It was a mistake.|hadn't sent|didn't send;wouldn't send
If he ___ harder, he would have passed.|had studied|studied;would study
I wish you ___ interrupting me!|would stop|stopped;stop
If only I ___ the answer!|knew|know;would know` },
{ id: "narrative", lvl: "B2", title: "Czasy w opowiadaniu", sum: "Łączenie Past Simple, Continuous i Perfect.",
  rules: ["**Past Continuous** (was / were + -ing) – tło, czynność w toku: I was welding when the power went off.",
    "**Past Simple** – kolejne zdarzenia, przerwanie: The power went off.",
    "**Past Perfect** (had + 3. forma) – wcześniej niż inne zdarzenie: When I arrived, the meeting had started.",
    "**Past Perfect Continuous** – jak długo trwało wcześniej: I had been waiting for an hour.",
    "Zwykle **while** + continuous, **when** + simple."],
  ex: `I ___ dinner when you called.|was cooking|cooked;had cooked
When we got to the airport, the plane ___.|had already left|has already left;already leaves
While she ___ the box, she hurt her back.|was lifting|had lifted;lifts
He was tired because he ___ all night.|had been working|was working;has worked
I ___ the film before, so I didn't watch it.|had seen|saw;have seen
The sun ___ and the birds were singing.|was shining|shone;had shone|Tło opowieści.
When I opened the door, I saw that someone ___ the window.|had broken|broke;was breaking` },
{ id: "deduction", lvl: "B2", title: "Must have, might have, can't have", sum: "Wnioskowanie i przypuszczenia.",
  rules: ["Teraz: **must** (na pewno), **might / may / could** (może), **can't** (na pewno nie): He must be tired.",
    "Przeszłość: **must have** + 3. forma, **might have** + 3. forma, **can't have** + 3. forma: The weld must have cooled too fast.",
    "**should have** + 3. forma – krytyka lub żal: You should have told me.",
    "**needn't have** + 3. forma – zrobione niepotrzebnie."],
  ex: `He's worked 12 hours. He ___ be exhausted.|must|can't;should
She ___ be at home – I've just seen her in the office.|can't|must;might
The crack ___ have been caused by fatigue, but we're not sure.|might|must;can't|Nie jesteśmy pewni.
I can't find my keys. I ___ have left them in the car.|must|should;needn't
You ___ have told me earlier! Now it's too late.|should|must;might
He ___ have seen us – he was looking the other way.|can't|must;should
We ___ have hurried – the meeting was cancelled.|needn't|mustn't;can't` },
{ id: "art-adv", lvl: "B2", title: "Przedimki – trudniejsze przypadki", sum: "hospital, the Alps, the rich.",
  rules: ["Instytucje w swojej funkcji bez the: go to **hospital / school / prison**; jako budynek: the school.",
    "**the** + przymiotnik = grupa ludzi: the rich, the elderly, the unemployed.",
    "**the** – rzeki, morza, oceany, łańcuchy gór: the Vistula, the Alps; bez the – pojedyncze szczyty i jeziora: Mount Everest, Lake Como.",
    "Instrumenty z the (play **the** guitar), sporty bez (play football).",
    "**the** przy stopniu najwyższym i liczebnikach porządkowych: the best, the first."],
  ex: `He was taken to ___ hospital after the accident.|–|the;a
___ Alps are beautiful in winter.|The|–;A
We should help ___ poor.|the|–;a
She plays ___ piano very well.|the|–;a
We sailed across ___ Atlantic.|the|–;an
They climbed ___ Mount Everest.|–|the;a
He's ___ best welder I know.|the|a;–
I play ___ tennis on Saturdays.|–|the;a` },
{ id: "causative", lvl: "B2", title: "Have something done, it is said", sum: "Zlecanie i konstrukcje bezosobowe.",
  rules: ["**have / get** + przedmiot + 3. forma – ktoś robi coś dla nas: I had my car repaired.",
    "We're having the frames galvanised = ktoś nam je ocynkuje.",
    "**It is said / believed that...** – bezosobowo: It is believed that the fire started in the kitchen.",
    "**He is said / thought to...**: He is thought to be the best."],
  ex: `I ___ my hair cut yesterday.|had|did;made
We're having the frames ___ next week.|galvanised|galvanise;galvanising
It ___ that the company will close.|is said|says;is saying
She is believed ___ the country.|to have left|leaving;that she left
You should get your eyes ___.|tested|test;testing
The plane is thought ___ into the sea.|to have crashed|crashed;crashing` },
{ id: "future-adv", lvl: "B2", title: "Future Continuous i Future Perfect", sum: "I'll be flying / I'll have finished.",
  rules: ["**Future Continuous** (will be + -ing) – w toku w danym momencie przyszłości: This time tomorrow I'**ll be flying** to Rome.",
    "**Future Perfect** (will have + 3. forma) – zakończone przed danym momentem: By Friday we'**ll have finished** the order.",
    "**by** + czas = do, najpóźniej: by 5 p.m., by next year.",
    "Grzeczne pytanie o plany: **Will you be using** the car tonight?"],
  ex: `This time tomorrow I ___ to Rome.|will be flying|will fly;fly
By Friday we ___ the order.|will have finished|will finish;are finishing
Don't call at 8 – we ___ dinner.|will be having|will have had;have
By 2030 I ___ my pilot licence.|will have got|get;am getting
___ you be using the car tonight?|Will|Do;Are
In ten years she ___ here for 20 years.|will have worked|will work;works
At noon tomorrow I ___ the client.|will be meeting|will have met;meet
By the time you arrive, I ___ the report.|will have finished|finish;am finishing` },
{ id: "reporting-verbs", lvl: "B2", title: "Czasowniki relacjonujące", sum: "deny doing, advise sb to do.",
  rules: ["**suggest, deny, admit, recommend** + **-ing**: He denied stealing the money.",
    "**advise, warn, remind, ask, encourage, tell** + osoba + **to**: She advised me to rest.",
    "**agree, refuse, offer, promise, threaten** + **to**: He refused to help.",
    "**apologise for** + -ing, **accuse sb of** + -ing, **insist on** + -ing.",
    "**suggest that** + osoba + forma podstawowa (bez to): He suggested that we leave early."],
  ex: `He denied ___ the money.|taking|to take;take
She advised me ___ a doctor.|to see|seeing;see
They refused ___ the contract.|to sign|signing;sign
He apologised ___ late.|for being|to be;for be
She suggested ___ a break.|taking|to take;take
The doctor warned me not ___ so much.|to eat|eating;eat
He admitted ___ a mistake.|making|to make;make
They accused him ___ the documents.|of losing|for losing;to lose
He offered ___ me to the airport.|to drive|driving;drive` },
{ id: "had-better", lvl: "B2", title: "Had better, would rather, be supposed to", sum: "Lepiej, wolałbym, mam (powinienem).",
  rules: ["**had better** ('d better) + czasownik – mocna rada, ostrzeżenie: You'd better check the gas. Przeczenie: You'd better **not** be late.",
    "**would rather** ('d rather) + czasownik – wolałbym: I'd rather stay at home. ... **than** ...",
    "**would rather** + osoba + Past Simple: I'd rather you **didn't** smoke.",
    "**be supposed to** – mieć coś zrobić (oczekiwanie, plan, przepisy): You're supposed to wear a helmet."],
  ex: `It's late. You'd better ___ home.|go|to go;going
You'd better ___ late for the meeting.|not be|don't be;not to be
I'd rather ___ at home tonight.|stay|to stay;staying
I'd rather you ___ me in advance.|told|tell;will tell
You're supposed ___ a helmet here.|to wear|wear;wearing
The plane was supposed ___ at 6, but it was late.|to land|landing;land
I'd rather walk ___ take the bus.|than|that;to
We'd better ___ the weld before painting.|check|to check;checking` },
{ id: "word-formation", lvl: "B2", title: "Słowotwórstwo", sum: "success, helpful, illegal, development.",
  rules: ["Rzeczowniki: **-ment** (develop → development), **-ness** (happy → happiness), **-tion / -sion** (decide → decision), **-ity** (able → ability), **-er / -or** (manage → manager).",
    "Przymiotniki: **-ful** (help → helpful), **-less** (care → careless), **-able / -ible** (rely → reliable), **-ous** (danger → dangerous), **-ive** (effect → effective).",
    "Przeczenia: **un-** (unhappy), **in- / im- / il- / ir-** (impossible, illegal, irregular), **dis-** (dishonest), **mis-** (misunderstand).",
    "**over- / under-** – za dużo / za mało: overcook, underpaid.",
    "Patrz na miejsce w zdaniu: przed rzeczownikiem – przymiotnik, przy czasowniku – przysłówek. Więcej ćwiczeń w trybie **„Słowotwórstwo”**."],
  ex: `The project was a great ___.|success|successful;succeed
She is very ___ – she always helps.|helpful|helpless;helping
It's ___ to park here. You'll get a fine.|illegal|unlegal;dislegal
He drives very ___.|carelessly|careless;carefulness
The ___ of the new machine took a year.|development|developing;develop
There's no ___ in what you say.|truth|true;truly
I ___ the instructions and did it wrong.|misunderstood|disunderstood;ununderstood
The welders are ___ – they deserve more money.|underpaid|overpaid;mispaid
Her ___ to stay calm is amazing.|ability|able;ableness
This method is more ___.|effective|effect;effection` },
{ id: "the-more", lvl: "B2", title: "The more..., the more...", sum: "Im więcej, tym lepiej.",
  rules: ["**the + stopień wyższy ..., the + stopień wyższy** – im..., tym...",
    "The more you practise, the better you get.",
    "The harder you work, the more you earn.",
    "Krótko: **The sooner, the better.**"],
  ex: `The more you practise, ___ you get.|the better|better;the best
___ you start, the sooner you finish.|The earlier|Earlier;The earliest
The bigger the plane, ___ fuel it uses.|the more|more;the most
___ I know him, the more I like him.|The more|More;The most
The faster you weld, ___ the quality.|the lower|lower;the lowest
"When should I come?" – "___, the better."|The sooner|Sooner;The soonest` },
{ id: "would-habits", lvl: "B2", title: "Would – dawne zwyczaje", sum: "When I was a kid, we would...",
  rules: ["**would** + czasownik – powtarzające się czynności w przeszłości (styl opowieści): Every summer we would go fishing.",
    "**used to** – zwyczaje i stany; **would** – tylko czynności, nie stany.",
    "I **used to** have a dog (nie: I would have a dog).",
    "Na początku opowieści zwykle used to, dalej would."],
  ex: `When I was a child, my grandpa ___ tell me stories every evening.|would|used;was
I ___ have long hair when I was a student.|used to|would;was used to|Stan – tylko used to.
Every summer we ___ go to the lake.|would|will;were
She ___ live in London.|used to|would;was
He ___ be very shy as a boy.|used to|would;use to
After work, we ___ meet in the same café.|would|will;used` },
{ id: "contrast", lvl: "B2", title: "Although, despite, however, whereas", sum: "Kontrast i dodawanie argumentów.",
  rules: ["**although / even though / though** + zdanie: Although it was raining, we flew.",
    "**despite / in spite of** + rzeczownik albo -ing: Despite the rain, we flew. Despite being tired, he worked.",
    "**however** – na początku nowego zdania, z przecinkiem: It was raining. However, we flew.",
    "**whereas / while** – zestawienie dwóch rzeczy: I like tea, whereas my wife likes coffee.",
    "Dodawanie: **in addition, moreover, furthermore**."],
  ex: `___ the rain, we went for a walk.|Despite|Although;However
___ it was raining, we went for a walk.|Although|Despite;In spite of
It was expensive. ___, we bought it.|However|Although;Despite
In spite ___ tired, he finished the job.|of being|being;of be
I like tea, ___ my wife prefers coffee.|whereas|despite;however
The machine is fast. ___, it's cheap.|Moreover|However;Although
___ he's very experienced, he made a mistake.|Even though|Despite;However
Despite ___ the instructions, he did it wrong.|reading|he read;to read` },
{ id: "so-such", lvl: "B2", title: "So i such", sum: "so cold / such a cold day.",
  rules: ["**so** + przymiotnik lub przysłówek: It's so cold.",
    "**such (a)** + (przymiotnik +) rzeczownik: It's **such a** cold day. They're **such** nice people.",
    "Skutek: **so ... that / such ... that**: It was so hot that we stayed inside.",
    "**so much / so many** + rzeczownik."],
  ex: `It's ___ cold today!|so|such;such a
It's ___ cold day!|such a|so;such
They are ___ nice people.|such|so;such a
He drives ___ fast that I'm scared.|so|such;such a
It was ___ a good film that I watched it twice.|such|so;very
There were ___ many people that we couldn't get in.|so|such;such a
I've never seen ___ beautiful view.|such a|so;such
The weld was ___ bad that we had to grind it out.|so|such;such a` },
{ id: "confusing-2", lvl: "B2", title: "Często mylone słowa 2", sum: "affect / effect, rise / raise.",
  rules: ["**affect** (czasownik – wpływać) / **effect** (rzeczownik – skutek).",
    "**rise** (rosnąć – samo) / **raise** (podnosić coś): Prices rise. They raised prices.",
    "**economic** (gospodarczy) / **economical** (oszczędny).",
    "**principal** (główny) / **principle** (zasada). **complement** (uzupełniać) / **compliment** (komplement).",
    "**stationary** (nieruchomy) / **stationery** (artykuły biurowe). **lie** (leżeć) / **lay** (kłaść coś)."],
  ex: `Stress can ___ your health.|affect|effect;affection
The new rules had a big ___.|effect|affect;affection
Prices ___ every year.|rise|raise;arise
They ___ prices again.|raised|rose;rised
The ___ situation in the country is bad.|economic|economical;economics
This car is very ___ – it uses little fuel.|economical|economic;economics
It's against my ___ to lie.|principles|principals;principalities
Thank you for the ___!|compliment|complement;complimentary
Don't get off the bus until it is ___.|stationary|stationery;stationed
Don't ___ the tools on the floor.|lay|lie;lain` },
{ id: "inversion", lvl: "C1", title: "Inwersja", sum: "Never have I seen...",
  rules: ["Po przeczących wyrażeniach na początku zdania – szyk pytający: **Never have I** seen... **Rarely do we**...",
    "**Not only did he**..., but (also)...",
    "**No sooner had** ... **than**...; **Hardly had** ... **when**...",
    "**Only after / Only then** + inwersja: Only after the test did we notice the crack.",
    "Warunki bez if: **Had I known**..., **Should you need** help..., **Were I** you..."],
  ex: `Never ___ such a strong wind.|have I seen|I have seen;I saw
Not only ___ late, but he also forgot the documents.|was he|he was;he is
No sooner had we landed ___ it started to rain.|than|when;then|No sooner łączy się z than.
___ I known, I would have helped.|Had|If;Have
___ you need any help, please call me.|Should|Would;If you
Rarely ___ such good results.|do we see|we see;we do see
Only after the inspection ___ the defect.|did we notice|we noticed;we did notice
Hardly had I sat down ___ the phone rang.|when|than;that|Hardly łączy się z when.` },
{ id: "cleft", lvl: "C1", title: "Zdania wyróżniające (cleft)", sum: "It was Anna who... / What we need is...",
  rules: ["**It is / was ... that / who** – wyróżnia element: It was the welder who noticed the crack.",
    "**What** ... **is / was** – wyróżnia rzecz lub czynność: What we need is more time.",
    "**All (that)** ... **is**: All I want is some sleep.",
    "**The reason (why)** ... **is**: The reason why I called is the delivery."],
  ex: `___ was Anna who solved the problem.|It|That;What
___ we need is a better plan.|What|That;It
It was in 2019 ___ I started flying.|that|what;which
___ I want is a holiday.|All|That;It
The reason ___ I'm calling is the delivery.|why|what;because
What happened ___ that the machine overheated.|was|is that;did` },
{ id: "subjunctive", lvl: "C1", title: "Konstrukcje formalne", sum: "recommend that it be..., it's time we...",
  rules: ["Po **suggest, recommend, insist, demand, require** + that → forma podstawowa: We recommend that every weld **be** inspected.",
    "**It's (high) time** + Past Simple: It's time we **left**.",
    "**would rather** + osoba + Past Simple: I'd rather you **didn't** smoke here.",
    "**as if / as though** + Past Simple (nierealne): He talks as if he **were** the boss."],
  ex: `We recommend that the parts ___ checked twice.|be|are;will be
It's high time we ___ a decision.|made|make;will make
I'd rather you ___ tell anyone.|didn't|don't;won't
The boss demanded that she ___ the meeting.|attend|attends;will attend|Po demand that – forma podstawowa, bez -s.
He acts as if he ___ the owner.|were|is;will be
The client demands that the order ___ delivered by Friday.|be|is;will` },
{ id: "participle", lvl: "C1", title: "Imiesłowy w skróconych zdaniach", sum: "Having finished..., Built in 1920...",
  rules: ["**Having + 3. forma** – czynność wcześniejsza: Having finished the report, he went home.",
    "**-ing** – równocześnie lub przyczyna: Feeling tired, I went to bed.",
    "**3. forma** – znaczenie bierne: Made in Germany, the machine is very reliable.",
    "Podmiot obu części musi być ten sam (błąd: „Walking home, the rain started”).",
    "Przeczenie: **Not** knowing the answer, she stayed silent."],
  ex: `___ the report, he went home.|Having finished|Finished;Have finished
___ in 1920, the bridge is still in use.|Built|Building;Having building
___ tired, I went to bed early.|Feeling|Felt;Having feel
___ the answer, she said nothing.|Not knowing|Knowing not;Not known
___ by the noise, the dog started barking.|Frightened|Frightening;Having frighten
The man ___ to the manager is our client.|talking|talked;having talk` },
{ id: "if-alt", lvl: "C1", title: "Zamiast if: provided, unless, but for", sum: "Warunki bez „if” i okresy mieszane.",
  rules: ["**provided / providing (that), as long as** – pod warunkiem że.",
    "**unless** – chyba że; **otherwise** – w przeciwnym razie.",
    "**supposing / suppose** – załóżmy, że; **but for** + rzeczownik – gdyby nie.",
    "**in case** – na wypadek gdyby (to nie to samo co if!).",
    "Okres mieszany: If I **had taken** the job, I **would be** in London now."],
  ex: `___ the parts arrive today, we can start tomorrow.|Provided|Unless;In case
We won't finish ___ we get more staff.|unless|provided;in case
___ your help, we would have failed.|But for|Except;Unless
___ you won the lottery, what would you do?|Supposing|Unless;Provided
Take an umbrella ___ it rains.|in case|unless;provided
Hurry up, ___ we'll miss the flight.|otherwise|unless;provided
If I had accepted the offer, I ___ in Germany now.|would be living|would have lived;will live
If she weren't so shy, she ___ the presentation yesterday.|would have given|would give;gives` },
{ id: "adv-passive", lvl: "C1", title: "Strona bierna – zaawansowana", sum: "should have been done, being told.",
  rules: ["Z modalem w przeszłości: **should have been sent**, **must have been made**.",
    "**being + 3. forma**: I hate **being interrupted**.",
    "Bezokolicznik bierny: **to be done / to have been done**: He is said **to have been promoted**.",
    "**get + 3. forma** (potocznie): He **got fired**.",
    "Dwa dopełnienia: I **was given** a bonus. **need + -ing** = musi zostać zrobione: The machine needs servicing."],
  ex: `The report should ___ yesterday.|have been sent|been sent;have sent
I don't like ___ what to do.|being told|be told;telling
He is believed ___ the country last year.|to have left|to leave;leaving
The welds must ___ by an inspector before painting.|be checked|have checking;checked
All employees ___ a bonus last year.|were given|gave;were giving
He ___ fired for being late again.|got|was got;had
The bridge is thought ___ about 200 years ago.|to have been built|to be built;to build
The machine needs ___.|servicing|to service;being service` },
{ id: "emphasis", lvl: "C1", title: "Wzmacnianie wypowiedzi", sum: "I do understand, by far the best.",
  rules: ["**do / does / did** przed czasownikiem = naprawdę: I **do** understand. He **did** call me.",
    "Wzmocnienie stopnia: **by far** the best, **much / far / a lot** faster.",
    "**the very** + rzeczownik = właśnie ten: This is the very thing I need.",
    "W pytaniach: What **on earth** are you doing?",
    "W przeczeniach: not **at all**, no idea **whatsoever**."],
  ex: `I ___ understand your problem – really!|do|am;have
He ___ call me yesterday, I promise.|did|was;has
This is ___ the best method we have.|by far|very;so much
The new machine is ___ faster than the old one.|much|very;more
What ___ are you doing here?|on earth|in earth;at earth
I have no idea ___.|whatsoever|at all ever;however
This is the ___ thing I need.|very|much;so
I don't like it ___.|at all|whatsoever all;in all` },
{ id: "ellipsis", lvl: "C1", title: "So, not, one – unikanie powtórzeń", sum: "I hope so, neither do I, the red one.",
  rules: ["Tak: **I think so / I hope so.** Nie: **I hope not / I'm afraid not / I guess not** (nie: I don't hope so).",
    "**So do I** (ja też) / **Neither do I**, **Nor do I** (ja też nie) – z tym samym czasownikiem posiłkowym.",
    "**one / ones** zamiast rzeczownika: the red **one**, the new **ones**.",
    "Krótkie odpowiedzi z posiłkowym: \"Can you swim?\" – \"I **can**.\""],
  ex: `"Will it rain?" – "I hope ___."|not|no;don't
"Is he coming?" – "I think ___."|so|it;that
"I love flying." – "So ___ I."|do|am;love
"I don't eat meat." – "Neither ___ I."|do|don't;am
"I can't swim." – "Neither ___ I."|can|can't;do
This drill is broken. Can I use the new ___?|one|ones;it
I don't like these gloves. Have you got any other ___?|ones|one;it
"Have you finished?" – "Yes, I ___."|have|did;finished` },
{ id: "future-past", lvl: "C1", title: "Przyszłość w przeszłości i be to", sum: "I was going to..., you are to...",
  rules: ["**was / were going to** – zamierzałem (ale...): I was going to call you, but I forgot.",
    "**was about to** – właśnie miałem: I was about to leave when he came.",
    "**would** – przyszłość z perspektywy przeszłości: He said he **would** help.",
    "**be to** + czasownik – oficjalne polecenia i plany: You **are to** report to the manager.",
    "**was to have** + 3. forma – plan, który się nie udał."],
  ex: `I ___ call you, but I forgot.|was going to|am going to;will
We ___ leave when the phone rang.|were about to|are about to;would
He promised he ___ help us.|would|will;is going
All visitors ___ report to reception.|are to|are going;would
The president ___ visit the factory next week.|is to|was to;would
She was sure she ___ pass the exam.|would|will;is going to
The meeting ___ started at nine, but it was cancelled.|was to have|is to have;would` },
{ id: "modal-nuance", lvl: "C1", title: "Niuanse czasowników modalnych", sum: "needn't have, might as well, be bound to.",
  rules: ["**needn't have** + 3. forma – zrobiłeś, ale niepotrzebnie.",
    "**didn't need to** – nie było potrzeby (zwykle i nie zrobiłeś).",
    "**may / might well** – bardzo możliwe; **might as well** – równie dobrze możemy.",
    "**could have** + 3. forma – mogłeś (ale nie zrobiłeś).",
    "**be bound to** – na pewno (przewidywanie): He's bound to be late."],
  ex: `I ___ have bought milk – there was plenty in the fridge.|needn't|didn't need;mustn't
We ___ to hurry, so we walked slowly.|didn't need|needn't;mustn't
There's nothing else to do. We might ___ go home.|as well|well as;so well
Look at those clouds. It may ___ rain later.|well|good;much
You ___ have told me! I would have helped.|could|can;must
He's very good. He's ___ to win.|bound|bond;bounded
You ___ have been tired after such a long flight.|must|should;need` }
];

