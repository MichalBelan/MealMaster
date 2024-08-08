const API_URL = 'https://libretranslate.com/translate'; // URL pre LibreTranslate API

export async function translateText(text, targetLanguage = 'sk', sourceLanguage = 'auto') {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: sourceLanguage,
        target: targetLanguage
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Vráti pôvodný text v prípade chyby
  }
}
