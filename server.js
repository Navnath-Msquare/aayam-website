import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendContactEmail } from './server/mailer.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, organization, role, enquiryType, location, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields (name, email, message).'
      });
    }

    const result = await sendContactEmail(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.error('[server] Error handling /api/contact:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send contact enquiry.'
    });
  }
});

// Serve frontend production build if available
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 AAYAM Server running on http://localhost:${PORT}`);
  console.log(`📧 Contact Form enquiries configured for: ${process.env.RECEIVER_EMAIL || 'navnathbandgar7481@gmail.com'}`);
  console.log(`======================================================\n`);
});
