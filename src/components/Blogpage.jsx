
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import Navbar from "../components/landingpage/Navbar";
import Footer from "../components/landingpage/Footer";

import { db } from "../firebase/firebase";

import "./Blog.css";

import heroImage from "../assests/rohittiwari.png";


/* =========================================================
   HELPERS
========================================================= */

const DESCRIPTION_LIMIT = 145;

const truncateText = (text = "", limit = DESCRIPTION_LIMIT) => {
  const cleanText = String(text).replace(/\s+/g, " ").trim();

  if (cleanText.length <= limit) {
    return cleanText;
  }

  return `${cleanText.slice(0, limit).trim()}...`;
};


const calculateReadTime = (content = "") => {
  const cleanContent = String(content).trim();

  if (!cleanContent) {
    return "1 min read";
  }

  const words = cleanContent.split(/\s+/).length;

  const minutes = Math.max(
    1,
    Math.ceil(words / 200)
  );

  return `${minutes} min read`;
};


const formatDate = (timestamp) => {
  if (!timestamp) {
    return "Recently";
  }

  try {
    return timestamp.toDate().toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  } catch {
    return "Recently";
  }
};


/* =========================================================
   COMPONENT
========================================================= */

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);


  /* =====================================================
     FETCH BLOGS
  ===================================================== */

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(data);
      } catch (error) {
        console.error(
          "Error fetching blogs:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  /* =====================================================
     FEATURED BLOG
  ===================================================== */

  const featuredBlog = blogs.length
    ? blogs[0]
    : null;


  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogs
          .map((blog) => blog.category)
          .filter(Boolean)
      ),
    ];

    return [
      "All",
      ...uniqueCategories,
    ];
  }, [blogs]);


  /* =====================================================
     FILTER BLOGS
  ===================================================== */

  const filteredBlogs = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLowerCase();

    return blogs.filter((blog) => {

      const categoryMatch =
        activeCategory === "All" ||
        blog.category === activeCategory;


      const searchableText = [
        blog.title,
        blog.shortDescription,
        blog.category,
        blog.author,
        ...(Array.isArray(blog.tags) ? blog.tags : [blog.tags || ""]),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


      const searchMatch =
        !search ||
        searchableText.includes(search);


      return (
        categoryMatch &&
        searchMatch
      );
    });
  }, [
    blogs,
    searchTerm,
    activeCategory,
  ]);


  /* =====================================================
     REMOVE FEATURED FROM GRID
  ===================================================== */

  const gridBlogs = useMemo(() => {

    if (!featuredBlog) {
      return filteredBlogs;
    }

    return filteredBlogs.filter(
      (blog) =>
        blog.id !== featuredBlog.id
    );

  }, [
    filteredBlogs,
    featuredBlog,
  ]);


  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="blog-page">

          <section className="blog-loading-screen">

            <div className="blog-loading-spinner"></div>

            <span>
              Preparing health insights
            </span>

          </section>

        </main>

        <Footer />
      </>
    );
  }


  return (
    <>
      <Navbar />

      <main className="blog-page">


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="blog-hero-premium"
          style={{
            "--blog-hero-image":
              `url(${heroImage})`,
          }}
        >

          <div className="blog-hero-background"></div>

          <div className="blog-hero-overlay"></div>


          <div className="blog-hero-inner">

            <div className="blog-hero-copy">

              <div className="blog-eyebrow">
                <span></span>
                SARGAM HEALTH INSIGHTS
              </div>


              <h1>
                Better Health
                <br />
                <em>Starts With</em>
                <br />
                Better Knowledge.
              </h1>


              <p>
                Trusted medical knowledge, expert
                healthcare advice and practical wellness
                insights from the specialists at Sargam
                Healthcare.
              </p>


              <div className="blog-hero-trust">

                <span>
                  Evidence Based
                </span>

                <span>
                  Expert Reviewed
                </span>

                <span>
                  Patient First
                </span>

              </div>

            </div>


            {/* HERO SEARCH */}

            <div className="blog-hero-search">

              <div className="search-icon">
                ⌕
              </div>

              <input
                type="text"
                value={searchTerm}
                placeholder="Search health articles..."
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
              />

              {searchTerm && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() =>
                    setSearchTerm("")
                  }
                >
                  ×
                </button>
              )}

            </div>

          </div>


          <div className="blog-hero-bottom">

            <span>
              01
            </span>

            <div></div>

            <p>
              Explore our latest medical insights
            </p>

          </div>

        </section>


        {/* =================================================
            STATS
        ================================================= */}

        <section className="blog-stats">

          <div className="blog-stat">
            <strong>
              {blogs.length}+
            </strong>

            <span>
              Health Articles
            </span>
          </div>


          <div className="blog-stat">
            <strong>
              10+
            </strong>

            <span>
              Medical Experts
            </span>
          </div>


          <div className="blog-stat">
            <strong>
              100%
            </strong>

            <span>
              Patient Focused
            </span>
          </div>


          <div className="blog-stat">
            <strong>
              24×7
            </strong>

            <span>
              Healthcare Support
            </span>
          </div>

        </section>


        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <section className="blog-filter-section">

          <div className="blog-filter-heading">

            <span>
              EXPLORE
            </span>

            <h2>
              Find What Matters
              <br />
              <em>To Your Health.</em>
            </h2>

          </div>


          <div className="blog-category-wrapper">

            {categories.map(
              (category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={
                    activeCategory ===
                    category
                      ? "blog-category active"
                      : "blog-category"
                  }
                >
                  {category}

                  {activeCategory ===
                    category && (
                    <span>✓</span>
                  )}

                </button>

              )
            )}

          </div>

        </section>


        {/* =================================================
            FEATURED ARTICLE
        ================================================= */}

        {featuredBlog && (
          <section className="blog-featured-premium">

            <div className="blog-section-mini-heading">

              <span>
                EDITOR'S PICK
              </span>

              <div></div>

              <small>
                LATEST FROM SARGAM
              </small>

            </div>


            <article className="featured-article">

              <div className="featured-article-image">

                <img
                  src={
                    featuredBlog.coverImage
                  }
                  alt={
                    featuredBlog.title
                  }
                />

                <div className="featured-image-badge">
                  LATEST ARTICLE
                </div>

              </div>


              <div className="featured-article-content">

                <div className="featured-meta-top">

                  <span>
                    {featuredBlog.category ||
                      "Healthcare"}
                  </span>

                  <span>
                    {formatDate(
                      featuredBlog.createdAt
                    )}
                  </span>

                </div>


                <h2>
                  {featuredBlog.title}
                </h2>


                <p>
                  {truncateText(
                    featuredBlog.shortDescription,
                    250
                  )}
                </p>


                <div className="featured-bottom">

                  <div className="featured-read-time">

                    <span>
                      Reading time
                    </span>

                    <strong>
                      {calculateReadTime(
                        featuredBlog.content
                      )}
                    </strong>

                  </div>


                  <Link
                    to={`/blogs/${featuredBlog.id}`}
                    className="featured-read-btn"
                  >
                    <span>
                      Read Article
                    </span>

                    <b>
                      ↗
                    </b>
                  </Link>

                </div>

              </div>

            </article>

          </section>
        )}


        {/* =================================================
            ARTICLES
        ================================================= */}

        <section className="blog-articles-section">

          <div className="blog-articles-heading">

            <div>

              <span>
                KNOWLEDGE CENTRE
              </span>

              <h2>
                Explore Health
                <br />
                <em>Insights.</em>
              </h2>

            </div>


            <p>
              Medical insights written to help
              you understand your health,
              make informed decisions and
              live better.
            </p>

          </div>


          {gridBlogs.length > 0 ? (

            <>
            <div className="blog-grid-premium">

              {visibleGridBlogs.map(
                (blog, index) => (

                  <article
                    className="premium-blog-card"
                    key={blog.id}
                  >

                    {/* IMAGE */}

                    <Link
                      to={`/blogs/${blog.id}`}
                      className="premium-blog-image"
                    >

                      <img
                        src={
                          blog.coverImage
                        }
                        alt={blog.title}
                      />

                      <div className="blog-image-overlay"></div>


                      <span className="blog-card-number">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>


                      {blog.category && (
                        <span className="blog-card-category">
                          {blog.category}
                        </span>
                      )}

                    </Link>


                    {/* CONTENT */}

                    <div className="premium-blog-content">

                      <div className="premium-blog-meta">

                        <span>
                          {formatDate(
                            blog.createdAt
                          )}
                        </span>

                        <span>
                          {calculateReadTime(
                            blog.content
                          )}
                        </span>

                      </div>


                      <h3>
                        {blog.title}
                      </h3>


                      <p>
                        {truncateText(
                          blog.shortDescription
                        )}
                      </p>


                      <Link
                        to={`/blogs/${blog.id}`}
                        className="premium-blog-read"
                      >

                        <span>
                          Read Article
                        </span>

                        <b>
                          ↗
                        </b>

                      </Link>

                    </div>

                  </article>

                )
              )}

            </div>

            {visibleCount < gridBlogs.length && (
              <div className="blog-load-more-wrap">
                <button type="button" className="blog-load-more" onClick={() => setVisibleCount((count) => count + 9)}>
                  Load more articles <span aria-hidden="true">↓</span>
                </button>
                <small>Showing {Math.min(visibleCount, gridBlogs.length)} of {gridBlogs.length} articles</small>
              </div>
            )}
            </>

          ) : (

            <div className="blog-empty-premium">

              <div>
                ⌕
              </div>

              <span>
                NO RESULTS
              </span>

              <h3>
                We couldn't find that article.
              </h3>

              <p>
                Try another keyword or select
                a different health category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                View All Articles
              </button>

            </div>

          )}

        </section>


        {/* =================================================
            KNOWLEDGE STATEMENT
        ================================================= */}

        <section className="blog-knowledge-statement">

          <div className="knowledge-number">
            02
          </div>


          <div className="knowledge-content">

            <span>
              WHY HEALTH KNOWLEDGE MATTERS
            </span>

            <h2>
              Understand Your Health.
              <br />
              <em>Own Your Decisions.</em>
            </h2>

            <p>
              Reliable medical information can help
              patients understand symptoms, prepare
              for consultations and make informed
              healthcare decisions. Our goal is to make
              trusted health knowledge easier to understand
              and easier to access.
            </p>

          </div>


          <div className="knowledge-mark">
            +
          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}

        <section className="blog-cta-premium">

          <div className="blog-cta-decoration"></div>

          <div className="blog-cta-inner">

            <div className="blog-cta-eyebrow">
              <span></span>
              FROM KNOWLEDGE TO CARE
            </div>


            <h2>
              Have A Health
              <br />
              Concern?
              <em>Let's Talk.</em>
            </h2>


            <p>
              Reading can help you understand your
              health. A consultation helps you understand
              what comes next.
            </p>


            <div className="blog-cta-actions">

              <Link
                to="/book-appointment"
                className="blog-cta-primary"
              >
                Book Appointment
                <span>↗</span>
              </Link>


              <Link
                to="/doctorspage"
                className="blog-cta-secondary"
              >
                Meet Our Doctors
                <span>↗</span>
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default Blog;