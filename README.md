
---

# 🌶️ Pickles Taste - Authentic Culinary Delights

**Pickles Taste** is a vibrant, full-stack restaurant management and food ordering platform. Designed with a focus on high-quality visuals and smooth user interactions, it allows customers to explore a diverse menu, manage their orders, and experience the rich heritage of homemade flavors.

🔗 **Live Site:** [picklestaste.vercel.app](https://picklestaste.vercel.app/)

🔗 **GitHub Repo:** [github.com/najatul6/pickles-taste](https://github.com/najatul6/pickles-taste)

---

## ✨ Features

* **Dynamic Menu Explorer:** Categorized food items (Pickles, Soups, Desserts, etc.) with real-time data fetching.
* **Advanced UI/UX:**
* **Smooth Animations:** Utilizes `framer-motion` and `lottie-react` for a lively interface.
* **Parallax Effects:** Immersive scrolling experiences with `react-parallax` and `simple-parallax-js`.
* **Responsive Carousels:** Featured items showcased via `Swiper` and `react-responsive-carousel`.


* **Authentication System:** Secure user management via **Firebase** (Google and Email/Password).
* **Ordering Workflow:** Interactive cart management and user dashboards for tracking culinary choices.
* **Efficient Data Handling:** Server-state management powered by **TanStack React Query** for seamless updates.
* **Feedback System:** Integrated ratings using `@smastrom/react-rating` and beautiful alerts with `SweetAlert2`.

---

## 🛠️ Tech Stack

### Frontend

* **React 18** (Vite Build Tool)
* **Tailwind CSS & DaisyUI** (Responsive Styling)
* **Framer Motion** (Motion Graphics)
* **React Router DOM v6** (Navigation)

### Backend & Integration

* **Firebase:** Identity and Authentication.
* **Axios:** Promise-based HTTP client for API requests.
* **React Hook Form:** Performant and extensible form validation.
* **React Helmet Async:** SEO optimization for dynamic page titles.

---

## 📦 Installation & Environment Setup

1. **Clone the Repository:**
```bash
git clone https://github.com/najatul6/pickles-taste.git
cd pickles-taste

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory and add your credentials:
```env
VITE_FIREBASE_API_CONSOLE=your_api_key
VITE_FIREBASE_DOMAIN_CONSOLE=your_auth_domain
VITE_FIREBASE_PROJECTID_CONSOLE=your_project_id
VITE_FIREBASE_STORAGEBUCKET_CONSOLE=your_storage_bucket
VITE_FIREBASE_MESSAGINGSENDERID_CONSOLE=your_messaging_id
VITE_FIREBASE_APPID_CONSOLE=your_app_id
VITE_FIREBASE_MEASUREMENTID_CONSOLE=your_measurement_id

VITE_SERVER_URL=https://your-api-server.com

```


4. **Run Development Server:**
```bash
npm run dev

```



---

## 🏗️ Available Scripts

* `npm run dev`: Start the local development server.
* `npm run build`: Build the application for production deployment.
* `npm run lint`: Identify and report on patterns found in ECMAScript/JavaScript code.
* `npm run preview`: Preview the production build locally.

---

## 📁 Project Structure

```text
├── src
│   ├── assets      
│   ├── components # Reusable UI components (Navbar, Footer, FoodCard)
│   ├── hooks      # Custom TanStack Query and Auth hooks
│   ├── pages      # Page-level components (Home, Menu, Order, Login)
│   ├── providers  # Context providers (Auth, Helmet)
│   └── routes     # App routing logic
└── public         # Static assets and icons

```

---

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

**Md Najatul Islam**

* Portfolio: [najatul6.github.io](https://www.google.com/search?q=https://najatul6.github.io/)
* GitHub: [@najatul6](https://github.com/najatul6)

---
