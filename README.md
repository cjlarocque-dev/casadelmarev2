# Casa Del Mare WordPress Site

A custom WordPress site for Casa Del Mare vacation rental, to be hosted at `www.familybeachtrips.com/casadelmare/` on Hostinger.

## Project Structure

```
casadelmarev2/
├── wordpress/                          # WordPress installation root
│   ├── wp-content/
│   │   ├── themes/
│   │   │   └── casadelmare/           # Custom theme
│   │   │       ├── style.css          # Theme styles
│   │   │       ├── functions.php      # Theme functions & hooks
│   │   │       ├── header.php         # Header template
│   │   │       ├── footer.php         # Footer template
│   │   │       ├── index.php          # Main template
│   │   │       ├── css/               # Additional stylesheets
│   │   │       ├── js/                # JavaScript files
│   │   │       └── inc/               # Includes (custom functions)
│   │   ├── plugins/                   # WordPress plugins
│   │   └── uploads/                   # Media files (not tracked in git)
│   ├── wp-config-sample.php           # Configuration template
│   └── [WordPress core files]         # Managed by Hostinger
├── docs/                              # Documentation
├── config/                            # Configuration files
├── .gitignore                         # Git ignore rules
└── README.md                          # This file
```

## Local Development Setup

### Prerequisites
- Local WordPress environment (Local by Flywheel, XAMPP, MAMP, or similar)
- Git
- Code editor (VS Code recommended)

### Step 1: Clone Repository
```bash
cd c:\repos
git clone https://github.com/cjlarocque-dev/casadelmarev2.git
cd casadelmarev2
```

### Step 2: Set Up Local WordPress
1. **Using Local by Flywheel** (Recommended):
   - Create new site: "Casa Del Mare"
   - Select WordPress version 6.0+
   - Admin user: casadelmare / password
   
2. **Using XAMPP/MAMP**:
   - Create database: `casadelmare_dev`
   - Copy `wordpress/wp-config-sample.php` → `wordpress/wp-config.php`
   - Update database credentials in `wp-config.php`
   - Install WordPress via web interface

### Step 3: Activate Custom Theme
1. Log into WordPress admin (`localhost:port/wp-admin`)
2. Go to **Appearance → Themes**
3. Find "Casa Del Mare" theme
4. Click **Activate**

### Step 4: Create Initial Content
1. **Create Pages** (in WordPress admin):
   - Home (set as front page)
   - About Casa Del Mare
   - Amenities
   - Location/Attractions
   - Contact

2. **Add Property Images**:
   - Go to **Media → Add New**
   - Upload images from `c:\repos\casadelmare\casadelmare\pictures/`

3. **Set Up Menus**:
   - **Appearance → Menus**
   - Create "Main Menu" with pages
   - Set as Primary Menu location

## Content Migration from Old Site

The old static HTML site is at `c:\repos\casadelmare`. To migrate content:

### What to Migrate:
- ✓ Property images → Upload to WordPress Media Library
- ✓ Property description → Create "About" page
- ✓ Amenities list → Create pages or custom post type
- ✓ Contact information → Add to Site Settings
- ✓ Guest reviews → Create custom post type or pages
- ✓ Google Maps embed → Use Gutenberg embed or plugin
- ✓ Meta tags / SEO data → Set in Yoast SEO plugin

### Migration Steps:
1. Extract text content from `c:\repos\casadelmare\casadelmare\index.html`
2. Create corresponding WordPress pages/posts
3. Copy images from `c:\repos\casadelmare\casadelmare\pictures/` to WordPress
4. Set meta descriptions & keywords in Yoast SEO
5. Configure URL structure to maintain `/casadelmare/` path

## Deployment to Hostinger

### Prerequisites:
- Hostinger account with WordPress hosting plan
- Domain `www.familybeachtrips.com` registered and pointing to Hostinger
- FTP/SFTP access or File Manager

### Deployment Steps:

#### 1. Install WordPress on Hostinger
1. Log into Hostinger **cPanel** or **Hpanel** (newer accounts)
2. Go to **Website → WordPress Installation** (or similar)
3. Choose domain: `www.familybeachtrips.com`
4. Install to subdirectory: `/casadelmare/`
5. Set admin credentials
6. Complete installation

#### 2. Upload Custom Theme
1. Via **File Manager** or **FTP**:
   ```
   Navigate to: /casadelmare/wp-content/themes/
   Upload folder: casadelmare/
   ```

2. Via **SSH** (if available):
   ```bash
   scp -r wordpress/wp-content/themes/casadelmare/ user@hostinger:/public_html/casadelmare/wp-content/themes/
   ```

#### 3. Activate Theme
1. Log into `www.familybeachtrips.com/casadelmare/wp-admin`
2. Go to **Appearance → Themes**
3. Activate "Casa Del Mare" theme

#### 4. Import Content
1. Use **All-in-One WP Migration** plugin:
   - Export from local: Admin → All-in-One WP Migration → Export
   - Upload to Hostinger: Admin → All-in-One WP Migration → Import
   
   OR manually recreate pages/posts on Hostinger

