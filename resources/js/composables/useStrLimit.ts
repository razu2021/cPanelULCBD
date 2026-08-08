export function useText() {
  const truncateWords = (html: string | null | undefined, limit: number = 20): string => {
    if (!html) return '';

    // ১. <p> ebong <br> tag ke newline (\n) diye replace korun
    // Tarpor baki shob tag kete din
    const textWithBreaks = html
      .replace(/<\/p>/g, '\n') // Paragraph sheshe newline
      .replace(/<br\s*\/?>/g, '\n') // BR tag ke newline
      .replace(/<[^>]*>/g, ''); // Baki shob tag remove

    // ২. Word limit logic
    const words = textWithBreaks.trim().split(/\s+/);
    
    if (words.length <= limit) return textWithBreaks.trim();

    return words.slice(0, limit).join(' ') + '...';
  };

  return { truncateWords };
}