/* Reading and listening texts with questions. */
const TEXTS = [
{ id: "a1-family", lvl: "A1", kind: "tekst", title: "Moja rodzina",
  text: `My name is Tom. I am thirty-five years old and I live in Gliwice, a city in the south of Poland. I am a technologist in a steel company.
My wife's name is Anna. She is a nurse and she works in a hospital. We have two children, a son and a daughter. Our son is ten and our daughter is seven.
We live in a flat near the park. At the weekend we often go to the park or visit my parents. My parents live in a small village. They have a big garden and a dog.`,
  qs: `Where does Tom live?|In Gliwice.|In a small village.;In Kraków.
What is Anna's job?|She is a nurse.|She is a teacher.;She is a technologist.
How many children have they got?|Two.|One.;Three.
Where do Tom's parents live?|In a small village.|In a flat near the park.;In Gliwice.` },
{ id: "a1-cafe", lvl: "A1", kind: "dialog", title: "W kawiarni",
  text: `Waiter: Good morning! What can I get you?
Anna: Good morning. A coffee with milk, please.
Waiter: Small or large?
Anna: Large, please. And can I have a piece of chocolate cake?
Waiter: Of course. Anything else?
Anna: No, thank you. How much is it?
Waiter: That's eight pounds fifty.
Anna: Can I pay by card?
Waiter: Yes, no problem.`,
  qs: `What does Anna drink?|A large coffee with milk.|A small black coffee.;A cup of tea.
What does she eat?|Chocolate cake.|A sandwich.;Nothing.
How much does she pay?|£8.50|£5.80;£18.50
How does she pay?|By card.|In cash.;She doesn't pay.` },
{ id: "a1-day", lvl: "A1", kind: "tekst", title: "Mój dzień",
  text: `I get up at half past five every day. I have a shower and I drink a cup of coffee. I don't eat breakfast at home.
I go to work by car and I start work at seven. At work I check drawings and talk to the welders. I have lunch at twelve o'clock. I finish work at three.
In the evening I play with my children, read a book or learn English. I go to bed at ten.`,
  qs: `What time does he get up?|At half past five.|At half past six.;At seven.
How does he go to work?|By car.|By bus.;On foot.
When does he finish work?|At three.|At twelve.;At seven.
What does he do in the evening?|He plays with his children, reads or learns English.|He works late.;He goes to the gym.` },
{ id: "a2-holiday", lvl: "A2", kind: "tekst", title: "Wakacje w Hiszpanii",
  text: `Last summer we went on holiday to Spain. We flew from Katowice to Barcelona and the flight took about three hours. We stayed in a small hotel near the beach.
The weather was hot and sunny every day. In the mornings we swam in the sea, and in the afternoons we visited museums and old churches. One day we took a train to a small town in the mountains.
The food was delicious, but the restaurants were quite expensive. On the last day my son lost his passport, but luckily a waiter found it in the restaurant. It was the best holiday we've ever had.`,
  qs: `How did they travel to Barcelona?|By plane.|By train.;By car.
What was the weather like?|Hot and sunny.|Rainy.;Cold.
What happened on the last day?|The son lost his passport.|They missed the flight.;The hotel was closed.
What does the writer say about the restaurants?|The food was delicious but expensive.|The food was bad.;They were very cheap.` },
{ id: "a2-station", lvl: "A2", kind: "dialog", title: "Na dworcu",
  text: `Tom: Excuse me, what time is the next train to Kraków?
Clerk: The next one leaves at 10:45 from platform 3.
Tom: How long does the journey take?
Clerk: About an hour and a half.
Tom: OK. A return ticket, please.
Clerk: Are you coming back today?
Tom: No, on Sunday.
Clerk: That's 64 złoty. The train is a bit late today – about ten minutes.
Tom: No problem. Thank you!`,
  qs: `When does the next train leave?|At 10:45.|At 10:15.;At 11:45.
Which platform does it leave from?|Platform 3.|Platform 4.;Platform 13.
What ticket does Tom buy?|A return ticket.|A single ticket.;A weekly ticket.
What is the problem with the train?|It's about ten minutes late.|It's cancelled.;It's full.` },
{ id: "a2-job", lvl: "A2", kind: "mail", title: "Nowa praca",
  text: `Hi Kasia,
How are you? I started my new job last Monday! I'm working in a big company that makes steel parts for cars. The people are very friendly and my boss is very helpful.
The work is interesting but sometimes difficult, because I have to read a lot of documents in English. I usually start at seven and finish at three, so I have free afternoons.
Next month I'm going to do a course in Germany for two weeks. I'm a bit nervous, but I'm also excited.
What about you? Are you still working at the bank?
Love,
Marta`,
  qs: `What does Marta's company make?|Steel parts for cars.|Cars.;Documents.
Why is the job sometimes difficult?|She has to read a lot of documents in English.|Her boss isn't friendly.;She works at night.
What is she going to do next month?|Do a course in Germany.|Start a new job.;Visit Kasia.
How does she feel about it?|Nervous but excited.|Bored.;Angry.` },
{ id: "b1-safety", lvl: "B1", kind: "tekst", title: "Bezpieczeństwo przy spawaniu",
  text: `Safety comes first in every workshop. Before you start welding, you must make sure that the area is clean and that there are no flammable materials nearby. Always wear a welding helmet, gloves and protective clothing, even if the job will only take a minute.
The fumes produced during welding can be harmful, so the fume extraction system must be switched on. If you notice a gas leak, close the valve immediately and report it to your supervisor. Never use damaged cables or equipment.
Most accidents happen because people are in a hurry or think that nothing will happen this time.`,
  qs: `What must you do before you start welding?|Make sure the area is clean and safe.|Switch off the lights.;Call your supervisor.
Why must the fume extraction be on?|Welding fumes can be harmful.|It cools the metal.;It saves electricity.
What should you do if you notice a gas leak?|Close the valve and report it.|Continue working carefully.;Open the windows and go home.
Why do most accidents happen?|People are in a hurry or too confident.|The equipment is too old.;There are not enough supervisors.` },
{ id: "b1-client", lvl: "B1", kind: "dialog", title: "Telefon od klienta",
  text: `Client: Hello, this is Mark Evans from Brookfield Engineering. I'm calling about our order of steel frames.
Tom: Good morning, Mr Evans. How can I help you?
Client: The frames were supposed to arrive last Friday, but we haven't received them yet.
Tom: I'm sorry about that. We had a problem with one of our machines, so production was delayed by a few days.
Client: I see. When can we expect the delivery?
Tom: The frames have already been welded and they're being painted now. We'll send them on Wednesday, so they should arrive on Thursday.
Client: Thursday is fine, but please let me know if there are any more delays.
Tom: Of course. I'll send you an email as soon as the truck leaves.`,
  qs: `Why is the client calling?|The frames haven't arrived.|The frames are damaged.;He wants a new quote.
Why was production delayed?|There was a problem with a machine.|There was no steel.;The painters were ill.
When should the frames arrive?|On Thursday.|On Wednesday.;Last Friday.
What does Tom promise to do?|Send an email when the truck leaves.|Give a discount.;Call every day.` },
{ id: "b1-flight", lvl: "B1", kind: "tekst", title: "Pierwsza lekcja latania",
  text: `I had always wanted to fly, so for my fortieth birthday my wife gave me a trial flying lesson. When I arrived at the airfield, the instructor, an experienced pilot called Ewa, explained the basic controls and showed me how to do the pre-flight check.
Then we got into a small Cessna. Ewa did the takeoff, but once we were in the air she let me take the controls. I was surprised how sensitive the aircraft was – even a small movement of the yoke changed our direction.
We flew over the lake and the forest for about half an hour. Ewa landed the plane, but she said I had done very well. Since that day I have been saving money for a full pilot licence course.`,
  qs: `Who gave him the trial lesson?|His wife.|His instructor.;His company.
What surprised him?|How sensitive the aircraft was.|How big the cockpit was.;How fast they landed.
Who landed the plane?|Ewa.|He did.;Nobody – they didn't land.
What has he been doing since that day?|Saving money for a licence course.|Flying every weekend.;Looking for a new job.` },
{ id: "b2-remote", lvl: "B2", kind: "tekst", title: "Praca zdalna",
  text: `Over the last few years, remote work has become increasingly common, particularly in IT and office jobs. Supporters argue that working from home saves time and money, since employees no longer have to commute, and that it allows people to organise their day more flexibly. Many companies have also discovered that productivity has not fallen; in some cases it has even risen.
However, remote work is not without its drawbacks. Some employees feel isolated and find it difficult to separate their professional and private lives. Managers, on the other hand, sometimes struggle to build a team spirit when colleagues rarely meet in person.
As a result, many organisations have opted for a hybrid model, in which staff spend part of the week in the office and part at home.`,
  qs: `What has happened to productivity?|It hasn't fallen and has sometimes risen.|It has fallen sharply.;Nobody has measured it.
What is one drawback for employees?|They may feel isolated.|They earn less.;They have to commute more.
What problem do managers have?|Building team spirit.|Finding offices.;Paying salaries.
What have many organisations chosen?|A hybrid model.|Office work only.;Remote work only.` },
{ id: "b2-complaint", lvl: "B2", kind: "mail", title: "Reklamacja",
  text: `Dear Mr Kowalski,
I am writing to express my concern regarding the last delivery of brackets (order no. 4521), which arrived on 12 March. During our incoming inspection, we found that approximately 15% of the parts had cracks in the fillet welds. As a consequence, we were unable to use them on our assembly line, which caused a two-day delay in our production.
I would be grateful if you could investigate the cause of this problem and let us know what corrective actions you intend to take. We would also expect the defective parts to be replaced free of charge within two weeks.
I look forward to hearing from you.
Yours sincerely,
Laura Hughes
Quality Manager`,
  qs: `What was wrong with the parts?|Cracks in the fillet welds.|They were the wrong colour.;They arrived late.
What was the consequence for Laura's company?|A two-day delay in production.|A fine.;The loss of a client.
What does she ask Mr Kowalski to do?|Investigate the cause and plan corrective actions.|Give a discount on the next order.;Sign a new contract.
What does she expect?|The defective parts to be replaced free within two weeks.|Her money back immediately.;A visit from the director.` },
{ id: "b2-interview", lvl: "B2", kind: "dialog", title: "Rozmowa kwalifikacyjna",
  text: `Interviewer: Could you tell me a little about your current role?
Tom: Certainly. I'm a production technologist, so I'm responsible for preparing welding procedures, choosing the right equipment and making sure that we meet quality standards.
Interviewer: What would you say is your biggest achievement so far?
Tom: Last year I reorganised the welding sequence for one of our main products. As a result, distortion was reduced and we cut production time by around twenty percent.
Interviewer: Impressive. And why are you interested in working for us?
Tom: Your company works on international projects, and I'd like to develop my skills in a more challenging environment. I'm also keen to improve my English.
Interviewer: How do you deal with pressure?
Tom: I try to prioritise my tasks and stay calm. If a problem comes up, I focus on finding a solution rather than looking for someone to blame.`,
  qs: `What is Tom responsible for?|Welding procedures, equipment and quality.|Sales and marketing.;The finance department.
What was his biggest achievement?|He cut production time by about 20%.|He became a manager.;He won an award.
Why does he want this job?|To work on international projects and develop his skills.|Only for a higher salary.;Because it's closer to home.
How does he deal with pressure?|He prioritises and focuses on solutions.|He works longer hours.;He asks his boss for help.` },
{ id: "c1-robots", lvl: "C1", kind: "tekst", title: "Roboty spawalnicze",
  text: `The widespread adoption of welding robots has transformed the fabrication industry, yet its consequences are more nuanced than headlines suggest. On the one hand, robotic cells deliver remarkably consistent quality and can operate around the clock, which has enabled manufacturers to offset rising labour costs. On the other hand, the initial investment is considerable, and robots are only cost-effective when production runs are long enough to justify the time spent on programming and fixturing.
Contrary to popular belief, automation has not rendered skilled welders obsolete. If anything, demand for experienced specialists has grown, since someone has to set up the equipment, troubleshoot defects and handle the complex, one-off jobs that machines still cannot tackle. The real challenge, therefore, lies not in replacing people but in retraining them.`,
  qs: `When are welding robots cost-effective?|When production runs are long enough.|Always.;Mainly for one-off jobs.
What has happened to demand for experienced welders?|It has grown.|It has disappeared.;It has fallen slightly.
What does "offset rising labour costs" mean here?|Balance out higher wages.|Increase salaries.;Hire more workers.
Where does the real challenge lie, according to the author?|In retraining people.|In buying more robots.;In reducing quality.` },
{ id: "c1-pilot", lvl: "C1", kind: "tekst", title: "Decyzja w kokpicie",
  text: `Experienced instructors often say that the most dangerous moment in a pilot's career comes not at the beginning but after a hundred or so hours, when confidence begins to outpace skill. It is at this stage that pilots are most tempted to press on into deteriorating weather, convinced that they will manage.
Accident reports repeatedly show that the decision to continue, rather than any lack of handling ability, is what ultimately proves fatal. Hence the emphasis in modern training on so-called personal minimums: limits on wind, visibility and cloud base that a pilot sets in advance, on the ground, when judgement is not clouded by the desire to get home.
Turning back may feel like a failure, but no one has ever been criticised for landing safely at an alternative airfield.`,
  qs: `When is the most dangerous moment, according to instructors?|After about a hundred hours.|On the first solo flight.;Before the licence exam.
What usually leads to these accidents?|The decision to continue.|Poor handling skills.;Engine failures.
What are personal minimums?|Limits a pilot sets in advance.|The legal minimum amount of fuel.;The minimum number of flight hours.
What is the author's attitude to turning back?|It is a sensible decision, not a failure.|It is a sign of weakness.;It should be avoided.` },
{ id: "c1-negotiation", lvl: "C1", kind: "dialog", title: "Negocjacje z dostawcą",
  text: `Supplier: We've looked at your proposal, and while we appreciate the volume, a ten percent discount simply isn't feasible for us at current steel prices.
Buyer: I understand, but bear in mind that we're offering a three-year contract. That gives you a degree of stability most clients can't.
Supplier: That's a fair point. What if we met you halfway – five percent, provided that the payment terms are reduced to thirty days?
Buyer: Thirty days would be difficult for our finance department. Could we agree on forty-five, with the five percent discount?
Supplier: Let me run that past my director, but I think we could live with that, as long as the minimum order quantity stays the same.
Buyer: That works for us. Shall I put it in writing so we're all on the same page?`,
  qs: `Why can't the supplier offer 10%?|Because of current steel prices.|Because the order is too small.;Because the director is away.
What does the buyer offer in return?|A three-year contract.|Payment in cash.;A higher price.
What is the likely compromise?|5% discount and 45-day payment terms.|10% discount and 30-day terms.;No discount at all.
What condition does the supplier add?|The minimum order quantity stays the same.|Delivery must be faster.;The contract must be longer.` }
];

/* Role-play scenarios for chatting with Claude (owner only) */
