# Quick Fix: Create Apple Touch Icon for iOS

iOS requires a PNG file (not SVG) for the home screen icon. 

## Easiest Method (2 minutes):

1. **Open your SVG:**
   - Go to https://svgtopng.com/ or https://convertio.co/svg-png/
   
2. **Upload your file:**
   - Upload: `public/favicon.svg`
   
3. **Set size:**
   - Width: 180
   - Height: 180
   - (Check "Maintain aspect ratio")
   
4. **Download:**
   - Download the PNG file
   - Save it as: `public/apple-touch-icon.png`
   
5. **Rebuild:**
   ```bash
   npm run build
   ```

6. **Test on iOS:**
   - Clear Safari cache (Settings → Safari → Clear History)
   - Add to Home Screen to see the new icon

That's it! The icon should now work properly on iOS devices.
