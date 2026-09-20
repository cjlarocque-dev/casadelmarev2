# Hostinger WordPress Deployment Guide

## Quick Start Deployment Checklist

### Before You Start:
- [ ] Hostinger WordPress hosting plan activated
- [ ] Domain `www.familybeachtrips.com` pointing to Hostinger
- [ ] Custom theme ready in `wordpress/wp-content/themes/casadelmare/`
- [ ] Content migrated to WordPress locally
- [ ] All images optimized and uploaded

## Step-by-Step Deployment

### 1. Access Hostinger Control Panel

**For Hostinger Hpanel (newer accounts):**
1. Log in to https://hpanel.hostinger.com
2. Select your account
3. Go to **Websites** section

**For Hostinger cPanel (older accounts):**
1. Log in to your cPanel
2. Look for WordPress installation section

### 2. Install WordPress on Hostinger

**Option A: Fresh Installation (Recommended)**

1. In Hpanel: **Websites → New Website**
2. Select **WordPress**
3. Configuration:
   - **Domain**: www.familybeachtrips.com
   - **Directory**: casadelmare (to create /casadelmare/ subdirectory)
   - **Site Title**: Casa Del Mare
   - **Admin Email**: your-email@example.com
   - **Admin Username**: (set strong username)
   - **Admin Password**: (set strong password)
4. Click **Install**
5. Wait for installation to complete (usually 5-10 minutes)

**Option B: One-Click Installer**

1. In cPanel: Find **WordPress Installation** or **Auto Installers**
2. Click **Install WordPress**
3. Configure:
   - **Protocol**: https:// (SSL)
   - **Domain**: www.familybeachtrips.com
   - **Directory**: casadelmare
   - Admin credentials
4. Complete installation

### 3. Access Your WordPress Admin

1. Navigate to: `www.familybeachtrips.com/casadelmare/wp-admin`
2. Log in with admin credentials created during installation
3. You should see WordPress Dashboard

### 4. Upload Custom Theme

**Via File Manager (Easiest):**

1. In Hpanel: **Websites → File Manager**
2. Navigate to: `public_html/casadelmare/wp-content/themes/`
3. Click **Upload** (folder icon)
4. Upload entire `casadelmare/` theme folder from your local repo
5. Wait for upload to complete

**Via FTP (Alternative):**

1. Get FTP credentials from Hpanel (Account → FTP)
2. Use FTP client (FileZilla, WinSCP, etc.)
3. Connect to your Hostinger FTP server
4. Navigate to: `public_html/casadelmare/wp-content/themes/`
5. Drag & drop entire `casadelmare/` folder
6. Set permissions: 755 for folders, 644 for files

**Via SSH (Advanced):**

```bash
# Connect to your server
ssh user@your-hostinger-domain.com

# Navigate to themes directory
cd public_html/casadelmare/wp-content/themes/

# Clone from GitHub
git clone https://github.com/cjlarocque-dev/casadelmarev2.git
cd casadelmarev2/wordpress/wp-content/themes/casadelmare

# Or use rsync to copy local theme
rsync -avz ~/path/to/casadelmare/ user@server:/public_html/casadelmare/wp-content/themes/casadelmare/
```

### 5. Activate Custom Theme

1. Log into WordPress admin: `www.familybeachtrips.com/casadelmare/wp-admin`
2. Go to **Appearance → Themes**
3. Find "Casa Del Mare" theme in the list
4. Click **Activate**

**Verification:**
- Visit `www.familybeachtrips.com/casadelmare/`
- Should now display your custom theme (not WordPress default)

### 6. Migrate Content to Hostinger

**Option A: Using All-in-One WP Migration Plugin (Easiest)**

**Local Setup:**
1. In local WordPress: **Plugins → Add New**
2. Search for "All-in-One WP Migration"
3. Install & Activate
4. Go to **All-in-One WP Migration → Export**
5. Click **Export to File**
6. Download the `.wpress` export file

