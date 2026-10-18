/* Vocabulary A1–C1 and the work topics (WELD, CODE, AVIA). Each line: english|polish|part of speech|example sentence. */
const RAW = {
A1: `apple|jabłko|n|I eat an apple every morning.
bread|chleb|n|We need bread and milk.
water|woda|n|Can I have a glass of water, please?
milk|mleko|n|The milk is in the fridge.
coffee|kawa|n|I drink coffee with sugar.
tea|herbata|n|Would you like a cup of tea?
breakfast|śniadanie|n|I have breakfast at seven.
dinner|kolacja, obiad|n|We have dinner together every evening.
food|jedzenie|n|Italian food is my favourite.
house|dom|n|They live in a big house.
room|pokój|n|My room is small but nice.
kitchen|kuchnia|n|Mum is in the kitchen.
bedroom|sypialnia|n|The bedroom has two windows.
door|drzwi|n|Please close the door.
window|okno|n|Open the window, it's hot.
table|stół|n|The keys are on the table.
chair|krzesło|n|Sit on this chair.
bed|łóżko|n|I go to bed at eleven.
family|rodzina|n|I have a big family.
mother|matka, mama|n|My mother is a doctor.
father|ojciec, tata|n|His father works in a bank.
brother|brat|n|My brother is ten years old.
sister|siostra|n|Her sister lives in London.
friend|przyjaciel, kolega|n|Tom is my best friend.
child|dziecko|n|The child is playing in the garden.
man|mężczyzna|n|That man is our new teacher.
woman|kobieta|n|The woman in the red coat is my aunt.
name|imię|n|What's your name?
day|dzień|n|Have a nice day!
week|tydzień|n|I go swimming twice a week.
month|miesiąc|n|My birthday is next month.
year|rok|n|She is twenty years old.
morning|rano, poranek|n|I run in the morning.
evening|wieczór|n|What are you doing this evening?
night|noc|n|Good night, sleep well.
time|czas|n|I don't have time today.
school|szkoła|n|The school is near my house.
teacher|nauczyciel|n|Our teacher is very nice.
student|uczeń, student|n|There are twenty students in the class.
book|książka|n|I'm reading a good book.
pen|długopis|n|Can I borrow your pen?
city|miasto|n|Kraków is a beautiful city.
street|ulica|n|I live on a quiet street.
shop|sklep|n|The shop opens at nine.
car|samochód|n|My dad has a new car.
bus|autobus|n|I go to work by bus.
train|pociąg|n|The train leaves at six.
money|pieniądze|n|I don't have much money.
job|praca (posada)|n|She has a good job.
dog|pies|n|Our dog loves walks.
cat|kot|n|The cat is sleeping on the sofa.
weather|pogoda|n|The weather is lovely today.
sun|słońce|n|The sun is shining.
rain|deszcz|n|I don't like rain.
colour|kolor|n|What colour is your bag?
eat|jeść|v|We eat lunch at one o'clock.
drink|pić|v|Don't drink cold water when you're ill.
sleep|spać|v|Babies sleep a lot.
go|iść, jechać|v|Let's go to the cinema.
come|przychodzić, przyjeżdżać|v|Come here, please!
see|widzieć|v|I can see the sea from my window.
look|patrzeć|v|Look at this photo!
read|czytać|v|I read before I go to sleep.
write|pisać|v|Please write your name here.
speak|mówić|v|Do you speak English?
listen|słuchać|v|Listen to the teacher.
work|pracować|v|My parents work in a hospital.
live|mieszkać, żyć|v|Where do you live?
like|lubić|v|I like chocolate.
want|chcieć|v|I want a new phone.
buy|kupować|v|I need to buy some eggs.
open|otwierać|v|The museum opens at ten.
close|zamykać|v|Close your eyes.
help|pomagać|v|Can you help me?
play|grać, bawić się|v|The children play football after school.
cook|gotować|v|My grandma cooks very well.
big|duży|adj|They have a big garden.
small|mały|adj|It's a small town.
good|dobry|adj|This is a good idea.
bad|zły, kiepski|adj|I had a bad day.
new|nowy|adj|I like your new shoes.
old|stary|adj|This is a very old church.
hot|gorący|adj|Be careful, the soup is hot.
cold|zimny|adj|It's cold outside.
happy|szczęśliwy|adj|I'm so happy to see you!
sad|smutny|adj|Why are you sad?
beautiful|piękny|adj|What a beautiful view!
cheap|tani|adj|The tickets are cheap.
expensive|drogi (kosztowny)|adj|This restaurant is too expensive.
easy|łatwy|adj|The test was easy.
difficult|trudny|adj|English grammar can be difficult.
young|młody|adj|My teacher is quite young.
today|dzisiaj|adv|It's Monday today.
tomorrow|jutro|adv|See you tomorrow!
yesterday|wczoraj|adv|I was at home yesterday.
always|zawsze|adv|She always smiles.
never|nigdy|adv|I never eat meat.
often|często|adv|We often go to the park.
here|tu, tutaj|adv|Come here!
there|tam|adv|Put the box over there.
very|bardzo|adv|Thank you very much.
lunch|lunch, drugie śniadanie|n|I have lunch at work.
egg|jajko|n|I'd like two eggs, please.
cheese|ser|n|This cheese is from France.
fish|ryba|n|We eat fish on Fridays.
chicken|kurczak|n|Chicken soup is my favourite.
rice|ryż|n|Do you want rice or potatoes?
potato|ziemniak|n|Can you peel the potatoes?
fruit|owoc, owoce|n|I eat a lot of fruit.
sugar|cukier|n|No sugar, thanks.
juice|sok|n|A glass of orange juice, please.
beer|piwo|n|Two beers, please.
bathroom|łazienka|n|Where is the bathroom?
flat|mieszkanie|n|We live in a small flat.
floor|podłoga, piętro|n|My office is on the second floor.
wall|ściana|n|There's a clock on the wall.
picture|obraz, zdjęcie|n|Look at this picture.
phone|telefon|n|My phone is on the table.
bag|torba|n|My bag is very heavy.
clock|zegar|n|The clock in the kitchen is slow.
husband|mąż|n|Her husband is a pilot.
wife|żona|n|This is my wife, Anna.
son|syn|n|Their son is at university.
daughter|córka|n|My daughter loves horses.
parents|rodzice|n|My parents live in Poznań.
boy|chłopiec|n|The boy is eight years old.
girl|dziewczynka, dziewczyna|n|That girl is my cousin.
baby|niemowlę|n|The baby is sleeping.
people|ludzie|n|There are a lot of people here.
head|głowa|n|My head hurts.
hand|ręka, dłoń|n|Wash your hands before dinner.
eye|oko|n|She has blue eyes.
face|twarz|n|He has a friendly face.
leg|noga|n|I broke my leg skiing.
doctor|lekarz|n|You should see a doctor.
office|biuro|n|The office is closed on Sundays.
country|kraj|n|Poland is a big country.
town|miasteczko|n|I grew up in a small town.
road|droga|n|This road goes to the sea.
bike|rower|n|I ride my bike to work.
plane|samolot|n|The plane lands at five.
shirt|koszula|n|He's wearing a white shirt.
dress|sukienka|n|What a lovely dress!
hat|kapelusz, czapka|n|Take a hat, it's cold.
coat|płaszcz|n|Where is my coat?
song|piosenka|n|I love this song.
game|gra|n|Let's play a game.
question|pytanie|n|Can I ask a question?
answer|odpowiedź|n|I know the answer.
word|słowo|n|What does this word mean?
language|język (mowa)|n|How many languages do you speak?
homework|praca domowa|n|Did you do your homework?
birthday|urodziny|n|Happy birthday!
hour|godzina|n|The film is two hours long.
spring|wiosna|n|The trees are green in spring.
summer|lato|n|We go to the lake every summer.
autumn|jesień|n|Autumn is my favourite season.
winter|zima|n|It snows a lot in winter.
sea|morze|n|The sea is warm today.
tree|drzewo|n|There's a big tree in our garden.
flower|kwiat|n|These flowers are for you.
animal|zwierzę|n|What's your favourite animal?
bird|ptak|n|I can hear the birds.
horse|koń|n|She rides a horse every weekend.
know|wiedzieć, znać|v|I don't know his address.
think|myśleć|v|What do you think?
say|powiedzieć|v|What did you say?
tell|opowiadać|v|Tell me about your trip.
ask|pytać, prosić|v|Can I ask you something?
learn|uczyć się|v|I'm learning English.
study|studiować|v|She studies medicine.
understand|rozumieć|v|I don't understand this word.
love|kochać|v|I love my family.
need|potrzebować|v|I need some help.
have|mieć|v|I have two brothers.
make|robić (tworzyć)|v|I make breakfast every day.
do|robić|v|What do you do at weekends?
get up|wstawać|v|I get up at six.
wash|myć|v|Wash the apples first.
walk|chodzić, spacerować|v|We walk the dog every evening.
run|biegać|v|I run in the park.
swim|pływać|v|Can you swim?
dance|tańczyć|v|Let's dance!
sing|śpiewać|v|She sings in a choir.
drive|prowadzić (samochód)|v|My mum drives to work.
sit|siedzieć|v|Sit down, please.
stand|stać|v|Don't stand there, come in.
start|zaczynać|v|The lesson starts at nine.
finish|kończyć|v|I finish work at four.
stop|zatrzymywać się|v|The bus stops here.
give|dawać|v|Give me your hand.
take|brać|v|Take an umbrella.
put|kłaść|v|Put the cups on the table.
find|znajdować|v|I can't find my phone.
pay|płacić|v|Can I pay by card?
call|dzwonić|v|Call me tonight.
meet|spotykać|v|Let's meet at the station.
visit|odwiedzać|v|We visit our grandparents on Sundays.
watch|oglądać|v|We watch TV in the evening.
long|długi|adj|It's a long story.
short|krótki|adj|She has short hair.
tall|wysoki (o osobie)|adj|My brother is very tall.
fast|szybki|adj|This is a fast car.
slow|powolny|adj|The internet is slow today.
nice|miły, ładny|adj|Have a nice weekend!
great|świetny|adj|That's a great idea!
ill|chory|adj|I'm ill today.
free|wolny, darmowy|adj|Are you free on Friday?
favourite|ulubiony|adj|Blue is my favourite colour.
right|prawy, właściwy|adj|Turn right at the bank.
left|lewy|adj|Write with your left hand.
early|wcześnie|adv|I get up early.
late|późno|adv|Sorry I'm late.
now|teraz|adv|I'm busy now.
sometimes|czasami|adv|Sometimes I cook dinner.
usually|zwykle|adv|I usually walk to school.
also|też, także|adv|She also speaks German.
well|dobrze|adv|You speak English very well.
again|znowu, ponownie|adv|Can you say that again?
really|naprawdę|adv|I really like it.
together|razem|adv|Let's go together.
because|ponieważ, bo|conj|I'm tired because I worked late.
but|ale|conj|It's small but nice.
or|lub, albo|conj|Tea or coffee?
with|z (kimś, czymś)|prep|I live with my parents.
without|bez|prep|I drink coffee without milk.
near|blisko, koło|prep|I live near the station.
under|pod|prep|The cat is under the table.
between|między|prep|The bank is between the shop and the café.
one|jeden|num|I have one brother.
two|dwa|num|We have two cats.
three|trzy|num|The meeting is at three o'clock.
four|cztery|num|There are four chairs in the kitchen.
five|pięć|num|I work five days a week.
six|sześć|num|I get up at six.
seven|siedem|num|There are seven days in a week.
eight|osiem|num|The shop opens at eight.
nine|dziewięć|num|My son is nine.
ten|dziesięć|num|It costs ten pounds.
eleven|jedenaście|num|There are eleven players in a football team.
twelve|dwanaście|num|A year has twelve months.
thirteen|trzynaście|num|She's thirteen years old.
fifteen|piętnaście|num|The bus comes every fifteen minutes.
twenty|dwadzieścia|num|I'm twenty years old.
thirty|trzydzieści|num|The trip takes thirty minutes.
fifty|pięćdziesiąt|num|My dad is fifty.
hundred|sto|num|There are a hundred people here.
thousand|tysiąc|num|It costs a thousand euros.
million|milion|num|The city has a million people.
first|pierwszy|num|This is my first time in London.
second|drugi|num|We live on the second floor.
third|trzeci|num|Take the third street on the left.
half|połowa, pół|n|I waited half an hour.
Monday|poniedziałek|n|I start work on Monday.
Tuesday|wtorek|n|We have English on Tuesday.
Wednesday|środa|n|The shop is closed on Wednesday.
Thursday|czwartek|n|See you on Thursday!
Friday|piątek|n|Friday is my favourite day.
Saturday|sobota|n|We go shopping on Saturday.
Sunday|niedziela|n|On Sunday we visit my parents.
January|styczeń|n|It's very cold in January.
February|luty|n|February is the shortest month.
March|marzec|n|Spring starts in March.
April|kwiecień|n|My birthday is in April.
May|maj|n|The weather is nice in May.
June|czerwiec|n|School ends in June.
July|lipiec|n|We go on holiday in July.
August|sierpień|n|August is very hot.
September|wrzesień|n|Children go back to school in September.
October|październik|n|The leaves fall in October.
November|listopad|n|It often rains in November.
December|grudzień|n|Christmas is in December.
red|czerwony|adj|She has a red car.
blue|niebieski|adj|The sky is blue.
green|zielony|adj|The grass is green.
yellow|żółty|adj|The forklift is yellow.
black|czarny|adj|I drink black coffee.
white|biały|adj|He's wearing a white shirt.
grey|szary|adj|It's a grey day.
brown|brązowy|adj|She has brown eyes.
orange|pomarańczowy, pomarańcza|adj|He's wearing an orange vest.
pink|różowy|adj|My daughter loves pink.
purple|fioletowy|adj|She bought a purple dress.
what|co|pron|What is your name?
where|gdzie|adv|Where do you live?
when|kiedy|adv|When is your birthday?
who|kto|pron|Who is that man?
why|dlaczego|adv|Why are you late?
how|jak|adv|How are you?
which|który|pron|Which bus goes to the centre?
how much|ile (niepoliczalne, cena)|phr|How much is this?
how many|ile (policzalne)|phr|How many people work here?
I|ja|pron|I am a technologist.
you|ty, wy|pron|You are very kind.
he|on|pron|He is my brother.
she|ona|pron|She is a nurse.
it|to, ono|pron|It is very cold today.
we|my|pron|We live in Poland.
they|oni, one|pron|They are my friends.
me|mnie, mi|pron|Can you help me?
him|go, jemu|pron|I know him well.
us|nas, nam|pron|Come with us!
them|ich, im|pron|I see them every day.
something|coś|pron|I want to tell you something.
nothing|nic|pron|There's nothing in the fridge.
everyone|wszyscy|pron|Everyone is here.
hello|cześć, dzień dobry|phr|Hello! Nice to meet you.
goodbye|do widzenia|phr|Goodbye and thank you!
please|proszę (prosząc)|phr|Two coffees, please.
thank you|dziękuję|phr|Thank you for your help.
sorry|przepraszam (za coś)|phr|Sorry, I'm late.
excuse me|przepraszam (zaczepiając)|phr|Excuse me, where is the station?
you're welcome|nie ma za co|phr|Thank you! – You're welcome.
good morning|dzień dobry (rano)|phr|Good morning! How are you?
how are you|jak się masz|phr|Hi Tom, how are you?
see you later|do zobaczenia|phr|Bye, see you later!
nice to meet you|miło cię poznać|phr|I'm Anna. Nice to meet you.
nurse|pielęgniarka|n|My wife is a nurse.
engineer|inżynier|n|He's an engineer in a big company.
waiter|kelner|n|The waiter brought the menu.
mechanic|mechanik|n|The mechanic fixed my car.
farmer|rolnik|n|My uncle is a farmer.
police officer|policjant|n|The police officer helped us.
shop assistant|sprzedawca|n|The shop assistant was very nice.
manager|kierownik|n|I need to talk to the manager.
pharmacy|apteka|n|Is there a pharmacy near here?
church|kościół|n|The church is very old.
square|plac, kwadrat|n|We met in the main square.
museum|muzeum|n|The museum is free on Sundays.
cinema|kino|n|Let's go to the cinema.
restaurant|restauracja|n|We had dinner in a nice restaurant.
market|targ, rynek|n|I buy vegetables at the market.
bakery|piekarnia|n|The bakery opens at six.
petrol station|stacja benzynowa|n|We stopped at a petrol station.
sunny|słoneczny|adj|It's sunny today.
cloudy|pochmurny|adj|It's cloudy and grey.
windy|wietrzny|adj|It's too windy to fly today.
foggy|mglisty|adj|It was foggy in the morning.
rainy|deszczowy|adj|I hate rainy days.
Poland|Polska|n|I live in Poland.
Polish|polski, po polsku|adj|I speak Polish.
England|Anglia|n|He works in England.
English|angielski, po angielsku|adj|I'm learning English.
Germany|Niemcy|n|We export to Germany.
German|niemiecki, po niemiecku|adj|Our client is German.
France|Francja|n|Paris is in France.
French|francuski|adj|I love French cheese.
Spain|Hiszpania|n|We went to Spain on holiday.
Spanish|hiszpański|adj|She speaks Spanish.
Italy|Włochy|n|Rome is the capital of Italy.
Italian|włoski|adj|Italian food is great.
American|amerykański, Amerykanin|adj|He drives an American car.
British|brytyjski|adj|She's British.
banana|banan|n|I eat a banana every morning.
tomato|pomidor|n|Can you buy some tomatoes?
onion|cebula|n|Cut the onion into small pieces.
carrot|marchewka|n|Rabbits love carrots.
salad|sałatka|n|I'd like a green salad, please.
soup|zupa|n|This soup is very hot.
sandwich|kanapka|n|I have a sandwich for lunch.
pizza|pizza|n|Let's order a pizza.
pasta|makaron|n|The children love pasta.
butter|masło|n|Bread and butter, please.
salt|sól|n|Can you pass me the salt?
pepper|pieprz, papryka|n|Add some salt and pepper.
cake|ciasto, tort|n|She made a birthday cake.
chocolate|czekolada|n|I love dark chocolate.
ice cream|lody|n|Let's have an ice cream.
biscuit|herbatnik, ciastko|n|Would you like a biscuit with your tea?
sausage|kiełbasa|n|We had sausages for dinner.
ham|szynka|n|A ham sandwich, please.
wine|wino|n|A glass of red wine, please.
bottle|butelka|n|A bottle of water, please.
menu|menu, karta dań|n|Can I see the menu, please?
home|dom, do domu|n|I go home at four.
toilet|toaleta|n|Where's the toilet?
shower|prysznic|n|I have a shower every morning.
bath|wanna, kąpiel|n|The baby is in the bath.
lamp|lampa|n|Turn on the lamp, please.
cooker|kuchenka|n|The soup is on the cooker.
oven|piekarnik|n|Put the cake in the oven.
garage|garaż|n|The car is in the garage.
box|pudełko, skrzynka|n|Put the tools in the box.
bin|kosz na śmieci|n|Put it in the bin.
TV|telewizor|n|The TV is in the living room.
computer|komputer|n|I work on a computer.
radio|radio|n|I listen to the radio in the car.
photo|zdjęcie|n|Can I take a photo?
desk|biurko|n|My desk is near the window.
arm|ręka (ramię)|n|He broke his arm.
foot|stopa|n|My left foot hurts.
finger|palec (u ręki)|n|I cut my finger.
mouth|usta|n|Open your mouth, please.
nose|nos|n|He has a big nose.
ear|ucho|n|My ear hurts.
hair|włosy|n|She has long black hair.
tooth|ząb|n|I have a bad tooth.
back|plecy|n|My back hurts after work.
stomach|brzuch, żołądek|n|My stomach hurts.
body|ciało|n|Exercise is good for your body.
T-shirt|koszulka|n|He's wearing a white T-shirt.
jeans|dżinsy|n|I usually wear jeans.
trousers|spodnie|n|These trousers are too long.
skirt|spódnica|n|She's wearing a blue skirt.
sweater|sweter|n|Put on a sweater, it's cold.
socks|skarpetki|n|I need new socks.
boots|buty (za kostkę), kozaki|n|Wear your boots, it's snowing.
gloves|rękawiczki|n|Don't forget your gloves.
scarf|szalik|n|It's cold, take a scarf.
glasses|okulary|n|I can't read without my glasses.
grandmother|babcia|n|My grandmother is eighty.
grandfather|dziadek|n|My grandfather was a farmer.
grandparents|dziadkowie|n|We visit our grandparents on Sundays.
uncle|wujek|n|My uncle lives in Canada.
aunt|ciocia|n|My aunt is a teacher.
boyfriend|chłopak (partner)|n|Her boyfriend is very nice.
girlfriend|dziewczyna (partnerka)|n|This is my girlfriend, Kasia.
kid|dziecko (potocznie)|n|The kids are at school.
person|osoba|n|She's a very nice person.
hotel|hotel|n|We stayed in a small hotel.
park|park|n|Let's go for a walk in the park.
bank|bank|n|The bank opens at nine.
supermarket|supermarket|n|I buy food at the supermarket.
zoo|zoo|n|The children love the zoo.
centre|centrum|n|We live near the city centre.
building|budynek|n|It's a very tall building.
place|miejsce|n|This is a nice place.
world|świat|n|He wants to travel around the world.
map|mapa|n|Let's look at the map.
boat|łódź|n|We went on a boat trip.
ship|statek|n|The ship arrives at noon.
motorbike|motocykl|n|He rides a motorbike to work.
underground|metro|n|I take the underground to work.
bus stop|przystanek autobusowy|n|Wait at the bus stop.
minute|minuta|n|Wait a minute, please.
o'clock|(godzina) pełna|phr|It's three o'clock.
weekend|weekend|n|What are you doing at the weekend?
date|data, randka|n|What's the date today?
Christmas|Boże Narodzenie|n|We spend Christmas with family.
Easter|Wielkanoc|n|Easter is in April this year.
moment|chwila|n|Just a moment, please.
afternoon|popołudnie|n|I'm free in the afternoon.
midnight|północ (godzina)|n|We went to bed at midnight.
noon|południe (godzina)|n|The meeting is at noon.
calendar|kalendarz|n|Write the date in your calendar.
cow|krowa|n|The cows are in the field.
pig|świnia|n|The farmer has ten pigs.
sheep|owca|n|There are many sheep in the hills.
mouse|mysz|n|The cat is chasing a mouse.
rabbit|królik|n|My daughter has a rabbit.
duck|kaczka|n|There are ducks on the lake.
lion|lew|n|The lion is sleeping.
elephant|słoń|n|Elephants are very big.
monkey|małpa|n|The monkeys are funny.
bear|niedźwiedź|n|There are bears in the mountains.
sky|niebo|n|The sky is blue today.
star|gwiazda|n|Look at the stars!
moon|księżyc|n|The moon is very bright tonight.
grass|trawa|n|Don't walk on the grass.
wind|wiatr|n|The wind is very strong today.
ice|lód|n|Be careful, there's ice on the road.
music|muzyka|n|What music do you like?
film|film|n|Let's watch a film tonight.
party|impreza, przyjęcie|n|Are you coming to my party?
sport|sport|n|What's your favourite sport?
tennis|tenis|n|I play tennis on Fridays.
guitar|gitara|n|He plays the guitar.
piano|pianino|n|She plays the piano very well.
newspaper|gazeta|n|My dad reads the newspaper every day.
magazine|czasopismo|n|I bought a car magazine.
internet|internet|n|I use the internet every day.
email|e-mail|n|I'll send you an email.
video|film (nagranie), wideo|n|Watch this video.
class|klasa, zajęcia|n|The class starts at nine.
lesson|lekcja|n|The English lesson is on Monday.
test|test, sprawdzian|n|I have a test tomorrow.
classroom|sala lekcyjna|n|The classroom is on the first floor.
pencil|ołówek|n|Write with a pencil.
notebook|zeszyt, notes|n|Write the new words in your notebook.
dictionary|słownik|n|Check it in the dictionary.
page|strona|n|Open your books at page ten.
sentence|zdanie|n|Read the first sentence.
number|liczba, numer|n|What's your phone number?
example|przykład|n|Can you give me an example?
fourteen|czternaście|num|My son is fourteen.
sixteen|szesnaście|num|There are sixteen people in the group.
seventeen|siedemnaście|num|She's seventeen years old.
eighteen|osiemnaście|num|You can drive at eighteen.
nineteen|dziewiętnaście|num|The bus number is nineteen.
forty|czterdzieści|num|My brother is forty.
sixty|sześćdziesiąt|num|There are sixty minutes in an hour.
seventy|siedemdziesiąt|num|My grandmother is seventy.
eighty|osiemdziesiąt|num|The car costs eighty thousand.
ninety|dziewięćdziesiąt|num|He lived to ninety.
cry|płakać|v|The baby is crying.
jump|skakać|v|The dog can jump very high.
kiss|całować|v|She kissed her son goodbye.
ride|jeździć (rowerem, konno)|v|I ride my bike every day.
sell|sprzedawać|v|They sell fresh bread here.
show|pokazywać|v|Can you show me the way?
spell|literować|v|How do you spell your name?
stay|zostawać, mieszkać (tymczasowo)|v|We stayed at a hotel.
talk|rozmawiać|v|Can we talk later?
thank|dziękować|v|I want to thank you for your help.
use|używać|v|Can I use your phone?
enjoy|lubić, cieszyć się czymś|v|I enjoy cooking.
get dressed|ubierać się|phr|I get dressed and have breakfast.
brush|szczotkować|v|Brush your teeth twice a day.
fry|smażyć|v|Fry the eggs in butter.
wash up|zmywać naczynia|phr|I'll wash up after dinner.
tidy|porządkować|v|Tidy your room, please.
count|liczyć|v|Can you count to ten in English?
add|dodawać|v|Add some sugar.
light|jasny, lekki|adj|The room is light and big.
closed|zamknięty|adj|The shop is closed on Sundays.
different|inny, różny|adj|We have different ideas.
same|taki sam|adj|We have the same car.
next|następny|adj|See you next week.
last|ostatni, zeszły|adj|I saw him last week.
important|ważny|adj|This is very important.
interesting|ciekawy|adj|It's an interesting book.
lovely|uroczy|adj|What a lovely day!
wonderful|cudowny|adj|We had a wonderful holiday.
pretty|ładny (o kobiecie, rzeczy)|adj|What a pretty dress!
handsome|przystojny|adj|He's very handsome.
fat|gruby|adj|My cat is a bit fat.
thin|chudy, cienki|adj|This sheet is very thin.
strong|silny, mocny|adj|He's very strong.
weak|słaby|adj|I feel weak after the flu.
true|prawdziwy (zgodny z prawdą)|adj|Is it true?
wrong|błędny, niewłaściwy|adj|That's the wrong answer.
correct|poprawny|adj|Your answer is correct.
ready|gotowy|adj|Dinner is ready!
alone|sam (samotnie)|adj|I live alone.
single|samotny, stanu wolnego|adj|Is he married or single?
married|żonaty, zamężna|adj|They've been married for ten years.
cool|chłodny, fajny|adj|It's a bit cool today.
delicious|pyszny|adj|This cake is delicious!
sweet|słodki|adj|This tea is too sweet.
fine|w porządku, dobrze|adj|I'm fine, thanks.
too|też, za (zbyt)|adv|I like it too.
only|tylko|adv|I only have five euros.
every|każdy|pron|I go swimming every week.
all|wszystko, wszyscy|pron|All my friends are here.
some|trochę, kilka|pron|I need some water.
any|jakikolwiek (w pytaniach), żaden|pron|Have you got any questions?
many|wiele (policzalne)|pron|There aren't many people here.
much|dużo (niepoliczalne)|pron|I don't have much money.
a lot of|dużo|phr|She has a lot of friends.
about|o (czymś), około|prep|It's a book about planes.
from|z, od|prep|I'm from Poland.
to|do|prep|I go to work by car.
in|w|prep|I live in Gliwice.
on|na|prep|The book is on the table.
at|przy, o (godzinie)|prep|See you at six.
for|dla, przez (czas)|prep|This is for you.
after|po|prep|Let's meet after work.
before|przed (czasem)|prep|Wash your hands before dinner.
behind|za (z tyłu)|prep|The car park is behind the shop.
in front of|przed (z przodu)|prep|Wait in front of the school.
next to|obok|prep|Sit next to me.
yes|tak|adv|Yes, I can.
no|nie|adv|No, thank you.
not|nie (przy czasowniku)|adv|I'm not hungry.
and|i, a|conj|I like tea and coffee.
so|więc, tak|conj|I was tired, so I went to bed.
then|potem, wtedy|adv|First we eat, then we go.
later|później|adv|See you later.
outside|na zewnątrz|adv|The children are playing outside.
inside|w środku|adv|Let's go inside, it's cold.
upstairs|na górze, na górę|adv|The bedroom is upstairs.
downstairs|na dole, na dół|adv|The kitchen is downstairs.
everything|wszystko|pron|Everything is ready.
nobody|nikt|pron|Nobody is at home.
somebody|ktoś|pron|Somebody is at the door.
this|ten, to|pron|This is my car.
that|tamten, tamto|pron|What's that?
these|te, ci|pron|These apples are sweet.
those|tamte, tamci|pron|Who are those people?
my|mój|pron|This is my bag.
your|twój, wasz|pron|Is this your phone?
his|jego|pron|His name is Tom.
her|jej, ją|pron|Her car is red.
our|nasz|pron|Our house is small.
their|ich|pron|Their children are at school.
hi|cześć|phr|Hi, how are you?
bye|pa|phr|Bye, see you tomorrow!
welcome|witaj, witamy|phr|Welcome to Poland!
congratulations|gratulacje|phr|Congratulations on your new job!
good luck|powodzenia|phr|Good luck with your exam!
of course|oczywiście|phr|Of course you can.
no problem|nie ma problemu|phr|Thank you! – No problem.
chef|kucharz (szef kuchni)|n|The chef cooks great pasta.
builder|budowlaniec|n|The builders are working on the roof.
electrician|elektryk|n|We need an electrician.
secretary|sekretarka|n|Ask the secretary.
actor|aktor|n|He's a famous actor.
singer|piosenkarz, piosenkarka|n|She's a great singer.
worker|pracownik|n|The workers start at six.
pilot|pilot|n|My dream is to be a pilot.
Ukraine|Ukraina|n|My colleague is from Ukraine.
Ukrainian|ukraiński|adj|He speaks Ukrainian and Polish.
Ireland|Irlandia|n|My cousin works in Ireland.
Irish|irlandzki|adj|We went to an Irish pub.
Europe|Europa|n|Poland is in Europe.
European|europejski|adj|It's a European company.
Czech|czeski|adj|We have a Czech client.
China|Chiny|n|These parts are made in China.
Chinese|chiński|adj|Do you like Chinese food?
living room|salon, pokój dzienny|n|We watch TV in the living room.
dining room|jadalnia|n|We eat in the dining room.
cafe|kawiarnia|n|Let's meet at the cafe.
pub|pub|n|We went to the pub after work.
swimming|pływanie|n|Swimming is my favourite sport.
running|bieganie|n|Running is good for your heart.
dancing|taniec, tańczenie|n|She loves dancing.
reading|czytanie|n|My hobbies are reading and cooking.
cooking|gotowanie|n|I enjoy cooking at the weekend.
shopping|zakupy|n|I go shopping on Saturdays.
sick|chory|adj|I feel sick.
birthday party|przyjęcie urodzinowe|n|Come to my birthday party!
thanks|dzięki|phr|Thanks for the coffee!
first name|imię|n|What's your first name?
surname|nazwisko|n|What's your surname?
age|wiek|n|What's your age?
job title|stanowisko|n|What's your job title?
taxi|taksówka|n|Let's take a taxi.`,
A2: `airport|lotnisko|n|We got to the airport two hours early.
journey|podróż|n|The journey took six hours.
ticket|bilet|n|I bought a return ticket.
luggage|bagaż|n|How much luggage do you have?
passport|paszport|n|Don't forget your passport!
neighbour|sąsiad|n|Our neighbours are very friendly.
village|wieś, wioska|n|My grandparents live in a small village.
bridge|most|n|We walked across the bridge.
hospital|szpital|n|She works at the hospital.
medicine|lekarstwo|n|Take this medicine twice a day.
headache|ból głowy|n|I've got a terrible headache.
health|zdrowie|n|Smoking is bad for your health.
customer|klient|n|The shop has a lot of customers.
price|cena|n|The price includes breakfast.
receipt|paragon|n|Can I have the receipt, please?
wallet|portfel|n|I lost my wallet on the bus.
umbrella|parasol|n|Take an umbrella, it's going to rain.
clothes|ubrania|n|I need some new clothes.
jacket|kurtka|n|Put your jacket on, it's cold.
holiday|wakacje, urlop|n|We're going on holiday in August.
beach|plaża|n|We spent the day on the beach.
mountain|góra|n|They climbed the highest mountain.
river|rzeka|n|The Vistula is the longest river in Poland.
forest|las|n|We went for a walk in the forest.
island|wyspa|n|Malta is a small island.
storm|burza|n|The storm lasted all night.
snow|śnieg|n|The children played in the snow.
cloud|chmura|n|There isn't a cloud in the sky.
vegetables|warzywa|n|Eat more vegetables.
meat|mięso|n|I don't eat red meat.
meal|posiłek|n|Breakfast is the most important meal.
recipe|przepis (kulinarny)|n|Can you give me the recipe for this cake?
fridge|lodówka|n|There's some juice in the fridge.
furniture|meble|n|We bought new furniture for the living room.
stairs|schody|n|Be careful on the stairs.
garden|ogród|n|We have tomatoes in our garden.
key|klucz|n|I can't find my keys.
appointment|wizyta (umówiona)|n|I have a dentist appointment at three.
meeting|spotkanie, zebranie|n|The meeting starts at ten.
salary|pensja|n|He earns a good salary.
boss|szef|n|My boss is on holiday.
interview|rozmowa kwalifikacyjna, wywiad|n|I have a job interview tomorrow.
skill|umiejętność|n|Communication is an important skill.
team|drużyna, zespół|n|Which team do you support?
match|mecz|n|Did you watch the match last night?
competition|konkurs, zawody|n|She won a singing competition.
argue|kłócić się|v|My brothers argue all the time.
borrow|pożyczać (od kogoś)|v|Can I borrow your bike?
lend|pożyczać (komuś)|v|Could you lend me ten pounds?
forget|zapominać|v|Don't forget to call me.
remember|pamiętać|v|I can't remember his name.
decide|decydować|v|We decided to stay at home.
explain|wyjaśniać|v|Can you explain this word?
invite|zapraszać|v|They invited us to their wedding.
arrive|przybywać, przyjeżdżać|v|The train arrived late.
leave|wyjeżdżać, opuszczać|v|I leave home at eight.
travel|podróżować|v|I love travelling by train.
spend|wydawać, spędzać|v|We spent a week in Spain.
save|oszczędzać, ratować|v|I'm saving money for a car.
win|wygrywać|v|Our team won the match.
lose|przegrywać, gubić|v|I always lose my glasses.
wait|czekać|v|Wait for me here.
carry|nosić, nieść|v|Can you carry this bag?
build|budować|v|They are building a new school.
break|łamać, psuć|v|Be careful, don't break it.
grow|rosnąć, uprawiać|v|Children grow so fast.
hope|mieć nadzieję|v|I hope you feel better soon.
worry|martwić się|v|Don't worry, everything will be fine.
agree|zgadzać się|v|I agree with you.
believe|wierzyć|v|I can't believe it!
choose|wybierać|v|Choose one colour.
prefer|woleć|v|I prefer tea to coffee.
improve|poprawiać, ulepszać|v|I want to improve my English.
angry|rozzłoszczony, zły (na kogoś)|adj|Why are you angry with me?
tired|zmęczony|adj|I'm too tired to go out.
bored|znudzony|adj|The kids were bored at the museum.
worried|zmartwiony|adj|She looks worried.
busy|zajęty|adj|I'm busy this weekend.
quiet|cichy|adj|It's a quiet neighbourhood.
loud|głośny|adj|The music is too loud.
dangerous|niebezpieczny|adj|Swimming here is dangerous.
safe|bezpieczny|adj|Is this area safe at night?
healthy|zdrowy|adj|Fruit is healthy.
hungry|głodny|adj|I'm hungry, let's eat.
thirsty|spragniony|adj|I'm thirsty after the run.
famous|sławny|adj|He's a famous actor.
friendly|przyjazny|adj|The staff were very friendly.
polite|uprzejmy|adj|It's polite to say thank you.
lazy|leniwy|adj|Don't be lazy, get up!
clever|mądry, bystry|adj|She's a clever girl.
strange|dziwny|adj|I heard a strange noise.
comfortable|wygodny|adj|This sofa is really comfortable.
crowded|zatłoczony|adj|The bus was crowded.
empty|pusty|adj|The fridge is empty.
full|pełny|adj|The glass is full.
wet|mokry|adj|My shoes are wet.
already|już|adv|I've already finished.
still|wciąż, nadal|adv|Are you still at work?
soon|wkrótce|adv|See you soon!
almost|prawie|adv|It's almost midnight.
probably|prawdopodobnie|adv|It will probably rain tomorrow.
suddenly|nagle|adv|Suddenly the lights went out.
however|jednak|adv|It was cold. However, we went out.
enough|wystarczająco, dość|adv|Are you warm enough?
abroad|za granicą, za granicę|adv|She wants to study abroad.
accident|wypadek|n|He had a car accident last year.
advice|rada (porada)|n|Can you give me some advice?
area|obszar, okolica|n|We live in a quiet area.
bill|rachunek|n|Can we have the bill, please?
change|zmiana, reszta (pieniądze)|n|Keep the change.
cousin|kuzyn, kuzynka|n|My cousin lives in Canada.
dentist|dentysta|n|I'm scared of the dentist.
direction|kierunek|n|We went in the wrong direction.
distance|odległość|n|The distance between the towns is 20 km.
driver|kierowca|n|The bus driver was very helpful.
education|edukacja, wykształcenie|n|Education is free in Poland.
exam|egzamin|n|I passed my English exam!
flight|lot|n|Our flight was delayed.
gift|prezent|n|This is a gift for you.
guest|gość|n|We have guests tonight.
guide|przewodnik|n|Our guide spoke three languages.
heart|serce|n|Exercise is good for your heart.
idea|pomysł|n|That's a good idea.
illness|choroba|n|He missed school because of illness.
information|informacja|n|I need more information.
injury|uraz, kontuzja|n|He's out of the team with an injury.
knife|nóż|n|Be careful with that knife.
fork|widelec|n|Could I have a fork, please?
spoon|łyżka|n|You need a spoon for the soup.
plate|talerz|n|Put the plates on the table.
glass|szklanka, szkło|n|A glass of water, please.
cup|filiżanka, kubek|n|Would you like a cup of coffee?
lake|jezioro|n|We swam in the lake.
letter|list, litera|n|I got a letter from my bank.
library|biblioteka|n|I borrowed this book from the library.
message|wiadomość|n|Did you get my message?
noise|hałas|n|What's that noise?
order|zamówienie, porządek|n|Can I take your order?
parcel|paczka|n|A parcel came for you.
pocket|kieszeń|n|My keys are in my pocket.
post office|poczta|n|Where is the post office?
reason|powód|n|What's the reason for the delay?
rest|odpoczynek, reszta|n|You need some rest.
result|wynik|n|When will we get the results?
rule|zasada|n|You must follow the rules.
shape|kształt|n|The table is round in shape.
size|rozmiar|n|What size are your shoes?
smell|zapach|n|I love the smell of fresh bread.
sound|dźwięk|n|I heard a strange sound.
space|przestrzeń, miejsce|n|There's no space in the car.
speed|prędkość|n|He was driving at high speed.
station|stacja, dworzec|n|I'll meet you at the station.
step|krok|n|Take one step forward.
subject|przedmiot (szkolny), temat|n|Maths is my favourite subject.
surprise|niespodzianka|n|What a nice surprise!
tool|narzędzie|n|I need the right tool for this.
traffic|ruch uliczny|n|The traffic is terrible today.
trip|wycieczka|n|We went on a school trip.
view|widok|n|The view from the top is amazing.
voice|głos|n|She has a beautiful voice.
wedding|ślub, wesele|n|We're going to a wedding on Saturday.
wood|drewno|n|The table is made of wood.
allow|pozwalać|v|Smoking isn't allowed here.
bake|piec|v|My mum baked a cake.
become|stawać się|v|She wants to become a doctor.
bring|przynosić|v|Bring your friends!
catch|łapać|v|I need to catch the bus.
check|sprawdzać|v|Check your answers.
clean|sprzątać, czyścić|v|I clean my room on Saturdays.
cost|kosztować|v|How much does it cost?
cross|przechodzić (przez)|v|Be careful when you cross the road.
cut|ciąć, kroić|v|Cut the bread, please.
describe|opisywać|v|Can you describe the man?
die|umierać|v|My grandfather died last year.
draw|rysować|v|She draws beautiful pictures.
dream|marzyć, śnić|v|I dream of visiting Japan.
drop|upuszczać|v|Don't drop the glass!
fall|spadać, upadać|v|He fell off his bike.
feel|czuć (się)|v|I feel much better today.
fill|napełniać, wypełniać|v|Fill in the form, please.
fly|latać|v|We flew to Rome.
follow|podążać, śledzić|v|Follow me.
hate|nienawidzić|v|I hate getting up early.
hear|słyszeć|v|Can you hear me?
hurry|spieszyć się|v|Hurry up, we're late!
hurt|ranić, boleć|v|My back hurts.
join|dołączać|v|Why don't you join us?
keep|trzymać, zatrzymywać|v|Keep the receipt.
laugh|śmiać się|v|We laughed all evening.
mean|znaczyć|v|What does this word mean?
miss|tęsknić, spóźnić się na|v|I missed the train.
move|ruszać się, przeprowadzać się|v|We moved to Gdańsk last year.
pack|pakować|v|Have you packed your bag?
pass|zdawać (egzamin), podawać|v|Can you pass the salt?
practise|ćwiczyć|v|I practise the piano every day.
prepare|przygotowywać|v|I need to prepare for the test.
promise|obiecywać|v|I promise I'll call you.
protect|chronić|v|Sunglasses protect your eyes.
push|pchać|v|Push the door to open it.
pull|ciągnąć|v|Pull the handle.
rent|wynajmować|v|We rented a car in Spain.
repair|naprawiać|v|Can you repair my bike?
repeat|powtarzać|v|Could you repeat that, please?
return|wracać, zwracać|v|I returned the book to the library.
send|wysyłać|v|Send me a message.
share|dzielić się|v|Let's share the pizza.
shout|krzyczeć|v|Don't shout at me!
smile|uśmiechać się|v|Smile for the photo!
steal|kraść|v|Someone stole my bike.
teach|uczyć (kogoś)|v|She teaches maths.
throw|rzucać|v|Throw me the ball.
touch|dotykać|v|Don't touch the paintings.
try|próbować|v|Try this cake.
turn|obracać, skręcać|v|Turn left at the lights.
wake up|budzić się|v|I woke up at five.
wear|mieć na sobie (ubranie)|v|She's wearing a red dress.
afraid|wystraszony|adj|Don't be afraid.
amazing|niesamowity|adj|The concert was amazing.
boring|nudny|adj|The film was boring.
brave|odważny|adj|You were very brave.
careful|ostrożny|adj|Be careful on the ice.
dirty|brudny|adj|Your shoes are dirty.
dark|ciemny|adj|It gets dark early in winter.
deep|głęboki|adj|The lake is very deep.
excited|podekscytowany|adj|The kids are excited about the trip.
fair|sprawiedliwy|adj|That's not fair!
fresh|świeży|adj|I love fresh bread.
funny|zabawny|adj|He tells funny stories.
heavy|ciężki|adj|This box is heavy.
kind|życzliwy|adj|It's very kind of you.
low|niski|adj|The prices are low here.
narrow|wąski|adj|The streets are narrow.
wide|szeroki|adj|The river is very wide here.
possible|możliwy|adj|Is it possible to change the date?
real|prawdziwy|adj|Is that a real diamond?
rich|bogaty|adj|They're very rich.
poor|biedny|adj|It's a poor country.
sharp|ostry|adj|This knife is very sharp.
soft|miękki|adj|The bed is too soft.
hard|twardy, trudny|adj|The exam was really hard.
special|wyjątkowy|adj|Today is a special day.
sure|pewny|adj|Are you sure?
terrible|okropny|adj|The weather was terrible.
ugly|brzydki|adj|What an ugly building!
useful|przydatny|adj|This app is really useful.
warm|ciepły|adj|It's warm today.
anywhere|gdziekolwiek|adv|You can sit anywhere.
everywhere|wszędzie|adv|I looked everywhere for my keys.
especially|szczególnie|adv|I love fruit, especially apples.
finally|wreszcie|adv|We finally got home at midnight.
just|właśnie, tylko|adv|I've just arrived.
maybe|może|adv|Maybe we can meet tomorrow.
quickly|szybko|adv|She speaks very quickly.
slowly|powoli|adv|Please speak slowly.
quite|całkiem|adv|The film was quite good.
yet|jeszcze (nie)|adv|I haven't finished yet.
ago|temu|adv|I moved here two years ago.
if|jeśli|conj|If it rains, we'll stay home.
while|w czasie gdy|conj|I read while I wait.
until|aż, do (czasu)|conj|Wait until I come back.
during|podczas|prep|I fell asleep during the film.
through|przez (na wskroś)|prep|We drove through the forest.
across|przez (na drugą stronę)|prep|They swam across the river.
against|przeciwko|prep|Are you for or against the plan?
turn left|skręcić w lewo|phr|Turn left at the traffic lights.
go straight on|iść prosto|phr|Go straight on for 200 metres.
opposite|naprzeciwko|prep|The bank is opposite the station.
on the corner|na rogu|phr|There's a café on the corner.
roundabout|rondo|n|Take the second exit at the roundabout.
crossroads|skrzyżowanie|n|Turn right at the crossroads.
traffic lights|światła (uliczne)|n|Stop at the traffic lights.
pavement|chodnik|n|Walk on the pavement, not on the road.
get lost|zgubić się|phr|We got lost in the old town.
football|piłka nożna|n|He plays football every Sunday.
cycling|jazda na rowerze|n|Cycling is good for your health.
fishing|wędkarstwo|n|My dad loves fishing.
gym|siłownia|n|I go to the gym three times a week.
chess|szachy|n|Do you play chess?
hiking|wędrówki piesze|n|We went hiking in the mountains.
skiing|narciarstwo|n|Skiing is popular in Zakopane.
swimming pool|basen|n|The hotel has a swimming pool.
board game|gra planszowa|n|We play board games at weekends.
fever|gorączka|n|She has a high fever.
cough|kaszel|n|I've had a cough for a week.
sore throat|ból gardła|n|I have a sore throat.
cold|przeziębienie|n|I've got a cold.
toothache|ból zęba|n|I have a terrible toothache.
stomach ache|ból brzucha|n|I've got a stomach ache.
prescription|recepta|n|You need a prescription for this medicine.
pill|tabletka|n|Take one pill after each meal.
ambulance|karetka|n|Call an ambulance!
put on|zakładać (ubranie)|phr|Put on your jacket, it's cold.
take off|zdejmować (ubranie)|phr|Please take off your shoes.
look for|szukać|phr|I'm looking for my keys.
turn on|włączać|phr|Turn on the light, please.
turn off|wyłączać|phr|Turn off the machine before cleaning it.
give back|oddawać|phr|Can you give back my pen?
pick up|podnosić, odbierać|phr|I'll pick you up at the station.
look after|opiekować się|phr|Who looks after your children?
get on|wsiadać|phr|Get on the bus here.
get off|wysiadać|phr|Get off at the next stop.
find out|dowiadywać się|phr|I want to find out more about the course.
go out|wychodzić (z domu)|phr|Let's go out tonight.
fill in|wypełniać (formularz)|phr|Please fill in this form.
sofa|kanapa|n|The cat is sleeping on the sofa.
shelf|półka|n|Put the books on the shelf.
washing machine|pralka|n|The washing machine is broken.
sink|zlew|n|The dishes are in the sink.
carpet|dywan|n|We bought a new carpet.
curtains|zasłony|n|Close the curtains, please.
cupboard|szafka|n|The cups are in the cupboard.
wardrobe|szafa|n|My clothes are in the wardrobe.
mirror|lustro|n|Look in the mirror.
pillow|poduszka|n|This pillow is too soft.
blanket|koc|n|Can I have another blanket?
towel|ręcznik|n|Don't forget a towel.
roof|dach|n|The roof needs repairing.
try on|przymierzać|phr|Can I try on these shoes?
fitting room|przymierzalnia|n|The fitting room is over there.
discount|zniżka|n|Students get a 10% discount.
sale|wyprzedaż|n|I bought it in the sale.
cash|gotówka|n|Can I pay in cash?
card|karta (płatnicza)|n|Do you accept cards?
queue|kolejka|n|There was a long queue at the checkout.
trolley|wózek (sklepowy)|n|Get a trolley, we need a lot of things.
checkout|kasa (w sklepie)|n|Pay at the checkout.
seat|miejsce (siedzące)|n|Is this seat free?
platform|peron|n|The train leaves from platform 4.
timetable|rozkład jazdy|n|Check the bus timetable.
single ticket|bilet w jedną stronę|n|A single ticket to Kraków, please.
return ticket|bilet powrotny|n|A return ticket is cheaper.
suitcase|walizka|n|My suitcase is too heavy.
housework|prace domowe|n|I do the housework on Saturdays.
laundry|pranie|n|I need to do the laundry.
dishes|naczynia|n|Who's washing the dishes?
vacuum cleaner|odkurzacz|n|The vacuum cleaner is in the cupboard.
iron|żelazko, żelazo|n|Be careful, the iron is hot.
hairdresser|fryzjer|n|I'm going to the hairdresser tomorrow.
postcode|kod pocztowy|n|What's your postcode?
envelope|koperta|n|Put the letter in an envelope.
stamp|znaczek|n|I need a stamp for this letter.
form|formularz|n|Please fill in this form.
signature|podpis|n|We need your signature here.
ID card|dowód osobisty|n|Can I see your ID card?
driving licence|prawo jazdy|n|I got my driving licence at eighteen.
purse|portmonetka|n|She keeps her money in a purse.
coin|moneta|n|I need some coins for the machine.
banknote|banknot|n|Can you change this banknote?
snack|przekąska|n|I eat a snack at ten.
dessert|deser|n|What's for dessert?
beef|wołowina|n|I don't eat beef.
pork|wieprzowina|n|Pork is popular in Poland.
lamb|jagnięcina|n|We had lamb for dinner.
seafood|owoce morza|n|I love seafood.
steak|stek|n|How would you like your steak?
mushroom|grzyb, pieczarka|n|We picked mushrooms in the forest.
garlic|czosnek|n|Add some garlic to the soup.
cucumber|ogórek|n|A cucumber salad, please.
lettuce|sałata|n|Wash the lettuce first.
beans|fasola|n|I like beans on toast.
peas|groszek|n|The children don't like peas.
cherry|wiśnia, czereśnia|n|We have a cherry tree in the garden.
strawberry|truskawka|n|Strawberries are sweet in June.
grape|winogrono|n|Grapes are my favourite fruit.
lemon|cytryna|n|Tea with lemon, please.
pear|gruszka|n|This pear is very juicy.
peach|brzoskwinia|n|I bought some peaches at the market.
flour|mąka|n|You need flour to make bread.
oil|olej|n|Fry it in a little oil.
honey|miód|n|Tea with honey is good for a cold.
jam|dżem|n|Bread with jam, please.
cereal|płatki śniadaniowe|n|I have cereal for breakfast.
yoghurt|jogurt|n|I eat yoghurt with fruit.
bowl|miska|n|A bowl of soup, please.
frying pan|patelnia|n|Heat the frying pan.
pot|garnek|n|Put the pot on the cooker.
kettle|czajnik|n|Put the kettle on.
napkin|serwetka|n|Can I have a napkin?
fried|smażony|adj|I'd like fried eggs.
boiled|gotowany|adj|Boiled potatoes, please.
raw|surowy|adj|Don't eat raw meat.
spicy|ostry (pikantny)|adj|This curry is very spicy.
sour|kwaśny|adj|The milk is sour.
bitter|gorzki|adj|This coffee is bitter.
tasty|smaczny|adj|The soup is very tasty.
blood|krew|n|He lost a lot of blood.
bone|kość|n|He broke a bone in his hand.
skin|skóra|n|Protect your skin from the sun.
knee|kolano|n|My knee hurts when I run.
shoulder|bark, ramię|n|I hurt my shoulder at work.
neck|szyja|n|I have a pain in my neck.
throat|gardło|n|My throat is sore.
chest|klatka piersiowa|n|I have a pain in my chest.
toe|palec (u nogi)|n|I hurt my toe.
tongue|język (narząd)|n|Show me your tongue.
brain|mózg|n|The brain needs sleep.
flu|grypa|n|I've got the flu.
temperature|temperatura (gorączka)|n|She has a high temperature.
plaster|plaster|n|Put a plaster on your finger.
sneeze|kichać|v|Cover your mouth when you sneeze.
diet|dieta|n|I'm on a diet.
pedestrian crossing|przejście dla pieszych|n|Cross at the pedestrian crossing.
car park|parking|n|The car park is full.
petrol|benzyna|n|We need petrol.
motorway|autostrada|n|Take the motorway to Kraków.
tyre|opona|n|I've got a flat tyre.
seatbelt|pas bezpieczeństwa|n|Fasten your seatbelt.
speed limit|ograniczenie prędkości|n|The speed limit here is 50.
traffic jam|korek|n|We were stuck in a traffic jam.
tour|wycieczka (zwiedzanie)|n|We went on a tour of the city.
tourist|turysta|n|The town is full of tourists.
guidebook|przewodnik (książka)|n|The guidebook says the museum is free.
backpack|plecak|n|My backpack is very heavy.
tent|namiot|n|We slept in a tent.
campsite|kemping|n|The campsite is near the lake.
reception|recepcja|n|Leave your key at reception.
single room|pokój jednoosobowy|n|I'd like a single room for two nights.
double room|pokój dwuosobowy|n|We booked a double room.
foreign|zagraniczny, obcy|adj|Do you speak any foreign languages?
uniform|mundur, uniform|n|The workers wear a uniform.
factory|fabryka|n|My father works in a factory.
company|firma|n|I work for a big company.
lunch break|przerwa na lunch|n|We have a thirty-minute lunch break.
university|uniwersytet|n|She studies at university.
primary school|szkoła podstawowa|n|My son goes to primary school.
secondary school|szkoła średnia|n|I finished secondary school in 2008.
pupil|uczeń|n|There are 25 pupils in the class.
classmate|kolega z klasy|n|He's my old classmate.
headteacher|dyrektor szkoły|n|The headteacher wants to see you.
laptop|laptop|n|I work on my laptop.
mobile phone|telefon komórkowy|n|Switch off your mobile phone.
keyboard|klawiatura|n|This keyboard is broken.
printer|drukarka|n|The printer is out of paper.
camera|aparat (fotograficzny)|n|I bought a new camera.
headphones|słuchawki|n|I listen to music with headphones.
text|SMS, tekst|n|Send me a text when you arrive.
shopping centre|centrum handlowe|n|The shopping centre opens at ten.
pay back|oddać (pieniądze)|phr|I'll pay you back tomorrow.
brand|marka|n|What brand is your car?
fog|mgła|n|There's thick fog this morning.
thunder|grzmot|n|Did you hear the thunder?
lightning|błyskawica|n|The tree was hit by lightning.
heat|upał, ciepło|n|I can't work in this heat.
season|pora roku, sezon|n|Spring is my favourite season.
sunshine|słońce (światło słoneczne)|n|We sat in the sunshine.
field|pole|n|The cows are in the field.
hill|wzgórze|n|We walked up the hill.
valley|dolina|n|The village is in a valley.
coast|wybrzeże|n|We drove along the coast.
desert|pustynia|n|The Sahara is a big desert.
ocean|ocean|n|They sailed across the ocean.
wave|fala|n|The waves are very big today.
sand|piasek|n|The children are playing in the sand.
stone|kamień|n|The house is made of stone.
rock|skała|n|We climbed the rocks.
plant|roślina|n|Water the plants, please.
leaf|liść|n|The leaves are falling.
insect|owad|n|There are a lot of insects in summer.
spider|pająk|n|I'm afraid of spiders.
bee|pszczoła|n|A bee stung me.
surprised|zaskoczony|adj|I was surprised to see him.
scared|bojący się|adj|Don't be scared.
lucky|mający szczęście|adj|You're lucky – you won!
unhappy|nieszczęśliwy|adj|She looks unhappy.
calm|spokojny|adj|Stay calm.
careless|nieostrożny|adj|It was a careless mistake.
ask for|prosić o|phr|Ask for help if you need it.
boil|gotować (wodę), wrzeć|v|Boil the water first.
burn|palić się, parzyć|v|Be careful, don't burn yourself.
call back|oddzwonić|phr|I'll call you back later.
collect|zbierać, odbierać|v|I collect old coins.
copy|kopiować|v|Copy the file to your laptop.
cover|przykrywać|v|Cover the pot.
destroy|niszczyć|v|The storm destroyed the roof.
discuss|omawiać|v|Let's discuss it tomorrow.
divide|dzielić|v|Divide the cake into eight pieces.
enter|wchodzić|v|Please enter the building through the main door.
fight|walczyć, bić się|v|The boys are fighting.
fold|składać (papier, ubrania)|v|Fold your clothes.
go shopping|iść na zakupy|phr|Let's go shopping on Saturday.
hang|wieszać|v|Hang your coat here.
hide|chować (się)|v|The cat is hiding under the bed.
hold|trzymać|v|Hold my hand.
introduce|przedstawiać (kogoś)|v|Let me introduce my wife.
jog|biegać (truchtem)|v|I jog in the park every morning.
kick|kopać|v|He kicked the ball.
knock|pukać|v|Please knock before you come in.
lie down|położyć się|phr|I need to lie down.
look like|wyglądać jak|phr|You look like your father.
marry|poślubić|v|He wants to marry her.
mix|mieszać|v|Mix the flour and the eggs.
plan|planować|v|We're planning a trip to Italy.
point|wskazywać|v|Don't point at people.
post|wysyłać (pocztą)|v|I posted the letter yesterday.
pour|nalewać|v|Pour the milk into the cup.
print|drukować|v|Can you print this for me?
pronounce|wymawiać|v|How do you pronounce this word?
relax|odpoczywać, relaksować się|v|I relax in the garden.
reply|odpowiadać (na wiadomość)|v|Please reply to my email.
shake|potrząsać|v|Shake the bottle before use.
shine|świecić|v|The sun is shining.
sign|podpisywać|v|Sign here, please.
slip|poślizgnąć się|v|I slipped on the ice.
taste|smakować, próbować|v|Taste the soup.
tie|wiązać|v|Tie your shoes.
type|pisać na klawiaturze|v|I type very fast.
weigh|ważyć|v|How much do you weigh?
whisper|szeptać|v|Don't whisper in class.
wish|życzyć|v|I wish you a happy birthday.
wrap|pakować (prezent)|v|Can you wrap this present?
awake|obudzony, nie śpiący|adj|Are you awake?
asleep|śpiący (we śnie)|adj|The baby is asleep.
alive|żywy|adj|Is the fish still alive?
dead|martwy|adj|The battery is dead.
broken|zepsuty, złamany|adj|My phone is broken.
cheerful|wesoły|adj|She's always cheerful.
common|powszechny, częsty|adj|It's a common name.
dry|suchy|adj|Keep the electrodes dry.
electric|elektryczny|adj|We bought an electric car.
main|główny|adj|The main entrance is closed.
modern|nowoczesny|adj|It's a modern factory.
necessary|konieczny|adj|Is it necessary?
normal|normalny|adj|It's normal to be nervous.
other|pozostały, inny|adj|Where are the other students?
perfect|idealny|adj|Your English is perfect.
pleasant|przyjemny|adj|We had a pleasant evening.
popular|popularny|adj|This restaurant is very popular.
private|prywatny|adj|This is a private road.
public|publiczny|adj|Public transport is cheap here.
silly|głupi, niemądry|adj|Don't be silly.
simple|prosty|adj|It's a simple question.
spare|zapasowy, wolny (czas)|adj|What do you do in your spare time?
sudden|nagły|adj|There was a sudden noise.
typical|typowy|adj|It's a typical Polish dish.
usual|zwykły|adj|I'll have the usual, please.
wild|dziki|adj|There are wild animals in the forest.
wooden|drewniany|adj|We have a wooden table.
certainly|z pewnością|adv|I'll certainly help you.
else|jeszcze (inny)|adv|Anything else?
even|nawet|adv|He works even on Sundays.
ever|kiedykolwiek|adv|Have you ever been to Spain?
luckily|całe szczęście|adv|Luckily, nobody was hurt.
once|raz, kiedyś|adv|I go swimming once a week.
twice|dwa razy|adv|I've been there twice.
perhaps|być może|adv|Perhaps he's ill.
since|od (czasu)|prep|I've lived here since 2010.
so far|jak dotąd|phr|So far, so good.
straight|prosto|adv|Go straight ahead.
anything|cokolwiek|pron|Do you need anything?
nowhere|nigdzie|adv|There's nowhere to park.
somewhere|gdzieś|adv|Let's go somewhere warm.
a few|kilka|phr|I have a few questions.
a little|trochę|phr|I speak a little German.
both|oba, obaj|pron|Both answers are correct.
each|każdy (z osobna)|pron|Each room has a TV.
instead of|zamiast|prep|Can I have tea instead of coffee?
except|oprócz|prep|Everyone came except Tom.
towards|w kierunku|prep|He walked towards the door.
along|wzdłuż|prep|We walked along the river.
above|nad, powyżej|prep|There's a picture above the bed.
below|pod, poniżej|prep|The temperature is below zero.
around|wokół, około|prep|We walked around the lake.
among|wśród|prep|He was among the best students.
per|na (za)|prep|It costs ten euros per person.
neither|żaden (z dwóch)|pron|Neither answer is correct.
either|którykolwiek (z dwóch)|pron|You can take either bus.
mess|bałagan|n|What a mess!
present|prezent|n|Thank you for the present.
invitation|zaproszenie|n|Thanks for the invitation.
celebration|uroczystość, świętowanie|n|We had a big celebration.
anniversary|rocznica|n|It's our wedding anniversary.
member|członek|n|He's a member of the club.
club|klub|n|I joined a flying club.
hobby|hobby|n|My hobby is flying.
free time|czas wolny|n|What do you do in your free time?
concert|koncert|n|We went to a rock concert.
theatre|teatr|n|We went to the theatre last night.
exhibition|wystawa|n|There's an exhibition at the museum.
ticket office|kasa biletowa|n|Buy your ticket at the ticket office.
picnic|piknik|n|Let's have a picnic in the park.
passenger|pasażer|n|The plane has 180 passengers.
gate|bramka, wyjście (na lotnisku)|n|Go to gate 12.
boarding pass|karta pokładowa|n|Show your boarding pass, please.
flight attendant|steward, stewardesa|n|The flight attendant brought some water.
lost property|biuro rzeczy znalezionych|n|Ask at lost property.
neighbourhood|okolica|n|It's a quiet neighbourhood.
repair shop|warsztat naprawczy|n|My car is at the repair shop.
spare part|część zamienna|n|We're waiting for a spare part.
toolbox|skrzynka narzędziowa|n|The hammer is in the toolbox.
hammer|młotek|n|Pass me the hammer.
screwdriver|śrubokręt|n|I need a screwdriver.
ladder|drabina|n|Hold the ladder for me.
nail|gwóźdź, paznokieć|n|Hit the nail with the hammer.
paint|farba, malować|n|The paint is still wet.
wire|drut, przewód|n|Don't touch that wire!
lift|winda|n|Take the lift to the fifth floor.
climb|wspinać się|v|We climbed the mountain.
fix|naprawiać|v|Can you fix my bike?`,
B1: `achieve|osiągać|v|She achieved all her goals.
admit|przyznawać (się)|v|He admitted that he was wrong.
afford|pozwolić sobie (finansowo)|v|We can't afford a new car.
apply|ubiegać się, składać podanie|v|I applied for a job in Berlin.
avoid|unikać|v|Try to avoid sugary drinks.
complain|narzekać, składać skargę|v|She complained about the noise.
consider|rozważać|v|We're considering moving abroad.
deny|zaprzeczać|v|He denied taking the money.
depend|zależeć|v|It depends on the weather.
encourage|zachęcać|v|My parents encouraged me to study.
expect|oczekiwać, spodziewać się|v|I didn't expect to see you here.
fail|ponieść porażkę, oblać (egzamin)|v|He failed his driving test.
force|zmuszać|v|Nobody forced you to come.
influence|wpływać|v|Advertising influences what we buy.
involve|angażować, obejmować|v|The job involves a lot of travelling.
manage|radzić sobie, zarządzać|v|I managed to finish on time.
mention|wspominać (o czymś)|v|She didn't mention her new job.
persuade|przekonywać, namawiać|v|I persuaded him to come with us.
pretend|udawać|v|He pretended to be asleep.
prevent|zapobiegać|v|Washing hands prevents infections.
refuse|odmawiać|v|She refused to answer.
reduce|zmniejszać, ograniczać|v|We need to reduce costs.
replace|zastępować, wymieniać|v|I replaced the old battery.
require|wymagać|v|The job requires good English.
respond|odpowiadać, reagować|v|He didn't respond to my email.
succeed|odnieść sukces, udać się|v|She succeeded in passing the exam.
suggest|sugerować, proponować|v|I suggest we leave early.
suppose|przypuszczać|v|I suppose you're right.
warn|ostrzegać|v|They warned us about the storm.
recognise|rozpoznawać|v|I didn't recognise you with short hair.
survive|przetrwać, przeżyć|v|Only two people survived the crash.
attitude|nastawienie, postawa|n|She has a positive attitude.
behaviour|zachowanie|n|His behaviour was unacceptable.
advantage|zaleta, przewaga|n|Living in the city has many advantages.
disadvantage|wada|n|The main disadvantage is the price.
benefit|korzyść, zasiłek|n|Exercise has many health benefits.
challenge|wyzwanie|n|Learning a language is a challenge.
evidence|dowód, dowody|n|There is no evidence that he did it.
experience|doświadczenie|n|Do you have any experience with children?
knowledge|wiedza|n|His knowledge of history is amazing.
opportunity|okazja, szansa|n|This is a great opportunity for you.
purpose|cel|n|What is the purpose of your visit?
responsibility|odpowiedzialność|n|It's your responsibility to lock the door.
relationship|związek, relacja|n|They have a good relationship.
ability|zdolność|n|She has the ability to stay calm.
solution|rozwiązanie|n|We need to find a solution.
failure|porażka|n|The plan was a complete failure.
decision|decyzja|n|It was a difficult decision.
environment|środowisko|n|We must protect the environment.
pollution|zanieczyszczenie|n|Air pollution is a big problem in winter.
waste|odpady, marnotrawstwo|n|It's a waste of time.
government|rząd|n|The government announced new taxes.
society|społeczeństwo|n|We live in a modern society.
law|prawo (przepisy)|n|It's against the law.
crime|przestępstwo|n|Crime has fallen in the city.
research|badania|n|She does research on climate change.
device|urządzenie|n|Turn off all electronic devices.
employer|pracodawca|n|My employer pays for the course.
employee|pracownik|n|The company has 200 employees.
income|dochód|n|Their income has doubled.
debt|dług|n|He's trying to pay off his debts.
loan|pożyczka, kredyt|n|We took out a loan to buy a flat.
advertisement|reklama, ogłoszenie|n|I saw an advertisement for the job.
audience|publiczność, widownia|n|The audience loved the show.
truth|prawda|n|Tell me the truth.
mistake|błąd|n|Everyone makes mistakes.
amount|ilość, kwota|n|A large amount of money was stolen.
average|przeciętny, średni|adj|The average age is thirty.
available|dostępny|adj|Is this room available?
aware|świadomy|adj|Are you aware of the risks?
confident|pewny siebie|adj|She's confident and friendly.
curious|ciekawy (czegoś), ciekawski|adj|Cats are curious animals.
disappointed|rozczarowany|adj|I was disappointed with the film.
embarrassed|zawstydzony, zakłopotany|adj|I felt embarrassed when I fell.
essential|niezbędny|adj|Water is essential for life.
frightened|przestraszony|adj|The little boy was frightened of the dog.
generous|hojny|adj|Thank you, that's very generous of you.
honest|uczciwy, szczery|adj|To be honest, I don't like it.
independent|niezależny|adj|She's very independent.
likely|prawdopodobny|adj|It's likely to rain later.
obvious|oczywisty|adj|The answer is obvious.
patient|cierpliwy|adj|Be patient, it takes time.
reliable|niezawodny, rzetelny|adj|My car is old but reliable.
responsible|odpowiedzialny|adj|Who is responsible for this?
selfish|samolubny|adj|Don't be so selfish.
sensible|rozsądny|adj|That's a sensible idea.
sensitive|wrażliwy|adj|He's very sensitive to criticism.
serious|poważny|adj|Are you serious?
similar|podobny|adj|Our houses are very similar.
suitable|odpowiedni|adj|This film isn't suitable for children.
unexpected|nieoczekiwany|adj|We had an unexpected visitor.
valuable|cenny, wartościowy|adj|This ring is very valuable.
various|różne, rozmaite|adj|There are various ways to do it.
worth|wart|adj|The museum is worth visiting.
sympathetic|współczujący|adj|She was very sympathetic when I was ill.
actually|właściwie, tak naprawdę|adv|Actually, I'm from Gdańsk, not Warsaw.
apparently|najwyraźniej, podobno|adv|Apparently, the shop is closing.
eventually|w końcu, ostatecznie|adv|Eventually we found the hotel.
fortunately|na szczęście|adv|Fortunately, nobody was hurt.
gradually|stopniowo|adv|The weather gradually improved.
immediately|natychmiast|adv|Call me immediately.
nearly|niemal|adv|I nearly missed the bus.
otherwise|w przeciwnym razie, inaczej|adv|Hurry up, otherwise we'll be late.
rarely|rzadko|adv|I rarely watch TV.
recently|ostatnio, niedawno|adv|Have you seen any good films recently?
therefore|dlatego, zatem|adv|It's late; therefore, we should go.
although|chociaż|conj|Although it was raining, we went out.
unless|chyba że|conj|I won't go unless you come with me.
whereas|podczas gdy|conj|I love sport, whereas my sister hates it.
despite|pomimo|prep|Despite the rain, we enjoyed the trip.
accommodation|zakwaterowanie|n|The price includes accommodation.
achievement|osiągnięcie|n|Finishing the marathon was a big achievement.
agreement|porozumienie|n|They finally reached an agreement.
appearance|wygląd|n|Don't judge people by their appearance.
argument|kłótnia, argument|n|We had an argument about money.
background|pochodzenie, tło|n|She comes from a poor background.
cause|przyczyna|n|What was the cause of the fire?
century|wiek (stulecie)|n|The church was built in the 15th century.
charity|organizacja charytatywna|n|She works for a children's charity.
colleague|kolega z pracy|n|My colleagues are very helpful.
condition|stan, warunek|n|The car is in good condition.
connection|połączenie|n|The internet connection is slow.
contract|umowa (kontrakt)|n|I signed a two-year contract.
damage|szkoda, uszkodzenie|n|The storm caused a lot of damage.
deadline|termin (ostateczny)|n|The deadline is next Friday.
degree|stopień, dyplom|n|She has a degree in engineering.
delay|opóźnienie|n|There was a two-hour delay.
department|dział|n|He works in the sales department.
effect|skutek|n|The medicine had no effect.
effort|wysiłek|n|Learning a language takes effort.
equipment|sprzęt|n|We need new equipment.
event|wydarzenie|n|The concert was the main event of the year.
excuse|wymówka|n|That's not a good excuse.
fault|wina, usterka|n|It's not my fault!
feature|cecha|n|The phone has some great features.
fee|opłata|n|There's a small fee for using the card.
goal|cel (do osiągnięcia), gol|n|My goal is to pass the exam.
habit|nawyk|n|Smoking is a bad habit.
issue|kwestia, problem|n|Climate change is a global issue.
lack|brak|n|The project failed because of a lack of money.
loss|strata|n|The company made a loss last year.
offer|oferta|n|They made me a job offer.
pain|ból|n|I have a pain in my back.
permission|pozwolenie|n|You need permission to park here.
prize|nagroda|n|She won first prize.
profit|zysk|n|The company made a big profit.
progress|postęp|n|You're making good progress.
quality|jakość|n|The quality of the food is excellent.
rate|wskaźnik, stawka|n|The unemployment rate is falling.
risk|ryzyko|n|There's a risk of rain later.
safety|bezpieczeństwo|n|Safety is our top priority.
schedule|harmonogram|n|We're behind schedule.
shortage|niedobór|n|There's a shortage of nurses.
staff|personel|n|The hotel staff were very kind.
supply|dostawa, zapas|n|We have a good supply of food.
task|zadanie|n|Your first task is to read the report.
tax|podatek|n|Prices include tax.
tip|wskazówka, napiwek|n|Here's a useful tip.
warning|ostrzeżenie|n|There's a storm warning for tonight.
accept|akceptować, przyjmować|v|She accepted the job offer.
announce|ogłaszać|v|They announced their engagement.
appreciate|doceniać|v|I really appreciate your help.
arrange|organizować, umawiać|v|I've arranged a meeting for Monday.
attach|przymocowywać, załączać|v|I've attached the file to the email.
attract|przyciągać|v|The festival attracts many tourists.
blame|obwiniać|v|Don't blame me!
compare|porównywać|v|Compare the prices before you buy.
contain|zawierać|v|This drink contains a lot of sugar.
continue|kontynuować|v|Please continue.
create|tworzyć|v|The new factory will create 500 jobs.
deal with|zajmować się (czymś)|v|I'll deal with it tomorrow.
deliver|dostarczać|v|They deliver pizza until midnight.
develop|rozwijać|v|The company develops new software.
disappear|znikać|v|My keys have disappeared.
discover|odkrywać|v|Scientists discovered a new species.
earn|zarabiać|v|She earns a lot of money.
estimate|szacować|v|They estimate the cost at 2 million.
gain|zyskiwać|v|I gained a lot of experience there.
hire|zatrudniać, wynajmować|v|We hired a car for the week.
include|uwzględniać|v|The price includes breakfast.
increase|zwiększać|v|They increased the price again.
injure|zranić|v|He was injured in the accident.
insist|nalegać|v|She insisted on paying.
intend|zamierzać|v|I intend to finish it today.
measure|mierzyć|v|Measure the room before you buy a carpet.
notice|zauważać|v|Did you notice anything strange?
own|posiadać|v|They own two houses.
predict|przewidywać|v|Nobody can predict the future.
produce|produkować|v|The factory produces car parts.
provide|zapewniać|v|The hotel provides free Wi-Fi.
reach|docierać, sięgać|v|We reached the top at noon.
realise|uświadamiać sobie|v|I didn't realise it was so late.
receive|otrzymywać|v|Did you receive my email?
recommend|polecać|v|Can you recommend a good restaurant?
regret|żałować|v|I regret not studying harder.
rely on|polegać na|v|You can rely on me.
remove|usuwać|v|Remove the cover before use.
report|zgłaszać, relacjonować|v|Report any problems to your manager.
solve|rozwiązywać|v|We solved the problem together.
store|przechowywać|v|Store in a cool, dry place.
support|wspierać|v|My family always supports me.
accurate|dokładny|adj|The forecast was accurate.
annoyed|zirytowany|adj|I was annoyed by the noise.
anxious|zaniepokojony|adj|She's anxious about the exam.
brief|krótki, zwięzły|adj|He gave a brief speech.
complicated|skomplikowany|adj|The instructions are complicated.
efficient|wydajny|adj|This heater is very efficient.
equal|równy|adj|Men and women should get equal pay.
familiar|znajomy|adj|Your face looks familiar.
guilty|winny|adj|I feel guilty about it.
helpful|pomocny|adj|Thanks, you've been very helpful.
huge|ogromny|adj|They live in a huge house.
impressive|imponujący|adj|Her results are impressive.
latest|najnowszy|adj|Have you seen the latest news?
mental|psychiczny|adj|Mental health is very important.
nervous|zdenerwowany|adj|I always get nervous before exams.
previous|poprzedni|adj|My previous job was in a bank.
proud|dumny|adj|I'm proud of you.
relaxed|zrelaksowany|adj|You look relaxed after your holiday.
rude|niegrzeczny|adj|Don't be rude to the waiter.
shy|nieśmiały|adj|He's shy with new people.
smooth|gładki|adj|The road is smooth and wide.
specific|konkretny|adj|Can you be more specific?
strict|surowy, ścisły|adj|Our teacher is very strict.
tiny|malutki|adj|They live in a tiny flat.
upset|przybity, urażony|adj|She was upset by his comments.
anyway|tak czy inaczej|adv|It was raining, but we went anyway.
clearly|wyraźnie|adv|Please speak clearly.
completely|całkowicie|adv|I completely forgot!
directly|bezpośrednio|adv|Contact the manager directly.
exactly|dokładnie (właśnie)|adv|That's exactly what I meant.
generally|ogólnie|adv|Generally, I agree with you.
mainly|głównie|adv|The visitors were mainly students.
properly|porządnie, prawidłowo|adv|Make sure the door is closed properly.
rather|raczej|adv|It's rather cold today.
regularly|regularnie|adv|I exercise regularly.
slightly|nieco, lekko|adv|The price is slightly higher.
unfortunately|niestety|adv|Unfortunately, the shop was closed.
instead|zamiast tego|adv|There was no tea, so I had coffee instead.
CV|CV, życiorys|n|Send us your CV by Friday.
promotion|awans|n|She got a promotion last month.
overtime|nadgodziny|n|We worked a lot of overtime in December.
part-time|na pół etatu|adj|He has a part-time job.
full-time|na pełny etat|adj|I work full-time.
retire|przejść na emeryturę|v|My father retired at 65.
unemployed|bezrobotny|adj|He's been unemployed for a year.
pension|emerytura|n|She lives on a small pension.
career|kariera|n|He wants a career in aviation.
qualification|kwalifikacja|n|You need the right qualifications for this job.
trainee|stażysta|n|We have two new trainees in the workshop.
workplace|miejsce pracy|n|Safety in the workplace is very important.
occupation|zawód|n|Please write your occupation on the form.
fire|zwalniać (z pracy)|v|He was fired for being late.
client|klient (usług)|n|We have a meeting with a new client.
presentation|prezentacja|n|I have to give a presentation tomorrow.
booking|rezerwacja|n|I made a booking for two nights.
check in|zameldować się, odprawić się|phr|We checked in at the hotel at 3 p.m.
check out|wymeldować się|phr|You have to check out by 11.
sightseeing|zwiedzanie|n|We spent the day sightseeing.
guided tour|wycieczka z przewodnikiem|n|We went on a guided tour of the castle.
travel insurance|ubezpieczenie podróżne|n|Don't travel without travel insurance.
souvenir|pamiątka|n|I bought a souvenir for my wife.
destination|cel podróży|n|Spain is a popular destination.
departure|odlot, odjazd|n|Departure is at 6 a.m.
arrival|przylot, przyjazd|n|Our arrival was delayed.
border|granica|n|We crossed the border at night.
currency|waluta|n|What's the currency in Norway?
landmark|charakterystyczny obiekt|n|The tower is a famous landmark.
resort|kurort|n|We stayed at a ski resort.
get married|wziąć ślub|phr|They got married last summer.
divorce|rozwód|n|Their divorce was difficult.
engaged|zaręczony|adj|My sister just got engaged.
flatmate|współlokator|n|My flatmate is from Spain.
childhood|dzieciństwo|n|I had a happy childhood.
generation|pokolenie|n|The younger generation uses phones all the time.
relative|krewny|n|We visited relatives at Christmas.
marriage|małżeństwo|n|They have a happy marriage.
teenager|nastolatek|n|Our son is a teenager now.
adult|dorosły|n|Tickets for adults cost 20 euros.
elderly|starszy (wiekowo)|adj|She looks after her elderly mother.
grow up|dorastać|phr|I grew up in a small village.
fall in love|zakochać się|phr|They fell in love in Paris.
download|pobierać (plik)|v|Download the app for free.
website|strona internetowa|n|Check our website for more information.
social media|media społecznościowe|n|She spends hours on social media.
password|hasło|n|Never share your password.
screen|ekran|n|The screen is too small.
battery|bateria|n|My phone battery is dead.
charger|ładowarka|n|Have you got a phone charger?
app|aplikacja|n|This app helps me learn English.
update|aktualizacja|n|Install the latest update.
upload|wysyłać (plik)|v|Upload your photos here.
search|wyszukiwać|v|Search for the file on your computer.
online|w internecie|adv|I buy most things online.
headline|nagłówek|n|Did you see the headlines today?
article|artykuł|n|I read an interesting article about planes.
journalist|dziennikarz|n|She works as a journalist.
broadcast|transmisja|n|The match was shown in a live broadcast.
channel|kanał|n|What's on the other channel?
recycle|poddawać recyklingowi|v|We recycle paper and glass.
global warming|globalne ocieplenie|n|Global warming is a serious problem.
plastic|plastik|n|The bottle is made of plastic.
energy|energia|n|Solar energy is cheap and clean.
solar panel|panel słoneczny|n|We put solar panels on the roof.
rubbish|śmieci|n|Take out the rubbish, please.
climate|klimat|n|The climate is changing.
flood|powódź|n|The flood destroyed many houses.
drought|susza|n|There was a long drought last summer.
endangered|zagrożony wyginięciem|adj|Tigers are an endangered species.
renewable|odnawialny|adj|Wind is a renewable source of energy.
nature|przyroda|n|I love being close to nature.
wildlife|dzika przyroda|n|The park is full of wildlife.
treatment|leczenie|n|The treatment worked well.
surgery|operacja (chirurgiczna)|n|He needs surgery on his knee.
symptom|objaw|n|What are the symptoms?
disease|choroba (poważna)|n|Heart disease is common.
fit|w formie, wysportowany|adj|I want to get fit before summer.
exercise|ćwiczenia (fizyczne)|n|Regular exercise is good for you.
bank account|konto bankowe|n|I opened a new bank account.
savings|oszczędności|n|We spent all our savings on the house.
cash machine|bankomat|n|Is there a cash machine near here?
credit card|karta kredytowa|n|Can I pay by credit card?
budget|budżet|n|We're over budget.
refund|zwrot pieniędzy|n|I asked for a refund.
bargain|okazja (cenowa)|n|This jacket was a real bargain.
owe|być winnym (pieniądze)|v|I owe you twenty euros.
course|kurs|n|I'm doing an English course.
certificate|świadectwo, certyfikat|n|You'll get a certificate at the end.
lecture|wykład|n|The lecture starts at nine.
graduate|ukończyć studia|v|She graduated from university in 2015.
scholarship|stypendium|n|He got a scholarship to study abroad.
term|semestr|n|The new term starts in October.
revise|powtarzać (do egzaminu)|v|I need to revise for my exam.
mark|ocena (w szkole)|n|She got good marks in maths.
give up|rezygnować, rzucać (nałóg)|phr|He gave up smoking.
look up|sprawdzać (w słowniku)|phr|Look up the word in a dictionary.
set off|wyruszać|phr|We set off early in the morning.
break down|psuć się (o maszynie)|phr|Our car broke down on the motorway.
carry on|kontynuować|phr|Carry on, I'm listening.
get over|dojść do siebie (po czymś)|phr|It took her months to get over the illness.
turn up|pojawiać się|phr|He turned up an hour late.
take part in|brać udział w|phr|Fifty teams took part in the competition.
run away|uciekać|phr|The dog ran away.
get back|wracać|phr|When did you get back from holiday?
come across|natknąć się na|phr|I came across an old photo.
sort out|załatwić, uporządkować|phr|I'll sort out the problem tomorrow.
work out|ćwiczyć, rozpracować|phr|I work out at the gym.
fill up|zatankować do pełna|phr|Fill up the tank before the trip.
make a decision|podjąć decyzję|phr|We have to make a decision today.
make a mistake|popełnić błąd|phr|Everyone makes mistakes.
make money|zarabiać pieniądze|phr|He makes money selling cars.
make friends|zaprzyjaźniać się|phr|It's easy to make friends at work.
make a phone call|zadzwonić|phr|I need to make a phone call.
do your homework|odrabiać lekcje|phr|Do your homework before dinner.
do your best|starać się z całych sił|phr|Just do your best.
do the shopping|robić zakupy|phr|I do the shopping on Saturdays.
do business|robić interesy|phr|We do business with German companies.
do someone a favour|wyświadczyć komuś przysługę|phr|Could you do me a favour?
take a photo|zrobić zdjęcie|phr|Can you take a photo of us?
have a shower|brać prysznic|phr|I have a shower after work.
pay attention|zwracać uwagę|phr|Pay attention to the instructions.
catch a cold|przeziębić się|phr|I caught a cold last week.
keep in touch|być w kontakcie|phr|Let's keep in touch!
as a result|w rezultacie|phr|It rained. As a result, the match was cancelled.
in addition|ponadto, dodatkowo|phr|In addition, we offer free delivery.
on the other hand|z drugiej strony|phr|It's cheap. On the other hand, it's slow.
in my opinion|moim zdaniem|phr|In my opinion, he's right.
for example|na przykład|phr|Some metals, for example aluminium, are light.
first of all|po pierwsze|phr|First of all, thank you for coming.
in conclusion|podsumowując|phr|In conclusion, the project was a success.
as well as|jak również|phr|He speaks German as well as English.
even though|mimo że|conj|Even though he was tired, he kept working.
so that|żeby, aby|conj|I left early so that I wouldn't be late.
in case|na wypadek, gdyby|conj|Take an umbrella in case it rains.
delighted|zachwycony|adj|I was delighted with the result.
jealous|zazdrosny|adj|He's jealous of his brother.
lonely|samotny|adj|She feels lonely in the big city.
grateful|wdzięczny|adj|I'm grateful for your help.
satisfied|zadowolony|adj|Are you satisfied with the service?
confused|zdezorientowany|adj|I'm confused. Can you explain again?
terrified|przerażony|adj|She's terrified of spiders.
punctual|punktualny|adj|Please be punctual.
ambitious|ambitny|adj|She's very ambitious.
organised|zorganizowany|adj|He's a very organised person.
creative|kreatywny|adj|We need a creative solution.
flexible|elastyczny|adj|My working hours are flexible.
hard-working|pracowity|adj|Our team is very hard-working.
outgoing|towarzyski|adj|She's outgoing and friendly.
stubborn|uparty|adj|Don't be so stubborn!
modest|skromny|adj|He's very modest about his success.
mean|skąpy, wredny|adj|Don't be mean to your sister.
polluted|zanieczyszczony|adj|The river is badly polluted.
convenient|dogodny|adj|Is Monday convenient for you?
ordinary|zwyczajny|adj|It was just an ordinary day.
unusual|nietypowy|adj|That's an unusual name.
fashionable|modny|adj|This style is fashionable now.
rare|rzadki|adj|This is a very rare bird.
awful|fatalny|adj|The food was awful.
brilliant|genialny, świetny|adj|What a brilliant idea!
disgusting|obrzydliwy|adj|The coffee tastes disgusting.
behave|zachowywać się|v|The children behaved very well.
belong|należeć|v|Does this bag belong to you?
celebrate|świętować|v|We celebrated his birthday.
deserve|zasługiwać|v|You deserve a holiday.
doubt|wątpić|v|I doubt he'll come.
exchange|wymieniać (się)|v|Can I exchange this shirt?
forgive|wybaczać|v|Please forgive me.
guess|zgadywać|v|Guess who I met today!
ignore|ignorować|v|Don't ignore the warning light.
imagine|wyobrażać sobie|v|Imagine living on an island.
invent|wynaleźć|v|Who invented the telephone?
lie|kłamać|v|Don't lie to me.
mind|mieć coś przeciwko|v|Do you mind if I open the window?
prove|udowadniać|v|Can you prove it?
remind|przypominać (komuś)|v|Remind me to call the client.
rescue|ratować (z niebezpieczeństwa)|v|They rescued the climbers.
shock|szokować|v|The news shocked everyone.
surround|otaczać|v|The house is surrounded by trees.
translate|tłumaczyć|v|Can you translate this letter?
trust|ufać|v|I trust you.
volunteer|zgłaszać się na ochotnika|v|She volunteered to help.
attention|uwaga|n|Can I have your attention, please?
belief|przekonanie|n|It's my belief that he's innocent.
chance|szansa, przypadek|n|There's a chance of rain.
choice|wybór|n|You have no choice.
complaint|skarga|n|We received a complaint from a client.
confidence|pewność siebie|n|She's full of confidence.
custom|zwyczaj|n|It's an old Polish custom.
danger|niebezpieczeństwo|n|There's a danger of fire.
detail|szczegół|n|Check every detail.
fame|sława|n|He didn't want fame.
freedom|wolność|n|Freedom is very important to me.
honesty|uczciwość|n|I appreciate your honesty.
luck|szczęście (fart)|n|Good luck with your exam!
memory|pamięć, wspomnienie|n|I have a bad memory for names.
mood|nastrój|n|She's in a good mood today.
patience|cierpliwość|n|Teaching requires patience.
pleasure|przyjemność|n|It's a pleasure to meet you.
pressure|presja, ciśnienie|n|Check the tyre pressure.
privacy|prywatność|n|Please respect my privacy.
survey|ankieta, badanie|n|We did a customer survey.
variety|różnorodność|n|There's a wide variety of food.
violence|przemoc|n|There's too much violence on TV.
youth|młodość|n|In his youth he was a great runner.`,
B2: `acknowledge|przyznawać, potwierdzać|v|He acknowledged that he had made a mistake.
adapt|przystosowywać się|v|It took me a while to adapt to the new job.
address|zajmować się (problemem)|v|We need to address this issue quickly.
allocate|przydzielać|v|Funds were allocated to the new project.
anticipate|przewidywać, spodziewać się|v|We don't anticipate any problems.
assess|oceniać|v|The damage is still being assessed.
assume|zakładać|v|I assume you've already eaten.
attempt|próbować (usiłować)|v|He attempted to climb the wall.
cope|radzić sobie|v|She copes well with stress.
demonstrate|wykazywać, demonstrować|v|The study demonstrates a clear link.
determine|ustalać, określać|v|Police are trying to determine the cause.
emphasise|podkreślać|v|He emphasised the need for safety.
enable|umożliwiać|v|The software enables you to work offline.
ensure|zapewniać (dopilnować)|v|Please ensure that all doors are locked.
establish|ustanawiać, zakładać|v|The company was established in 1995.
exceed|przekraczać|v|Don't exceed the speed limit.
expand|rozszerzać|v|The company plans to expand abroad.
exploit|wykorzystywać|v|They exploit cheap labour.
fulfil|spełniać|v|He fulfilled his dream of becoming a pilot.
highlight|uwydatniać|v|The report highlights several risks.
implement|wdrażać|v|The new system will be implemented next year.
imply|sugerować (pośrednio)|v|Are you implying that I'm lying?
indicate|wskazywać|v|The results indicate a problem.
interpret|interpretować|v|How do you interpret these figures?
justify|uzasadniać|v|How can you justify the cost?
maintain|utrzymywać, konserwować|v|The machines are maintained every month.
negotiate|negocjować|v|We negotiated a better price.
obtain|uzyskiwać|v|You must obtain a permit first.
occur|występować, zdarzać się|v|The accident occurred at 6 a.m.
overcome|pokonywać|v|She overcame her fear of flying.
participate|uczestniczyć|v|Everyone participated in the discussion.
postpone|przekładać (na później)|v|The match was postponed because of rain.
pursue|dążyć do|v|She pursued a career in medicine.
quit|rzucać (np. pracę)|v|He quit his job last month.
reassure|uspokajać|v|The doctor reassured me it was nothing serious.
recover|wracać do zdrowia, odzyskiwać|v|He's recovering from an operation.
reflect|odzwierciedlać|v|The price reflects the quality.
reject|odrzucać|v|The proposal was rejected.
release|wypuszczać, wydawać|v|The band released a new album.
resign|rezygnować (ze stanowiska)|v|The minister resigned yesterday.
restore|przywracać|v|Power was restored after two hours.
retain|zachowywać|v|The town has retained its charm.
reveal|ujawniać|v|He revealed the secret.
seek|poszukiwać|v|They are seeking new investors.
struggle|zmagać się|v|I struggled to stay awake.
undergo|przechodzić (np. operację)|v|She underwent surgery last week.
undertake|podejmować się|v|We undertook a major review.
withdraw|wycofywać, wypłacać|v|I withdrew some cash.
approach|podejście|n|We need a new approach to the problem.
assumption|założenie|n|Your assumption is wrong.
awareness|świadomość|n|We want to raise awareness of the problem.
breakthrough|przełom|n|Scientists made a major breakthrough.
burden|ciężar, obciążenie|n|I don't want to be a burden.
circumstances|okoliczności|n|Under these circumstances, we have to cancel.
commitment|zaangażowanie, zobowiązanie|n|Thank you for your commitment.
consequence|konsekwencja|n|You must accept the consequences.
criticism|krytyka|n|He doesn't take criticism well.
demand|popyt, żądanie|n|There's a high demand for engineers.
drawback|wada, minus|n|The main drawback is the cost.
emergency|nagły wypadek|n|In an emergency, call 112.
expertise|fachowa wiedza|n|We need your technical expertise.
feedback|informacja zwrotna|n|Thanks for the feedback.
framework|ramy|n|We need a legal framework for this.
guidance|wskazówki, doradztwo|n|Ask your supervisor for guidance.
impact|wpływ, uderzenie|n|The new law will have a big impact.
inequality|nierówność|n|Income inequality is growing.
insight|wgląd|n|The book gives an insight into her life.
liability|odpowiedzialność (prawna)|n|The company denied liability.
outcome|rezultat|n|We're waiting for the outcome of the talks.
outline|zarys|n|Give me a brief outline of the plan.
proposal|propozycja|n|They rejected our proposal.
requirement|wymóg|n|A degree is a requirement for this job.
resource|zasób|n|We don't have the resources to do it.
revenue|przychód|n|Revenue rose by 10% last year.
shortcoming|niedociągnięcie|n|The system has several shortcomings.
strength|siła, mocna strona|n|What are your strengths and weaknesses?
threat|zagrożenie|n|Pollution is a threat to wildlife.
trait|cecha (charakteru)|n|Patience is his best trait.
uncertainty|niepewność|n|There's a lot of uncertainty about the future.
welfare|dobrobyt, opieka społeczna|n|We care about the welfare of our employees.
workload|obciążenie pracą|n|My workload has doubled this month.
adequate|wystarczający, odpowiedni|adj|The pay is adequate but not great.
ambiguous|dwuznaczny|adj|The instructions were ambiguous.
apparent|widoczny, pozorny|adj|For no apparent reason, he left.
appropriate|stosowny|adj|Jeans are not appropriate for the meeting.
beneficial|korzystny|adj|Exercise is beneficial to health.
comprehensive|kompleksowy, wszechstronny|adj|We offer a comprehensive training programme.
considerable|znaczny|adj|It cost a considerable amount of money.
consistent|spójny, konsekwentny|adj|You need to be consistent.
crucial|kluczowy|adj|This is a crucial decision.
deliberate|celowy|adj|It was a deliberate mistake.
distinct|wyraźny, odrębny|adj|There's a distinct smell of gas.
eager|chętny, gorliwy|adj|She's eager to learn.
feasible|wykonalny|adj|Is the plan feasible?
genuine|prawdziwy, szczery|adj|Is this a genuine leather bag?
inevitable|nieunikniony|adj|Change is inevitable.
reluctant|niechętny|adj|He was reluctant to help.
relevant|istotny|adj|Please include all relevant information.
reasonable|uzasadniony, umiarkowany|adj|The prices are reasonable.
severe|poważny, surowy|adj|There was severe damage to the roof.
significant|znaczący|adj|There has been a significant improvement.
straightforward|prosty, nieskomplikowany|adj|The process is fairly straightforward.
sufficient|wystarczający|adj|We don't have sufficient evidence.
temporary|tymczasowy|adj|It's only a temporary job.
thorough|gruntowny|adj|The police made a thorough search.
tough|twardy, ciężki|adj|It was a tough decision.
vital|niezbędny, kluczowy|adj|Water is vital for life.
vulnerable|bezbronny, podatny|adj|Old people are vulnerable to the cold.
widespread|powszechny|adj|There is widespread support for the plan.
admittedly|trzeba przyznać|adv|Admittedly, it wasn't easy.
consequently|w rezultacie|adv|He was ill and consequently missed the exam.
furthermore|ponadto|adv|Furthermore, the price is too high.
hence|stąd, dlatego|adv|The roads were icy, hence the delay.
moreover|co więcej|adv|It's cheap; moreover, it's very good.
nevertheless|niemniej jednak|adv|It was hard. Nevertheless, we finished.
presumably|przypuszczalnie|adv|Presumably he missed the train.
roughly|mniej więcej|adv|It costs roughly 100 euros.
provided that|pod warunkiem że|conj|You can go, provided that you're back by ten.
as long as|o ile, dopóki|conj|You can stay as long as you're quiet.
come up with|wymyślić|phr|She came up with a brilliant idea.
put off|odkładać (na później)|phr|Don't put off your homework.
look forward to|nie móc się doczekać|phr|I look forward to hearing from you.
carry out|przeprowadzać (wykonywać)|phr|We carried out a survey.
run out of|kończyć się (zapasy)|phr|We've run out of milk.
take over|przejmować|phr|A big company took over the firm.
turn down|odmawiać (oferty)|phr|She turned down the job offer.
figure out|rozgryźć, zrozumieć|phr|I can't figure out how it works.
set up|organizować, konfigurować|phr|He set up his own business.
get along with|dogadywać się z|phr|I get along well with my boss.
bring up|poruszać (temat), wychowywać|phr|Don't bring up politics at dinner.
point out|zwracać uwagę na|phr|She pointed out a mistake in the report.
to some extent|do pewnego stopnia|phr|I agree with you to some extent.
as far as I'm concerned|jeśli o mnie chodzi|phr|As far as I'm concerned, the plan is fine.
on balance|biorąc wszystko pod uwagę|phr|On balance, it was a good decision.
it goes without saying|to oczywiste|phr|It goes without saying that safety comes first.
from my point of view|z mojego punktu widzenia|phr|From my point of view, it's too expensive.
in favour of|za (czymś), popierając|phr|Most people are in favour of the new rules.
having said that|mimo to|phr|It's expensive. Having said that, it's worth it.
the bottom line|sedno sprawy|phr|The bottom line is that we need more staff.
by no means|w żadnym wypadku|phr|It's by no means easy.
in other words|innymi słowy|phr|In other words, we have to start again.
to be honest|szczerze mówiąc|phr|To be honest, I don't like it.
as a matter of fact|prawdę mówiąc|phr|As a matter of fact, I've already done it.
on the whole|ogólnie|phr|On the whole, the trip was great.
purchase|kupować (formalnie)|v|You can purchase tickets online.
inquire|dowiadywać się (formalnie)|v|I'm writing to inquire about the job.
assist|pomagać (formalnie)|v|Our staff will assist you.
terminate|rozwiązać (umowę), zakończyć|v|They terminated the contract.
notify|powiadamiać|v|Please notify us of any changes.
regarding|w sprawie, dotyczący|prep|I'm writing regarding your order.
prior to|przed (formalnie)|prep|Prior to the meeting, read the report.
subsequently|następnie (formalnie)|adv|He was subsequently promoted.
approximately|około|adv|The trip takes approximately two hours.
heavy traffic|duży ruch (uliczny)|phr|We were late because of heavy traffic.
strong coffee|mocna kawa|phr|I need a strong coffee.
take into account|brać pod uwagę|phr|We must take the weather into account.
raise awareness|podnosić świadomość|phr|The campaign raises awareness of safety.
meet a deadline|zmieścić się w terminie|phr|We worked late to meet the deadline.
make progress|robić postępy|phr|You're making great progress.
reach an agreement|osiągnąć porozumienie|phr|They reached an agreement after long talks.
take responsibility|wziąć odpowiedzialność|phr|You have to take responsibility for your actions.
draw a conclusion|wyciągać wniosek|phr|What conclusion can we draw from this?
break a promise|złamać obietnicę|phr|Never break a promise.
keep a secret|dochować tajemnicy|phr|Can you keep a secret?
run a business|prowadzić firmę|phr|She runs a small business.
take advantage of|wykorzystać|phr|Take advantage of the good weather.
play a role|odgrywać rolę|phr|Technology plays a big role in our lives.
make an effort|starać się|phr|Please make an effort to be on time.
come to terms with|pogodzić się z|phr|He's come to terms with the loss.
bear in mind|mieć na uwadze|phr|Bear in mind that the shop closes at six.
lose your temper|stracić panowanie nad sobą|phr|Don't lose your temper with the kids.
make sense|mieć sens|phr|That doesn't make sense.
invoice|faktura|n|Please send us the invoice.
quote|wycena, oferta cenowa|n|We asked three companies for a quote.
stakeholder|interesariusz|n|All stakeholders were invited to the meeting.
supplier|dostawca|n|We changed our steel supplier.
turnover|obrót|n|The company's annual turnover is 5 million.
shareholder|akcjonariusz|n|The shareholders approved the plan.
merger|fuzja|n|The merger created a big company.
competitor|konkurent|n|Our main competitor is from Germany.
market share|udział w rynku|n|We increased our market share.
negotiation|negocjacje|n|The negotiations lasted three days.
warranty|gwarancja|n|The machine has a two-year warranty.
purchase order|zamówienie zakupu|n|We received the purchase order yesterday.
delivery note|dowód dostawy|n|Sign the delivery note, please.
headquarters|siedziba główna|n|Our headquarters are in Warsaw.
subsidiary|spółka zależna|n|They opened a subsidiary in Poland.
workforce|załoga, siła robocza|n|Half of the workforce works shifts.
recruitment|rekrutacja|n|Recruitment of welders is difficult.
appraisal|ocena okresowa|n|I have my annual appraisal next week.
bonus|premia|n|Everyone got a Christmas bonus.
outsource|zlecać na zewnątrz|v|We outsource the painting.
launch|wprowadzać na rynek|v|They launched a new product.
cash flow|przepływy pieniężne|n|Good cash flow is essential.
profit margin|marża|n|Our profit margin is too low.
a piece of cake|bułka z masłem|phr|The test was a piece of cake.
break the ice|przełamać lody|phr|He told a joke to break the ice.
on the same page|zgodni, na tej samej stronie|phr|Let's make sure we're on the same page.
hit the nail on the head|trafić w sedno|phr|You've hit the nail on the head.
under the weather|nie w formie (chory)|phr|I'm feeling a bit under the weather.
once in a blue moon|raz na ruski rok|phr|We go to the cinema once in a blue moon.
the last straw|ostatnia kropla|phr|Being late again was the last straw.
cost an arm and a leg|kosztować fortunę|phr|That car cost an arm and a leg.
get the hang of|załapać (jak coś robić)|phr|You'll soon get the hang of it.
call it a day|skończyć na dziś|phr|Let's call it a day.
back to square one|z powrotem na start|phr|The test failed, so we're back to square one.
keep an eye on|mieć oko na|phr|Keep an eye on the temperature.
a blessing in disguise|szczęście w nieszczęściu|phr|Losing that job was a blessing in disguise.
beat around the bush|owijać w bawełnę|phr|Stop beating around the bush!
on the ball|czujny, kumaty|phr|Our new trainee is really on the ball.
pull someone's leg|nabierać kogoś|phr|Relax, I'm just pulling your leg.
see eye to eye|zgadzać się (z kimś)|phr|We don't always see eye to eye.
by the book|zgodnie z przepisami|phr|We do everything by the book.
ballpark figure|szacunkowa liczba|phr|Can you give me a ballpark figure?
affect|wpływać na|v|The weather affects my mood.
raise|podnosić (coś)|v|They raised prices again.
rise|rosnąć, wzrastać|v|Prices rise every year.
economic|gospodarczy|adj|The economic situation is difficult.
economical|oszczędny (ekonomiczny)|adj|This car is very economical.
currently|obecnie|adv|I'm currently working on a big project.
principal|główny|adj|The principal reason is cost.
principle|zasada|n|It's against my principles.
stationary|nieruchomy|adj|Don't get off until the bus is stationary.
stationery|artykuły biurowe|n|We need to order some stationery.
loose|luźny|adj|This bolt is loose.
complement|uzupełniać|v|The wine complements the food.
compliment|komplement|n|Thanks for the compliment!
historic|historyczny (doniosły)|adj|It was a historic moment.
historical|historyczny (dotyczący historii)|adj|I like historical films.
accessible|łatwo dostępny|adj|The building is accessible to wheelchair users.
affordable|przystępny cenowo|adj|We offer affordable prices.
biased|stronniczy|adj|The report is biased.
cautious|rozważny, ostrożny|adj|She's a cautious driver.
challenging|wymagający|adj|It's a challenging job.
controversial|kontrowersyjny|adj|It was a controversial decision.
devastating|niszczycielski|adj|The fire was devastating.
dull|nudny, matowy|adj|The surface looks dull.
excessive|nadmierny|adj|Excessive heat can damage the part.
exhausted|wyczerpany|adj|I'm exhausted after the night shift.
fragile|delikatny, łatwo tłukący się|adj|Be careful, it's fragile.
furious|wściekły|adj|He was furious about the delay.
hilarious|przezabawny|adj|The film was hilarious.
inconvenient|niedogodny|adj|Is this an inconvenient time?
irrelevant|nieistotny|adj|That's irrelevant.
keen|chętny, zapalony|adj|He's very keen on flying.
minor|drobny|adj|It's only a minor problem.
major|główny, poważny|adj|There was a major accident.
outstanding|wybitny|adj|She did an outstanding job.
overwhelming|przytłaczający|adj|The response was overwhelming.
persistent|uporczywy|adj|I have a persistent cough.
precise|precyzyjny|adj|We need precise measurements.
rapid|gwałtowny, szybki|adj|There was a rapid increase in prices.
rewarding|satysfakcjonujący|adj|Teaching is a rewarding job.
rough|szorstki, przybliżony|adj|The surface is rough.
spontaneous|spontaniczny|adj|It was a spontaneous decision.
sophisticated|wyrafinowany, zaawansowany|adj|It's a sophisticated system.
steady|stały, równomierny|adj|Keep a steady speed.
stunning|oszałamiający|adj|The view was stunning.
substantial|pokaźny|adj|They made a substantial profit.
trivial|błahy|adj|Don't worry about trivial things.
unbearable|nie do zniesienia|adj|The heat was unbearable.
upcoming|nadchodzący|adj|Are you ready for the upcoming audit?
versatile|wielofunkcyjny|adj|It's a very versatile tool.
abandon|porzucać|v|They abandoned the project.
accumulate|gromadzić|v|Dust accumulates in the corners.
assure|zapewniać (kogoś)|v|I assure you it's safe.
boost|zwiększać, pobudzać|v|The new machine boosted production.
cease|zaprzestać|v|The company ceased trading.
clarify|doprecyzować|v|Could you clarify that point?
collapse|zawalić się|v|The roof collapsed.
conduct|prowadzić (badania)|v|We conducted a survey.
contribute|przyczyniać się|v|Everyone contributed to the project.
convert|przekształcać|v|They converted the barn into a house.
decline|spadać, grzecznie odmawiać|v|Sales declined last year.
dedicate|poświęcać|v|She dedicated her life to medicine.
derive|wywodzić się|v|The word derives from Latin.
distract|rozpraszać|v|Don't distract the driver.
emerge|wyłaniać się|v|New problems emerged.
enforce|egzekwować|v|The police enforce the law.
evolve|ewoluować|v|The company has evolved a lot.
exaggerate|przesadzać|v|Don't exaggerate!
grasp|pojąć, chwycić|v|I couldn't grasp the idea.
hesitate|wahać się|v|Don't hesitate to call me.
interfere|wtrącać się, zakłócać|v|Don't interfere in my work.
neglect|zaniedbywać|v|He neglected his health.
oppose|sprzeciwiać się|v|Many people oppose the plan.
perceive|postrzegać|v|How do customers perceive our brand?
prioritise|ustalać priorytety|v|You need to prioritise your tasks.
proceed|kontynuować, przechodzić dalej|v|Please proceed to gate 5.
prompt|skłaniać|v|The accident prompted new safety rules.
resolve|rozstrzygać|v|The dispute was resolved.
restrict|ograniczać (przepisami)|v|Access is restricted to staff.
sacrifice|poświęcać (coś)|v|He sacrificed his free time.
specify|określać (dokładnie)|v|Please specify the size.
summarise|streszczać|v|Can you summarise the report?
sustain|podtrzymywać|v|We can't sustain this growth.
tackle|zmierzyć się z (problemem)|v|We need to tackle this issue.
trigger|wywoływać (reakcję)|v|The noise triggered the alarm.
abuse|nadużycie|n|It's an abuse of power.
acquaintance|znajomy|n|He's just an acquaintance.
ambition|ambicja|n|Her ambition is to become a pilot.
anxiety|niepokój|n|He suffers from anxiety.
assessment|ocena|n|The risk assessment is ready.
asset|atut, aktywo|n|She's a great asset to the team.
boundary|granica (umowna)|n|We need clear boundaries.
breakdown|awaria, załamanie|n|The breakdown stopped production.
capacity|pojemność, wydajność|n|The plant is working at full capacity.
compromise|kompromis|n|We reached a compromise.
concern|obawa|n|Safety is our main concern.
consumption|zużycie|n|Fuel consumption is too high.
contribution|wkład|n|Thank you for your contribution.
dispute|spór|n|There's a dispute over the price.
diversity|zróżnicowanie|n|We value diversity in our team.
enthusiasm|entuzjazm|n|He showed great enthusiasm.
flaw|wada (ukryta)|n|There's a flaw in the design.
gap|luka, przerwa|n|Mind the gap!
guilt|poczucie winy|n|She felt a lot of guilt.
hazard|niebezpieczeństwo (zagrożenie BHP)|n|Oil on the floor is a hazard.
initiative|inicjatywa|n|Take the initiative.
motivation|motywacja|n|He lacks motivation.
obstacle|przeszkoda|n|The biggest obstacle is money.
occasion|okazja (wydarzenie)|n|It's a special occasion.
phenomenon|zjawisko|n|It's a natural phenomenon.
precaution|środek ostrożności|n|Take precautions when welding.
prejudice|uprzedzenie|n|We must fight prejudice.
procedure|procedura|n|Follow the safety procedure.
prospect|perspektywa|n|The job has good prospects.
reputation|reputacja|n|The company has a good reputation.
scope|zakres|n|That's outside the scope of the project.
sequence|kolejność, sekwencja|n|Follow the welding sequence.
statement|oświadczenie|n|The company issued a statement.
tendency|tendencja, skłonność|n|He has a tendency to be late.
transition|okres przejściowy|n|The transition to the new system was smooth.
venue|miejsce (wydarzenia)|n|The venue for the conference is a hotel.
wage|płaca (godzinowa)|n|The minimum wage went up.
warehouse|magazyn|n|The parts are in the warehouse.
in spite of|mimo|prep|In spite of the rain, we went out.
nonetheless|niemniej|adv|It was hard. Nonetheless, we finished.
likewise|podobnie|adv|He works hard, and likewise his brother.
thus|tak więc, w ten sposób|adv|The machine is faster, thus reducing costs.
accordingly|odpowiednio|adv|Read the rules and act accordingly.
alternatively|ewentualnie|adv|Alternatively, you can pay by card.
considerably|znacznie|adv|Prices have risen considerably.
deliberately|celowo|adv|He did it deliberately.
frankly|szczerze|adv|Frankly, I don't care.
increasingly|coraz bardziej|adv|It's becoming increasingly difficult.
merely|jedynie|adv|It's merely a suggestion.
primarily|przede wszystkim, głównie|adv|The course is primarily for beginners.
relatively|stosunkowo|adv|It's relatively cheap.
simultaneously|jednocześnie|adv|Both machines started simultaneously.
whatsoever|w ogóle (wzmocnienie)|adv|I have no idea whatsoever.`,
C1: `advocate|opowiadać się za|v|She advocates stricter safety rules.
alleviate|łagodzić|v|The drug alleviates pain.
ascertain|ustalić (upewnić się)|v|We need to ascertain the facts.
bolster|podbudowywać, wzmacniać|v|The win bolstered the team's confidence.
circumvent|obchodzić (przepisy)|v|They found a way to circumvent the rules.
coincide|zbiegać się (w czasie)|v|My holiday coincided with the festival.
compel|zmuszać|v|I felt compelled to speak.
compile|zestawiać|v|We compiled a list of suppliers.
comply|przestrzegać (przepisów)|v|All products must comply with EU standards.
concede|przyznawać (niechętnie)|v|He conceded that he had been wrong.
convey|przekazywać|v|Words can't convey how grateful I am.
curb|ograniczać, hamować|v|The government wants to curb inflation.
deem|uznawać (za)|v|The building was deemed unsafe.
deteriorate|pogarszać się|v|His health deteriorated rapidly.
diminish|zmniejszać się|v|The pain gradually diminished.
discern|dostrzegać|v|I could discern a figure in the fog.
dismiss|odrzucać, zwalniać|v|He dismissed the idea as nonsense.
endorse|popierać, rekomendować|v|The plan was endorsed by the board.
endure|znosić, przetrwać|v|They endured years of hardship.
enhance|zwiększać, poprawiać|v|Good lighting enhances the room.
entail|pociągać za sobą|v|What does the job entail?
facilitate|ułatwiać|v|The new software facilitates communication.
foster|wspierać, sprzyjać|v|We want to foster a culture of innovation.
hamper|utrudniać|v|Bad weather hampered the rescue.
hinder|przeszkadzać|v|Noise hinders concentration.
inhibit|hamować|v|Fear can inhibit learning.
mitigate|łagodzić (skutki)|v|Measures were taken to mitigate the risk.
outweigh|przeważać|v|The benefits outweigh the costs.
persevere|wytrwać|v|If you persevere, you'll succeed.
pinpoint|precyzyjnie wskazać|v|We couldn't pinpoint the cause of the fault.
prevail|zwyciężać, przeważać|v|Common sense prevailed.
refrain|powstrzymywać się|v|Please refrain from smoking.
scrutinise|dokładnie badać|v|The contract was scrutinised by lawyers.
streamline|usprawniać|v|We streamlined the production process.
substantiate|uzasadniać (dowodami)|v|He couldn't substantiate his claims.
supersede|zastępować (wypierać)|v|The old standard was superseded in 2020.
undermine|podważać|v|His comments undermined my authority.
accountability|rozliczalność|n|There's a lack of accountability in the system.
adversity|przeciwności losu|n|She showed courage in the face of adversity.
allegation|zarzut|n|He denies all the allegations.
benchmark|punkt odniesienia|n|This result sets a new benchmark.
caveat|zastrzeżenie|n|There's one important caveat.
compliance|zgodność (z przepisami)|n|We check compliance with safety regulations.
discrepancy|rozbieżność|n|There's a discrepancy between the two reports.
disposition|usposobienie|n|She has a cheerful disposition.
endeavour|przedsięwzięcie, starania|n|Good luck in your future endeavours.
hindsight|mądrość po fakcie|n|In hindsight, it was a mistake.
implication|implikacja, skutek|n|The implications of the decision are huge.
incentive|zachęta, bodziec|n|Bonuses are an incentive to work harder.
integrity|uczciwość, integralność|n|He's a man of great integrity.
leverage|przewaga, dźwignia|n|We have little leverage in the negotiations.
notion|pojęcie|n|I have no notion of what he means.
overhaul|gruntowny remont|n|The engine needs a complete overhaul.
premise|przesłanka|n|The argument is based on a false premise.
prerequisite|warunek wstępny|n|Experience is a prerequisite for the job.
rationale|uzasadnienie|n|What's the rationale behind this decision?
setback|niepowodzenie|n|The injury was a major setback.
stance|stanowisko|n|What's your stance on this issue?
surge|gwałtowny wzrost|n|There was a surge in demand.
trade-off|kompromis (coś za coś)|n|There's always a trade-off between speed and quality.
upheaval|przewrót, zamęt|n|The country is in political upheaval.
arbitrary|arbitralny, dowolny|adj|The decision seemed arbitrary.
compelling|przekonujący|adj|She made a compelling argument.
complacent|zadufany, zbyt pewny siebie|adj|We can't afford to be complacent.
conspicuous|rzucający się w oczy|adj|He felt conspicuous in his suit.
detrimental|szkodliwy|adj|Smoking is detrimental to your health.
elusive|nieuchwytny|adj|Success remained elusive.
explicit|wyraźny (jednoznaczny)|adj|He gave explicit instructions.
implicit|dorozumiany, ukryty|adj|There was an implicit threat in his words.
imminent|nieuchronny, bliski|adj|The storm is imminent.
indispensable|nieodzowny|adj|She's indispensable to the team.
inherent|nieodłączny|adj|There are risks inherent in any business.
meticulous|drobiazgowy|adj|He's meticulous about details.
negligible|znikomy|adj|The difference is negligible.
plausible|wiarygodny|adj|It's a plausible explanation.
prevalent|rozpowszechniony|adj|The disease is prevalent in hot countries.
profound|głęboki (doniosły)|adj|The book had a profound effect on me.
prone|skłonny, podatny|adj|This area is prone to flooding.
redundant|zbędny, zwolniony (z pracy)|adj|Fifty workers were made redundant.
resilient|odporny, prężny|adj|Children are surprisingly resilient.
robust|solidny, wytrzymały|adj|We need a robust system.
scarce|deficytowy, rzadki|adj|Water is scarce in the region.
subtle|subtelny|adj|There's a subtle difference.
tedious|żmudny|adj|Data entry is tedious work.
tentative|wstępny, niepewny|adj|We made a tentative agreement.
unprecedented|bezprecedensowy|adj|Prices rose at an unprecedented rate.
viable|realny, opłacalny|adj|Is the project commercially viable?
volatile|niestabilny, lotny|adj|The market is very volatile.
arguably|można argumentować, że|adv|He is arguably the best player in the world.
inadvertently|nieumyślnie|adv|I inadvertently deleted the file.
predominantly|przeważnie|adv|The staff are predominantly young.
seemingly|pozornie|adv|It was a seemingly simple task.
thereby|tym samym|adv|He signed the contract, thereby accepting the terms.
virtually|praktycznie, niemal|adv|It's virtually impossible.
albeit|aczkolwiek|conj|It worked, albeit slowly.
notwithstanding|niezależnie od|prep|Notwithstanding the cost, we went ahead.
by and large|ogólnie rzecz biorąc|phr|By and large, the project was a success.
on the grounds that|na tej podstawie, że|phr|He was rejected on the grounds that he was too young.
in the long run|na dłuższą metę|phr|It will save money in the long run.
cut corners|iść na skróty (kosztem jakości)|phr|Never cut corners on safety.
adhere|przestrzegać, trzymać się|v|All staff must adhere to the safety rules.
allege|twierdzić (bez dowodów)|v|The report alleges that the data was falsified.
amend|poprawiać (dokument)|v|We need to amend the contract.
articulate|jasno wyrażać|v|She articulated her concerns very clearly.
attain|zdobywać (cel, poziom)|v|Few pilots attain such a level of skill.
augment|powiększać|v|We augmented the team with two engineers.
commend|chwalić|v|The inspector commended the quality of the welds.
comprise|składać się z|v|The structure comprises twenty steel beams.
condone|tolerować (zło)|v|We will not condone unsafe behaviour.
constitute|stanowić|v|Women constitute half of the workforce.
contend|twierdzić, rywalizować|v|He contends that the design is flawed.
corroborate|potwierdzać (dowodami)|v|The test results corroborate our theory.
culminate|kulminować|v|The project culminated in a successful launch.
deduce|wywnioskować|v|From the cracks we deduced that the weld had cooled too fast.
defer|odraczać|v|The decision was deferred until next month.
delegate|delegować|v|A good manager knows how to delegate.
denounce|potępiać|v|The minister denounced the attack.
depict|przedstawiać (obrazowo)|v|The drawing depicts the frame in cross-section.
deplete|wyczerpywać (zasoby)|v|Our stock of filler wire is almost depleted.
deter|odstraszać|v|High prices deter many customers.
deviate|odbiegać|v|Do not deviate from the welding procedure.
disclose|ujawniać (oficjalnie)|v|The company did not disclose the price.
discard|wyrzucać, odrzucać|v|Discard any damaged electrodes.
dispel|rozwiewać (wątpliwości)|v|The test dispelled all our doubts.
elicit|wydobywać (informację)|v|The survey elicited some useful feedback.
embark on|rozpoczynać (przedsięwzięcie)|phr|We are embarking on a major investment.
encompass|obejmować|v|The audit encompasses all departments.
entrench|utrwalać, okopywać|v|These habits are deeply entrenched.
envisage|przewidywać, wyobrażać sobie|v|We don't envisage any problems.
exacerbate|pogarszać|v|The heat exacerbated the problem.
exemplify|stanowić przykład|v|This bridge exemplifies modern engineering.
expedite|przyspieszać|v|Could you expedite the delivery?
fluctuate|wahać się (o wartościach)|v|Steel prices fluctuate a lot.
forge|kuć, tworzyć (więzi)|v|We forged a strong partnership with them.
galvanise|mobilizować|v|The crisis galvanised the team into action.
harness|wykorzystywać (energię)|v|We need to harness solar energy.
impede|spowalniać, utrudniać|v|Poor communication impedes progress.
incur|ponosić (koszty)|v|We incurred extra costs because of the delay.
infer|domyślać się|v|What can we infer from these results?
instigate|wszczynać|v|The company instigated an investigation.
jeopardise|narażać na szwank|v|Don't jeopardise your career.
mandate|nakazywać|v|The law mandates regular inspections.
necessitate|wymagać, powodować konieczność|v|The new order will necessitate overtime.
nurture|pielęgnować, rozwijać|v|We try to nurture young talent.
offset|równoważyć, kompensować|v|Higher prices offset the rising costs.
overrule|uchylać (decyzję)|v|The director overruled the decision.
permeate|przenikać|v|A smell of gas permeated the hall.
pertain|dotyczyć|v|These rules pertain to all visitors.
plummet|gwałtownie spadać|v|Sales plummeted last quarter.
ponder|rozmyślać|v|He pondered the offer for days.
preclude|wykluczać|v|The weather precluded any flying.
procure|zaopatrywać się|v|We procure steel from three suppliers.
proliferate|mnożyć się|v|Cheap imitations have proliferated.
reconcile|godzić, uzgadniać|v|It's hard to reconcile work and family life.
rectify|naprawiać, korygować|v|We will rectify the error immediately.
refute|obalać|v|He refuted all the allegations.
reiterate|powtarzać (z naciskiem)|v|Let me reiterate that safety comes first.
relinquish|zrzekać się|v|He relinquished control of the company.
render|czynić, sprawiać|v|The crack rendered the part useless.
replenish|uzupełniać (zapasy)|v|We need to replenish our stock.
reproach|wyrzucać (komuś coś)|v|She reproached him for being late.
rescind|unieważniać|v|The order was rescinded.
retaliate|brać odwet|v|The company retaliated with lower prices.
solicit|zabiegać o|v|We are soliciting feedback from clients.
stipulate|określać (w umowie)|v|The contract stipulates a delivery date.
subside|ustępować, opadać|v|The wind subsided in the evening.
surpass|przewyższać|v|Sales surpassed our expectations.
thrive|kwitnąć, prosperować|v|Small businesses thrive here.
uphold|podtrzymywać (decyzję)|v|The court upheld the decision.
validate|zatwierdzać, potwierdzać|v|The procedure was validated by tests.
waive|odstąpić od (opłaty)|v|They agreed to waive the fee.
yield|dawać (wynik), ustępować|v|The tests yielded interesting results.
aftermath|następstwa|n|In the aftermath of the crisis, many firms closed.
allocation|przydział|n|The allocation of funds is still unclear.
ambiguity|niejednoznaczność|n|There is some ambiguity in the drawing.
anticipation|oczekiwanie|n|We bought extra steel in anticipation of higher prices.
backlash|ostry sprzeciw|n|The new rules caused a backlash.
bottleneck|wąskie gardło|n|Painting is the bottleneck in our production.
breach|naruszenie|n|That's a breach of contract.
clause|klauzula|n|Read the penalty clause carefully.
coherence|spójność|n|The report lacks coherence.
conjecture|przypuszczenie|n|That's pure conjecture.
connotation|konotacja|n|The word has a negative connotation.
constraint|ograniczenie|n|We work under tight budget constraints.
contingency|ewentualność|n|We have a plan for every contingency.
credibility|wiarygodność|n|The scandal damaged his credibility.
deadlock|impas|n|The negotiations reached a deadlock.
deficiency|niedobór, wada|n|The audit found several deficiencies.
deterrent|czynnik odstraszający|n|Cameras act as a deterrent.
discretion|dyskrecja, swoboda decyzji|n|Bonuses are paid at the manager's discretion.
disparity|dysproporcja|n|There's a huge disparity in wages.
dissent|sprzeciw|n|There was no dissent at the meeting.
efficacy|skuteczność|n|The efficacy of the new method is proven.
entity|podmiot|n|The two companies are separate legal entities.
expenditure|wydatki|n|We need to cut expenditure.
fluctuation|wahanie|n|Price fluctuations make planning difficult.
foresight|przezorność|n|Thanks to her foresight, we had spare parts.
hierarchy|hierarchia|n|The company has a flat hierarchy.
hindrance|utrudnienie|n|The old software is more of a hindrance than a help.
impetus|bodziec do działania|n|The accident gave impetus to new safety rules.
inception|początek, powstanie|n|Since its inception, the firm has grown fast.
inertia|bezwładność|n|Organisational inertia slows down change.
influx|napływ|n|There was an influx of new orders.
jurisdiction|jurysdykcja|n|This case is outside our jurisdiction.
leeway|swoboda, margines|n|The schedule gives us little leeway.
magnitude|wielkość, skala|n|We underestimated the magnitude of the problem.
milestone|kamień milowy|n|The first solo flight is a big milestone.
momentum|rozpęd|n|The project is gaining momentum.
nuance|niuans|n|He understands every nuance of the language.
oversight|przeoczenie, nadzór|n|The error was an oversight.
paradox|paradoks|n|It's a paradox that more automation needs more skilled people.
pitfall|pułapka|n|Avoid the common pitfalls of new pilots.
precedent|precedens|n|This decision sets a dangerous precedent.
predicament|kłopotliwe położenie|n|We found ourselves in a difficult predicament.
proficiency|biegłość|n|The job requires proficiency in English.
provision|przepis, zaopatrzenie|n|The contract includes a provision for delays.
ramification|dalsza konsekwencja|n|Have you considered the ramifications?
rapport|dobra relacja|n|She has a good rapport with clients.
repercussion|reperkusja|n|The decision had serious repercussions.
resilience|odporność (psychiczna)|n|The team showed great resilience.
safeguard|zabezpieczenie|n|We need safeguards against data loss.
scrutiny|wnikliwa analiza|n|The plan came under close scrutiny.
shortfall|niedobór (finansowy)|n|There's a shortfall in the budget.
stalemate|pat|n|The talks ended in stalemate.
stigma|piętno|n|There's still a stigma attached to mental illness.
subsidy|dotacja|n|The farmers receive a subsidy.
surplus|nadwyżka|n|We have a surplus of steel plates.
threshold|próg|n|The noise is above the safety threshold.
turmoil|chaos, zawirowania|n|The markets are in turmoil.
underpinning|podstawa|n|The theoretical underpinning is weak.
upshot|wynik końcowy|n|The upshot was that we lost the contract.
viability|opłacalność|n|We doubt the viability of the project.
whereabouts|miejsce pobytu|n|His whereabouts are unknown.
windfall|nieoczekiwany zysk|n|The company received a windfall from the sale.
adamant|nieugięty|adj|He was adamant that he was right.
adverse|niekorzystny|adj|Adverse weather delayed the flight.
ambivalent|ambiwalentny|adj|I feel ambivalent about the move.
astute|bystry, przenikliwy|adj|She's an astute businesswoman.
candid|otwarty, szczery|adj|Thank you for your candid opinion.
coherent|logiczny, spójny|adj|Give me a coherent explanation.
commensurate|współmierny|adj|Salary will be commensurate with experience.
compulsory|obowiązkowy|adj|Safety training is compulsory.
concise|treściwy|adj|Keep your report concise.
contentious|sporny|adj|It's a contentious issue.
conducive|sprzyjający|adj|Noise is not conducive to concentration.
cumbersome|nieporęczny, uciążliwy|adj|The procedure is cumbersome.
daunting|onieśmielający|adj|Learning to fly can seem daunting.
discernible|zauważalny|adj|There was no discernible difference.
disproportionate|nieproporcjonalny|adj|The punishment was disproportionate.
eloquent|elokwentny|adj|She gave an eloquent speech.
empirical|empiryczny|adj|We need empirical evidence.
erratic|nieregularny, chaotyczny|adj|The machine's behaviour is erratic.
exemplary|wzorowy|adj|His work is exemplary.
exhaustive|wyczerpujący (pełny)|adj|We carried out exhaustive tests.
far-reaching|daleko idący|adj|The changes will have far-reaching effects.
formidable|potężny, budzący respekt|adj|They are a formidable competitor.
frugal|skromny, oszczędny (o życiu)|adj|He lives a frugal life.
hypothetical|hipotetyczny|adj|Let's consider a hypothetical situation.
imperative|konieczny|adj|It is imperative that we finish on time.
impartial|bezstronny|adj|The inspector must be impartial.
incessant|nieustanny|adj|The incessant noise drove me mad.
indicative|wskazujący na|adj|The cracks are indicative of fatigue.
inept|nieudolny|adj|The management was inept.
intricate|zawiły|adj|The design is very intricate.
lenient|pobłażliwy|adj|The teacher was too lenient.
lucrative|lukratywny|adj|It's a lucrative contract.
mundane|przyziemny, nudny|adj|Most of the job is quite mundane.
notorious|osławiony|adj|The road is notorious for accidents.
obsolete|przestarzały (wyszedł z użycia)|adj|This machine is obsolete.
paramount|najważniejszy|adj|Safety is paramount.
pertinent|trafny, istotny|adj|She asked some pertinent questions.
pragmatic|pragmatyczny|adj|We need a pragmatic approach.
prudent|roztropny|adj|It would be prudent to wait.
rigorous|rygorystyczny|adj|The parts undergo rigorous testing.
salient|najistotniejszy|adj|Here are the salient points of the report.
scrupulous|skrupulatny|adj|He is scrupulous about quality.
sceptical|sceptyczny|adj|I'm sceptical about the new plan.
stringent|surowy (o przepisach)|adj|Aviation has stringent safety rules.
superfluous|zbyteczny|adj|Remove any superfluous details.
tangible|namacalny|adj|We need tangible results.
tenuous|wątły|adj|The link between the two is tenuous.
unanimous|jednogłośny|adj|The decision was unanimous.
unwarranted|nieuzasadniony|adj|The criticism was unwarranted.
vigilant|czujny|adj|Pilots must remain vigilant.
vivid|żywy, wyrazisty|adj|I have a vivid memory of my first flight.
conversely|odwrotnie, z kolei|adv|Conversely, lower speed gives better penetration.
hitherto|dotychczas|adv|This method was hitherto unknown.
inherently|z natury|adv|Flying is not inherently dangerous.
invariably|niezmiennie|adv|He is invariably late.
ostensibly|rzekomo|adv|He left, ostensibly for health reasons.
overwhelmingly|w przeważającej mierze|adv|The response was overwhelmingly positive.
tentatively|wstępnie|adv|The meeting is tentatively set for Monday.
henceforth|odtąd|adv|Henceforth, all visitors must wear helmets.
thereafter|od tego czasu, potem|adv|He retired in 2010 and died shortly thereafter.
insofar as|o tyle, o ile|conj|I'll help insofar as I can.
given that|zważywszy, że|conj|Given that it's raining, we'll stay in.
whereby|w ramach którego, dzięki któremu|conj|We introduced a system whereby each weld is recorded.
inasmuch as|o tyle, że|conj|The test was useful inasmuch as it showed the weak points.
lest|aby nie|conj|He checked twice lest he make a mistake.
a double-edged sword|miecz obosieczny|phr|Automation is a double-edged sword.
the tip of the iceberg|wierzchołek góry lodowej|phr|These complaints are just the tip of the iceberg.
bite the bullet|zacisnąć zęby|phr|We had to bite the bullet and buy a new machine.
cut to the chase|przejść do sedna|phr|Let's cut to the chase.
go the extra mile|dać z siebie więcej|phr|Our team always goes the extra mile.
jump the gun|działać przedwcześnie|phr|Don't jump the gun – wait for the results.
play it by ear|improwizować|phr|We don't have a plan, we'll play it by ear.
raise the bar|podnieść poprzeczkę|phr|The new model has raised the bar.
read between the lines|czytać między wierszami|phr|If you read between the lines, he's not happy.
think outside the box|myśleć nieszablonowo|phr|We need to think outside the box.
a grey area|szara strefa|phr|The rules are a grey area.
in a nutshell|w skrócie|phr|In a nutshell, the project failed.
stand one's ground|nie ustępować|phr|She stood her ground in the negotiations.
take it with a pinch of salt|podchodzić z dystansem|phr|Take his promises with a pinch of salt.
at stake|na szali|phr|There's a lot of money at stake.`,
WELD: `welding|spawanie|n|MIG welding is fast and easy to learn.
weld|spoina|n|The weld must be ground flush.
welder|spawacz|n|We're looking for an experienced welder.
weld bead|ścieg spoiny|n|The weld bead should be even and smooth.
fillet weld|spoina pachwinowa|n|Use a 5 mm fillet weld on both sides.
butt weld|spoina czołowa|n|Full penetration butt welds are required.
tack weld|sczep (spoina sczepna)|n|Put a tack weld every 100 mm.
root pass|ścieg graniowy|n|The root pass is done with TIG.
filler metal|spoiwo (materiał dodatkowy)|n|Choose the filler metal according to the base material.
welding wire|drut spawalniczy|n|We use 1.2 mm welding wire.
electrode|elektroda|n|Keep the electrodes dry.
shielding gas|gaz osłonowy|n|Check the shielding gas flow rate.
arc|łuk (elektryczny)|n|Keep the arc length short.
spatter|odpryski|n|Anti-spatter spray reduces spatter.
slag|żużel|n|Remove the slag before the next pass.
porosity|porowatość|n|Porosity is often caused by poor gas coverage.
crack|pęknięcie|n|The inspector found a crack in the weld.
undercut|podtopienie|n|Undercut reduces the strength of the joint.
lack of fusion|przyklejenie (brak wtopienia)|n|Lack of fusion was found on the side wall.
incomplete penetration|brak przetopu|n|Incomplete penetration is not acceptable here.
distortion|odkształcenie (spawalnicze)|n|Clamp the parts to reduce distortion.
heat-affected zone|strefa wpływu ciepła (SWC)|n|Hardness is checked in the heat-affected zone.
preheating|podgrzewanie wstępne|n|Thick plates need preheating to 150°C.
post-weld heat treatment|obróbka cieplna po spawaniu|n|Post-weld heat treatment relieves stresses.
interpass temperature|temperatura międzyściegowa|n|Don't exceed the maximum interpass temperature.
welding procedure specification|instrukcja technologiczna spawania (WPS)|n|Follow the welding procedure specification.
welder qualification test|egzamin kwalifikacyjny spawacza|n|He passed the welder qualification test.
weldability|spawalność|n|High carbon content reduces weldability.
penetration|przetop|n|Increase the current to get better penetration.
joint|złącze|n|This joint must be welded from both sides.
bevel|ukosowanie (fazowanie krawędzi)|n|Prepare a 30-degree bevel.
chamfer|faza|n|Add a 1 mm chamfer to all edges.
root gap|odstęp w grani|n|Set a root gap of 2 mm.
clamp|ścisk|n|Use clamps to hold the parts in place.
jig|przyrząd montażowy|n|We designed a new jig for this frame.
fixture|uchwyt (przyrząd mocujący)|n|The part is held in a fixture during machining.
grinder|szlifierka|n|Use the grinder to clean the edges.
angle grinder|szlifierka kątowa|n|Always wear goggles when using an angle grinder.
grinding disc|tarcza szlifierska|n|Replace the grinding disc when it's worn.
plasma cutting|cięcie plazmowe|n|Plasma cutting is ideal for thin sheets.
laser cutting|cięcie laserowe|n|All brackets are made by laser cutting.
oxy-fuel cutting|cięcie gazowe (tlenowe)|n|Oxy-fuel cutting is used for thick plates.
press brake|prasa krawędziowa|n|The parts are bent on the press brake.
bending|gięcie|n|Bending radius must be at least 2t.
guillotine shear|gilotyna (nożyce)|n|Cut the strips on the guillotine shear.
punching|wykrawanie|n|Holes are made by punching.
drilling|wiercenie|n|Drilling is done after welding.
milling|frezowanie|n|The surface is finished by milling.
turning|toczenie|n|The shaft is made by turning.
lathe|tokarka|n|He works on a CNC lathe.
milling machine|frezarka|n|The milling machine needs a new spindle.
tapping|gwintowanie (gwintownikiem)|n|Use cutting oil for tapping.
thread|gwint|n|The thread is M12 x 1.75.
swarf|wióry|n|Clean the swarf off the machine table.
burr|zadzior|n|Remove all burrs after cutting.
deburring|gratowanie|n|All parts need deburring before painting.
cutting tool|narzędzie skrawające|n|The cutting tool is worn.
feed rate|posuw|n|Reduce the feed rate for a better finish.
cutting speed|prędkość skrawania|n|Cutting speed depends on the material.
spindle|wrzeciono|n|Spindle speed is 1200 rpm.
coolant|chłodziwo|n|Check the coolant level every shift.
tolerance|tolerancja|n|The tolerance on this hole is ±0.1 mm.
surface finish|wykończenie powierzchni|n|The drawing requires a fine surface finish.
roughness|chropowatość|n|Surface roughness must not exceed Ra 3.2.
dimension|wymiar|n|Check all dimensions against the drawing.
technical drawing|rysunek techniczny|n|Can you read a technical drawing?
cross-section|przekrój|n|The cross-section shows the weld size.
bill of materials|zestawienie materiałów (BOM)|n|The bill of materials lists every part.
batch|partia|n|We produce this part in batches of fifty.
work order|zlecenie produkcyjne|n|Print the work order for each job.
lead time|czas realizacji|n|The lead time is four weeks.
scrap|złom, braki|n|Too many parts ended up as scrap.
rework|poprawka (przeróbka)|n|The frame was sent back for rework.
non-conformity|niezgodność|n|Report every non-conformity to quality control.
inspection|kontrola|n|Final inspection is done before shipping.
visual testing|badania wizualne (VT)|n|Every weld undergoes visual testing.
ultrasonic testing|badania ultradźwiękowe (UT)|n|Ultrasonic testing found an internal defect.
magnetic particle testing|badania magnetyczno-proszkowe (MT)|n|Magnetic particle testing shows surface cracks.
penetrant testing|badania penetracyjne (PT)|n|Penetrant testing is used on stainless steel.
radiographic testing|badania radiograficzne (RT)|n|Radiographic testing is required for pressure vessels.
calliper|suwmiarka|n|Measure the diameter with a calliper.
micrometer|mikrometr|n|Use a micrometer for precise measurements.
gauge|sprawdzian, miernik|n|Check the weld size with a fillet gauge.
steel|stal|n|The frame is made of steel.
stainless steel|stal nierdzewna|n|Stainless steel doesn't rust easily.
carbon steel|stal węglowa|n|Carbon steel is cheaper and easy to weld.
structural steel|stal konstrukcyjna|n|We use S355 structural steel.
alloy|stop|n|Aluminium alloys are light and strong.
sheet metal|blacha (cienka)|n|The cover is made from 2 mm sheet metal.
steel plate|blacha gruba|n|The base is a 20 mm steel plate.
beam|belka, dźwigar|n|The beam must carry a load of five tonnes.
hollow section|profil zamknięty|n|The frame is welded from hollow sections.
flange|kołnierz, półka (profilu)|n|Weld the flange to the end of the pipe.
bracket|wspornik|n|Mount the bracket on the wall.
bolt|śruba|n|Tighten the bolts to the correct torque.
nut|nakrętka|n|Use a self-locking nut.
washer|podkładka|n|Put a washer under the nut.
rivet|nit|n|The panels are joined with rivets.
galvanising|cynkowanie ogniowe|n|After galvanising, the parts are inspected.
blasting|śrutowanie (piaskowanie)|n|Blasting removes rust and mill scale.
coating|powłoka|n|The coating protects against corrosion.
primer|podkład (farba)|n|Apply one coat of primer.
rust|rdza|n|Remove all rust before painting.
corrosion|korozja|n|Corrosion is a serious problem outdoors.
hardness|twardość|n|We measured the hardness of the weld.
tensile strength|wytrzymałość na rozciąganie|n|The tensile strength is 510 MPa.
yield strength|granica plastyczności|n|S355 has a minimum yield strength of 355 MPa.
fatigue|zmęczenie (materiału)|n|The crack was caused by fatigue.
torque|moment obrotowy (dokręcania)|n|Use a torque wrench.
annealing|wyżarzanie|n|Annealing makes the steel softer.
hardening|hartowanie|n|Hardening increases wear resistance.
tempering|odpuszczanie|n|Tempering follows hardening.
brittle|kruchy|adj|Cast iron is brittle.
ductile|plastyczny (ciągliwy)|adj|Low-carbon steel is ductile.
grind|szlifować|v|Grind the weld flush with the surface.
bend|giąć|v|Bend the sheet to 90 degrees.
drill|wiercić|v|Drill four holes, 10 mm in diameter.
tighten|dokręcać|v|Tighten the bolts in a cross pattern.
assemble|montować|v|The frames are assembled in Hall 2.
fabricate|wytwarzać (konstrukcje)|v|We fabricate steel structures for bridges.
machine|obrabiać (skrawaniem)|v|The flange is machined after welding.
welding helmet|przyłbica spawalnicza|n|Always wear a welding helmet.
safety goggles|okulary ochronne|n|Safety goggles are required in this area.
fume extraction|wyciąg dymów spawalniczych|n|Switch on the fume extraction before welding.
overhead crane|suwnica|n|Only trained staff may operate the overhead crane.
forklift|wózek widłowy|n|The forklift is out of service.
shop floor|hala produkcyjna|n|I spend half my day on the shop floor.
shift|zmiana (w pracy)|n|I'm on the night shift this week.
foreman|brygadzista|n|Ask the foreman about the schedule.
quality control|kontrola jakości|n|Quality control rejected the batch.
traceability|identyfikowalność|n|Every plate has full traceability.
mill certificate|świadectwo odbioru (atest hutniczy)|n|Check the mill certificate for each delivery.`,
CODE: `variable|zmienna|n|Store the result in a variable.
constant|stała|n|Use a constant for the tax rate.
function|funkcja|n|This function returns the total price.
return value|wartość zwracana|n|Check the return value for errors.
loop|pętla|n|The loop runs ten times.
conditional statement|instrukcja warunkowa|n|Use a conditional statement to check the input.
array|tablica|n|The array contains five elements.
string|łańcuch znaków (string)|n|Convert the number to a string.
integer|liczba całkowita|n|The age must be an integer.
floating-point number|liczba zmiennoprzecinkowa|n|Prices are stored as floating-point numbers.
inheritance|dziedziczenie|n|Inheritance lets a class reuse code.
instance|instancja, egzemplarz|n|Create a new instance of the class.
library|biblioteka (kodu)|n|We use a library to parse dates.
dependency|zależność|n|Update all dependencies before the release.
package manager|menedżer pakietów|n|npm is a package manager for JavaScript.
source code|kod źródłowy|n|The source code is available on GitHub.
codebase|baza kodu|n|The codebase is getting too big.
repository|repozytorium|n|Clone the repository to your computer.
branch|gałąź|n|Create a new branch for this feature.
commit|commit (zatwierdzona zmiana)|n|Write a clear commit message.
pull request|prośba o scalenie (PR)|n|I opened a pull request for review.
version control|kontrola wersji|n|Git is the most popular version control system.
bug|błąd (w kodzie)|n|I found a bug in the login page.
debugging|debugowanie|n|Debugging took me all afternoon.
breakpoint|punkt przerwania|n|Set a breakpoint on line 42.
stack trace|ślad stosu|n|The stack trace shows where it crashed.
exception|wyjątek|n|The function throws an exception if the file is missing.
error handling|obsługa błędów|n|Good error handling makes the app reliable.
syntax|składnia|n|Python has a simple syntax.
compiler|kompilator|n|The compiler found three errors.
runtime|czas wykonania, środowisko uruchomieniowe|n|The error happens at runtime.
release|wydanie (wersja)|n|The new release fixes several bugs.
test case|przypadek testowy|n|Add a test case for empty input.
unit test|test jednostkowy|n|All unit tests pass.
feature|funkcjonalność|n|The new feature will be ready next week.
user interface|interfejs użytkownika|n|The user interface is simple and clean.
database|baza danych|n|User data is stored in a database.
query|zapytanie|n|This query is too slow.
request|żądanie|n|The server received the request.
response|odpowiedź (serwera)|n|The response is in JSON format.
endpoint|punkt końcowy (API)|n|Call the /users endpoint.
authentication|uwierzytelnianie|n|We use two-factor authentication.
encryption|szyfrowanie|n|All passwords are protected by encryption.
backup|kopia zapasowa|n|Make a backup before you update.
memory leak|wyciek pamięci|n|A memory leak slowed down the server.
performance|wydajność|n|Caching improved performance.
scalability|skalowalność|n|Scalability is important for big projects.
indentation|wcięcie|n|In Python, indentation matters.
comment|komentarz|n|Add a comment to explain this line.
keyword|słowo kluczowe|n|You can't use a keyword as a variable name.
assignment|przypisanie|n|The assignment sets x to 5.
recursion|rekurencja|n|This function uses recursion.
data structure|struktura danych|n|Choose the right data structure.
hash map|tablica mieszająca (mapa)|n|Use a hash map for fast lookups.
queue|kolejka|n|Tasks are added to a queue.
stack|stos|n|The stack is full.
input|dane wejściowe|n|Always validate user input.
output|dane wyjściowe|n|The output is saved to a file.
file path|ścieżka do pliku|n|The file path is wrong.
directory|katalog|n|Create a new directory for the project.
command line|wiersz poleceń|n|Run the script from the command line.
environment variable|zmienna środowiskowa|n|Store the key in an environment variable.
configuration file|plik konfiguracyjny|n|Edit the configuration file.
open source|otwarte oprogramowanie|n|Linux is open source.
documentation|dokumentacja|n|Read the documentation first.
snippet|fragment kodu|n|Here's a code snippet that works.
boilerplate|kod szablonowy|n|The framework generates the boilerplate for you.
legacy code|stary kod (odziedziczony)|n|Nobody wants to touch the legacy code.
workaround|obejście (problemu)|n|This is just a temporary workaround.
edge case|przypadek brzegowy|n|Don't forget the edge cases.
overflow|przepełnienie|n|An integer overflow caused the crash.
thread|wątek|n|The task runs in a separate thread.
asynchronous|asynchroniczny|adj|The request is asynchronous.
readable|czytelny|adj|Keep your code short and readable.
deprecated|przestarzały (wycofywany)|adj|This method is deprecated.
case-sensitive|rozróżniający wielkość liter|adj|Passwords are case-sensitive.
install|instalować|v|Install the package with pip.
merge|scalać|v|Merge your branch into main.
deploy|wdrażać|v|We deploy to production every Friday.
refactor|refaktoryzować|v|I refactored the code to make it cleaner.
compile|kompilować|v|The code compiles without errors.
run|uruchamiać|v|Run the tests before you commit.
fix|naprawiać (poprawiać)|v|I fixed the bug.
crash|wysypać się, zawiesić się|v|The app crashes when I click save.
fetch|pobierać|v|Fetch the data from the API.
parse|parsować|v|Parse the JSON response.
overwrite|nadpisywać|v|This will overwrite the existing file.`,
AVIA: `aircraft|statek powietrzny|n|The aircraft is ready for departure.
pilot licence|licencja pilota|n|I want to get my private pilot licence.
student pilot|uczeń-pilot|n|Student pilots must fly with an instructor.
flight instructor|instruktor lotniczy|n|My flight instructor is very patient.
logbook|książka lotów|n|Write the flight time in your logbook.
medical certificate|orzeczenie lotniczo-lekarskie|n|You need a medical certificate before your first solo.
cockpit|kabina pilotów|n|The cockpit is small but comfortable.
wing|skrzydło|n|Check the wing for damage.
fuselage|kadłub|n|The fuselage is made of aluminium.
tail|ogon (usterzenie)|n|The tail number is SP-ABC.
propeller|śmigło|n|Never walk near a turning propeller.
engine|silnik|n|Start the engine.
landing gear|podwozie|n|The landing gear is down.
flaps|klapy|n|Set the flaps to 10 degrees.
aileron|lotka|n|Move the ailerons to roll the aircraft.
rudder|ster kierunku|n|Use the rudder to keep the nose straight.
elevator|ster wysokości|n|The elevator controls the pitch.
yoke|wolant|n|Pull the yoke back gently.
throttle|przepustnica (manetka gazu)|n|Open the throttle fully for takeoff.
fuel|paliwo|n|Do we have enough fuel?
fuel tank|zbiornik paliwa|n|Check both fuel tanks.
altimeter|wysokościomierz|n|Set the altimeter to the local pressure.
airspeed indicator|prędkościomierz|n|Watch the airspeed indicator on final.
attitude indicator|sztuczny horyzont|n|The attitude indicator shows the aircraft's position.
heading indicator|wskaźnik kursu|n|Align the heading indicator with the compass.
runway|pas startowy|n|We're landing on runway 29.
taxiway|droga kołowania|n|Taxi via taxiway Alpha.
apron|płyta postojowa|n|Park on the apron.
control tower|wieża kontroli lotów|n|Contact the control tower.
air traffic control|kontrola ruchu lotniczego|n|Air traffic control cleared us to land.
airfield|lotnisko (lądowisko)|n|The airfield is 10 km from the city.
takeoff|start|n|Takeoff is the most critical phase.
landing|lądowanie|n|That was a smooth landing.
approach|podejście (do lądowania)|n|We're on approach to runway 27.
go-around|odejście na drugi krąg|n|If in doubt, make a go-around.
traffic pattern|krąg nadlotniskowy|n|Join the traffic pattern on the downwind leg.
final approach|prosta do lądowania|n|We're on final approach.
crosswind|wiatr boczny|n|Crosswind landings are difficult.
headwind|wiatr czołowy|n|A strong headwind slowed us down.
tailwind|wiatr w ogon|n|Never take off with a strong tailwind.
gust|poryw (wiatru)|n|Wind 240 at 15, gusts 25 knots.
turbulence|turbulencje|n|We had some turbulence over the mountains.
visibility|widzialność|n|Visibility is down to 3 km.
cloud base|podstawa chmur|n|The cloud base is at 1500 feet.
ceiling|pułap chmur|n|The ceiling is too low for VFR flight.
icing|oblodzenie|n|Icing is dangerous for small aircraft.
weather briefing|odprawa meteorologiczna|n|Get a weather briefing before every flight.
forecast|prognoza|n|The forecast shows rain in the afternoon.
altitude|wysokość (nad poziomem morza)|n|Maintain an altitude of 2000 feet.
airspace|przestrzeń powietrzna|n|We're entering controlled airspace.
restricted area|strefa ograniczeń lotów|n|Avoid the restricted area near the base.
flight plan|plan lotu|n|File a flight plan before departure.
heading|kurs (kierunek lotu)|n|Fly heading 270.
waypoint|punkt nawigacyjny|n|The next waypoint is the lake.
chart|mapa lotnicza|n|Mark the route on the chart.
knot|węzeł (jednostka prędkości)|n|We're flying at 100 knots.
nautical mile|mila morska|n|The airfield is 20 nautical miles away.
stall|przeciągnięcie|n|Recover from the stall by lowering the nose.
spin|korkociąg|n|A spin can follow a stall.
lift|siła nośna|n|The wings produce lift.
drag|opór|n|Flaps increase lift and drag.
thrust|ciąg|n|The propeller produces thrust.
weight and balance|masa i wyważenie|n|Do the weight and balance calculation.
centre of gravity|środek ciężkości|n|The centre of gravity must be within limits.
pre-flight check|przegląd przedlotowy|n|Never skip the pre-flight check.
checklist|lista kontrolna|n|Always use the checklist.
emergency landing|lądowanie awaryjne|n|The pilot made an emergency landing in a field.
engine failure|awaria silnika|n|Practise engine failure procedures.
solo flight|lot samodzielny|n|My first solo flight was unforgettable.
cross-country flight|lot nawigacyjny (przelot)|n|We planned a cross-country flight to Kraków.
touch-and-go|lądowanie z przelotem (touch-and-go)|n|We did five touch-and-goes today.
glide|lot ślizgowy|n|Find the best glide speed.
fuel gauge|wskaźnik paliwa|n|The fuel gauge shows half full.
mixture|mieszanka (paliwowa)|n|Lean the mixture at altitude.
carburettor heat|podgrzew gaźnika|n|Apply carburettor heat to prevent icing.
cruise|lot przelotowy|n|During cruise, check the engine instruments.
climb|wznosić się|v|Climb to 3000 feet.
descend|zniżać się|v|Descend to 1500 feet.
taxi|kołować|v|Taxi to the holding point.
land|lądować|v|We landed safely.
take off|startować|v|We took off at 10:15.
squawk|ustawić kod transpondera|v|Squawk 7000.
mayday|wezwanie pomocy (MAYDAY)|phr|Mayday, mayday, mayday, engine failure.
cleared for takeoff|zezwolenie na start|phr|Runway 29, cleared for takeoff.
hold short|zatrzymaj się przed (pasem)|phr|Hold short of runway 29.
line up and wait|zajmij pas i czekaj|phr|Runway 29, line up and wait.
roger|zrozumiałem|phr|Roger, report downwind.
wilco|zrozumiałem, wykonam|phr|Wilco.
affirm|potwierdzam (tak)|phr|Affirm, we have the airfield in sight.
negative|nie (zaprzeczam)|phr|Negative, we are VFR.
say again|powtórz|phr|Say again your callsign.
standby|czekaj|phr|Standby, I'll call you back.`
};

/* Irregular verbs: base|past|participle|Polish ("/" separates accepted variants). */
