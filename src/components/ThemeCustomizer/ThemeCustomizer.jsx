import { useState, useEffect, useRef } from 'react';

// Initialize state from localStorage
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('portfolioTheme');
    if (saved) {
      const settings = JSON.parse(saved);
      return {
        fontSize: settings.activeFontSize || 'font-size-3',
        colorPalette: settings.activeColor || 'color-3',
        background: settings.activeBackground || 'bg-1'
      };
    }
  } catch (e) {
    console.error('Error reading theme:', e);
  }
  return { fontSize: 'font-size-3', colorPalette: 'color-3', background: 'bg-1' };
};

export default function ThemeCustomizer({ isOpen, onClose }) {
  const initial = getInitialTheme();
  const [fontSize, setFontSize] = useState(initial.fontSize);
  const [colorPalette, setColorPalette] = useState(initial.colorPalette);
  const [background, setBackground] = useState(initial.background);
  const fontSizeMap = useRef({
    'font-size-1': '12px',
    'font-size-2': '14px',
    'font-size-3': '16px',
    'font-size-4': '18px'
  });

  const root = document.documentElement;

  // Load theme settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('portfolioTheme');
    const htmlElement = document.documentElement;
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        if (settings.activeFontSize) setFontSize(settings.activeFontSize);
        if (settings.activeColor) setColorPalette(settings.activeColor);
        if (settings.activeBackground) setBackground(settings.activeBackground);

        // Apply saved settings
        if (settings.fontSize) {
          htmlElement.style.fontSize = settings.fontSize;
        }
        if (settings.activeFontSize === 'font-size-4') {
          htmlElement.classList.add('font-size-max');
        } else {
          htmlElement.classList.remove('font-size-max');
        }
        if (settings.primaryHue) {
          root.style.setProperty('--primary-color-hue', String(settings.primaryHue).trim());
        }
        if (settings.lightColorLightness) {
          root.style.setProperty('--light-color-lightness', settings.lightColorLightness);
        }
        if (settings.whiteColorLightness) {
          root.style.setProperty('--white-color-lightness', settings.whiteColorLightness);
        }
        if (settings.darkColorLightness) {
          root.style.setProperty('--dark-color-lightness', settings.darkColorLightness);
        }
      } catch (e) {
        console.error('Error loading theme settings:', e);
      }
    } else {
      // Apply default font size if no saved settings
      htmlElement.style.fontSize = '16px';
      htmlElement.classList.remove('font-size-max');
      root.style.setProperty('--primary-color-hue', '352');
      root.style.setProperty('--light-color-lightness', '92%');
      root.style.setProperty('--white-color-lightness', '100%');
      root.style.setProperty('--dark-color-lightness', '17%');
    }
  }, []);

  // Save theme whenever any setting changes
  useEffect(() => {
    saveThemeSettings();
  }, [fontSize, colorPalette, background]);

  const saveThemeSettings = () => {
    const settings = {
      fontSize: fontSizeMap.current[fontSize] || '16px',
      primaryHue: (root.style.getPropertyValue('--primary-color-hue') || '352').trim(),
      lightColorLightness: (root.style.getPropertyValue('--light-color-lightness') || '92%').trim(),
      whiteColorLightness: (root.style.getPropertyValue('--white-color-lightness') || '100%').trim(),
      darkColorLightness: (root.style.getPropertyValue('--dark-color-lightness') || '17%').trim(),
      activeFontSize: fontSize,
      activeColor: colorPalette,
      activeBackground: background
    };
    localStorage.setItem('portfolioTheme', JSON.stringify(settings));
  };

  const handleFontSize = (sizeClass, sizeValue) => {
    if (fontSize === sizeClass) return; // Prevent unnecessary updates

    setFontSize(sizeClass);
    const htmlElement = document.documentElement;
    htmlElement.style.fontSize = sizeValue;

    // Add/remove class for max font size styling
    if (sizeClass === 'font-size-4') {
      htmlElement.classList.add('font-size-max');
    } else {
      htmlElement.classList.remove('font-size-max');
    }
  };

  const handleColor = (colorClass, hueValue) => {
    setColorPalette(colorClass);
    root.style.setProperty('--primary-color-hue', hueValue);
    saveThemeSettings();
  };

  const handleBg1 = () => {
    setBackground('bg-1');
    root.style.setProperty('--light-color-lightness', '92%');
    root.style.setProperty('--white-color-lightness', '100%');
    root.style.setProperty('--dark-color-lightness', '17%');
    saveThemeSettings();
  };

  const handleBg2 = () => {
    setBackground('bg-2');
    root.style.setProperty('--light-color-lightness', '15%');
    root.style.setProperty('--white-color-lightness', '20%');
    root.style.setProperty('--dark-color-lightness', '95%');
    saveThemeSettings();
  };

  const handleBg3 = () => {
    setBackground('bg-3');
    root.style.setProperty('--light-color-lightness', '0%');
    root.style.setProperty('--white-color-lightness', '10%');
    root.style.setProperty('--dark-color-lightness', '95%');
    saveThemeSettings();
  };

  return (
    <div
      className="customize-theme"
      style={{ display: isOpen ? 'grid' : 'none' }}
      onClick={(e) => {
        if (e.target.classList.contains('customize-theme')) {
          onClose();
        }
      }}
    >
      <div className="card">
        <h2>Customize Your View</h2>
        <p>Manage Your Font Size, Color Background</p>

        {/* Font size */}
        <div className="font-size">
          <h3>Font Size</h3>
          <div>
            <h6>Aa</h6>
            <div className="choose-size">
              <span
                className={`font-size-1 ${fontSize === 'font-size-1' ? 'active' : ''}`}
                onClick={() => handleFontSize('font-size-1', '12px')}
              ></span>
              <span
                className={`font-size-2 ${fontSize === 'font-size-2' ? 'active' : ''}`}
                onClick={() => handleFontSize('font-size-2', '14px')}
              ></span>
              <span
                className={`font-size-3 ${fontSize === 'font-size-3' ? 'active' : ''}`}
                onClick={() => handleFontSize('font-size-3', '16px')}
              ></span>
              <span
                className={`font-size-4 ${fontSize === 'font-size-4' ? 'active' : ''}`}
                onClick={() => handleFontSize('font-size-4', '18px')}
              ></span>
            </div>
            <h3>Aa</h3>
          </div>
        </div>

        {/* Color */}
        <div className="color">
          <h3>Color</h3>
          <div className="choose-color">
            <span
              className={`color-1 ${colorPalette === 'color-1' ? 'active' : ''}`}
              onClick={() => handleColor('color-1', '270')}
              style={{ background: 'hsl(270, 75%, 60%)' }}
            ></span>
            <span
              className={`color-2 ${colorPalette === 'color-2' ? 'active' : ''}`}
              onClick={() => handleColor('color-2', '52')}
              style={{ background: 'hsl(52, 75%, 60%)' }}
            ></span>
            <span
              className={`color-3 ${colorPalette === 'color-3' ? 'active' : ''}`}
              onClick={() => handleColor('color-3', '352')}
              style={{ background: 'hsl(352, 75%, 60%)' }}
            ></span>
            <span
              className={`color-4 ${colorPalette === 'color-4' ? 'active' : ''}`}
              onClick={() => handleColor('color-4', '152')}
              style={{ background: 'hsl(152, 75%, 60%)' }}
            ></span>
            <span
              className={`color-5 ${colorPalette === 'color-5' ? 'active' : ''}`}
              onClick={() => handleColor('color-5', '202')}
              style={{ background: 'hsl(202, 75%, 60%)' }}
            ></span>
          </div>
        </div>

        {/* Background */}
        <div className="background">
          <h3>Background</h3>
          <div className="choose-bg">
            <div className={`bg-1 ${background === 'bg-1' ? 'active' : ''}`} onClick={handleBg1}>
              <span></span>
              <h5>Light</h5>
            </div>
            <div className={`bg-2 ${background === 'bg-2' ? 'active' : ''}`} onClick={handleBg2}>
              <span></span>
              <h5>Dim</h5>
            </div>
            <div className={`bg-3 ${background === 'bg-3' ? 'active' : ''}`} onClick={handleBg3}>
              <span></span>
              <h5>Dark</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
