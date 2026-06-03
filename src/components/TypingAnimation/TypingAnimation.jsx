import { useState, useEffect } from 'react';

export default function TypingAnimation() {
  const titles = [
    { text: 'AI Backend Engineer', article: 'an' },
    { text: 'Python Developer', article: 'a' },
    { text: 'LLM Systems Engineer', article: 'an' },
    { text: 'AI Engineer', article: 'an' },
    { text: 'Problem Solver', article: 'a' },
    { text: 'Backend Architect', article: 'a' }
  ];

  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex].text;
    let timer;

    if (isPausing) {
      timer = setTimeout(() => {
        setIsPausing(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    } else {
      if (charIndex < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        setIsPausing(true);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, isPausing, titles]);

  return (
    <span className="info-text">
      I'm {titles[titleIndex].article} {displayText}
      <span className="typing-cursor"></span>
    </span>
  );
}
