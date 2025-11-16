/**
 * Google Apps Script: Create ArtBlendArt Coaching Forms
 *
 * This script creates 3 Swedish coaching forms automatically:
 * 1. Form 1: Inför vårt första samtal (Pre-consultation)
 * 2. Form 2: Efter varje samtal (After each session)
 * 3. Form 3: Slututvärdering (Final evaluation)
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete any default code
 * 4. Paste this entire file
 * 5. Click "Run" button (select "createCoachingForms" function)
 * 6. Authorize the script (first time only)
 * 7. Check "Execution log" for the 3 form URLs
 * 8. Copy the URLs and use them in Shopify
 *
 * TO UPDATE FORMS:
 * - Edit this script
 * - Click "Run" again
 * - Forms will be recreated with new settings
 */

function createCoachingForms() {
  Logger.log('=== Creating ArtBlendArt Coaching Forms ===\n');

  // Create all 3 forms
  const form1 = createForm1();
  const form2 = createForm2();
  const form3 = createForm3();

  // Display results
  Logger.log('\n=== ✅ ALL FORMS CREATED SUCCESSFULLY ===\n');
  Logger.log('📋 FORM 1 - Inför vårt första samtal');
  Logger.log('Edit URL: ' + form1.getEditUrl());
  Logger.log('Public URL: ' + form1.getPublishedUrl());
  Logger.log('Shortened URL: ' + form1.shortenFormUrl(form1.getPublishedUrl()));
  Logger.log('\n📋 FORM 2 - Efter varje samtal');
  Logger.log('Edit URL: ' + form2.getEditUrl());
  Logger.log('Public URL: ' + form2.getPublishedUrl());
  Logger.log('Shortened URL: ' + form2.shortenFormUrl(form2.getPublishedUrl()));
  Logger.log('\n📋 FORM 3 - Slututvärdering');
  Logger.log('Edit URL: ' + form3.getEditUrl());
  Logger.log('Public URL: ' + form3.getPublishedUrl());
  Logger.log('Shortened URL: ' + form3.shortenFormUrl(form3.getPublishedUrl()));
  Logger.log('\n=== NEXT STEPS ===');
  Logger.log('1. Copy the "Public URL" or "Shortened URL" for each form');
  Logger.log('2. Use these URLs to embed in Shopify');
  Logger.log('3. Test each form by filling it out');
  Logger.log('4. Check responses in Google Forms or linked Google Sheets');
}

/**
 * FORM 1: Inför vårt första samtal (Pre-consultation, 15 min)
 */
function createForm1() {
  Logger.log('Creating Form 1: Inför vårt första samtal...');

  // Create form
  const form = FormApp.create('✨ Inför vårt första samtal – Kreativt skapande & Coaching');

  // Set description
  form.setDescription(
    'Välkommen! Det här korta formuläret hjälper mig att förstå lite mer om ' +
    'dig och vad du hoppas få ut av coachningen.\n' +
    'Det är inget du behöver förbereda dig inför – svara bara så gott du kan.\n' +
    'Dina svar används endast som underlag för vårt första samtal.'
  );

  // Configure settings
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Tack! Dina svar är mottagna och används endast som underlag för vårt samtal.');

  // Question 1: Multiple choice with "Other"
  const q1 = form.addMultipleChoiceItem();
  q1.setTitle('Vad fick dig att vilja boka en avstämning?');
  q1.setChoices([
    q1.createChoice('Nyfikenhet på kreativ coaching'),
    q1.createChoice('Jag söker inspiration och vill komma igång med skapande'),
    q1.createChoice('Jag har fastnat i mitt skapande och vill hitta riktning'),
    q1.createChoice('Jag vill utveckla mig konstnärligt'),
    q1.createChoice('Annat', true) // true = shows "Other" text field
  ]);
  q1.setRequired(true);

  // Question 2: Paragraph (long text)
  const q2 = form.addParagraphTextItem();
  q2.setTitle('Hur ser din relation till kreativitet eller skapande ut idag?');
  q2.setRequired(true);

  // Question 3: Paragraph (long text)
  const q3 = form.addParagraphTextItem();
  q3.setTitle('Vad hoppas du att coachningen skulle kunna ge dig?');
  q3.setRequired(true);

  // Question 4: Multiple choice
  const q4 = form.addMultipleChoiceItem();
  q4.setTitle('Hur skulle du beskriva din nuvarande livssituation när det gäller tid, energi och utrymme för skapande?');
  q4.setChoices([
    q4.createChoice('Jag har mycket tid och energi för skapande'),
    q4.createChoice('Ganska mycket'),
    q4.createChoice('Lite'),
    q4.createChoice('Nästan inget just nu')
  ]);
  q4.setRequired(true);

  // Question 5: Paragraph (optional)
  const q5 = form.addParagraphTextItem();
  q5.setTitle('Finns det något särskilt du vill att jag ska veta inför vårt första samtal?');
  q5.setRequired(false);

  Logger.log('✓ Form 1 created');
  return form;
}

/**
 * FORM 2: Efter varje samtal (After each session)
 */