#### 5. Configure SEO
1. Install **Yoast SEO** plugin (via WordPress admin)
2. Go to **Yoast SEO → General** → Settings
3. Set site URL to: `www.familybeachtrips.com/casadelmare`
4. Update XML sitemap
5. Submit to Google Search Console and Bing Webmaster Tools

#### 6. Update DNS & Domain Settings
1. Log into **GoDaddy** (domain registrar)
2. Update nameservers to Hostinger's nameservers
3. Wait 24-48 hours for DNS propagation
4. Test: Visit `www.familybeachtrips.com/casadelmare`

### Post-Deployment Checks
- [ ] Site loads correctly at `www.familybeachtrips.com/casadelmare`
- [ ] SSL certificate active (green lock icon)
- [ ] All images load
- [ ] Contact forms work
- [ ] Mobile responsive
- [ ] Menus navigate correctly
- [ ] SEO sitemap available at `/casadelmare/sitemap.xml`
- [ ] Analytics tracking active

## Recommended Plugins

Install via WordPress admin → **Plugins → Add New**:

### Essential:
- **Yoast SEO** - SEO optimization & sitemap
- **WP Smush** - Image optimization
- **Wordfence Security** - Security hardening
- **UpdraftPlus** - Automatic backups
- **All-in-One WP Migration** - Site migration tool

### Optional:
- **Elementor** or **Divi** - Page builder
- **WooCommerce** - If adding e-commerce
- **Caldera Forms** - Advanced contact forms
- **Booking Calendar** - If managing direct reservations

## Environment Configuration

### wp-config.php
Never commit `wp-config.php` to git! Use `wp-config-sample.php` as template:

```bash
cd wordpress
cp wp-config-sample.php wp-config.php
# Edit wp-config.php with your database credentials
```

### Database Credentials (Local)
Update `wordpress/wp-config.php`:
```php
define( 'DB_NAME', 'casadelmare_dev' );
define( 'DB_USER', 'root' ); // or your db user
define( 'DB_PASSWORD', '' ); // your password
define( 'DB_HOST', 'localhost' );
```

### Database Credentials (Hostinger)
Hostinger provides credentials during WordPress installation. Add to `wp-config.php`.

## Theme Development

### Adding Styles:
Edit `wordpress/wp-content/themes/casadelmare/style.css`

### Adding JavaScript:
1. Create file in `wordpress/wp-content/themes/casadelmare/js/`
2. Enqueue in `functions.php`:
   ```php
   wp_enqueue_script( 'casadelmare-script', CASADELMARE_URI . '/js/script.js', array(), CASADELMARE_VERSION, true );
   ```

### Adding Pages/Templates:
Create new template in theme directory (e.g., `page-gallery.php`)

### PHP Coding Standards:
- Follow WordPress Coding Standards
- Use proper escaping: `esc_html()`, `esc_url()`, `wp_kses_post()`
- Use proper sanitization: `sanitize_text_field()`, `sanitize_email()`
- Add proper i18n: Use `__()` for translations

## Backups & Maintenance

### Backup Strategy:
1. **Hostinger Backups**: Enabled by default, kept for 30 days
2. **UpdraftPlus Plugin**: Weekly automated backups to Google Drive/Dropbox
3. **Manual Backups**: Before major updates or changes

### Updates:
- Hostinger handles WordPress core updates automatically
- Update plugins/themes regularly via admin dashboard
- Test on staging first before updating

## Troubleshooting

### Site not loading
- Check if WordPress is installed in `/casadelmare/` directory
- Verify database credentials in `wp-config.php`
- Check Hostinger error logs

### Images not showing
- Verify uploaded to Media Library, not just folder
- Check file permissions (644 for files, 755 for directories)
- Use WP Smush to optimize images

### SEO issues
- Install Yoast SEO plugin
- Configure URL structure to `/casadelmare/`
- Submit sitemap to Google Search Console

## Support & Resources

- [WordPress Documentation](https://wordpress.org/documentation/)
- [WordPress Theme Development](https://developer.wordpress.org/themes/)
- [Hostinger Support](https://www.hostinger.com/support)
- [Yoast SEO Help](https://yoast.com/help/)

## Git Workflow

### Normal Workflow:
```bash
# Make changes to theme files
cd wordpress/wp-content/themes/casadelmare/
# Edit files...

# Commit changes
git add .
git commit -m "Update theme: [description]"
git push origin main
```

### DO NOT Commit:
- `wp-config.php` (database credentials)
- `/wordpress/wp-content/uploads/` (user uploads)
- `/wordpress/wp-content/plugins/*` (third-party plugins)
- Database files
- WordPress core files (managed by Hostinger)

### DO Commit:
- Custom theme files (theme folder)
- Custom plugins (if created)
- Configuration templates (`wp-config-sample.php`)
- Documentation

## License

MIT License - See LICENSE file for details

## Author

Casa Del Mare Vacation Rental
www.familybeachtrips.com