**Hostinger Setup:**
1. In Hostinger WordPress: **Plugins → Add New**
2. Search for "All-in-One WP Migration"
3. Install & Activate
4. Go to **All-in-One WP Migration → Import**
5. Click **Import from File**
6. Upload the `.wpress` file you downloaded
7. Wait for import to complete (can take 10-30 minutes)

**Note:** This will overwrite current content with local content.

**Option B: Manual Migration**

If using migration plugin isn't feasible:

1. **Re-create Pages/Posts manually** in Hostinger WordPress admin
2. **Upload images** via **Media → Add New → Upload Files**
3. **Re-add content** by copy/pasting from local site
4. **Recreate menus** in **Appearance → Menus**

### 7. Install Essential Plugins

1. Go to **Plugins → Add New**
2. Install these one by one:

**Essential Plugins:**
- **Yoast SEO** - Search engine optimization
- **WP Smush** - Image optimization  
- **Wordfence Security** - Security hardening
- **UpdraftPlus** - Automated backups
- **Akismet Anti-Spam** - Spam protection

**Installation process for each:**
1. Search plugin name
2. Click **Install Now**
3. Click **Activate**

### 8. Configure Yoast SEO

1. Go to **Yoast SEO → Settings**
2. **General → Site URL**: `www.familybeachtrips.com/casadelmare`
3. **General → Homepage**: Select your Home page
4. **Sitemaps**: Enable XML sitemaps
5. **Readability**: Configure as desired
6. Click **Save changes**

**Verify Sitemap:**
- Visit: `www.familybeachtrips.com/casadelmare/sitemap_index.xml`
- Should display XML sitemap

### 9. Configure Contact Forms (Optional)

If using contact forms:

1. Install **WPForms Lite** or **Contact Form 7**
2. Create contact form
3. Add form to a page or widget area
4. Set form email recipient

### 10. Update Google Search Console