function createForm2() {
  Logger.log('Creating Form 2: Efter varje samtal...');

  // Create form
  const form = FormApp.create('✨ Reflektion efter samtal – Kreativt skapande & Coaching');

  // Set description
  form.setDescription(
    'Tack för dagens samtal! Det här formuläret hjälper både dig och mig att ' +
    'reflektera över processen.\n' +
    'Dina svar gör att jag kan anpassa kommande samtal efter dina behov.'
  );

  // Configure settings
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Tack för din reflektion! Dina svar hjälper mig att anpassa coachningen.');

  // Question 1: Linear scale (1-5)
  const q1 = form.addScaleItem();
  q1.setTitle('Hur upplevde du samtalet idag?');
  q1.setBounds(1, 5);
  q1.setLabels('Inte alls givande', 'Mycket givande');
  q1.setRequired(true);

  // Question 2: Paragraph
  const q2 = form.addParagraphTextItem();
  q2.setTitle('Vad tog du främst med dig från samtalet?');
  q2.setRequired(true);

  // Question 3: Paragraph
  const q3 = form.addParagraphTextItem();
  q3.setTitle('Var det något som kändes särskilt inspirerande, viktigt eller utmanande?');
  q3.setRequired(true);

  // Question 4: Multiple choice
  const q4 = form.addMultipleChoiceItem();
  q4.setTitle('Kändes upplägget och samtalets fokus relevant för dig?');
  q4.setChoices([
    q4.createChoice('Ja, helt'),
    q4.createChoice('Delvis'),
    q4.createChoice('Inte riktigt (skriv gärna varför i nästa fråga)')
  ]);
  q4.setRequired(true);

  // Question 5: Short text (optional follow-up)
  const q5 = form.addTextItem();
  q5.setTitle('Om du svarade "delvis" eller "inte riktigt" – vill du utveckla hur?');
  q5.setRequired(false);
  q5.setHelpText('Frivillig');

  // Question 6: Multiple choice with "Other"
  const q6 = form.addMultipleChoiceItem();
  q6.setTitle('Hur känns det inför tiden fram till nästa samtal?');
  q6.setChoices([
    q6.createChoice('Peppad'),
    q6.createChoice('Lugn'),
    q6.createChoice('Osäker'),
    q6.createChoice('Överväldigad'),
    q6.createChoice('Annat', true)
  ]);
  q6.setRequired(true);

  // Question 7: Paragraph
  const q7 = form.addParagraphTextItem();
  q7.setTitle('Är det något du önskar mer eller mindre av framöver?');
  q7.setRequired(true);

  Logger.log('✓ Form 2 created');
  return form;
}

/**
 * FORM 3: Slututvärdering (Final evaluation after 3 sessions)
 */
function createForm3() {
  Logger.log('Creating Form 3: Slututvärdering...');

  // Create form
  const form = FormApp.create('✨ Slututvärdering – Kreativt skapande & Coaching');

  // Set description
  form.setDescription(
    'Tack för att du deltagit i testperioden!\n' +
    'Dina svar är ovärderliga för att jag ska kunna utveckla coachningen vidare.\n' +
    'Här får du reflektera över din upplevelse som helhet och vad du tar med dig framåt.\n' +
    'Allt du skriver hanteras konfidentiellt.'
  );

  // Configure settings
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Tack för din tid och dina tankar! Din feedback är mycket värdefull.');

  // Question 1: Paragraph
  const q1 = form.addParagraphTextItem();
  q1.setTitle('Hur skulle du beskriva din upplevelse av coachingprocessen som helhet?');
  q1.setRequired(true);

  // Question 2: Paragraph
  const q2 = form.addParagraphTextItem();
  q2.setTitle('Vad har förändrats för dig sedan vi började?');
  q2.setRequired(true);

  // Question 3: Paragraph
  const q3 = form.addParagraphTextItem();
  q3.setTitle('Vad har varit mest värdefullt för dig under de tre samtalen?');
  q3.setRequired(true);

  // Question 4: Paragraph
  const q4 = form.addParagraphTextItem();
  q4.setTitle('Har du upplevt några utmaningar eller något som kunde förbättras?');
  q4.setRequired(true);

  // Question 5: Multiple choice
  const q5 = form.addMultipleChoiceItem();
  q5.setTitle('Hur väl tycker du att coachningen motsvarade dina förväntningar?');
  q5.setChoices([
    q5.createChoice('Överträffade'),
    q5.createChoice('Motsvarade'),
    q5.createChoice('Delvis'),
    q5.createChoice('Inte alls')
  ]);
  q5.setRequired(true);

  // Question 6: Short text (optional follow-up)
  const q6 = form.addTextItem();
  q6.setTitle('Om du vill – utveckla ditt svar ovan:');
  q6.setRequired(false);

  // Question 7: Paragraph
  const q7 = form.addParagraphTextItem();
  q7.setTitle('Hur skulle du beskriva coachens (Thereses) sätt att leda samtalen?');
  q7.setRequired(true);

  // Question 8: Multiple choice with "Other"
  const q8 = form.addMultipleChoiceItem();
  q8.setTitle('Skulle du rekommendera den här typen av coaching till någon annan?');
  q8.setChoices([
    q8.createChoice('Ja'),
    q8.createChoice('Kanske'),
    q8.createChoice('Nej'),
    q8.createChoice('Annat', true)
  ]);
  q8.setRequired(true);

  // Question 9: Short text
  const q9 = form.addTextItem();
  q9.setTitle('Om du vill: beskriv med tre ord vad du tar med dig från processen.');
  q9.setRequired(false);

  // Question 10: Paragraph
  const q10 = form.addParagraphTextItem();
  q10.setTitle('Övriga kommentarer, tankar eller förslag?');
  q10.setRequired(false);

  // Question 11: Multiple choice (permission to use quotes)
  const q11 = form.addMultipleChoiceItem();
  q11.setTitle('Tillåtelse att använda citat anonymt');
  q11.setChoices([
    q11.createChoice('Ja, det går bra'),
    q11.createChoice('Ja, men gärna att du meddelar mig om du vill använda något specifikt citat'),
    q11.createChoice('Nej, jag vill inte att något används')
  ]);
  q11.setRequired(true);
  q11.setHelpText('Dina svar kan hjälpa mig presentera coachningen för andra. Alla citat används anonymt.');

  Logger.log('✓ Form 3 created');
  return form;
}
