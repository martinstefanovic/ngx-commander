import { OS } from '../enums/os.enum';

export function detectOS(): number | null {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = OS.MACOS;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = OS.IOS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OS.WINDOWS;
  } else if (/Android/.test(userAgent)) {
    os = OS.ANDROID;
  } else if (!os && /Linux/.test(platform)) {
    os = OS.LINUX;
  }

  return os;
}

export function setOsShortcut() {
  const currentOS = detectOS();
  let osKey = '';
  switch (currentOS) {
    case OS.MACOS:
      osKey = '⌘';
      break;
    case OS.WINDOWS:
      osKey = 'Ctrl';
      break;

    default:
      osKey = 'Ctrl';
      break;
  }

  return osKey;
}
