import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../../firebase/firebase";
import "../Blog/blogger.css";

export default function WriteBlog() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    content: "",
    coverImage: "",
    gallery: [],
    category: "",
    tags: "",
  });

  // =====================================
  // Update Form Field
  // =====================================
  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // =====================================
  // Cloudinary Image Upload
  // =====================================

  const uploadImage = async (file) => {
    try {
      const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        throw new Error("Cloudinary environment variables are missing.");
      }

      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
        throw new Error(result.error?.message || "Image upload failed.");
      }

      return result.secure_url;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // =====================================
  // Cover Image
  // =====================================

  const handleCoverChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLoading(true);

    try {
      const imageUrl = await uploadImage(file);

      update("coverImage", imageUrl);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // Gallery Images
  // =====================================

  const handleGalleryChange = async (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    setLoading(true);

    try {
      const uploadedImages = [];

      for (const file of files) {
        const imageUrl = await uploadImage(file);

        uploadedImages.push(imageUrl);
      }

      update("gallery", uploadedImages);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  // =====================================
  // Submit Blog
  // =====================================

  const handleSubmit = async () => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    if (!form.title.trim()) {
      alert("Please enter blog title.");
      return;
    }

    if (!form.shortDescription.trim()) {
      alert("Please enter short description.");
      return;
    }

    if (!form.content.trim()) {
      alert("Please write blog content.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title: form.title.trim(),
        shortDescription: form.shortDescription.trim(),
        content: form.content.trim(),
        coverImage: form.coverImage,
        gallery: form.gallery,
        category: form.category,
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),

        author: user.displayName || "Admin",
        authorUid: user.uid,

        createdAt: serverTimestamp(),
      });

      alert("Blog Published Successfully!");

      navigate("/Blog-page");
    } catch (error) {
      console.error(error);
      alert("Failed to publish blog.");
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // JSX
  // =====================================

  return (
    <div className="write-blog-page">
      <div className="write-blog-container">
        <div className="write-blog-header">
          <h1>Write New Blog</h1>

          <p>
            Create healthcare blogs, awareness articles and hospital updates.
          </p>
        </div>

        <div className="write-blog-form">
          {/* Title */}

          <div className="blog-section">
            <h2>Blog Title</h2>

            <input
              className="input"
              placeholder="Enter blog title..."
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </div>

          {/* Short Description */}

          <div className="blog-section">
            <h2>Short Description</h2>

            <textarea
              className="input"
              rows={4}
              placeholder="Write short description..."
              value={form.shortDescription}
              onChange={(e) => update("shortDescription", e.target.value)}
            />
          </div>

          {/* Cover Image */}

          <div className="blog-section">
            <h2>Cover Image</h2>

            <input type="file" accept="image/*" onChange={handleCoverChange} />

            {form.coverImage && (
              <img
                src={form.coverImage}
                alt="Cover"
                className="cover-preview"
              />
            )}
          </div>

          {/* Gallery */}

          <div className="blog-section">
            <h2>Gallery Images</h2>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleGalleryChange}
            />

            {form.gallery.length > 0 && (
              <div className="gallery-preview">
                {form.gallery.map((img, index) => (
                  <img key={index} src={img} alt={`gallery-${index}`} />
                ))}
              </div>
            )}
          </div>

          {/* Category */}

          <div className="blog-section">
            <h2>Category</h2>

            <select
              className="input"
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
            >
              <option value="">Select Category</option>

              <option value="Health Tips">Health Tips</option>
              <option value="Hospital News">Hospital News</option>
              <option value="Critical Care">Critical Care</option>
              <option value="Emergency">Emergency</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopaedics">Orthopaedics</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Nutrition">Nutrition</option>
            </select>
          </div>

          {/* Tags */}

          <div className="blog-section">
            <h2>Tags</h2>

            <input
              className="input"
              placeholder="Health, ICU, Diabetes..."
              value={form.tags}
              onChange={(e) => update("tags", e.target.value)}
            />

            <small className="tags-info">
              Separate multiple tags using commas (,)
            </small>
          </div>

          {/* Blog Content */}

          <div className="blog-section">
            <h2>Blog Content</h2>

            <textarea
              rows={20}
              className="blog-content-input"
              placeholder="Write complete blog here..."
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
            />
          </div>

          {/* Publish */}

          <button
            className="publish-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
