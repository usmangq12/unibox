# Unibox

Unibox is a Next.js application that combines emails from both Gmail and Outlook into a single unified inbox. Users can log in with their Google or Microsoft accounts to view and reply to their emails.

## Features

- Authenticate with Google and Microsoft accounts
- Fetch and display emails from Gmail and Outlook
- Reply to emails directly from the unified inbox

## Getting Started

### Prerequisites

- Node.js installed
- Google Cloud Console and Azure App registrations set up with OAuth credentials

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/usmangq12/unibox.git
   cd unibox
   ```

2. **Install dependencies:**:
   ```bash
   yarn install
   ```
3. **Create a .env.local in the root of the project**
   ```bash
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   MICROSOFT_CLIENT_ID=your-microsoft-client-id
   MICROSOFT_CLIENT_SECRET=your-microsoft-client-    secret
   JWT_SECRET=your-jwt-secret
   ```
## Running the Application
1. **Start the development server:**
   ```bash
   yarn run dev
   ```
2. **Open your browser and navigate to**
   ```bash
   http://localhost:3000
   ```

## Authentication Providers\*\*

**Google**

- Ensure the Gmail API is enabled in the Google Cloud Console.
- Add the following OAuth 2.0 scope:
  https://www.googleapis.com/auth/gmail.readonly
  https://www.googleapis.com/auth/gmail.send
  **Microsoft**
- Ensure the Microsoft Graph API is enabled in the Azure portal.
- Add the following OAuth 2.0 scope: https://graph.microsoft.com/Mail.ReadWrite.

## Example Environment Variables

```bash
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
AZURE_AD_CLIENT_ID=your-microsoft-client-id
AZURE_AD_CLIENT_SECRET=your-microsoft-client-secret
AZURE_AD_TENANT_ID=your-microsoft-tenant-id
```
