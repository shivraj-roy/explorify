# Explorify

Explorify is a Next.js project that provides a unique and interactive experience for users. The project utilizes various technologies such as React, Tailwind CSS, and GSAP to create a visually stunning and engaging interface.

## Features

-  **Interactive Homepage**: Includes SVG morphing and gradient effects for a dynamic user experience.
-  **Responsive Design**: Optimized for various devices, ensuring a seamless experience across desktops, tablets, and mobile devices.
-  **Customizable Layout**: Easily modify the layout and styling using Tailwind CSS.
-  **Authentication and Authorization**: Integrated with Clerk for secure user authentication and authorization.
-  **Animations**: Smooth and visually appealing animations powered by GSAP.
-  **Reusable Components**: Modular and reusable components for better scalability and maintainability.

## Technologies Used

-  **Next.js**: A React framework for building server-side rendered and static web applications.
-  **React**: A JavaScript library for building user interfaces.
-  **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-  **GSAP**: A JavaScript library for creating high-performance animations.
-  **Clerk**: A user management solution for authentication and authorization.

## Getting Started

To get started with Explorify, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/shivraj-roy/explorify.git
   ```
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
.
├── app/
│   ├── (auth)/
│   │   ├── (routes)/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   ├── explore/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── NavBar.tsx
│   ├── ExplorePage.tsx
│   └── UnExplore.tsx
├── public/
│   ├── favicon.ico
│   ├── icon.jpg
│   └── file.svg
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute to Explorify, please fork the repository and submit a pull request with your changes.

## Acknowledgments

-  Next.js for providing a robust framework for building server-side rendered React applications
-  Tailwind CSS for providing a utility-first approach to styling
-  GSAP for providing a powerful animation library
-  Clerk for providing authentication and authorization solutions
