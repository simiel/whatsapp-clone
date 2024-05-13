interface Language {
  englishName: string;
  nativeName: string;
}

const languages: Language[] = [
  { englishName: 'English', nativeName: 'English' },
  { englishName: 'Spanish', nativeName: 'Español' },
  { englishName: 'French', nativeName: 'Français' },
  { englishName: 'German', nativeName: 'Deutsch' },
  { englishName: 'Chinese (Simplified)', nativeName: '中文 (简体)' },
  { englishName: 'Chinese (Traditional)', nativeName: '中文 (繁體)' },
  { englishName: 'Japanese', nativeName: '日本語' },
  { englishName: 'Korean', nativeName: '한국어' },
  { englishName: 'Italian', nativeName: 'Italiano' },
  { englishName: 'Portuguese', nativeName: 'Português' },
  { englishName: 'Russian', nativeName: 'Русский' },
  { englishName: 'Arabic', nativeName: 'العربية' },
  { englishName: 'Hindi', nativeName: 'हिन्दी' },
  { englishName: 'Bengali', nativeName: 'বাংলা' },
  { englishName: 'Urdu', nativeName: 'اردو' },
  { englishName: 'Turkish', nativeName: 'Türkçe' },
  { englishName: 'Dutch', nativeName: 'Nederlands' },
  { englishName: 'Polish', nativeName: 'Polski' },
  { englishName: 'Thai', nativeName: 'ไทย' },
  { englishName: 'Vietnamese', nativeName: 'Tiếng Việt' },
];

export default languages;

// Example usage
languages.forEach((language) => {
  console.log(`${language.englishName} - ${language.nativeName}`);
});
