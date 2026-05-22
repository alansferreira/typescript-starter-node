# Telegram Vehicle Bot

This project is a Telegram bot designed to assist users in acquiring and managing vehicle listings. It provides a user-friendly interface for inputting vehicle details, uploading images, and publishing listings.

## Features

- **Welcome Message**: Greets users and provides instructions on how to use the bot.
- **Vehicle Acquisition**: Guides users through the process of entering vehicle details, including make, model, price, and odometer readings.
- **Image Uploads**: Allows users to upload images related to their vehicle listings.
- **Vehicle Search**: Enables users to search for existing vehicles based on input criteria.
- **Badges Selection**: Offers multiple badge options for vehicle listings, such as auction, offer, and promotion.
- **Publishing Listings**: Finalizes the vehicle listing process and publishes the details to the platform.

## Project Structure

```
telegram-vehicle-bot
├── src
│   ├── bot.ts                     # Entry point for the Telegram bot application
│   ├── handlers                    # Contains all command handlers
│   │   ├── welcome.handler.ts      # Handles welcome messages
│   │   ├── acquisition.handler.ts   # Manages vehicle acquisition process
│   │   ├── image.handler.ts        # Handles image uploads
│   │   ├── vehicle-search.handler.ts# Processes vehicle search requests
│   │   ├── price.handler.ts        # Prompts for vehicle sale price
│   │   ├── odometer.handler.ts     # Prompts for odometer reading
│   │   ├── observations.handler.ts  # Collects additional observations
│   │   ├── badges.handler.ts       # Presents badge options
│   │   └── publish.handler.ts      # Finalizes and publishes vehicle listings
│   ├── services                    # Contains service classes for business logic
│   │   ├── vehicle.service.ts      # Handles vehicle-related operations
│   │   ├── session.service.ts      # Manages user sessions
│   │   └── image.service.ts        # Handles image processing and storage
│   ├── models                      # Contains data models
│   │   ├── vehicle.model.ts        # Defines vehicle object structure
│   │   ├── session.model.ts        # Defines user session object structure
│   │   └── badge.model.ts          # Defines badge object structure
│   ├── types                       # Contains TypeScript types and interfaces
│   │   └── index.ts                # Exports various types
│   ├── config                      # Configuration settings
│   │   └── telegram.config.ts      # Telegram bot configuration
│   └── utils                       # Utility functions
│       └── validators.ts           # Input validation functions
├── .env.example                    # Example environment variables
├── package.json                    # npm configuration file
├── tsconfig.json                   # TypeScript configuration file
└── README.md                       # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/telegram-vehicle-bot.git
   cd telegram-vehicle-bot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values, including your Telegram bot token.

4. Run the bot:
   ```
   npm start
   ```

## Usage

- Start a chat with the bot on Telegram.
- Follow the prompts to input vehicle details, upload images, and publish your listing.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.