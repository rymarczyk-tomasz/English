/* Situations and sentence translation. */
const SIT_RAW = `A1|Zapytaj kolegę, jak ma na imię tamta kobieta.|What's her name?;What is her name?;What's that woman's name?;What is that woman's name?
A1|Zapytaj kolegę, jak ma na imię tamten mężczyzna.|What's his name?;What is his name?;What's that man's name?;What is that man's name?
A1|Zapytaj rozmówcę, jak ma na imię.|What's your name?;What is your name?
A1|Przedstaw się: masz na imię Tomek.|My name is Tomek.;I'm Tomek.;My name's Tomek.
A1|Zapytaj kogoś, skąd pochodzi.|Where are you from?;Where do you come from?
A1|Powiedz, że jesteś z Polski.|I'm from Poland.;I come from Poland.
A1|Zapytaj, ile ktoś ma lat.|How old are you?
A1|Powiedz, że masz 35 lat.|I'm 35.;I'm 35 years old.;I'm thirty-five.;I'm thirty-five years old.
A1|Zapytaj, gdzie ktoś mieszka.|Where do you live?
A1|Powiedz, że mieszkasz w Gliwicach.|I live in Gliwice.
A1|Zapytaj, czym ktoś się zajmuje zawodowo.|What do you do?;What's your job?;What do you do for a living?
A1|Powiedz, że jesteś technologiem.|I'm a technologist.
A1|Zapytaj, jak się ktoś ma.|How are you?
A1|Odpowiedz, że dobrze, i podziękuj.|I'm fine, thank you.;I'm fine, thanks.;Fine, thanks.;I'm good, thanks.;Fine, thank you.
A1|Powiedz, że nie rozumiesz.|I don't understand.;Sorry, I don't understand.
A1|Poproś, żeby ktoś powtórzył.|Can you repeat that, please?;Could you repeat that, please?;Can you say that again, please?;Could you say that again, please?;Sorry, can you repeat that?
A1|Zapytaj, ile to kosztuje.|How much is it?;How much does it cost?;How much is this?
A1|Poproś o kawę.|A coffee, please.;Can I have a coffee, please?;Could I have a coffee, please?;I'd like a coffee, please.
A1|Zapytaj, która jest godzina.|What time is it?;What's the time?
A1|Zapytaj, gdzie jest toaleta.|Where is the toilet?;Where's the toilet?;Where is the bathroom?;Where's the bathroom?
A1|Zapytaj, czy ktoś mówi po polsku.|Do you speak Polish?
A1|Powiedz, że mówisz trochę po angielsku.|I speak a little English.;I speak some English.
A1|Zapytaj, kim jest tamten mężczyzna.|Who is that man?;Who's that man?
A1|Zapytaj, czy ktoś ma rodzeństwo.|Do you have any brothers or sisters?;Have you got any brothers or sisters?
A1|Powiedz, że masz dwoje dzieci.|I have two children.;I've got two children.;I have two kids.;I've got two kids.
A1|Zapytaj, czy ktoś lubi kawę.|Do you like coffee?
A1|Powiedz, że nie lubisz ryb.|I don't like fish.
A1|Zapytaj, czy możesz otworzyć okno.|Can I open the window?;Can I open the window, please?
A1|Zapytaj, czy ktoś umie pływać.|Can you swim?
A1|Powiedz, że umiesz prowadzić samochód.|I can drive.;I can drive a car.
A1|Zapytaj, gdzie jest dworzec.|Where is the station?;Where's the station?;Where is the train station?;Where's the train station?
A1|Przeproś, że się spóźniłeś.|Sorry I'm late.;I'm sorry I'm late.;Sorry for being late.;I'm sorry for being late.
A1|Zapytaj kolegę o numer telefonu jego żony.|What's her phone number?;What is her phone number?;What's your wife's phone number?;What is your wife's phone number?
A1|Zapytaj, jaki dziś jest dzień tygodnia.|What day is it today?;What day is it?
A1|Zapytaj, jaka jest pogoda.|What's the weather like?;What is the weather like?;How is the weather?
A1|Powiedz, że jest zimno.|It's cold.;It is cold.
A1|Zapytaj kolegę, jak ma na nazwisko wasz nowy szef.|What's his surname?;What is his surname?;What's his last name?;What is his last name?;What's the new boss's surname?;What is the new boss's surname?;What's our new boss's surname?;What is our new boss's surname?
A1|Zapytaj kolegę, czy jego siostra jest mężatką.|Is she married?;Is your sister married?
A1|Powiedz, że jesteś zmęczony.|I'm tired.;I am tired.
A1|Zapytaj, czy ktoś ma samochód.|Do you have a car?;Have you got a car?
A2|Zapytaj, jak dojść na dworzec.|How do I get to the station?;How can I get to the station?;Could you tell me the way to the station?;Can you tell me the way to the station?
A2|Powiedz komuś, żeby skręcił w lewo przy światłach.|Turn left at the traffic lights.;Turn left at the lights.
A2|Zapytaj, co ktoś robił wczoraj wieczorem.|What did you do last night?;What did you do yesterday evening?
A2|Powiedz, że wczoraj byłeś w pracy.|I was at work yesterday.;Yesterday I was at work.
A2|Zapytaj, gdzie ktoś pojechał na wakacje.|Where did you go on holiday?;Where did you go for your holiday?
A2|Zapytaj, czy ktoś był kiedyś w Londynie.|Have you ever been to London?
A2|Powiedz, że nigdy nie leciałeś samolotem.|I've never flown.;I've never been on a plane.;I've never flown in a plane.;I've never travelled by plane.
A2|Zapytaj, co ktoś robi w ten weekend.|What are you doing this weekend?;What are you going to do this weekend?
A2|Powiedz, że zamierzasz kupić nowy samochód.|I'm going to buy a new car.
A2|Zaproponuj, żebyście poszli do kina.|Let's go to the cinema.;Why don't we go to the cinema?;Shall we go to the cinema?
A2|Zapytaj, czy ktoś chciałby się napić herbaty.|Would you like some tea?;Would you like a cup of tea?;Would you like a tea?
A2|Zarezerwuj stolik dla dwóch osób.|I'd like to book a table for two.;I'd like to book a table for two, please.;Can I book a table for two, please?;Could I book a table for two, please?
A2|Poproś o rachunek.|Can we have the bill, please?;Could we have the bill, please?;The bill, please.;Can I have the bill, please?;Could I have the bill, please?
A2|Zapytaj, czy możesz zapłacić kartą.|Can I pay by card?;Can I pay by card, please?
A2|Zapytaj, czy możesz przymierzyć tę kurtkę.|Can I try on this jacket?;Can I try this jacket on?;Could I try on this jacket?;Could I try this jacket on?
A2|Powiedz, że boli cię głowa.|I have a headache.;I've got a headache.
A2|Zapytaj, co się stało.|What happened?;What's happened?;What's wrong?
A2|Powiedz lekarzowi, że masz gorączkę.|I have a fever.;I've got a fever.;I have a temperature.;I've got a temperature.
A2|Zapytaj, jak długo trwa podróż.|How long does the journey take?;How long is the journey?
A2|Zapytaj, o której odjeżdża pociąg.|What time does the train leave?;When does the train leave?
A2|Kup bilet powrotny do Krakowa.|A return ticket to Kraków, please.;Can I have a return ticket to Kraków, please?;I'd like a return ticket to Kraków, please.
A2|Powiedz, że musisz jutro wcześnie wstać.|I have to get up early tomorrow.;I must get up early tomorrow.;I need to get up early tomorrow.
A2|Doradź komuś, żeby poszedł do lekarza.|You should see a doctor.;You should go to the doctor.;You should go to a doctor.
A2|Powiedz, że nie wolno tu palić.|You can't smoke here.;You mustn't smoke here.;Smoking is not allowed here.;You aren't allowed to smoke here.
A2|Zapytaj, czy ktoś mógłby ci pomóc.|Could you help me?;Can you help me?;Could you help me, please?;Can you help me, please?
A2|Zapytaj, jak często ktoś chodzi na siłownię.|How often do you go to the gym?
A2|Powiedz, że zwykle zaczynasz pracę o szóstej.|I usually start work at six.;I usually start work at 6.;I usually start work at 6 a.m.
A2|Powiedz, że ten samochód jest droższy niż tamten.|This car is more expensive than that one.;This car is more expensive than that car.
A2|Zapytaj, który jest najtańszy.|Which is the cheapest?;Which one is the cheapest?
A2|Zapytaj, co ona teraz robi.|What is she doing now?;What's she doing now?;What is she doing at the moment?
A2|Powiedz, że pada deszcz.|It's raining.;It is raining.
A2|Powiedz, że oglądałeś telewizję, kiedy zadzwonił telefon.|I was watching TV when the phone rang.;I was watching television when the phone rang.
A2|Zapytaj, czy jest jakieś mleko w lodówce.|Is there any milk in the fridge?
A2|Powiedz, że nie masz dużo czasu.|I don't have much time.;I haven't got much time.
A2|Zapytaj, ile osób tu pracuje.|How many people work here?
A2|Poproś kogoś, żeby mówił wolniej.|Could you speak more slowly, please?;Can you speak more slowly, please?;Please speak more slowly.;Could you speak more slowly?;Can you speak more slowly?
A2|Zapytaj, czy ten autobus jedzie do centrum.|Does this bus go to the centre?;Does this bus go to the city centre?;Is this the bus to the centre?;Is this the bus to the city centre?
A2|Powiedz, że jest za zimno, żeby latać.|It's too cold to fly.;It is too cold to fly.
B1|Zapytaj, od jak dawna ktoś tu pracuje.|How long have you been working here?;How long have you worked here?
B1|Powiedz, że pracujesz tu od pięciu lat.|I've been working here for five years.;I've worked here for five years.;I've been working here for 5 years.;I've worked here for 5 years.
B1|Grzecznie zapytaj, gdzie jest dworzec (pytanie pośrednie).|Could you tell me where the station is?;Do you know where the station is?;Can you tell me where the station is?
B1|Zapytaj, czy ktoś wie, o której zaczyna się spotkanie (pytanie pośrednie).|Do you know what time the meeting starts?;Do you know when the meeting starts?
B1|Powiedz, że jeśli będzie padać, zostaniecie w domu.|If it rains, we'll stay at home.;If it rains, we'll stay home.;We'll stay at home if it rains.
B1|Powiedz, że gdybyś miał więcej pieniędzy, kupiłbyś samolot.|If I had more money, I'd buy a plane.;If I had more money, I would buy a plane.;I'd buy a plane if I had more money.
B1|Doradź komuś: na twoim miejscu przyjąłbym tę pracę.|If I were you, I'd take the job.;If I were you, I would take the job.;If I were you, I'd accept the job.;If I were you, I'd take this job.
B1|Zapytaj, czy ktoś ma coś przeciwko, żebyś otworzył okno.|Do you mind if I open the window?;Would you mind if I opened the window?
B1|Bardzo grzecznie poproś, żeby ktoś zamknął drzwi.|Would you mind closing the door?;Could you close the door, please?;Would you mind closing the door, please?
B1|Powiedz, że części zostały wysłane wczoraj.|The parts were sent yesterday.;The parts were shipped yesterday.
B1|Powiedz, że ta rama jest spawana w hali 2.|This frame is welded in Hall 2.
B1|Powiedz, że byłeś zmęczony, bo pracowałeś całą noc.|I was tired because I had worked all night.;I was tired because I'd been working all night.;I was tired because I'd worked all night.
B1|Powiedz, że kiedyś grałeś w piłkę nożną.|I used to play football.
B1|Powiedz, że lubisz latać.|I enjoy flying.;I like flying.;I love flying.;I like to fly.
B1|Powiedz, że zdecydowałeś się zrobić licencję pilota.|I've decided to get a pilot licence.;I decided to get a pilot licence.;I've decided to get my pilot licence.
B1|Powiedz, że nie stać cię na nowy samochód.|I can't afford a new car.
B1|Złóż skargę: zamówienie nie dotarło.|My order hasn't arrived.;I haven't received my order.;My order has not arrived yet.;My order hasn't arrived yet.
B1|Powiedz, że zadzwonisz, jak tylko dotrzesz na miejsce.|I'll call you as soon as I arrive.;I'll call you as soon as I get there.;I'll phone you as soon as I arrive.
B1|Powiedz, że on powiedział, że jest zmęczony (mowa zależna).|He said he was tired.;He said that he was tired.
B1|Zapytaj z question tag: pracujesz tu, prawda?|You work here, don't you?
B1|Powiedz, że zgadzasz się z nim.|I agree with him.
B1|Powiedz, że to zależy od pogody.|It depends on the weather.
B1|Powiedz, że interesujesz się lotnictwem.|I'm interested in aviation.;I'm interested in flying.
B1|Przyznaj, że popełniłeś błąd.|I made a mistake.;I've made a mistake.
B1|Poproś kogoś o przysługę.|Could you do me a favour?;Can you do me a favour?
B1|Powiedz, że skaleczyłeś się w pracy.|I cut myself at work.;I hurt myself at work.
B1|Zapytaj klienta, kiedy potrzebuje części.|When do you need the parts?
B1|Powiedz klientowi, że dostawa będzie w piątek.|The delivery will be on Friday.;The delivery will arrive on Friday.;We will deliver on Friday.;We'll deliver on Friday.
B1|Powiedz, że maszyna się zepsuła.|The machine has broken down.;The machine broke down.;The machine is broken.
B1|Zapytaj, od jak dawna ktoś uczy się angielskiego.|How long have you been learning English?;How long have you learned English?
B2|Powiedz, że gdybyś wyszedł wcześniej, zdążyłbyś na pociąg.|If I had left earlier, I would have caught the train.;If I'd left earlier, I'd have caught the train.;If I had left earlier, I'd have caught the train.
B2|Powiedz, że żałujesz, że nie zacząłeś się uczyć angielskiego wcześniej.|I wish I had started learning English earlier.;I wish I'd started learning English earlier.;I wish I had learned English earlier.;I wish I'd learnt English earlier.;I wish I had learnt English earlier.;I wish I'd learned English earlier.
B2|Powiedz, że jutro o tej porze będziesz leciał do Rzymu.|This time tomorrow I'll be flying to Rome.;This time tomorrow I will be flying to Rome.
B2|Powiedz, że do piątku skończycie zamówienie.|We'll have finished the order by Friday.;By Friday we'll have finished the order.;We will have finished the order by Friday.
B2|Powiedz, że spoina musiała za szybko ostygnąć.|The weld must have cooled too quickly.;The weld must have cooled down too quickly.;The weld must have cooled too fast.
B2|Powiedz, że powinieneś był mu powiedzieć.|I should have told him.
B2|Zaproponuj stanowczo: lepiej sprawdźmy przepływ gazu.|We'd better check the gas flow.;We had better check the gas flow.
B2|Powiedz, że wolałbyś zostać w domu.|I'd rather stay at home.;I would rather stay at home.;I'd rather stay home.
B2|Powiedz, że on zaprzeczył, że wziął pieniądze.|He denied taking the money.;He denied that he had taken the money.;He denied having taken the money.
B2|Powiedz, że ona poradziła ci odpocząć.|She advised me to rest.;She advised me to take a rest.;She advised me to have a rest.
B2|Powiedz, że im więcej ćwiczysz, tym lepiej ci idzie.|The more you practise, the better you get.;The more you practice, the better you get.
B2|Powiedz, że mimo deszczu polecieliście.|Despite the rain, we flew.;In spite of the rain, we flew.;Although it was raining, we flew.;We flew despite the rain.
B2|Powiedz, że to był tak dobry film, że obejrzałeś go dwa razy.|It was such a good film that I watched it twice.;The film was so good that I watched it twice.
B2|Powiedz, że w przyszłym tygodniu oddajecie ramy do ocynkowania.|We're having the frames galvanised next week.;We're getting the frames galvanised next week.;We are having the frames galvanized next week.
B2|Powiedz, że na hali masz nosić kask (taki jest przepis).|You're supposed to wear a helmet in the hall.;I'm supposed to wear a helmet in the hall.;We're supposed to wear a helmet in the hall.
B2|Zasugeruj zrobienie przerwy.|Let's take a break.;Why don't we take a break?;I suggest taking a break.;I suggest we take a break.;Shall we take a break?
B2|Napisz w mailu, że w załączniku przesyłasz poprawiony rysunek.|Please find attached the revised drawing.;Please find the revised drawing attached.;I'm attaching the revised drawing.;I've attached the revised drawing.;Attached is the revised drawing.
B2|Poproś w mailu o wycenę.|Could you send us a quote?;Could you please send us a quote?;Please send us a quote.;Could you send me a quote?;Could you please send me a quote?
B2|Powiedz, że musicie wziąć pod uwagę koszty.|We have to take the costs into account.;We must take the costs into account.;We need to take the costs into account.;We have to take costs into account.
B2|Zgódź się częściowo: do pewnego stopnia się zgadzam.|I agree to some extent.;To some extent, I agree.;I agree with you to some extent.
C1|Formalnie odmów propozycji w mailu.|Unfortunately, we are unable to accept your offer.;I regret to inform you that we cannot accept your offer.;Regrettably, we are unable to accept your offer.;Unfortunately, we are not able to accept your offer.
C1|Napisz w mailu, że zrobicie wszystko, żeby dotrzymać terminu.|We will do our utmost to meet the deadline.;We will do everything we can to meet the deadline.;We'll do our best to meet the deadline.
C1|Powiedz, że gdyby nie pomoc zespołu, nie skończylibyście na czas.|But for the team's help, we wouldn't have finished on time.;Without the team's help, we wouldn't have finished on time.;If it hadn't been for the team's help, we wouldn't have finished on time.;Had it not been for the team's help, we wouldn't have finished on time.
C1|Powiedz z inwersją: nigdy nie widziałem takiego bałaganu.|Never have I seen such a mess.;Never before have I seen such a mess.
C1|Podkreśl, że naprawdę sprawdziłeś spoiny.|I did check the welds.;I really did check the welds.
C1|Powiedz, że raport powinien był zostać wysłany wczoraj.|The report should have been sent yesterday.
C1|Powiedz, że właśnie miałeś wychodzić, kiedy zadzwonił szef.|I was about to leave when my boss called.;I was about to leave when the boss called.;I was just about to leave when my boss called.
C1|Powiedz, że niepotrzebnie kupiłeś bilety, bo wstęp był darmowy.|I needn't have bought the tickets because entry was free.;I needn't have bought the tickets because the entry was free.;I needn't have bought tickets because entry was free.;I needn't have bought the tickets – entry was free.
C1|Zaproponuj przejście do sedna (idiom).|Let's cut to the chase.;Let me cut to the chase.
C1|Powiedz, że to tylko wierzchołek góry lodowej.|It's just the tip of the iceberg.;This is just the tip of the iceberg.;It's only the tip of the iceberg.
C1|Powiedz, że masz pewne zastrzeżenia co do planu.|I have some reservations about the plan.;I have a few reservations about the plan.;I have some concerns about the plan.
C1|Bardzo grzecznie zapytaj, czy klient mógłby potwierdzić zamówienie do piątku.|Would you be able to confirm the order by Friday?;Could you possibly confirm the order by Friday?;Would it be possible to confirm the order by Friday?
A1|Zapytaj rozmówcę, gdzie pracuje.|Where do you work?
A1|Odpowiedz, że pracujesz w fabryce w Gliwicach.|I work in a factory in Gliwice.;I work at a factory in Gliwice.
A1|Zapytaj kolegę, gdzie pracuje jego brat.|Where does your brother work?
A1|Odpowiedz, że twój brat pracuje w banku.|My brother works in a bank.;He works in a bank.;My brother works at a bank.;He works at a bank.
A1|Zapytaj kolegę, czym zajmuje się jego żona.|What does your wife do?;What's your wife's job?;What is your wife's job?
A1|Odpowiedz, że twoja żona jest pielęgniarką.|My wife is a nurse.;She's a nurse.;She is a nurse.
A1|Zapytaj kolegę, gdzie pracuje Anna.|Where does Anna work?
A1|Odpowiedz, że Anna pracuje w szkole.|She works in a school.;She works at a school.;Anna works in a school.;Anna works at a school.
A1|Zapytaj kolegę, czy jego tata lubi swoją pracę.|Does your dad like his job?;Does your father like his job?;Does your dad like his work?;Does your father like his work?
A1|Odpowiedz, że on nie lubi swojej pracy.|He doesn't like his job.;He doesn't like his work.
A1|Zapytaj rozmówcę, o której zaczyna pracę.|What time do you start work?;When do you start work?
A2|Zapytaj rozmówcę, gdzie pracował wcześniej.|Where did you work before?
A2|Odpowiedz, że wcześniej pracowałeś w firmie budowlanej.|I worked for a construction company before.;Before, I worked for a construction company.;I worked in a construction company before.;I used to work for a construction company.
A2|Zapytaj kolegę, czy jego siostra pracuje dzisiaj.|Is your sister working today?;Does your sister work today?
A2|Odpowiedz, że on teraz pracuje na nocną zmianę.|He's working the night shift now.;He's working nights now.;He's on the night shift now.;He is working the night shift now.
A2|Zapytaj rozmówcę, ile godzin dziennie pracuje.|How many hours a day do you work?;How many hours do you work a day?
A2|Odpowiedz, że pracujesz osiem godzin dziennie.|I work eight hours a day.;I work 8 hours a day.
A2|Zapytaj kolegę, czy jego brat musi pracować w weekendy.|Does your brother have to work at weekends?;Does your brother have to work on weekends?;Does he have to work at weekends?
A2|Odpowiedz, że ona nie musi pracować w soboty.|She doesn't have to work on Saturdays.
B1|Zapytaj kolegę, czy wie, gdzie pracuje Marek (pytanie pośrednie).|Do you know where Marek works?
B1|Odpowiedz, że tak – on pracuje w dużej firmie informatycznej w Krakowie.|Yes, he works for a big IT company in Kraków.;Yes, he works at a big IT company in Kraków.;Yes, he works in a big IT company in Kraków.;Yes, he works for a large IT company in Kraków.
B1|Zapytaj kolegę, od jak dawna jego żona tam pracuje.|How long has your wife been working there?;How long has your wife worked there?
B1|Odpowiedz, że on pracuje tam od trzech lat.|He's been working there for three years.;He's worked there for three years.;He has been working there for three years.;He has worked there for three years.
B1|Zapytaj kolegę, czy wie, czym zajmuje się nowy szef (pytanie pośrednie).|Do you know what the new boss does?;Do you know what the new boss's job is?
B1|Odpowiedz, że ona jest odpowiedzialna za kontrolę jakości.|She's responsible for quality control.;She is responsible for quality control.;She's in charge of quality control.;She is in charge of quality control.
B1|Zapytaj kolegę, dlaczego jego brat zmienił pracę.|Why did your brother change his job?;Why did your brother change jobs?
B1|Odpowiedz, że zmienił pracę, bo chciał więcej zarabiać.|He changed his job because he wanted to earn more.;He changed jobs because he wanted to earn more.;He changed his job because he wanted to earn more money.;He changed jobs because he wanted to earn more money.
B2|Zapytaj kolegę, czy wie, dla jakiej firmy ona teraz pracuje.|Do you know which company she works for now?;Do you know what company she works for now?;Do you know which company she's working for now?
B2|Odpowiedz, że z tego, co wiesz, pracuje teraz dla niemieckiego dostawcy.|As far as I know, she works for a German supplier now.;As far as I know, she's working for a German supplier now.;I think she works for a German supplier now.;As far as I know, she now works for a German supplier.`;

