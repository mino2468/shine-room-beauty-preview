/* Edit the bilingual treatment and regular-price information here. */
window.SHINE_CONTENT = {
  checkedOn: '2026-11-13',
  booksy: 'https://booksy.com/en-ie/9393_shine-room-beauty_other_52926_naas',
  sources: [
    { url: 'https://booksy.com/en-ie/9393_shine-room-beauty_other_52926_naas', label: 'Shine Room Beauty: regular prices and durations verified from paired Booksy service variants (HydraFacial 102915, cavitation peeling 102916, Dermapen 102921, Pink Glow 102919, BB Glow 102920, CytoCare 502 102918). Reviews are a 12 November 2026 snapshot.', checkedOn: '2026-11-13' }
  ],
  groups: [
    { id: 'skin-glow', title: { en: 'Skin & facials', pl: 'Twarz i pielęgnacja' }, summary: { en: 'HydraFacial, Dermapen and facial care selected around your skin.', pl: 'HydraFacial, Dermapen i pielęgnacja dobrana do potrzeb skóry.' } },
    { id: 'laser-ipl', title: { en: 'Laser & IPL', pl: 'Laser i IPL' }, summary: { en: 'Hair removal, skin-focused light treatments and tattoo removal.', pl: 'Depilacja, zabiegi światłem na skórę i usuwanie tatuażu.' } },
    { id: 'brows-features', title: { en: 'Brows & permanent makeup', pl: 'Brwi i makijaż permanentny' }, summary: { en: 'Powder Brows shaped around your face and preferences.', pl: 'Brwi pudrowe dopasowane do twarzy i Twoich oczekiwań.' } },
    { id: 'body-definition', title: { en: 'Body contouring', pl: 'Modelowanie sylwetki' }, summary: { en: 'Cavitation, radiofrequency and vacuum massage options.', pl: 'Kawitacja, fale radiowe i masaż próżniowy.' } },
    { id: 'dermal-fillers', title: { en: 'Dermal fillers', pl: 'Wypełniacze' }, summary: { en: 'Lip and facial-area options, following an individual assessment.', pl: 'Zabiegi na usta i wybrane obszary twarzy, po indywidualnej ocenie.' } }
  ],
  services: [
    {
      id: 'hydrafacial', group: 'skin-glow',
      title: { en: 'HydraFacial', pl: 'HydraFacial' },
      short: { en: 'Device-led cleansing, gentle suction and hydrating skin care.', pl: 'Oczyszczanie głowicą, delikatne zasysanie zanieczyszczeń i nawilżanie skóry.' },
      description: {
        en: 'HydraFacial combines cleansing, exfoliation, extraction and hydration in one device-led facial. A handpiece passes over the skin while treatment solutions loosen surface build-up, and controlled suction helps lift impurities from pores. Hydrating ingredients complete the treatment, leaving the focus on a fresher, smoother-looking complexion. Before your appointment, Aneta discusses your skin and chooses the appropriate care. Products and any additional stages are selected individually, so the treatment reflects your skin’s needs and response.',
        pl: 'HydraFacial łączy oczyszczanie, złuszczanie, usuwanie zanieczyszczeń i nawilżanie w jednym zabiegu wykonywanym głowicą. Przesuwana po skórze końcówka rozprowadza preparaty pomagające rozluźnić powierzchniowe zanieczyszczenia, a kontrolowane podciśnienie ułatwia ich usunięcie z porów. Pielęgnacja nawilżająca uzupełnia zabieg, którego celem jest odświeżony, gładszy wygląd skóry. Przed wizytą Aneta omawia jej potrzeby i dobiera odpowiednią pielęgnację. Preparaty oraz dodatkowe etapy wybierane są indywidualnie, z uwzględnieniem aktualnego stanu skóry, Twoich oczekiwań i reakcji na zabieg.'
      },
      steps: { en: ['Discuss skin needs and cleanse the area.', 'Exfoliate and remove impurities using the treatment handpiece.', 'Finish with hydration and individual aftercare advice.'], pl: ['Omówienie potrzeb skóry i oczyszczenie obszaru.', 'Złuszczanie oraz usuwanie zanieczyszczeń głowicą zabiegową.', 'Pielęgnacja nawilżająca i indywidualne zalecenia po wizycie.'] },
      visit: { en: 'Allow 45 minutes. Discuss your current skin care and any concerns before the appointment.', pl: 'Zarezerwuj 45 minut. Przed wizytą omów aktualną pielęgnację i kwestie dotyczące skóry.' },
      expectation: { en: 'Your skin response and the care recommended afterwards are individual.', pl: 'Reakcja skóry i zalecana później pielęgnacja są indywidualne.' },
      duration: 45, price: 100, priceFrom: false
    },
    {
      id: 'facial-treatments', group: 'skin-glow',
      title: { en: 'Facial treatments', pl: 'Zabiegi na twarz' },
      short: { en: 'A choice of facial appointments for different skin-care goals.', pl: 'Różne zabiegi na twarz, dobierane do celów pielęgnacji.' },
      description: {
        en: 'Our facial menu offers different approaches to cleansing, hydration and a more even-looking complexion. Cavitation peeling uses a vibrating ultrasonic spatula on damp skin to loosen surface debris and dead skin cells. This facial exfoliation is different from body cavitation. Pink Glow, BB Glow and CytoCare 502 are also listed as separate appointments. Aneta helps you choose the right option and explains its products, application method and aftercare before booking, as these vary between services.',
        pl: 'Oferta zabiegów na twarz obejmuje różne sposoby oczyszczania, nawilżania i poprawy wyglądu kolorytu. Peeling kawitacyjny wykorzystuje drgającą szpatułkę ultradźwiękową na wilgotnej skórze, aby rozluźnić powierzchniowe zanieczyszczenia i martwe komórki naskórka. To złuszczanie twarzy, inne niż kawitacja na ciało. Pink Glow, BB Glow i CytoCare 502 są osobnymi pozycjami w menu. Aneta pomoże wybrać odpowiednią usługę oraz przed rezerwacją wyjaśni stosowane preparaty, sposób aplikacji, przygotowanie i pielęgnację po wizycie, ponieważ różnią się one między zabiegami.'
      },
      steps: { en: ['Choose a specific facial after discussing your skin.', 'Cleanse and carry out the agreed treatment stages.', 'Review the skin response and the care to follow at home.'], pl: ['Wybór konkretnej usługi po omówieniu potrzeb skóry.', 'Oczyszczenie i wykonanie uzgodnionych etapów zabiegu.', 'Ocena reakcji skóry i omówienie pielęgnacji domowej.'] },
      options: [
        { title: { en: 'Cavitation peeling', pl: 'Peeling kawitacyjny' }, description: { en: 'An ultrasonic spatula moves over damp skin to help remove surface debris and loosen dead skin cells. This is facial exfoliation, not fat reduction or body cavitation.', pl: 'Szpatułka ultradźwiękowa przesuwana po wilgotnej skórze pomaga usunąć powierzchniowe zanieczyszczenia i martwe komórki naskórka. To złuszczanie twarzy, a nie redukcja tkanki tłuszczowej ani kawitacja na ciało.' } },
        { title: { en: 'Pink Glow', pl: 'Pink Glow' }, description: { en: 'A separate complexion-care appointment. Ask Aneta about the proposed formula, application method and whether it suits your skin before booking.', pl: 'Osobny zabieg pielęgnacyjny. Przed rezerwacją zapytaj Anetę o proponowany preparat, sposób aplikacji i dobór do Twojej skóry.' } },
        { title: { en: 'BB Glow', pl: 'BB Glow' }, description: { en: 'A complexion-evening treatment category associated with tinted serums. Confirm the product, application method and expected duration with Aneta before booking.', pl: 'Kategoria zabiegów wyrównujących wygląd kolorytu, związana z serum koloryzującym. Przed rezerwacją potwierdź z Anetą preparat, sposób aplikacji i przewidywaną trwałość.' } },
        { title: { en: 'CytoCare 502', pl: 'CytoCare 502' }, description: { en: 'A formulation containing hyaluronic acid and a rejuvenating complex, intended to support skin hydration and quality. Discuss its application method, suitability and risks with Aneta first.', pl: 'Preparat zawierający kwas hialuronowy i kompleks rewitalizujący, przeznaczony do wspierania nawilżenia i jakości skóry. Najpierw omów z Anetą sposób aplikacji, odpowiedniość i ryzyko.' } }
      ],
      visit: { en: 'Choose the specific service in Booksy, or ask Aneta which appointment best matches your enquiry.', pl: 'Wybierz konkretną usługę w Booksy lub zapytaj Anetę, jaki rodzaj wizyty odpowiada Twojemu zapytaniu.' },
      expectation: { en: 'The procedure, preparation and aftercare depend on the facial you choose.', pl: 'Przebieg, przygotowanie i pielęgnacja po wizycie zależą od wybranego zabiegu.' },
      duration: null, price: 100, priceFrom: true
    },
    {
      id: 'microneedling', group: 'skin-glow',
      title: { en: 'Dermapen / microneedling', pl: 'Dermapen / mikronakłuwanie' },
      short: { en: 'Fine-needle skin stimulation to address texture and the appearance of scars.', pl: 'Stymulacja skóry drobnymi nakłuciami z myślą o teksturze i wyglądzie blizn.' },
      description: {
        en: 'Microneedling uses a pen-shaped device with fine needles to make controlled, tiny punctures in the skin. This stimulates the skin’s repair response and can improve the appearance of texture, fine lines and some scars over time. Aneta assesses the area and selects the treatment intensity around your skin. Temporary redness and sensitivity can occur afterwards, so preparation and aftercare are an important part of the appointment. Results develop gradually and vary from person to person.',
        pl: 'Mikronakłuwanie wykorzystuje urządzenie w kształcie pena z drobnymi igłami, które wykonują kontrolowane mikronakłucia skóry. Pobudza to jej odpowiedź naprawczą i może z czasem poprawiać wygląd tekstury, drobnych linii oraz niektórych blizn. Aneta ocenia wybrany obszar i dobiera intensywność do aktualnego stanu skóry. Po zabiegu mogą wystąpić przejściowe zaczerwienienie i wrażliwość, dlatego przygotowanie oraz pielęgnacja po wizycie są ważną częścią całego procesu. Zmiany pojawiają się stopniowo, a tempo i zakres efektów są indywidualne.'
      },
      steps: { en: ['Assess and prepare the skin for the agreed treatment.', 'Move the fine-needle device across the selected area.', 'Explain expected sensitivity, recovery and aftercare.'], pl: ['Ocena i przygotowanie skóry do uzgodnionego zabiegu.', 'Praca urządzeniem z drobnymi igłami na wybranym obszarze.', 'Omówienie wrażliwości skóry, regeneracji i pielęgnacji po zabiegu.'] },
      visit: { en: 'Allow 60 minutes. Confirm suitability, preparation and aftercare with Aneta before treatment.', pl: 'Zarezerwuj 60 minut. Przed zabiegiem potwierdź z Anetą odpowiedniość, przygotowanie i pielęgnację po wizycie.' },
      expectation: { en: 'The skin response and any further treatment plan are assessed individually.', pl: 'Reakcję skóry i ewentualny dalszy plan zabiegów ocenia się indywidualnie.' },
      duration: 60, price: 150, priceFrom: false
    },
    {
      id: 'laser-hair-removal', group: 'laser-ipl',
      title: { en: 'Laser hair removal', pl: 'Depilacja laserowa' },
      short: { en: 'Hair-reduction appointments for selected face and body areas.', pl: 'Zabiegi redukcji owłosienia wybranych obszarów twarzy i ciała.' },
      description: {
        en: 'Laser hair removal directs light towards pigment in the hair. The absorbed energy becomes heat and acts on the follicle to reduce future growth. A handpiece treats the chosen area in sections, with protective eyewear and settings selected for your skin and hair. Hairs pass through different growth stages, so a course of appointments is usually discussed. Aneta confirms preparation, the area and the regular price beforehand. Hair colour, skin tone and the treatment area influence the result.',
        pl: 'Depilacja laserowa kieruje światło na barwnik zawarty we włosie. Pochłonięta energia zamienia się w ciepło i oddziałuje na mieszek, aby ograniczyć późniejszy wzrost. Głowica opracowuje wybrany obszar fragmentami, z ochroną oczu i ustawieniami dobranymi do skóry oraz owłosienia. Włosy przechodzą różne fazy wzrostu, dlatego zwykle omawia się serię wizyt. Aneta wcześniej potwierdza przygotowanie, zakres i cenę regularną. Kolor włosów, fototyp skóry oraz wybrany obszar wpływają na efekt i potrzebną liczbę zabiegów.'
      },
      steps: { en: ['Assess the area, skin, hair and relevant treatment history.', 'Use protective eyewear and treat the agreed area with light pulses.', 'Discuss skin care and the timing of any further appointments.'], pl: ['Ocena obszaru, skóry, owłosienia i istotnej historii zabiegów.', 'Ochrona oczu i opracowanie uzgodnionego obszaru impulsami światła.', 'Omówienie pielęgnacji oraz terminów ewentualnych dalszych wizyt.'] },
      visit: { en: 'Ask about the area, preparation and any suitability checks before selecting an appointment.', pl: 'Przed wyborem wizyty zapytaj o obszar, przygotowanie i ocenę odpowiedniości zabiegu.' },
      expectation: { en: 'The response and number of appointments vary. No fixed result is promised.', pl: 'Reakcja i liczba wizyt są różne. Nie obiecujemy jednego, z góry określonego efektu.' },
      duration: null, price: null, priceFrom: false
    },
    {
      id: 'ipl-rejuvenation', group: 'laser-ipl',
      title: { en: 'IPL skin rejuvenation', pl: 'Fotoodmładzanie IPL' },
      short: { en: 'Light-based skin treatment following a suitability discussion.', pl: 'Zabieg światłem wykonywany po ocenie odpowiedniości terapii.' },
      description: {
        en: 'IPL delivers filtered pulses of intense light across a range of wavelengths, rather than a laser’s particular wavelength. Pigment or small blood vessels absorb selected light and convert it to heat, helping address the appearance of uneven colour or visible redness. The handpiece is placed against the agreed skin area while your eyes are protected. Aneta assesses skin tone, tanning and the concern you want to address before selecting a treatment. IPL and laser services are different options, chosen individually.',
        pl: 'IPL emituje filtrowane impulsy intensywnego światła obejmujące zakres długości fal, w odróżnieniu od określonej długości fali lasera. Barwnik lub drobne naczynia pochłaniają wybrane światło i zamieniają je w ciepło, co może poprawiać wygląd nierównego kolorytu lub widocznego zaczerwienienia. Głowicę przykłada się do uzgodnionego obszaru skóry z zastosowaniem ochrony oczu. Przed wyborem zabiegu Aneta ocenia fototyp, opaleniznę i potrzebę skóry, którą chcesz się zająć. IPL oraz zabiegi laserowe są różnymi opcjami, dobieranymi indywidualnie.'
      },
      steps: { en: ['Discuss the skin concern, tanning and light sensitivity.', 'Protect the eyes and apply selected light pulses to the agreed area.', 'Review aftercare and the skin response before planning further visits.'], pl: ['Omówienie potrzeby skóry, opalenizny i wrażliwości na światło.', 'Ochrona oczu i aplikacja dobranych impulsów na uzgodniony obszar.', 'Omówienie pielęgnacji i ocena reakcji przed kolejnymi wizytami.'] },
      visit: { en: 'Contact Aneta to confirm the appropriate light-based service, preparation and current regular price.', pl: 'Skontaktuj się z Anetą, aby potwierdzić odpowiedni zabieg światłem, przygotowanie i cenę regularną.' },
      expectation: { en: 'Suitability and the response depend on the individual skin concern and treatment selected.', pl: 'Możliwość wykonania i reakcja zależą od indywidualnej potrzeby skóry oraz wybranego zabiegu.' },
      duration: null, price: null, priceFrom: false
    },
    {
      id: 'tattoo-removal', group: 'laser-ipl',
      title: { en: 'Tattoo removal', pl: 'Usuwanie tatuażu' },
      short: { en: 'An individual assessment of the tattoo and treatment area.', pl: 'Indywidualna ocena tatuażu i obszaru poddawanego zabiegowi.' },
      description: {
        en: 'Laser tattoo removal uses short light pulses to break tattoo pigment into smaller fragments, which the body can gradually clear. Aneta assesses the tattoo’s colours, size, location and previous treatments before discussing a plan. The agreed area is treated with protective eyewear, followed by time for the skin to heal between appointments. Fading happens gradually and several visits may be needed. Different inks and skin tones respond differently, and complete removal without skin changes cannot be guaranteed.',
        pl: 'Laserowe usuwanie tatuażu wykorzystuje krótkie impulsy światła do rozbijania pigmentu na mniejsze fragmenty, które organizm może stopniowo usuwać. Przed omówieniem planu Aneta ocenia kolory, wielkość i położenie tatuażu oraz wcześniejsze zabiegi. Uzgodniony obszar opracowuje się z ochroną oczu, a pomiędzy wizytami skóra potrzebuje czasu na gojenie. Rozjaśnianie następuje stopniowo i może wymagać kilku wizyt. Tusze oraz fototypy reagują różnie, dlatego nie można zagwarantować całkowitego usunięcia bez zmian skóry.'
      },
      steps: { en: ['Assess the tattoo’s colours, size, location and treatment history.', 'Protect the eyes and treat the agreed tattoo area.', 'Explain wound care, healing and review before another session.'], pl: ['Ocena kolorów, wielkości, położenia i historii zabiegów tatuażu.', 'Ochrona oczu i opracowanie uzgodnionego obszaru tatuażu.', 'Omówienie pielęgnacji, gojenia i oceny przed kolejną sesją.'] },
      visit: { en: 'Send a clear description of the tattoo or ask Aneta how to arrange an assessment.', pl: 'Prześlij czytelny opis tatuażu lub zapytaj Anetę, jak umówić jego ocenę.' },
      expectation: { en: 'The response is individual; complete removal or a particular number of sessions is not guaranteed.', pl: 'Reakcja jest indywidualna; nie gwarantujemy całkowitego usunięcia ani określonej liczby sesji.' },
      duration: null, price: null, priceFrom: false
    },
    {
      id: 'powder-brows', group: 'brows-features',
      title: { en: 'Powder Brows', pl: 'Brwi pudrowe' },
      short: { en: 'Permanent makeup with shape and colour chosen around you.', pl: 'Makijaż permanentny z kształtem i kolorem dobieranym indywidualnie.' },
      description: {
        en: 'Powder Brows uses a permanent-makeup machine to place tiny dots of pigment into the skin, creating soft, powder-like shading rather than individual hair strokes. Aneta discusses and maps the shape and colour around your face, existing brows and preferences before treatment. Brows may look stronger immediately afterwards, then soften as the skin heals. The healed appearance and pigment retention vary individually. Touch-ups and later colour refreshes are booked separately, with their timing discussed around your result.',
        pl: 'Brwi pudrowe wykorzystują urządzenie do makijażu permanentnego, które wprowadza w skórę drobne punkty pigmentu, tworząc miękkie, pudrowe cieniowanie zamiast pojedynczych włosków. Przed zabiegiem Aneta omawia i wyrysowuje kształt oraz dobiera kolor do twarzy, obecnych brwi i preferencji. Bezpośrednio po pigmentacji brwi mogą wyglądać mocniej, a następnie łagodnieć podczas gojenia. Wygojony wygląd i utrzymywanie się pigmentu są indywidualne. Korekty oraz późniejsze odświeżanie koloru rezerwuje się osobno, a termin ustala z uwzględnieniem efektu.'
      },
      steps: { en: ['Discuss, map and agree the proposed brow shape and colour.', 'Build soft shading with fine dots of pigment.', 'Explain healing, aftercare and any separately booked touch-up.'], pl: ['Omówienie, wyrysowanie i uzgodnienie kształtu oraz koloru brwi.', 'Budowanie miękkiego cieniowania drobnymi punktami pigmentu.', 'Omówienie gojenia, pielęgnacji i ewentualnej osobno rezerwowanej korekty.'] },
      visit: { en: 'Allow 2 hours 30 minutes. Touch-ups are separate services; confirm the right booking interval with Aneta.', pl: 'Zarezerwuj 2 godziny 30 minut. Korekty są osobnymi usługami; odpowiedni termin potwierdź z Anetą.' },
      expectation: { en: 'The final appearance is individual. Discuss healing, aftercare and follow-up before treatment.', pl: 'Końcowy wygląd jest indywidualny. Przed zabiegiem omów gojenie, pielęgnację i dalsze wizyty.' },
      duration: 150, price: 299, priceFrom: false
    },
    {
      id: 'cavitation-liposuction', group: 'body-definition',
      title: { en: 'Cavitation liposuction', pl: 'Lipoliza kawitacyjna' },
      short: { en: 'A non-surgical body-treatment option for selected areas.', pl: 'Niechirurgiczny zabieg na wybrane obszary ciała.' },
      description: {
        en: 'Body cavitation uses ultrasound to work on localised body contours without surgery. A handpiece moves over the chosen area with contact gel, delivering sound-wave energy through the skin towards underlying tissue. Unlike surgical liposuction, it involves no incision and does not suction fat out of the body. Aneta assesses the area and discusses whether the treatment suits your goals. It is not a weight-loss treatment, and individual responses vary rather than following a fixed centimetre reduction.',
        pl: 'Kawitacja na ciało wykorzystuje ultradźwięki do pracy nad miejscowym konturem sylwetki bez operacji. Głowicę przesuwa się po wybranym obszarze z żelem kontaktowym, przekazując energię fal dźwiękowych przez skórę do tkanek pod nią. W przeciwieństwie do liposukcji chirurgicznej nie wymaga nacięcia ani odsysania tłuszczu z ciała. Aneta ocenia obszar i omawia, czy zabieg odpowiada Twoim celom. Nie jest to metoda odchudzania; reakcja jest indywidualna, bez z góry określonej redukcji centymetrów.'
      },
      steps: { en: ['Assess the chosen area and confirm that the treatment is suitable.', 'Apply contact gel and move the ultrasound handpiece over the area.', 'Review the response and discuss any proposed follow-up.'], pl: ['Ocena wybranego obszaru i potwierdzenie odpowiedniości zabiegu.', 'Nałożenie żelu kontaktowego i praca głowicą ultradźwiękową.', 'Ocena reakcji oraz omówienie ewentualnych kolejnych wizyt.'] },
      visit: { en: 'Ask Aneta to confirm the area, suitability, preparation and regular price.', pl: 'Poproś Anetę o potwierdzenie obszaru, odpowiedniości, przygotowania i ceny regularnej.' },
      expectation: { en: 'Any treatment plan and response are individual; a specific change in measurements is not promised.', pl: 'Plan i reakcja są indywidualne; nie obiecujemy określonej zmiany wymiarów.' },
      duration: null, price: null, priceFrom: false
    },
    {
      id: 'body-contouring', group: 'body-definition',
      title: { en: 'Body contouring', pl: 'Modelowanie sylwetki' },
      short: { en: 'Multipolar RF and vacuum massage with radio waves.', pl: 'Wielobiegunowe RF i masaż próżniowy z falami radiowymi.' },
      description: {
        en: 'Choose between two separately bookable body treatments: Multipolar RF or vacuum massage with radio waves. Surface RF sends radiofrequency energy through a handpiece to warm tissue and address the appearance of firmness and skin texture. Vacuum massage adds suction, gently lifting tissue into the applicator as it moves over the area. Aneta helps select the suitable option and treatment area. These non-surgical treatments are not weight-loss methods; responses vary and some effects may be temporary.',
        pl: 'Do wyboru są dwie osobno rezerwowane usługi: wielobiegunowe RF albo masaż próżniowy z falami radiowymi. Powierzchniowe RF przekazuje przez głowicę energię częstotliwości radiowej, aby ogrzewać tkanki i pracować nad wyglądem jędrności oraz tekstury skóry. Masaż próżniowy dodaje podciśnienie, delikatnie unosząc tkankę do aplikatora przesuwanego po obszarze. Aneta pomaga dobrać odpowiednią opcję i miejsce zabiegu. Te niechirurgiczne zabiegi nie służą odchudzaniu; reakcje są indywidualne, a część efektów może mieć przejściowy charakter.'
      },
      steps: { en: ['Choose RF or vacuum massage with RF after an assessment.', 'Treat the selected area with the agreed handpiece technique.', 'Review comfort, skin response and any further plan.'], pl: ['Wybór RF albo masażu próżniowego z RF po ocenie obszaru.', 'Opracowanie wybranego miejsca uzgodnioną techniką głowicy.', 'Ocena komfortu, reakcji skóry i ewentualnego dalszego planu.'] },
      options: [
        { title: { en: 'Multipolar RF', pl: 'Wielobiegunowe RF' }, description: { en: 'A surface applicator uses radiofrequency energy to create controlled tissue warming. This body treatment does not involve microneedling.', pl: 'Aplikator powierzchniowy wykorzystuje energię częstotliwości radiowej do kontrolowanego ogrzewania tkanek. Ten zabieg na ciało nie obejmuje mikronakłuwania.' } },
        { title: { en: 'Vacuum massage with radio waves', pl: 'Masaż próżniowy z falami radiowymi' }, description: { en: 'Suction lifts a fold of tissue into a moving applicator, combining a mechanical massage action with RF warming. Intensity and the treated area are agreed individually.', pl: 'Podciśnienie unosi fałd tkanki do przesuwanego aplikatora, łącząc mechaniczny masaż z ogrzewaniem RF. Intensywność i opracowywany obszar dobierane są indywidualnie.' } }
      ],
      visit: { en: 'Choose Multipolar RF or vacuum massage with radio waves in Booksy. Each is listed as a 45-minute appointment.', pl: 'Wybierz w Booksy wielobiegunowe RF lub masaż próżniowy z falami radiowymi. Każda usługa jest zapisana jako wizyta 45-minutowa.' },
      expectation: { en: 'Discuss your desired outcome and suitability; individual responses vary.', pl: 'Omów oczekiwany kierunek zmian i odpowiedniość zabiegu; reakcje są indywidualne.' },
      duration: 45, price: 100, priceFrom: true
    },
    {
      id: 'dermal-fillers', group: 'dermal-fillers',
      title: { en: 'Dermal fillers', pl: 'Wypełniacze' },
      short: { en: 'Lip and facial-area options selected after consultation.', pl: 'Zabiegi na usta i wybrane obszary twarzy dobierane po konsultacji.' },
      description: {
        en: 'Dermal fillers use injections to place a gel-like material into selected tissue, adding volume or refining contour in the lips or facial areas. The menu includes lips, chin, cheeks, jaw and full-face options, each priced separately. Before treatment, Aneta discusses your goals, the proposed product, amount and technique, together with aftercare. Swelling and bruising can occur, and uncommon complications can be serious. A suitability assessment and informed consent come before any treatment decision.',
        pl: 'Wypełniacze wykorzystują iniekcje do umieszczenia preparatu o żelowej konsystencji w wybranych tkankach, aby dodać objętość lub podkreślić kontur ust albo twarzy. Menu obejmuje osobno wyceniane usta, brodę, policzki, żuchwę i całą twarz. Przed zabiegiem Aneta omawia Twoje cele, proponowany preparat, ilość, technikę i późniejszą pielęgnację. Możliwe są obrzęk i siniaki, a rzadsze powikłania bywają poważne. Ocena odpowiedniości i świadoma zgoda poprzedzają każdą decyzję o wykonaniu zabiegu.'
      },
      steps: { en: ['Discuss goals, the proposed product, suitability and risks.', 'Prepare the area and perform the individually agreed injections.', 'Review the area and provide aftercare and follow-up guidance.'], pl: ['Omówienie celu, proponowanego preparatu, odpowiedniości i ryzyka.', 'Przygotowanie obszaru oraz indywidualnie uzgodnione iniekcje.', 'Ocena obszaru i przekazanie zaleceń oraz informacji o dalszej opiece.'] },
      visit: { en: 'Discuss suitability and the intended result before choosing the area or amount. The service determines the appointment length.', pl: 'Przed wyborem obszaru lub ilości omów odpowiedniość i oczekiwany efekt. Czas wizyty zależy od usługi.' },
      expectation: { en: 'Results, risks and aftercare must be discussed individually before treatment.', pl: 'Efekty, ryzyko i pielęgnację po zabiegu należy omówić indywidualnie przed jego wykonaniem.' },
      duration: null, price: 150, priceFrom: true
    }
  ],
  priceGroups: [
    {
      id: 'skin-glow', title: { en: 'Skin & facials', pl: 'Twarz i pielęgnacja' },
      rows: [
        { name: { en: 'HydraFacial', pl: 'HydraFacial' }, price: 100, from: false, duration: 45 },
        { name: { en: 'Cavitation peeling', pl: 'Peeling kawitacyjny' }, price: 100, from: false, duration: 45 },
        { name: { en: 'Dermapen', pl: 'Dermapen' }, price: 150, from: false, duration: 60 },
        { name: { en: 'Pink Glow', pl: 'Pink Glow' }, price: 100, from: false, duration: 60 },
        { name: { en: 'BB Glow', pl: 'BB Glow' }, price: 100, from: false, duration: 60 },
        { name: { en: 'CytoCare 502', pl: 'CytoCare 502' }, price: 150, from: false, duration: 60 }
      ]
    },
    {
      id: 'laser-ipl', title: { en: 'Laser face treatments', pl: 'Zabiegi laserowe na twarz i skórę' },
      rows: [
        { name: { en: 'Laser Face · acne scars', pl: 'Laser Face · blizny potrądzikowe' }, price: 200, from: false, duration: 45 },
        { name: { en: 'Laser Face · pigmentation', pl: 'Laser Face · przebarwienia' }, price: 200, from: false, duration: 45 },
        { name: { en: 'Laser Face · skin renewal', pl: 'Laser Face · odnowa skóry' }, price: 200, from: false, duration: 45 },
        { name: { en: 'Laser Face · stretch marks', pl: 'Laser Face · rozstępy' }, price: 200, from: false, duration: 45 }
      ]
    },
    {
      id: 'brows-features', title: { en: 'Powder Brows', pl: 'Brwi pudrowe' },
      rows: [
        { name: { en: 'Powder Brows', pl: 'Brwi pudrowe' }, price: 299, from: false, duration: 150 },
        { name: { en: 'Touch-up · 5–7 weeks', pl: 'Korekta · 5–7 tygodni' }, price: 50, from: false, duration: 60 },
        { name: { en: 'Touch-up · 6–12 months', pl: 'Odświeżenie · 6–12 miesięcy' }, price: 100, from: false, duration: 60 },
        { name: { en: 'Touch-up · 1 year+', pl: 'Odświeżenie · powyżej roku' }, price: 150, from: true, duration: 70 }
      ]
    },
    {
      id: 'body-definition', title: { en: 'Body treatments', pl: 'Zabiegi na ciało' },
      rows: [
        { name: { en: 'Multipolar RF', pl: 'Wielobiegunowe RF' }, price: 100, from: false, duration: 45 },
        { name: { en: 'Vacuum massage with radio waves', pl: 'Masaż próżniowy z falami radiowymi' }, price: 100, from: false, duration: 45 }
      ]
    },
    {
      id: 'dermal-fillers', title: { en: 'Dermal fillers', pl: 'Wypełniacze' },
      rows: [
        { name: { en: 'Lip filler · 0.5 ml', pl: 'Modelowanie ust · 0,5 ml' }, price: 150, from: false, duration: 50 },
        { name: { en: 'Lip filler · 1.1 ml', pl: 'Modelowanie ust · 1,1 ml' }, price: 250, from: false, duration: 50 },
        { name: { en: 'Chin', pl: 'Broda' }, price: 200, from: false, duration: 50 },
        { name: { en: 'Cheeks', pl: 'Policzki' }, price: 350, from: false, duration: 50 },
        { name: { en: 'Jaw', pl: 'Linia żuchwy' }, price: 400, from: false, duration: 50 },
        { name: { en: 'Full face', pl: 'Cała twarz' }, price: 800, from: false, duration: 60 }
      ]
    }
  ],
  reviews: [
    { quote: 'Brilliant service .. so happy with my powder brows 100% recommend..', author: 'Irene D…', date: '2024-09-12', rating: 5 }
  ],
  rating: { value: 5.0, count: 5 }
};
