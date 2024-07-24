import { google } from 'googleapis';

async function fetchGmailEmails(accessToken: string) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: 'v1', auth });
  const response = await gmail.users.messages.list({
    userId: 'me',
    q: '', // Optional query string to filter emails
  });

  const emails = response.data.messages || [];
  const detailedEmails = await Promise.all(
    emails.map(async (message) => {
      const email = await gmail.users.messages.get({
        userId: 'me',
        id: message.id,
      });
      return email.data;
    })
  );

  return detailedEmails;
}

export default fetchGmailEmails;