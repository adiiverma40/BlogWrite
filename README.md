# React + Vite
# Blogwrite

**Blogwrite** is a simple and modern blogging platform built with Vite and React, allowing users to write and post blogs with ease. It leverages Appwrite for backend services, React Hook Form for form management, and Tiny Cloud for a rich text editor experience.

## Features

- **Easy Blog Creation**: Write and publish blogs effortlessly.
- **Rich Text Editing**: Utilize Tiny Cloud to format your content.
- **Form Validation**: Handle forms efficiently with React Hook Form.
- **Backend Integration**: Powered by Appwrite for secure and scalable backend services.

## Tech Stack

- **Vite**: A fast build tool for modern web projects.
- **React**: A popular JavaScript library for building user interfaces.
- **React Hook Form**: Simple and flexible forms management in React.
- **Appwrite**: Open-source backend-as-a-service for managing your database, authentication, and more.
- **Tiny Cloud**: A rich text editor to give your blogs a professional touch.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Appwrite instance running (or access to an Appwrite Cloud instance).
- Tiny Cloud API key (for the rich text editor).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/blogwrite.git
    cd blogwrite
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add the following variables:
    ```bash
    VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
    VITE_APPWRITE_PROJECT_ID=""
    VITE_APPWRITE_DATABASE_ID=""
    VITE_APPWRITE_COLLECTION_ID=""
    VITE_APPWRITE_BUCKET_ID=""
    VITE_TINYMCE_API_KEY=""
    ```

4. **Set Up Appwrite**:
   - Set up your Appwrite project and note down the API endpoint, project ID, database ID, collection ID, and bucket ID.
   - Update the variables in the `.env` file with your specific credentials.

5. **Configure Tiny Cloud**:
   - Obtain an API key from [Tiny Cloud](https://www.tiny.cloud/).
   - Add the API key to your `.env` file as `VITE_TINYMCE_API_KEY`.

6. **Start the development server**:
    ```bash
    npm run dev
    ```

7. **Build for production**:
    ```bash
    npm run build
    ```

## Usage

- **Creating a Blog Post**: Navigate to the "New Blog" section, write your content using the Tiny Cloud editor, and submit the form. The post will be saved and displayed on the blog list.
- **Managing Blog Posts**: View all your blog posts on the main page, where you can edit or delete posts as needed.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.

## License

This project is licensed under the MIT License.

---

Happy blogging with **Blogwrite**! 🎉