/* Sentence translation: level | Polish versions (;) | English versions (;) */
const TR_RAW = `A1|Mam na imię Anna.;Nazywam się Anna.;Jestem Anna.|My name is Anna.;I'm Anna.;My name's Anna.
A1|Jestem zmęczony.;Jestem zmęczona.|I'm tired.;I am tired.
A1|Ona jest pielęgniarką.|She is a nurse.;She's a nurse.
A1|Mieszkam w Polsce.|I live in Poland.
A1|On nie lubi kawy.|He doesn't like coffee.
A1|Czy mówisz po angielsku?;Mówisz po angielsku?;Czy mówicie po angielsku?;Czy mówi pan po angielsku?|Do you speak English?
A1|To jest mój brat.;To mój brat.|This is my brother.
A1|Gdzie jest dworzec?|Where is the station?;Where's the station?;Where is the train station?
A1|Mam dwa koty.|I have two cats.;I've got two cats.
A1|Zaczynam pracę o siódmej.|I start work at seven.;I start work at 7.
A1|Ona zawsze się spóźnia.;Ona się zawsze spóźnia.|She is always late.;She's always late.
A1|W kuchni jest stół.;Jest stół w kuchni.|There is a table in the kitchen.;There's a table in the kitchen.
A1|Na stole są trzy klucze.;Są trzy klucze na stole.|There are three keys on the table.
A1|Umiem pływać.|I can swim.
A1|On nie umie prowadzić.;On nie potrafi prowadzić.|He can't drive.
A1|Zamknij drzwi, proszę.;Proszę zamknąć drzwi.;Zamknij proszę drzwi.|Close the door, please.;Please close the door.
A1|Nie dotykaj tego!|Don't touch it!;Don't touch that!
A1|Ile masz lat?|How old are you?
A1|Moja żona pracuje w szpitalu.|My wife works in a hospital.;My wife works at a hospital.;My wife works at the hospital.
A1|Lubię czytać książki.|I like reading books.;I like to read books.
A1|Ta kurtka jest za droga.;Ta kurtka jest zbyt droga.|This jacket is too expensive.
A1|Gdzie mieszkają twoi rodzice?|Where do your parents live?
A1|Czy masz samochód?;Masz samochód?|Do you have a car?;Have you got a car?
A1|Moje urodziny są w maju.;Mam urodziny w maju.|My birthday is in May.
A1|Te buty są nowe.|These shoes are new.
A1|Kim jest ta kobieta?;Kto to jest ta kobieta?|Who is that woman?;Who's that woman?;Who is this woman?
A1|Jestem technologiem.|I'm a technologist.;I am a technologist.
A1|Pociąg odjeżdża o szóstej.|The train leaves at six.;The train leaves at 6.
A1|Widzę go codziennie.;Codziennie go widzę.|I see him every day.
A1|Jak ona ma na imię?|What's her name?;What is her name?
A2|Wczoraj byłem w pracy.;Byłem wczoraj w pracy.;Wczoraj byłam w pracy.;Byłam wczoraj w pracy.|I was at work yesterday.;Yesterday I was at work.
A2|W zeszłym tygodniu kupiłem nowy telefon.;Kupiłem nowy telefon w zeszłym tygodniu.;W zeszłym tygodniu kupiłam nowy telefon.|I bought a new phone last week.;Last week I bought a new phone.
A2|Wczoraj go nie widziałem.;Nie widziałem go wczoraj.;Wczoraj go nie widziałam.|I didn't see him yesterday.
A2|Co robiłeś o ósmej wieczorem?;Co robiłaś o ósmej wieczorem?|What were you doing at eight in the evening?;What were you doing at 8 p.m.?;What were you doing at eight p.m.?
A2|Oglądałem telewizję, kiedy zadzwonił telefon.;Oglądałem telewizję, gdy zadzwonił telefon.;Oglądałam telewizję, kiedy zadzwonił telefon.|I was watching TV when the phone rang.;I was watching television when the phone rang.
A2|Teraz pada deszcz.;Pada teraz deszcz.;Teraz pada.|It's raining now.;It is raining now.
A2|Zwykle jeżdżę do pracy samochodem.;Zazwyczaj jeżdżę do pracy samochodem.|I usually drive to work.;I usually go to work by car.
A2|W tym tygodniu pracuję na nocnej zmianie.;W tym tygodniu pracuję na nocną zmianę.|I'm working the night shift this week.;This week I'm working the night shift.;I'm working nights this week.;I'm on the night shift this week.
A2|Zamierzam zrobić licencję pilota.|I'm going to get a pilot licence.;I'm going to get my pilot licence.
A2|Myślę, że jutro będzie padać.;Chyba jutro będzie padać.|I think it will rain tomorrow.;I think it's going to rain tomorrow.
A2|Musisz nosić okulary ochronne.|You must wear safety goggles.;You have to wear safety goggles.;You must wear safety glasses.;You have to wear safety glasses.
A2|Jutro nie musisz przychodzić.;Nie musisz przychodzić jutro.|You don't have to come tomorrow.;You don't need to come tomorrow.
A2|Powinieneś odpocząć.;Powinnaś odpocząć.|You should rest.;You should have a rest.;You should take a rest.
A2|Ten samochód jest szybszy niż mój.;Ten samochód jest szybszy od mojego.|This car is faster than mine.
A2|To najlepszy spawacz w firmie.;On jest najlepszym spawaczem w firmie.|He is the best welder in the company.;He's the best welder in the company.;He's the best welder in the firm.
A2|Nie mamy dużo czasu.;Nie mamy wiele czasu.|We don't have much time.;We haven't got much time.
A2|Ile to kosztuje?|How much does it cost?;How much is it?;How much is this?;How much does this cost?
A2|Czy byłeś kiedyś w Anglii?;Byłeś kiedyś w Anglii?;Czy byłaś kiedyś w Anglii?|Have you ever been to England?
A2|Nigdy nie jadłem sushi.;Nigdy nie jadłam sushi.|I've never eaten sushi.;I've never had sushi.;I've never tried sushi.
A2|On jeździ bardzo ostrożnie.;On prowadzi bardzo ostrożnie.|He drives very carefully.
A2|Ta kawa jest za gorąca, żeby ją pić.;Ta kawa jest za gorąca do picia.|This coffee is too hot to drink.
A2|On nie jest wystarczająco dorosły, żeby prowadzić.;On jest za młody, żeby prowadzić.|He isn't old enough to drive.;He's not old enough to drive.;He's too young to drive.
A2|Chciałbym zarezerwować pokój.;Chciałabym zarezerwować pokój.|I'd like to book a room.;I would like to book a room.;I'd like to reserve a room.
A2|Lubię pływać.|I like swimming.;I like to swim.
A2|Weszliśmy do budynku.|We went into the building.;We walked into the building.;We entered the building.
A2|Skręć w prawo na rondzie.|Turn right at the roundabout.
A2|Zgubiłem klucze.;Zgubiłam klucze.|I've lost my keys.;I lost my keys.
A2|Ona mówi po angielsku lepiej niż ja.|She speaks English better than me.;She speaks English better than I do.
A2|Kiedy byłem dzieckiem, mogłem biegać godzinami.;Gdy byłem dzieckiem, mogłem biegać godzinami.|When I was a child, I could run for hours.;When I was a kid, I could run for hours.
A2|Czy jest jakieś mleko w lodówce?;Jest jakieś mleko w lodówce?|Is there any milk in the fridge?
B1|Pracuję tu od pięciu lat.|I've been working here for five years.;I've worked here for five years.;I've been working here for 5 years.;I've worked here for 5 years.
B1|Mieszkam w Gliwicach od 2015 roku.|I've lived in Gliwice since 2015.;I've been living in Gliwice since 2015.
B1|Kiedy przyjechaliśmy, pociąg już odjechał.;Gdy przyjechaliśmy, pociąg już odjechał.|When we arrived, the train had already left.;When we arrived, the train had left.;When we got there, the train had already left.
B1|Jeśli będzie padać, zostaniemy w domu.;Jeżeli będzie padać, zostaniemy w domu.|If it rains, we'll stay at home.;If it rains, we'll stay home.;We'll stay at home if it rains.
B1|Gdybym miał więcej czasu, uczyłbym się hiszpańskiego.;Gdybym miała więcej czasu, uczyłabym się hiszpańskiego.|If I had more time, I'd learn Spanish.;If I had more time, I would learn Spanish.;If I had more time, I'd study Spanish.
B1|Na twoim miejscu nie robiłbym tego.;Na twoim miejscu nie zrobiłbym tego.|If I were you, I wouldn't do it.;If I were you, I wouldn't do that.
B1|Części są produkowane w Niemczech.;Części produkuje się w Niemczech.|The parts are made in Germany.;The parts are produced in Germany.;The parts are manufactured in Germany.
B1|Most został zbudowany w 1920 roku.;Most zbudowano w 1920 roku.|The bridge was built in 1920.
B1|Wszystkie spoiny muszą zostać sprawdzone przed malowaniem.;Wszystkie spoiny trzeba sprawdzić przed malowaniem.|All welds must be checked before painting.;All welds must be inspected before painting.;All the welds must be checked before painting.;All welds have to be checked before painting.
B1|Kiedyś paliłem.;Kiedyś paliłam.|I used to smoke.
B1|Postanowiliśmy kupić nową maszynę.;Zdecydowaliśmy się kupić nową maszynę.;Zdecydowaliśmy, że kupimy nową maszynę.|We decided to buy a new machine.;We've decided to buy a new machine.
B1|Inżynier, który to zaprojektował, jest na urlopie.|The engineer who designed this is on holiday.;The engineer who designed it is on holiday.;The engineer that designed this is on holiday.
B1|To jest hala, w której spawamy ramy.;To hala, w której spawamy ramy.|This is the hall where we weld the frames.;This is the hall in which we weld the frames.
B1|Powiedział, że jest zmęczony.|He said he was tired.;He said that he was tired.
B1|Zapytała, gdzie mieszkam.;Zapytała mnie, gdzie mieszkam.|She asked where I lived.;She asked me where I lived.
B1|Czy możesz mi powiedzieć, gdzie jest dworzec?;Możesz mi powiedzieć, gdzie jest dworzec?|Can you tell me where the station is?;Could you tell me where the station is?
B1|Pracujesz tu, prawda?;Pracujesz tutaj, prawda?|You work here, don't you?
B1|To zależy od pogody.|It depends on the weather.
B1|Interesuję się lotnictwem.|I'm interested in aviation.
B1|Zadzwonię do ciebie, kiedy dojadę.;Zadzwonię, kiedy dojadę.;Zadzwonię do ciebie, jak dojadę.|I'll call you when I arrive.;I'll call you when I get there.;I'll phone you when I arrive.
B1|Nie wyjdziemy, dopóki nie przestanie padać.|We won't leave until it stops raining.;We won't go out until it stops raining.
B1|Musimy podjąć decyzję.|We have to make a decision.;We need to make a decision.;We must make a decision.
B1|Obaj moi bracia są pilotami.;Oboje moi bracia są pilotami.|Both my brothers are pilots.;Both of my brothers are pilots.
B1|Zrobiłem to sam.;Zrobiłam to sama.|I did it myself.;I did it by myself.
B1|Wczoraj zepsuła się maszyna.;Maszyna zepsuła się wczoraj.|The machine broke down yesterday.;Yesterday the machine broke down.
B1|Nie stać mnie na nowy samochód.|I can't afford a new car.
B1|Byłem zmęczony, bo pracowałem całą noc.;Byłam zmęczona, bo pracowałam całą noc.|I was tired because I had worked all night.;I was tired because I'd been working all night.;I was tired because I worked all night.
B1|Mimo że był zmęczony, pracował dalej.;Chociaż był zmęczony, pracował dalej.|Even though he was tired, he kept working.;Although he was tired, he kept working.;Although he was tired, he carried on working.;Even though he was tired, he carried on working.
B1|Zostawiłem klucze w domu.;Zostawiłam klucze w domu.|I left my keys at home.;I've left my keys at home.
B1|Od jak dawna uczysz się angielskiego?|How long have you been learning English?
B2|Gdybym wyszedł wcześniej, zdążyłbym na pociąg.|If I had left earlier, I would have caught the train.;If I'd left earlier, I'd have caught the train.;If I had left earlier, I'd have caught the train.
B2|Żałuję, że to powiedziałem.;Żałuję, że to powiedziałam.|I wish I hadn't said that.;I wish I hadn't said it.;I regret saying that.
B2|Szkoda, że nie mam więcej czasu.;Chciałbym mieć więcej czasu.|I wish I had more time.
B2|Jutro o tej porze będę leciał do Rzymu.;Jutro o tej porze będę lecieć do Rzymu.|This time tomorrow I'll be flying to Rome.;This time tomorrow I will be flying to Rome.
B2|Do piątku skończymy to zamówienie.|We'll have finished the order by Friday.;We'll have finished this order by Friday.;By Friday we'll have finished the order.;By Friday we'll have finished this order.
B2|Pęknięcie musiało być spowodowane zmęczeniem materiału.|The crack must have been caused by fatigue.;The crack must have been caused by material fatigue.
B2|On nie mógł nas widzieć.|He can't have seen us.;He couldn't have seen us.
B2|Powinieneś był mi powiedzieć.;Powinnaś była mi powiedzieć.|You should have told me.
B2|Lepiej sprawdźmy to jeszcze raz.|We'd better check it again.;We had better check it again.;We'd better check it once more.
B2|Wolałbym, żebyś tu nie palił.;Wolałabym, żebyś tu nie palił.|I'd rather you didn't smoke here.;I would rather you didn't smoke here.
B2|Mamy nosić kaski na hali.|We're supposed to wear helmets in the hall.;We are supposed to wear helmets in the hall.
B2|Zaprzeczył, że ukradł pieniądze.|He denied stealing the money.;He denied having stolen the money.;He denied that he had stolen the money.
B2|Poradziła mi, żebym poszedł do lekarza.|She advised me to see a doctor.;She advised me to go to the doctor.;She advised me to go to a doctor.
B2|Im więcej ćwiczysz, tym lepiej ci idzie.|The more you practise, the better you get.;The more you practice, the better you get.
B2|Mimo deszczu poszliśmy na spacer.;Pomimo deszczu poszliśmy na spacer.|Despite the rain, we went for a walk.;In spite of the rain, we went for a walk.;Although it was raining, we went for a walk.
B2|To był tak zimny dzień, że zostaliśmy w domu.|It was such a cold day that we stayed at home.;It was such a cold day that we stayed home.;The day was so cold that we stayed at home.
B2|Oddałem samochód do naprawy.;Oddałam samochód do naprawy.|I had my car repaired.;I got my car repaired.;I had my car fixed.;I got my car fixed.
B2|Mówi się, że firma zostanie zamknięta.|It is said that the company will close.;It's said that the company will close.;The company is said to be closing.
B2|Kiedy byłem dzieckiem, dziadek opowiadał mi historie każdego wieczoru.|When I was a child, my grandpa would tell me stories every evening.;When I was a child, my grandfather would tell me stories every evening.;When I was a child, my grandpa used to tell me stories every evening.;When I was a child, my grandfather used to tell me stories every evening.
B2|Musimy wziąć pod uwagę koszty.|We have to take the costs into account.;We need to take the costs into account.;We must take the costs into account.;We have to take costs into account.
C1|Gdybym wtedy przyjął tę ofertę, mieszkałbym teraz w Niemczech.|If I had accepted that offer, I would be living in Germany now.;If I'd accepted that offer, I'd be living in Germany now.;If I had accepted that offer, I would live in Germany now.;If I had accepted the offer, I would be living in Germany now.
C1|Nie tylko się spóźnił, ale też zapomniał dokumentów.|Not only was he late, but he also forgot the documents.;Not only was he late, he also forgot the documents.
C1|Dopiero po inspekcji zauważyliśmy wadę.|Only after the inspection did we notice the defect.;It was only after the inspection that we noticed the defect.
C1|To Anna znalazła rozwiązanie.|It was Anna who found the solution.;It was Anna that found the solution.
C1|To, czego potrzebujemy, to więcej czasu.|What we need is more time.
C1|Zalecamy, aby każda spoina została sprawdzona.|We recommend that every weld be checked.;We recommend that every weld should be checked.;We recommend that each weld be checked.;We recommend that every weld be inspected.
C1|Najwyższy czas, żebyśmy podjęli decyzję.|It's high time we made a decision.;It is high time we made a decision.
C1|Skończywszy raport, poszedł do domu.;Po skończeniu raportu poszedł do domu.|Having finished the report, he went home.;After finishing the report, he went home.;After he had finished the report, he went home.
C1|Mówi się, że został awansowany.|He is said to have been promoted.;It is said that he has been promoted.;It is said that he was promoted.
C1|Wszyscy goście mają zgłosić się do recepcji.|All visitors are to report to reception.;All guests are to report to reception.;All visitors must report to reception.;All guests must report to reception.
C1|Nie musiałem się spieszyć, więc szedłem powoli.|I didn't need to hurry, so I walked slowly.;I didn't have to hurry, so I walked slowly.
C1|Równie dobrze możemy pójść do domu.|We might as well go home.;We may as well go home.
C1|Gdyby nie twoja pomoc, nie udałoby nam się.|But for your help, we would have failed.;Without your help, we would have failed.;If it hadn't been for your help, we would have failed.;Had it not been for your help, we would have failed.;Without your help, we wouldn't have succeeded.`;

const SENT = [];
SIT_RAW.trim().split("\n").forEach(line => {
  const [lvl, prompt, ans] = line.split("|");
  const answers = ans.split(";");
  SENT.push({ id: "SIT:" + answers[0], kind: "sit", lvl, prompt, answers, en: answers[0], pl: prompt, pos: "phr", ex: "" });
});
TR_RAW.trim().split("\n").forEach(line => {
  const [lvl, pl, en] = line.split("|");
  const pls = pl.split(";"), ens = en.split(";");
  SENT.push({ id: "TR:" + ens[0], kind: "tr", lvl, pls, ens, en: ens[0], pl: pls[0], pos: "phr", ex: "" });
});

/* Phrasal verbs and fixed prepositions: level | sentence with ___ | particle | Polish meaning */
