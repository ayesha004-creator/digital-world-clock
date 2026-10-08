# Digital Clock

A modern, responsive digital clock built with React and Vite.

## Features
- Live time updating every second (hours, minutes, seconds, AM/PM)
- 12-hour / 24-hour toggle
- Current weekday and full date
- World clock with eight popular cities included by default
- Search, add, and remove cities with timezone-aware live times and UTC offsets
- Automatic daylight-saving-time handling through IANA timezones and `Intl.DateTimeFormat`
- Glassmorphism card, subtle glow, responsive from mobile to desktop
- Accessible: screen-reader time, keyboard focus styles, reduced-motion support

## Getting started
```bash
npm install
npm run dev
```

## Structure
```
src/
├── components/   Clock, WorldClock, TimeUnit, FormatToggle, DateDisplay
├── hooks/        useClock (shared live time)
├── utils/        formatTime, worldClock (timezone formatting and city list)
└── styles/       global.css
```
