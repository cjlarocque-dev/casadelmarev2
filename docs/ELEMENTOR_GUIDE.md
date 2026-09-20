# Elementor Builder Guide for Casa Del Mare

This guide walks you through building pages for Casa Del Mare using Elementor, with the Casa Del Mare color scheme and design system already configured.

## Color Scheme

The theme uses the Casa Del Mare colors that match your original website:

- **Primary Color**: `#0077be` (Ocean Blue) - Used for headings, borders, accents
- **Secondary Color**: `#00d4ff` (Cyan) - Used for complementary elements
- **Accent Color**: `#ff6b35` (Orange) - Used for buttons and CTAs
- **Light Background**: `#e0f7ff` (Light Blue) - Used for alternating sections
- **Sand Color**: `#fff8e7` (Beige) - Used for gallery and content backgrounds
- **Text Dark**: `#1a3a3a` (Dark Gray) - Primary text color
- **Text Light**: `#555555` (Medium Gray) - Secondary text color

## Fonts

- **Headings** (h1, h2, h3, h4): `Dancing Script` (elegant cursive, 700 weight)
- **H1 Special** (Hero titles): `Pacifico` (decorative script)
- **Body Text**: `Comfortaa` (friendly, rounded sans-serif)

These fonts are automatically imported from Google Fonts.

## Building Your First Page

### 1. Create a New Page

1. Log into WordPress admin: `www.familybeachtrips.com/casadelmare/wp-admin`
2. Go to **Pages → Add New**
3. Enter page title (e.g., "About Casa Del Mare")
4. Click the **Edit with Elementor** button

### 2. Elementor Interface

You'll see:
- **Left panel**: Widgets, sections, templates
- **Center**: Your page canvas
- **Right panel**: Element settings

### 3. Add Your First Section

1. Click **Add Section** (big blue button at top)
2. Choose layout (e.g., **One Column** for full width, **Two Column** for side-by-side)
3. Click the layout to add section to page

### 4. Common Elements to Use

#### Heading Widget
- Drag **Heading** widget into section
- Enter your text
- Right panel → Style → 
  - Font: Should show "Dancing Script" (looks good)
  - Size: 3rem for H2, adjust as needed
  - Color: Auto-uses your theme colors

**Pro Tip**: For hero/main titles, set heading to **Pacifico** font in the style settings for that Pacifico effect.

#### Image Widget
- Drag **Image** widget into section
- Click "Choose Image" → Upload or select from library
- Right panel → Settings:
  - **Image Size**: Large or full width
  - **Link**: Add booking URL if desired
  - **Alt Text**: Always add for accessibility

#### Text Editor Widget
- Drag **Text Editor** widget
- Add your content
- Style in right panel:
  - Font: Auto-uses Comfortaa
  - Color: Auto-uses text colors
  - Size: 1rem for body text, adjust headings within the editor

