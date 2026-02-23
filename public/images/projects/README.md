# Project Images Folder

## Instructions

यहाँ अपने 4 projects के images रखें। File names:

1. **gitrater.jpg** या **gitrater.png** - GitRater AI Developer Evaluator के लिए
2. **natours.jpg** या **natours.png** - NATOURS Tour Booking के लिए
3. **scholarship.jpg** या **scholarship.png** - Scholarship Management System के लिए
4. **hospital.jpg** या **hospital.png** - E-Hospital Management System के लिए

## Image Requirements

- **Recommended size**: 1080x720px या similar aspect ratio
- **Format**: JPG, PNG, या WebP
- **Max file size**: 500KB (better for performance)

## Update Code

Images रखने के बाद `src/app/components/Projects.tsx` में paths update करें:

```tsx
image: "/images/projects/gitrater.jpg";
image: "/images/projects/natours.jpg";
image: "/images/projects/scholarship.jpg";
image: "/images/projects/hospital.jpg";
```

Currently Unsplash images use हो रहे हैं - आप अपने खुद के images से replace कर सकते हैं।