1. Log into Google Search Console (https://search.google.com/search-console)
2. Go to **Settings → Domains** (or add new property)
3. Add: `https://www.familybeachtrips.com/casadelmare`
4. Add XML sitemap:
   - Go to **Sitemaps**
   - Enter: `sitemap_index.xml`
   - Click **Submit**
5. Monitor for crawl errors

### 11. Update Bing Webmaster Tools

1. Log into Bing Webmaster Tools (https://www.bing.com/webmasters)
2. Go to **Configure My Site → Sitemaps**
3. Submit: `www.familybeachtrips.com/casadelmare/sitemap_index.xml`
4. Verify ownership

### 12. Update DNS (Domain Pointing)

**Your domain `www.familybeachtrips.com` currently points to GitHub Pages.**

**To move to Hostinger:**

1. **In GoDaddy** (where domain is registered):
   - Go to **Domains**
   - Select `familybeachtrips.com`
   - Go to **DNS Manager**
   - You'll see GitHub Pages nameservers

2. **Get Hostinger Nameservers**:
   - In Hpanel: **Account → Nameservers**
   - Copy your nameservers (usually):
     - ns1.hostinger.com
     - ns2.hostinger.com

3. **Update in GoDaddy**:
   - Go to **DNS Manager**
   - Replace all nameservers with Hostinger's
   - Save changes
   - **Wait 24-48 hours for DNS propagation**

4. **Verify DNS Propagation**:
   ```bash
   # In terminal/PowerShell
   nslookup www.familybeachtrips.com
   # Should show Hostinger's IP address
   ```

### 13. Update Analytics & Tracking

**Google Analytics:**
1. Log into Google Analytics
2. Admin → Property Settings
3. Verify website URL: `www.familybeachtrips.com/casadelmare`
4. In Hostinger WordPress:
   - Yoast SEO → General → Verification → Google Analytics tracking ID
   - Or use Google Tag Manager plugin

**Facebook Pixel:**
1. Install **Pixel Cat** or **Pixel Manager for WooCommerce**
2. Add your Facebook Pixel ID
3. Verify tracking in Facebook Business Manager

## Post-Deployment Testing

Run through this checklist:

- [ ] **Site loads**: Visit `www.familybeachtrips.com/casadelmare`
- [ ] **No errors**: Check Hostinger error logs for 404s/500s
- [ ] **Images display**: All photos load correctly
- [ ] **Responsive design**: Test on mobile browser
- [ ] **Navigation works**: All menu links functional
- [ ] **Contact form works**: Test sending a message
- [ ] **SSL certificate**: Green lock icon in address bar
- [ ] **Performance**: Page loads in <3 seconds
- [ ] **SEO sitemap**: Visit `sitemap_index.xml`
- [ ] **Google Analytics**: Traffic showing up
- [ ] **Mobile menu**: Hamburger menu works on mobile
- [ ] **Search**: Site searchable via Google

## Rollback Plan

If something goes wrong:

1. **Hostinger has automatic backups** (30 day retention)
2. **To restore**:
   - Hpanel → **Backups** → Select date → **Restore**
3. **Or manually restore**:
   - Use UpdraftPlus backup from Google Drive
   - Download backup file
   - Restore via All-in-One WP Migration

## Performance Optimization (Optional)

After deployment, optimize performance:

1. **Install Caching Plugin**:
   - LiteSpeed Cache (usually pre-installed on Hostinger)
   - Or WP Super Cache

2. **Optimize Images**:
   - Run WP Smush on all images
   - Remove unused images
   - Use WebP format if supported

3. **Minimize Code**:
   - Yoast SEO can minify CSS/JS
   - Or use Autoptimize plugin

4. **Database Optimization**:
   - Use WP-Optimize plugin
   - Remove revisions, trash, spam comments

## Security Hardening (Important)

After deployment, secure your site:

1. **Change Admin URL**:
   - Use "iThemes Security" or "Wordfence" plugin
   - Change `/wp-admin/` to custom path

2. **Strong Passwords**:
   - Change default admin password
   - Use strong password (20+ characters)

3. **Two-Factor Authentication**:
   - Install "Wordfence" plugin
   - Enable 2FA for all admin accounts

4. **SSL Certificate**:
   - Hostinger provides free SSL
   - Should be automatic (green lock icon)

5. **Regular Backups**:
   - Set UpdraftPlus to daily backups
   - Store in Google Drive/Dropbox

## Troubleshooting

### Site shows WordPress default theme
- **Solution**: Ensure theme folder uploaded to `/wp-content/themes/casadelmare/`
- Check file permissions (755 for folders, 644 for files)
- Clear browser cache (Ctrl+Shift+Del)

### Images not showing after migration
- **Solution**: Re-upload images via WordPress Media
- Check image file permissions (644)
- Or use WP CLI: `wp search-replace --regex`

### Slow site performance
- **Solution**: 
  - Enable caching plugin (LiteSpeed Cache)
  - Optimize images (WP Smush)
  - Reduce plugins (deactivate unused)
  - Enable CDN in Hostinger settings

### Contact form not sending emails
- **Solution**:
  - Check Hostinger email configuration
  - Verify plugin settings have correct email
  - Check spam folder
  - Use SMTP plugin for reliability

### SSL certificate not working
- **Solution**:
  - Hostinger auto-generates SSL
  - Force HTTPS in wp-config.php:
    ```php
    define('FORCE_SSL_ADMIN', true);
    define('FORCE_SSL_LOGIN', true);
    ```
  - Clear cache and browser cookies

### 404 errors on subdirectory pages
- **Solution**:
  - Check WordPress address vs site address
  - Settings → General → Both should be `www.familybeachtrips.com/casadelmare`
  - Reset permalinks: Settings → Permalinks → Save

## Support Contacts

- **Hostinger Support**: https://www.hostinger.com/support
- **WordPress Forums**: https://wordpress.org/support/forums/
- **Yoast SEO Support**: https://yoast.com/help/
- **GitHub Issues**: Report theme issues

## Next Steps

1. Monitor site for first 24-48 hours
2. Check analytics and search console
3. Gather user feedback
4. Plan future enhancements
5. Set up regular maintenance schedule
