import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

import { db } from "../firebase/firebase";

import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState(0);
  const [showViewer, setShowViewer] = useState(false);

  /* =====================================================
     FETCH BLOG
  ===================================================== */

  useEffect(() => {
    window.scrollTo(0, 0);
    setBlog(null);
    setLoading(true);
    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (!blog) return;
    const previousTitle = document.title;
    document.title = `${blog.title || "Health Insight"} | Sargam Healthcare`;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const previousDescription = description.content;
    description.content = blog.shortDescription || blog.title || "Health insights from Sargam Healthcare.";
    return () => {
      document.title = previousTitle;
      description.content = previousDescription;
    };
  }, [blog]);

  const fetchBlog = async () => {
    try {
      const blogRef = doc(db, "blogs", id);

      const snapshot = await getDoc(blogRef);

      if (snapshot.exists()) {
        setBlog({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        setBlog(null);
      }
    } catch (error) {
      console.error(error);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };


  /* =====================================================
     READ TIME
  ===================================================== */

  const calculateReadTime = (content = "") => {
    const words = content.trim().split(/\s+/).length;

    const minutes = Math.max(
      1,
      Math.ceil(words / 200)
    );

    return `${minutes} min read`;
  };


  /* =====================================================
     DATE
  ===================================================== */

  const formatDate = (timestamp) => {
    if (!timestamp) return "Recently";

    try {
      const date = typeof timestamp.toDate === "function" ? timestamp.toDate() : new Date(timestamp);
      return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    } catch {
      return "Recently";
    }
  };


  /* =====================================================
     COPY LINK
  ===================================================== */

  const copyArticleLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );
    } catch (error) {
      console.error(error);
    }
  };


  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="blog-details-loading-page">
          <div className="blog-loading-line" />

          <span>
            Preparing article...
          </span>
        </main>

        <Footer />
      </>
    );
  }


  /* =====================================================
     NOT FOUND
  ===================================================== */

  if (!blog) {
    return (
      <>
        <Navbar />

        <main className="blog-not-found-page">

          <span>
            HEALTH INSIGHTS
          </span>

          <h1>
            Article Not Found
          </h1>

          <p>
            The article you're looking for doesn't exist
            or has been removed.
          </p>

          <Link
            to="/Blog-page"
            className="blog-back-btn"
          >
            <span>←</span>
            Back To Blogs
          </Link>

        </main>

        <Footer />
      </>
    );
  }


  return (
    <>
      <Navbar />

      <main className="blog-details-page">


        {/* =================================================
            ARTICLE HERO
        ================================================= */}

        <section className="article-hero">

          <div className="article-hero-inner">

            <div className="article-breadcrumb">

              <Link to="/Blog-page">
                Health Blogs
              </Link>

              <span>
                /
              </span>

              <span>
                {blog.category}
              </span>

            </div>


            <div className="article-category">
              {blog.category}
            </div>


            <h1>
              {blog.title}
            </h1>


            {blog.shortDescription && (
              <p className="article-hero-description">
                {blog.shortDescription}
              </p>
            )}


            <div className="article-meta">

              <div className="article-meta-item">

                <span>
                  PUBLISHED
                </span>

                <strong>
                  {formatDate(blog.createdAt)}
                </strong>

              </div>


              <div className="article-meta-divider" />


              <div className="article-meta-item">

                <span>
                  READING TIME
                </span>

                <strong>
                  {calculateReadTime(blog.content)}
                </strong>

              </div>


              <div className="article-meta-divider" />


              <div className="article-meta-item">

                <span>
                  CATEGORY
                </span>

                <strong>
                  {blog.category || "Healthcare"}
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            COVER IMAGE
        ================================================= */}

        {blog.coverImage && (
          <section className="article-cover-section">

            <div className="article-cover">

              <img
                src={blog.coverImage}
                alt={blog.title}
              />

              <div className="article-cover-caption">
                SARGAM HEALTHCARE · MEDICAL INSIGHTS
              </div>

            </div>

          </section>
        )}


        {/* =================================================
            ARTICLE BODY
        ================================================= */}

        <section className="article-body-section">

          <div className="article-layout">


            {/* ---------------------------------------------
                MAIN ARTICLE
            --------------------------------------------- */}

            <article className="article-content">


              {/* Overview */}

              {blog.shortDescription && (
                <div className="article-overview">

                  <div className="overview-label">
                    ARTICLE OVERVIEW
                  </div>

                  <p>
                    {blog.shortDescription}
                  </p>

                </div>
              )}


              {/* Content */}

              <div className="article-prose">
                {blog.content}
              </div>


              {/* -------------------------------------------
                  GALLERY
              ------------------------------------------- */}

              {blog.gallery?.length > 0 && (

                <section className="article-gallery">

                  <div className="gallery-heading">

                    <span>
                      VISUAL INSIGHTS
                    </span>

                    <h2>
                      Article Gallery
                    </h2>

                  </div>


                  <div className="gallery-main">

                    <img
                      src={blog.gallery[selectedImage]}
                      alt={`${blog.title} ${selectedImage + 1}`}
                      onClick={() => setShowViewer(true)}
                    />


                    <button
                      type="button"
                      className="gallery-expand"
                      onClick={() => setShowViewer(true)}
                      aria-label="Open image viewer"
                    >
                      ↗
                    </button>


                    <div className="gallery-counter">
                      <strong>
                        {String(selectedImage + 1).padStart(2, "0")}
                      </strong>

                      <span>
                        /
                        {String(blog.gallery.length).padStart(2, "0")}
                      </span>
                    </div>

                  </div>


                  <div className="gallery-thumbnails">

                    {blog.gallery.map((image, index) => (

                      <button
                        key={index}
                        type="button"
                        className={
                          selectedImage === index
                            ? "gallery-thumb active"
                            : "gallery-thumb"
                        }
                        onClick={() =>
                          setSelectedImage(index)
                        }
                      >

                        <img
                          src={image}
                          alt=""
                        />

                      </button>

                    ))}

                  </div>

                </section>
              )}


              {/* -------------------------------------------
                  TAGS
              ------------------------------------------- */}

              {blog.tags?.length > 0 && (

                <div className="article-tags">

                  <span>
                    TOPICS
                  </span>

                  <div className="article-tag-list">

                    {blog.tags.map((tag, index) => (

                      <span
                        key={index}
                        className="article-tag"
                      >
                        #{tag}
                      </span>

                    ))}

                  </div>

                </div>

              )}


              {/* -------------------------------------------
                  SHARE
              ------------------------------------------- */}

              <div className="article-share">

                <div>

                  <span>
                    FOUND THIS USEFUL?
                  </span>

                  <h3>
                    Share this article
                  </h3>

                </div>


                <button
                  type="button"
                  onClick={copyArticleLink}
                  className="copy-link-btn"
                >

                  <span>
                    Copy Link
                  </span>

                  <span>
                    ↗
                  </span>

                </button>

              </div>

            </article>


            {/* ---------------------------------------------
                SIDE INDEX
            --------------------------------------------- */}

            <aside className="article-side">

              <div className="article-side-inner">

                <span>
                  SARGAM HEALTHCARE
                </span>

                <p>
                  Trusted medical knowledge,
                  explained simply.
                </p>


                <div className="side-line" />


                <Link
                  to="/doctorspage"
                  className="side-link"
                >
                  <span>
                    Meet Our Doctors
                  </span>

                  <span>
                    ↗
                  </span>
                </Link>


                <Link
                  to="/book-appointment"
                  className="side-link side-link-primary"
                >
                  <span>
                    Book Consultation
                  </span>

                  <span>
                    ↗
                  </span>
                </Link>

              </div>

            </aside>

          </div>

        </section>


        {/* =================================================
            MEDICAL CTA
        ================================================= */}

        <section className="article-medical-cta">

          <div className="article-medical-cta-inner">

            <div className="medical-cta-label">
              NEED MEDICAL ASSISTANCE?
            </div>


            <h2>
              Our Specialists
              <br />
              <em>Are Ready To Help You</em>
            </h2>


            <p>
              If you have any health concerns or would like
              to consult one of our experienced doctors,
              book an appointment today.
            </p>


            <Link
              to="/book-appointment"
              className="medical-cta-btn"
            >
              <span>
                Book Appointment
              </span>

              <span>
                ↗
              </span>
            </Link>

          </div>

        </section>

      </main>


      {/* =================================================
          IMAGE VIEWER
      ================================================= */}

      {showViewer && blog.gallery?.length > 0 && (

        <div
          className="article-image-viewer"
          onClick={() => setShowViewer(false)}
        >

          <button
            type="button"
            className="viewer-close"
            onClick={() => setShowViewer(false)}
            aria-label="Close image viewer"
          >
            ×
          </button>


          <img
            src={blog.gallery[selectedImage]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />


          <div className="viewer-counter">
            {selectedImage + 1}
            {" / "}
            {blog.gallery.length}
          </div>

        </div>

      )}


      <Footer />
    </>
  );
};

export default BlogDetails;