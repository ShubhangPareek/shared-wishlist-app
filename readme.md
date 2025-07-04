
# 🛍️ Shared Wishlist App – FlockShop.ai Full Stack Assignment

A collaborative wishlist platform where users can create, share, and manage shopping wishlists in real-time.

## 📦 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Database:** MongoDB (via Mongoose)
- **Styling:** Basic CSS (No Tailwind or UI libs)
- **State Management:** React Hooks
- **API Client:** Axios
- **Routing:** React Router DOM

## 🚀 Features

### ✅ Core Requirements
- [x] Dummy Signup & Login (via `localStorage`)
- [x] Create a new wishlist
- [x] Add/Edit/Delete products (name, image URL, price)
- [x] Invite others to a wishlist (via email)
- [x] Show who added each item

### 🎁 Bonus Features
- [x] Emoji Reactions (❤️, 🔥, 🎉)
- [x] Responsive Layout (basic CSS fallback – Tailwind removed)
- [ ] Real-time sync (❌ skipped as per latest decision)

## 🧪 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/shared-wishlist-app.git
cd shared-wishlist-app

2. Backend Setup

cd server
npm install
touch .env

.env file:

MONGO_URI=your_mongodb_connection_string
PORT=5050

npm start

3. Frontend Setup

cd ../client
npm install
npm start

App will be available at http://localhost:3000.

🗂️ Folder Structure

shared-wishlist-app/
│
├── client/                # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   └── WishlistPage.js
│   │   └── App.js
│   └── package.json
│
├── server/                # Express Backend
│   ├── models/
│   │   └── Wishlist.js
│   ├── routes/
│   │   └── wishlistRoutes.js
│   ├── server.js
│   └── package.json

🧠 Assumptions & Limitations
	•	No authentication library used; user email is mocked via localStorage
	•	No file/image upload support; image URL must be provided manually
	•	Collaborator invitation is not email-verified (mocked)
	•	No real-time sync (WebSockets skipped)
	•	Emoji reactions are local (not persisted in DB)



🎥 Video Demo (Optional)

Link to Loom or demo video here

📈 Future Improvements
	•	Integrate Firebase Auth or Auth0 for real login
	•	Use WebSockets or Firebase Realtime DB for live sync
	•	Save emoji reactions in the backend
	•	Implement push notifications on changes
	•	Add product filters and sorting
	•	Use TailwindCSS or Material UI for professional UI

⸻

Made with ❤️ by Shubhang Pareek

