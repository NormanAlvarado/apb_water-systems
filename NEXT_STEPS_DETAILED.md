# NEXT STEPS: Complete SEO Implementation in Pages

## Current Status
✅ Foundation complete
⏳ 5 out of 6 pages need SEO tags
⏳ All content needs Spanish translations

## QUICK COMMAND TO UPDATE ALL PAGES

Follow this template for each of the 5 remaining pages:

### 1. WaterConditioning.tsx

At the top of the file, add:
```tsx
import { useTranslation } from 'react-i18next'
import { useMetaTags } from '../hooks/useMetaTags'
```

Inside the component function, add near the top:
```tsx
const { t } = useTranslation()

useMetaTags({
  title: t('seo.waterConditioning.title'),
  description: t('seo.waterConditioning.description'),
  ogTitle: t('seo.waterConditioning.title'),
  ogDescription: t('seo.waterConditioning.description'),
  canonicalUrl: 'https://apbwatersystems.com/en/products/water-conditioning'
})
```

### 2. DrinkingWater.tsx

At the top of the file, add:
```tsx
import { useTranslation } from 'react-i18next'
import { useMetaTags } from '../hooks/useMetaTags'
```

Inside the component function, add near the top:
```tsx
const { t } = useTranslation()

useMetaTags({
  title: t('seo.drinkingWater.title'),
  description: t('seo.drinkingWater.description'),
  ogTitle: t('seo.drinkingWater.title'),
  ogDescription: t('seo.drinkingWater.description'),
  canonicalUrl: 'https://apbwatersystems.com/en/products/drinking-water'
})
```

### 3. ProblemSolvingFilters.tsx

At the top of the file, add:
```tsx
import { useTranslation } from 'react-i18next'
import { useMetaTags } from '../hooks/useMetaTags'
```

Inside the component function, add near the top:
```tsx
const { t } = useTranslation()

useMetaTags({
  title: t('seo.problemSolvingFilters.title'),
  description: t('seo.problemSolvingFilters.description'),
  ogTitle: t('seo.problemSolvingFilters.title'),
  ogDescription: t('seo.problemSolvingFilters.description'),
  canonicalUrl: 'https://apbwatersystems.com/en/products/problem-solving-filters'
})
```

### 4. ConstantPressure.tsx

At the top of the file, add:
```tsx
import { useTranslation } from 'react-i18next'
import { useMetaTags } from '../hooks/useMetaTags'
```

Inside the component function, add near the top:
```tsx
const { t } = useTranslation()

useMetaTags({
  title: t('seo.constantPressure.title'),
  description: t('seo.constantPressure.description'),
  ogTitle: t('seo.constantPressure.title'),
  ogDescription: t('seo.constantPressure.description'),
  canonicalUrl: 'https://apbwatersystems.com/en/products/constant-pressure'
})
```

### 5. About.tsx

At the top of the file, add:
```tsx
import { useTranslation } from 'react-i18next'
import { useMetaTags } from '../hooks/useMetaTags'
```

Inside the component function, add near the top:
```tsx
const { t } = useTranslation()

useMetaTags({
  title: t('seo.about.title'),
  description: t('seo.about.description'),
  ogTitle: t('seo.about.title'),
  ogDescription: t('seo.about.description'),
  canonicalUrl: 'https://apbwatersystems.com/en/about'
})
```

### 6. Contact.tsx

At the top of the file, add:
```tsx
import { useTranslation } from 'react-i18next'
import { useMetaTags } from '../hooks/useMetaTags'
```

Inside the component function, add near the top:
```tsx
const { t } = useTranslation()

useMetaTags({
  title: t('seo.contact.title'),
  description: t('seo.contact.description'),
  ogTitle: t('seo.contact.title'),
  ogDescription: t('seo.contact.description'),
  canonicalUrl: 'https://apbwatersystems.com/en/contact'
})
```

---

## TRANSLATING CONTENT TO SPANISH

All the SEO meta tags are already translated. Now you need to translate the actual page content.

### Update Spanish Translations in: `/src/i18n/locales/es.json`

Add sections like:

```json
{
  "pages": {
    "waterConditioning": {
      "heroTitle": "Sistemas de Ablandamiento de Agua",
      "heroSubtitle": "Soluciones profesionales para agua dura",
      "benefits": [
        "Elimina minerales del agua dura",
        "Protege tuberías y electrodomésticos",
        "Mejora el sabor del agua",
        "Reduce el consumo de jabón"
      ]
    },
    "drinkingWater": {
      "heroTitle": "Agua Potable Pura y Segura",
      "heroSubtitle": "Sistemas de filtración avanzada",
      "benefits": [
        "Elimina contaminantes",
        "Agua cristalina segura",
        "Instalación profesional",
        "Garantía completa"
      ]
    }
  }
}
```

Then in components, use:
```tsx
<h1>{t('pages.waterConditioning.heroTitle')}</h1>
```

---

## TESTING CHECKLIST

After implementing SEO tags on all pages:

```bash
# 1. Test build
npm run build

# 2. Preview locally
npm run preview

# 3. Manually check each page:
```

For each page:
- [ ] Visit English version (/en/products/xxx)
- [ ] Check page source (Ctrl+U) for meta tags
- [ ] Verify title tag
- [ ] Verify meta description
- [ ] Verify hreflang tags
- [ ] Switch to Spanish version
- [ ] Verify Spanish title
- [ ] Verify Spanish description

---

## PRIORITY PAGES

Update in this order:
1. WaterConditioning.tsx (highest traffic)
2. DrinkingWater.tsx (product page)
3. ProblemSolvingFilters.tsx (product page)
4. Contact.tsx (conversion page)
5. About.tsx (informational)
6. ConstantPressure.tsx (product page)

---

## DEPLOYMENT READY?

Once all pages are updated:

```bash
# Final build test
npm run build

# If successful, you're ready to deploy!
```

Then follow the deployment guide in QUICK_START_SEO.md

---

## NEED HELP?

- Check IMPLEMENTATION_SUMMARY.md for what was done
- Check SEO_IMPLEMENTATION_GUIDE.md for detailed instructions
- Check QUICK_START_SEO.md for quick reference
- Check examples in Home.tsx to see how it's done

---

**Time to complete**: ~2-3 hours
**Difficulty**: Easy (copy-paste + translation)
**Impact**: Massive for SEO 🚀

Go get 'em! 💪
