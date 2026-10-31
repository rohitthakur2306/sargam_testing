# Sargam Healthcare — Complete rebuild

Modular React + Firebase website and staff portal. Preserves existing Firestore collections and key fields: blogs, patients, patient_tracking. Retains the existing Google Forms, Cloudinary unsigned image uploads and doctor/brand assets. This is a separate rebuild branch; main is unchanged.

## Setup
1. Use Node.js 20 LTS and npm.
2. Clone or download this branch and run npm install.
3. Copy .env.example to .env and fill the Firebase web-app configuration.
4. Set REACT_APP_ADMIN_EMAILS to comma-separated authorised staff Google account emails.
5. Configure Cloudinary cloud name and unsigned upload preset for CMS images.
6. Run npm start; run npm run build for production output.

## Included modules
- Public website: home, about, doctor directory and six doctor profiles, appointment request, contact, health journal listing and article pages.
- Appointment and contact requests use the existing Google Forms. A request is not an appointment confirmation.
- Staff-only blog CMS; cover and gallery images upload to Cloudinary; posts are stored in the existing blogs collection.
- Staff portal: Google sign-in and email allow-list, live patient dashboard, admission, transactional discharge to patient_tracking, paginated patient history.
- Responsive layouts, shared components and plain CSS. No Tailwind.

## Security before production
The client-side email allow-list is a UI gate, not a substitute for Firestore Security Rules. Apply and review firestore.rules before handling real patient data. Never put service-account credentials in the browser. The previous repository tracked a local .env; rotate credentials that may have been committed and keep local env files untracked.

## Data compatibility and limits
Existing collection names and key fields are retained. Discharge moves the patient to history and removes the active record in one Firestore transaction. History loads 20 records at a time. Search/date filters apply to loaded records; exhaustive large-dataset search should be implemented with indexed server-side filters. No live patient records are bundled.

Verify Firestore rules, indexes, staff allow-list, Cloudinary preset and form ownership before production deployment. External integrations require valid configuration.
