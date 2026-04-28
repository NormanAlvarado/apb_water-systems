# URL Configuration Guide

## Current URL Structure

### English Routes (/en prefix)
```
/en                                    → Home
/en/about                              → About
/en/contact                            → Contact
/en/products/water-conditioning        → Water Conditioning
/en/products/drinking-water            → Drinking Water
/en/products/problem-solving-filters   → Problem Solving Filters
/en/products/constant-pressure         → Constant Pressure
```

### Spanish Routes (/es prefix)
```
/es                                    → Home
/es/about                              → About
/es/contact                            → Contact
/es/products/water-conditioning        → Water Conditioning
/es/products/drinking-water            → Drinking Water
/es/products/problem-solving-filters   → Problem Solving Filters
/es/products/constant-pressure         → Constant Pressure
```

### Default Routes (Auto-detect language)
```
/                                      → Home (detects language)
/about                                 → About (detects language)
/contact                               → Contact (detects language)
/products/water-conditioning           → Water Conditioning (detects language)
/products/drinking-water               → Drinking Water (detects language)
/products/problem-solving-filters      → Problem Solving Filters (detects language)
/products/constant-pressure            → Constant Pressure (detects language)
```

## Language Detection Priority
1. URL path (/en or /es)
2. LocalStorage (user's previous selection)
3. Browser language preference
4. Fallback: English

## Internal Navigation
- Links automatically include current language prefix
- Language switcher maintains current page in different language
- All navigation respects hreflang tags

## SEO Implications
✅ Each page has separate URL for each language
✅ Proper hreflang tags tell Google about alternates
✅ Search results show correct language version
✅ Both language versions get indexed
✅ No duplicate content penalties

## For Netlify Deployment
Ensure redirects.json includes:
```
/sitemap.xml → /public/sitemap.xml
/robots.txt  → /public/robots.txt
```

## Testing URLs
Visit these to verify:
- https://apbwatersystems.com/en (English)
- https://apbwatersystems.com/es (Spanish)
- https://apbwatersystems.com (Auto-detect)
