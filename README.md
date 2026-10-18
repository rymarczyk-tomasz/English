# Angielski

Aplikacja do nauki angielskiego (A1–C1): słówka, gramatyka, zdania, czytanie, egzaminy. Czysty HTML, CSS i JavaScript, bez frameworków i bez instalowania czegokolwiek.

## Jak uruchomić

Otwórz `index.html` w przeglądarce (dwuklik albo przeciągnij do okna przeglądarki). Po zmianie pliku wystarczy odświeżyć stronę (F5).

Lokalnie postęp zapisuje się w przeglądarce. Synchronizacja między urządzeniami, sprawdzanie z Claude i zgłaszanie błędów działają tylko w wersji opublikowanej na claude.ai.

## Struktura

| Plik | Co zawiera |
|---|---|
| `index.html` | Szkielet strony: nagłówek, przełączniki, dolne menu na telefonie |
| `css/styles.css` | Wygląd, kolory (jasny i ciemny motyw), układ na telefon (`@media (max-width: 720px)`) |
| `css/reset.css` | Podstawowy reset, ten sam, którym claude.ai otacza opublikowaną stronę |
| `js/data/words.js` | Słówka. Jedna linia = `angielski\|polski\|część mowy\|przykładowe zdanie` |
| `js/data/grammar.js` | Tematy gramatyki: zasady po polsku i ćwiczenia |
| `js/data/sentences.js` | Sytuacje i tłumaczenie zdań |
| `js/data/irregular.js` | Czasowniki nieregularne |
| `js/data/word-formation.js` | Słowotwórstwo |
| `js/data/phrasal.js` | Phrasal verbs i przyimki |
| `js/data/texts.js` | Teksty do czytania i słuchania z pytaniami |
| `js/data/chat.js` | Scenki do rozmowy z Claude |
| `js/i18n-en.js` | Angielskie wersje tekstów interfejsu (klucz = tekst po polsku) |
| `js/app.js` | Cała logika: powtórki, tryby ćwiczeń, widoki, synchronizacja |

Skrypty ładują się po kolei (kolejność jest w `index.html`) i dzielą zmienne globalne, więc dane z `js/data/` są widoczne w `app.js`.

## Po każdej zmianie

```bash
node tools/check.js
```

Uruchamia apkę w symulowanej przeglądarce, wyświetla każdy tryb na każdym poziomie i sprawdza dane (np. czy w ćwiczeniu jest luka `___`, czy słówka mają poprawną część mowy). W VS Code to samo uruchomisz jako `npm run check` z panelu „NPM Scripts”.

## Publikowanie

```bash
node tools/build.js
```

Tworzy `dist/angielski.html`: całą apkę w jednym pliku. Ten plik publikuje się jako artifact na claude.ai (najprościej poprosić Claude: „opublikuj dist/angielski.html pod moim linkiem do apki”). Można go też otworzyć bezpośrednio z dysku albo wrzucić na dowolny hosting.

## Dodawanie słówek

Dopisz linię w odpowiednim poziomie w `js/data/words.js`, np.:

```
wrench|klucz (narzędzie)|n|Pass me the wrench, please.
```

Części mowy: `n` rzeczownik, `v` czasownik, `adj` przymiotnik, `adv` przysłówek, `prep` przyimek, `conj` spójnik, `num` liczebnik, `pron` zaimek, `phr` wyrażenie. Słowa w pliku są ułożone tematycznie, a quiz bierze błędne odpowiedzi z sąsiednich linii, więc nowe słowo wstaw obok podobnych.
