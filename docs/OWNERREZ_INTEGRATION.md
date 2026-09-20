# OwnerRez Integration Guide

This guide explains how to integrate Casa Del Mare with OwnerRez Property Management System (PMS) for calendar, availability, and booking functionality.

## What is OwnerRez?

OwnerRez is a cloud-based property management system that handles:
- Booking calendar & availability
- Guest reservations
- Payment processing
- Guest communication
- Cleaning schedules
- Owner payouts

## Integration Steps

### Step 1: Get Your OwnerRez Property ID

1. Log into your OwnerRez account at https://www.ownerrez.com
2. Navigate to your property
3. Go to **Settings → Property Details**
4. Find your **Property ID** (usually a number like `12345`)

### Step 2: Get Your OwnerRez Booking URL

1. In OwnerRez, go to **Settings → Booking Page**
2. Copy your public booking URL (looks like: `https://www.ownerrez.com/properties/12345/`)
3. Or create a custom branded booking URL

### Step 3: Update WordPress Theme Settings

1. Log into WordPress Admin: `https://lightcoral-whale-838236.hostingersite.com/wp-admin`
2. Go to **Appearance → Customize**
3. Click **Casa Del Mare Colors** section
4. Look for "OwnerRez Settings" (if available) OR edit manually via code:

#### Option A: Edit via WordPress Customizer (Easy)

If you installed the customizer extensions:
- Add your Property ID and Booking URL in the customizer
- Click Save

#### Option B: Edit PHP File (Direct)

1. Go to **File Manager**
2. Navigate to: `wp-content/themes/casadelmare/inc/property-data.php`
3. Find these lines (around line 30):
```php
define( 'CASADELMARE_OWNERREZ_ID', '' ); // Your OwnerRez property ID
define( 'CASADELMARE_BOOKING_URL', '' ); // Your OwnerRez booking link
```

4. Replace with your actual values:
```php
define( 'CASADELMARE_OWNERREZ_ID', '12345' ); // Replace with your ID
define( 'CASADELMARE_BOOKING_URL', 'https://www.ownerrez.com/properties/12345/' ); // Your actual URL
```

5. Save the file

### Step 4: Verify Integration

1. Visit your home page: `https://lightcoral-whale-838236.hostingersite.com/`
2. You should see:
   - **"Book Now" button** - clicks through to OwnerRez booking page
   - **Availability Calendar** - if you added the calendar embed

3. Click the "Book Now" button to verify it works

## Features Included

### 1. Booking Button

All pages that include `casadelmare_ownerrez_booking_link()` will display a "Book Now" button.

**Pages with booking button:**
- Home page (hero section)
- Home page (bottom CTA)
- Gallery page (bottom CTA)
- Property details page (when created)

### 2. Availability Calendar

The home page includes an embedded OwnerRez calendar that shows:
- Available dates (green)
- Booked dates (red)
- Price per night
- Direct booking capability

**To enable the calendar:**
- Make sure `CASADELMARE_OWNERREZ_ID` is set
- Calendar embed code is in `property-data.php`
- It auto-loads on the home page

### 3. Custom Booking Link

If you want a custom branded booking page:
1. In OwnerRez, go to **Settings → Booking Page → Custom Domain**
2. Set up your custom domain (e.g., `book.casadelmare.com`)
3. Update the `CASADELMARE_BOOKING_URL` with your custom domain

## OwnerRez Embed Code Options

### Calendar Widget (Already Implemented)

```php
<script src="https://www.ownerrez.com/Scripts/Embed.js?propertyid=YOUR_ID"></script>
```

Displays a calendar showing availability for guest browsing.

### Booking Button

```php
<a href="https://www.ownerrez.com/properties/YOUR_ID/" target="_blank">
    Book Now
</a>
```

Direct link to your booking page.

### Rates Widget

```html
<div id="ownerrez-rates" data-property-id="YOUR_ID"></div>
<script src="https://www.ownerrez.com/Scripts/RatesWidget.js"></script>
```

Shows nightly rates and special pricing.

### Guest Portal

```html
<iframe src="https://www.ownerrez.com/properties/YOUR_ID/guest" 
        width="100%" height="600"></iframe>
```

Full booking experience embedded on your site.

## Troubleshooting

### Calendar not showing

**Problem**: Calendar widget appears blank
- **Solution**: 
  1. Verify Property ID is correct in `property-data.php`
  2. Check that OwnerRez calendar is enabled in property settings
  3. Clear browser cache (Ctrl+Shift+Delete)
  4. Try in incognito/private window

### Booking link doesn't work

**Problem**: "Book Now" button doesn't go to OwnerRez
- **Solution**:
  1. Verify `CASADELMARE_BOOKING_URL` is set correctly
  2. Test the URL directly in your browser
  3. Check that URL starts with `https://` not `http://`

### Pricing not displaying

**Problem**: Calendar shows availability but no prices
- **Solution**:
  1. In OwnerRez, go to **Settings → Pricing**
  2. Ensure pricing is configured for your property
  3. Verify calendar widget pricing visibility is enabled
  4. Save changes and refresh your website

### Multiple properties

If you have multiple properties on one WordPress site:
- Create separate page templates for each property
- Each template gets its own `OWNERREZ_ID` and `BOOKING_URL`
- Example: `page-home.php` for Casa Del Mare, `page-oak-hideaway.php` for another property

## API Integration (Advanced)

For more advanced integrations (pulling real-time availability data, creating custom calendar views, etc.):

1. Check if OwnerRez has an API: https://www.ownerrez.com/api
2. Contact OwnerRez support for API documentation
3. Create custom functions in `inc/property-data.php` to call their API
4. Display data in your templates

Example API function:
```php
function casadelmare_get_ownerrez_availability() {
    // Call OwnerRez API
    $property_id = CASADELMARE_OWNERREZ_ID;
    $response = wp_remote_get( "https://api.ownerrez.com/properties/{$property_id}/availability" );
    return json_decode( wp_remote_retrieve_body( $response ) );
}
```

## Updating Your Booking URL or Property ID

1. Edit `inc/property-data.php`
2. Update the constants at the top of the file
3. Save
4. Commit to GitHub: `git add . && git commit -m "Update OwnerRez booking info" && git push`
5. Hostinger will auto-pull the changes
6. Website updates automatically (no manual refresh needed)

## Support

- **OwnerRez Help**: https://support.ownerrez.com/
- **OwnerRez Chat**: Available in your account dashboard
- **Property Management**: Contact your account manager at OwnerRez

## Next Steps

1. ✅ Set Property ID and Booking URL in `property-data.php`
2. ✅ Verify "Book Now" buttons work
3. ✅ Test the calendar widget
4. ✅ Monitor bookings in OwnerRez dashboard
5. ✅ Enable email confirmations in OwnerRez for guests
6. ⬜ Optional: Add rates widget to home page
7. ⬜ Optional: Create custom branded booking page

Everything is version controlled in GitHub, so any updates just require a git commit and push! 🚀
