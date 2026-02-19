# Google Form Enhancement Instructions

## Phase 3: Google Form Auction Dropdown

The website now directs users to the Google Form for pickup requests. To complete the Phase 3 implementation, the Google Form needs to be updated with an auction location dropdown.

### Form URL
https://docs.google.com/forms/d/e/1FAIpQLSckv7tq8EJRAgfRTedVsnv6vkHC24IuPEjlRZUHxFYmO4YE8A/viewform

---

## Instructions for Google Form Update

### 1. Add New Dropdown Question

**Question Title:** "Auction Location"

**Question Type:** Dropdown

**Description/Helper Text:**
"If your auction isn't listed, choose 'Other location' and we'll confirm pricing before payment."

---

### 2. Dropdown Options

Add the following options in this order:

#### KC Metro Auctions ($75 Standard)
```
─ KC Metro Auctions ($75 Standard) ─
Copart Kansas City
Manheim Kansas City
SCA Kansas City
America's Auto Auction KC
Kansas City Auto Auction
OAI Auctions KC
IAA Kansas City
ADESA Kansas City
[Other KC Metro Auction - Please specify in notes]
```

#### Outside KC Metro (Custom Quote)
```
─ Outside KC Metro (Custom Quote) ─
Odessa, MO
Springfield, MO
Columbia, MO
Wichita, KS
St. Louis, MO
Other location (please specify in notes)
```

---

### 3. Positioning

- Place this dropdown question **early in the form** (ideally as the 2nd or 3rd question)
- This allows quick filtering between $75 KC metro pickups vs custom quotes
- Position it before vehicle details questions

---

### 4. Optional: Conditional Logic

If your Google Form plan supports conditional logic:

1. **If user selects a KC Metro auction:**
   - Show confirmation text: "Great! This qualifies for our $75 flat rate pickup."
   - Pre-populate pricing field with "$75"

2. **If user selects Outside KC Metro:**
   - Show text: "We'll provide a custom quote based on distance and vehicle size within 24 hours."
   - Add note field: "Please provide specific auction address"

---

### 5. Follow-up Text Field

Add a short text field after the dropdown:

**Question:** "Auction Address or Additional Location Details"

**Helper Text:** "If you selected 'Other' or need to provide more specific location details, please enter them here."

---

## Benefits of This Enhancement

1. **Lead Qualification** - Immediately identify $75 vs custom quote requests
2. **Faster Response** - Pre-qualified leads get faster confirmations
3. **Better UX** - Users know their pricing tier before completing form
4. **Reduced Back-and-Forth** - Clear auction names eliminate location confusion

---

## Testing Checklist

After implementing the form changes:

- [ ] Test selecting a KC Metro auction - confirm $75 messaging appears
- [ ] Test selecting an Outside KC Metro location - confirm custom quote messaging
- [ ] Test "Other" option - confirm additional details field appears
- [ ] Submit test form and verify auction location data is captured correctly
- [ ] Mobile test - ensure dropdown is easy to use on phones

---

## Notes

- The website currently links to this form from 3 locations:
  1. Hero section "Select Auction & Request $75 Pickup" button
  2. Pricing section "Get $75 KC Metro Pickup or Custom Quote" button
  3. Get Started section "Start $75 KC Metro Request" button

- All CTAs reference the $75 pricing and KC metro focus, so the form should match this messaging

- Consider adding the KC metro radius map graphic to the form header for visual consistency
