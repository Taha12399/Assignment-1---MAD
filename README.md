# SkillSwap - MVP Frontend

A React Native mobile application for peer-to-peer skill exchange. Students can offer their skills and learn new ones from others without monetary transactions.

## Features

### 🔐 Authentication
- Login/Signup screens with form validation
- Dummy authentication (test@student.com / 12345)

### 🏠 Home Feed
- Browse available skill offers
- View skill details, ratings, and availability
- Pull-to-refresh functionality
- Book sessions with other users

### ➕ Create Skill Offer
- Post new skill offers with categories
- Set duration and available slots
- Form validation and data logging

### 👤 Profile Management
- View personal information and skills
- Track skill offers and bookings
- Edit profile and logout functionality

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skillswap-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - For iOS: Press `i` in the terminal or scan QR code with Camera app
   - For Android: Press `a` in the terminal or scan QR code with Expo Go app
   - For Web: Press `w` in the terminal

## Project Structure

```
app/
├── auth/                 # Authentication screens
│   ├── login.tsx        # Login screen
│   ├── signup.tsx       # Signup screen
│   └── _layout.tsx      # Auth navigation
├── (tabs)/              # Main app screens
│   ├── index.tsx        # Home feed screen
│   ├── explore.tsx      # Profile screen
│   └── _layout.tsx       # Tab navigation
├── create-post.tsx      # Create skill offer screen
├── index.tsx            # App entry point
└── _layout.tsx          # Root navigation
```

## Usage

### Testing the App

1. **Login**: Use the dummy credentials
   - Email: `test@student.com`
   - Password: `12345`

2. **Browse Skills**: View the home feed with sample skill offers

3. **Create Offer**: Tap the "+" button to create a new skill offer

4. **View Profile**: Navigate to the Profile tab to see user information

### Dummy Data

The app includes sample data for:
- 6 skill offers across different categories
- User profile with skills and session history
- Sample bookings and offers

## Technical Details

### Technologies Used
- **React Native** with Expo
- **TypeScript** for type safety
- **Expo Router** for navigation
- **React Native Reanimated** for animations
- **Expo Vector Icons** for icons

### Key Components
- Authentication flow with form validation
- FlatList for efficient skill offer display
- Custom styling with React Native StyleSheet
- Responsive design for different screen sizes

## Development Notes

### Form Validation
- All forms include client-side validation
- Error messages for missing fields
- Password confirmation matching

### Navigation
- Stack navigation for authentication
- Tab navigation for main app
- Modal presentation for create post

### State Management
- Local state with React hooks
- Dummy data for demonstration
- Console logging for form submissions

## Future Enhancements

- Backend integration with real API
- Real-time notifications
- In-app messaging
- Payment integration
- Advanced search and filtering
- User ratings and reviews system

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx expo start --clear`
2. **iOS simulator not opening**: Ensure Xcode is installed
3. **Android emulator issues**: Check Android Studio setup

### Getting Help

- Check Expo documentation: https://docs.expo.dev/
- React Native docs: https://reactnative.dev/
- Project issues: Create an issue in the repository

## License

This project is created for educational purposes as part of Assignment 1 for the SkillSwap application.
