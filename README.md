# Infinite Scroll Image Gallery

A React-based image gallery application featuring infinite scroll, image search, and optimized performance. The application fetches images from the Unsplash API and implements efficient data cleanup during scrolling.

## 🚀 Features

- **Infinite Scroll**: Automatically loads more images as you scroll
- **Image Search**: Search for specific images using keywords
- **Performance Optimization**: 
  - Implements data cleanup while scrolling
  - Lazy loading of images
  - Optimized scroll event handling
- **Responsive Design**: Works seamlessly across different screen sizes
- **Visual Feedback**: Loading states and image count indicators

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- NPM (v6.0.0 or higher)
- Unsplash API Key

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/infinite-scroll-gallery.git
cd infinite-scroll-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Unsplash API key:
```env
REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

4. Start the development server:
```bash
npm start
```

## 🔧 Configuration

The application includes several configurable parameters in `InfiniteScrollApp.js`:

```javascript
const ITEMS_PER_PAGE = 12;        // Number of images per load
const CLEANUP_THRESHOLD = 100;     // Pixels from top to trigger cleanup
```

## 📦 Dependencies

- React
- Unsplash API
- CSS (no additional UI libraries required)

## 🎯 Usage

1. **Browsing Images**:
   - Scroll down to load more images automatically
   - Images above the viewport are cleaned up for better performance

2. **Searching Images**:
   - Use the search bar at the top
   - Enter keywords and press enter or click search
   - Results will load with infinite scroll enabled

3. **Image Details**:
   - Click on images to view additional information
   - See photographer credits and image numbers

## 🔑 Getting an Unsplash API Key

1. Visit the [Unsplash Developer Portal](https://unsplash.com/developers)
2. Create an account or log in
3. Register a new application
4. Copy your Access Key
5. Add the key to your `.env` file

## 🚫 Common Issues

1. **Images not loading**:
   - Check your Unsplash API key
   - Verify your internet connection
   - Check browser console for errors

2. **Scroll performance issues**:
   - Adjust `CLEANUP_THRESHOLD` value
   - Reduce `ITEMS_PER_PAGE` if needed

## 🛠️ Project Structure

```
infinite-scroll-gallery/
├── src/
│   ├── components/
│   │   ├── InfiniteScrollApp.jsx
│   │   └── ImageCard.jsx
│   ├── styles.css
│   └── App.js
├── .env
└── README.md
```

## 🔄 Performance Optimizations

The application implements several performance optimizations:

1. **Data Cleanup**:
   - Removes images that are far above the viewport
   - Maintains smooth scrolling experience
   - Optimizes memory usage

2. **Lazy Loading**:
   - Images load only when needed
   - Reduces initial load time
   - Saves bandwidth

3. **Debounced Events**:
   - Prevents excessive API calls
   - Optimizes scroll performance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for providing the API
- React community for inspiration and resources

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.