#### Button Widget
- Drag **Button** widget
- Enter button text (e.g., "Book Now")
- Right panel → Link: Add your booking URL
- The button auto-styles with your accent color (#ff6b35)

#### Image Gallery Widget
- Drag **Image Gallery** widget
- Click "Add Images" → Select multiple images
- Right panel → Layout:
  - **Columns**: 3 or 4 usually works well
  - **Spacing**: 25px looks good
  - **Gallery Layout**: Hover zoom or Overlap

## Building Common Page Types

### Home/Hero Page

1. **Section 1 - Hero**:
   - Add full-width section
   - Add background image in section settings
   - Add Heading widget with your property name (Pacifico font looks great)
   - Add Button widget linking to booking page
   - Right panel → Background: Add your hero image, set overlay

2. **Section 2 - Quick Info**:
   - Add 3-column section
   - Add image in left column, text in middle, info in right
   - Quick description of your property

3. **Section 3 - Amenities**:
   - Background: Set to light blue (#e0f7ff)
   - Add Heading: "Amenities" (Dancing Script H2)
   - Add Image Box or Heading/Text combos showing each amenity
   - Use 3-4 column layout

### Property Details Page

1. **Section 1 - Overview**:
   - Full-width section
   - Add Heading, then detailed description
   - Add feature list (use Unordered List in Text Editor)

2. **Section 2 - Photo Gallery**:
   - Background: Sand color (#fff8e7)
   - Add Heading: "Gallery"
   - Add Image Gallery widget with all property photos
   - 4-column layout looks professional

3. **Section 3 - House Rules**:
   - Background: Light color or white
   - Add Heading: "House Rules"
   - Use Accordion widget or nested lists
   - Each rule clearly visible

### Amenities Page

1. **Heading Section**: "Amenities at Casa Del Mare"

2. **Main Amenities Grid**:
   - Add 3-column section
   - Repeat this pattern for each amenity:
     - Column with Image Heading widget (icon + name)
     - Add description text below
   - Or use Image Box widgets with icons

3. **Why This Matters**:
   - Single section
   - Explain why these amenities are special
   - Add booking button at bottom

## Section Styling Tips

### Setting Background Colors

1. Click section (outer border of blocks)
2. Right panel → **Style** tab
3. **Background**: Choose "Classic"
4. **Background Color**: 
   - Light blue section: `#e0f7ff`
   - Sand section: `#fff8e7`
   - White: `#ffffff`

### Setting Background Images

1. **Background**: Choose "Image"
2. Click "Choose Image" → Upload or select
3. **Position**: Center Center
4. **Attachment**: Scroll (or Fixed for parallax effect)
5. **Background Size**: Cover (usually best)
6. **Overlay**: Add semi-transparent dark overlay (useful for text readability)

### Padding & Spacing

- Right panel → **Layout** tab
- **Padding**: Default 60px works well for sections
- **Margin**: Usually 0, but can use for spacing between sections
- **Column Gap**: 25px is a good default

## Creating Buttons

Every button should link to your booking page:

1. Drag **Button** widget
2. Enter text: "Book Now" or similar
3. Right panel → **Link**:
   - URL: Your Vacasa booking page or custom booking form URL
   - Open in new tab: Yes (usually good for external links)
4. **Style** tab:
   - Color: Auto-uses orange accent color
   - Size: Medium or Large
   - Hover effect: Light background color change

## Mobile Responsiveness

Elementor automatically handles mobile, but you can customize:

1. Top toolbar: Click the **mobile icon** (phone) to preview mobile
2. While in mobile view, right panel shows mobile-specific settings
3. Adjust:
   - Font sizes (smaller on mobile)
   - Column layouts (stack vertically on mobile)
   - Padding (reduce on mobile for tight spaces)

**Pro Tip**: Preview your page on mobile before publishing.

## Recommended Page Structure

### Home Page
- Hero section (large image, title, CTA)
- Quick facts (bedrooms, guests, price range)
- Featured amenities grid
- Gallery preview (4-6 images)
- Guest reviews section
- "Book Now" button

### About Casa Del Mare
- Detailed property description
- Full feature list
- Your hosting story
- Location benefits
- Gallery

### Amenities
- Heading + intro
- Amenities grid (icon + name + description)
- Photo showcase of key amenities
- Booking button

### Location/Attractions
- Local attractions list
- Restaurants & dining
- Things to do nearby
- Maps widget (optional Elementor plugin)
- Distance to beach/landmarks

### House Rules
- Accordion with each rule
- Check-in/check-out times
- House guidelines
- Cancellation policy (if public)

### Contact
- Contact form (WPForms or Elementor Form)
- Phone, email, message
- Map widget
- FAQ section

## Using Elementor Templates

Elementor includes free templates you can use as starting points:

1. **Add Section** → Look for "Templates" button
2. Choose category (e.g., "Real Estate")
3. Select template
4. Elementor inserts full pre-built section
5. Customize text, images, colors

This is faster than building from scratch!

## Publishing Your Page

1. Click **Publish** button (top right)
2. Visit front-end to verify
3. Test links, buttons, gallery scrolling
4. Test on mobile device
5. Adjust as needed

## SEO in Elementor Pages

Even though Elementor builds visually, you can still optimize for SEO:

1. After publishing page, install **Yoast SEO** plugin
2. Edit page → Bottom of editor
3. **Yoast SEO** box → Enter:
   - Focus keyword (e.g., "North Myrtle Beach vacation rental")
   - Meta description
   - Slug (URL-friendly name)

4. Fix any issues Yoast suggests

## Useful Elementor Widgets

- **Heading**: Large titles
- **Text Editor**: Rich text, paragraphs
- **Image**: Single images with styling
- **Image Gallery**: Multiple images grid
- **Button**: Call-to-action buttons
- **Icon Box**: Icon + heading + text combo
- **Accordion**: Collapsible sections (great for FAQ)
- **Tabs**: Tabbed content
- **Testimonial**: Guest reviews
- **Image Carousel**: Sliding images
- **Divider**: Spacing/visual separator
- **Spacer**: Add empty space between elements
- **Social Icons**: Link to social media
- **Contact Form**: Get guest inquiries (see below)

## Adding a Contact Form

1. Drag **Elementor Form** widget (or use **WPForms** plugin widget)
2. Right panel → **Add Form** → Create new or select existing
3. Form fields:
   - Name
   - Email
   - Message
   - Phone (optional)
4. Configure email notifications:
   - Go to **Elementor Dashboard → Forms**
   - Set recipient email
   - Set "Thank you" message
5. Add submit button text

Your contact form is now live!

## Troubleshooting

### Page looks different on mobile
- **Solution**: Click mobile icon at top, adjust layout for mobile view

### Spacing looks wrong
- **Solution**: Check padding in **Layout** tab, adjust for mobile

### Colors not matching
- **Solution**: 
  - Make sure you're not using custom colors in widget settings
  - Use "Default" colors so theme colors apply automatically

### Images not showing
- **Solution**:
  - Make sure images are uploaded to Media Library
  - Check file permissions on server (644 for files)
  - Use WP Smush to optimize images if file is very large

### Page won't save
- **Solution**:
  - Clear browser cache
  - Try a different browser
  - Check server error logs in Hostinger

## Pro Tips

1. **Use sections with alternating backgrounds** - Creates visual interest and separates content
2. **Large, quality images** - Makes pages more engaging
3. **Consistent button placement** - Easy for visitors to find booking options
4. **Mobile-first thinking** - Most bookings come from mobile
5. **Limit fonts** - Already using 3 (Pacifico, Dancing Script, Comfortaa) - stick to them
6. **Whitespace is your friend** - Don't cram too much content
7. **Test all forms** - Make sure contact/booking forms actually send
8. **Keyboard navigation** - Test that all clickable items work with Tab key

## Resources

- [Elementor Official Docs](https://elementor.com/help/)
- [Elementor Video Tutorials](https://www.youtube.com/playlist?list=PLXXwJJH6P-jPZiPlBx5PSqfNppZ-s_BYj)
- [Elementor Widgets Guide](https://elementor.com/resources/elementor-widgets-guide/)
- [Casa Del Mare Custom Theme](./README.md)
