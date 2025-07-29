$(function () {
    $(window).on("load", function () {
      $(".loader-container").fadeOut(
        (callback = function () {
          $(".loaded-content").fadeIn("fast");
          $("body").css("overflow-x", "auto");
        })
      );
    });
  
    // ===================================================================
  
    $(".offcanvas ul li a").click(function (event) {
      event.preventDefault();
    });
  
    $(".offcanvas ul li a button").on("click", function () {
      $("html, body").scrollTop($("#section-" + $(this).attr("section-no")).offset().top);
    });
  
    // ===================================================================
  
    const tooltips = document.querySelectorAll("tooltip");
    tooltips.forEach((tooltip) => new bootstrap.Tooltip(tooltip));
  
    let tooltipMouseTracker = 0;
    let tolerance = 250;
  
    $(`[data-bs-toggle="tooltip"]`).on("mouseleave", function () {
      let tooltipId = $(this).attr("aria-describedby");
      tooltipMouseTracker--;
      $(`.tooltip`).on("mouseenter", function () {
        tooltipMouseTracker++;
      });
      $(`.tooltip`).on("mouseleave", function () {
        tooltipMouseTracker--;
        setTimeout(function () {
          if (!tooltipMouseTracker) {
            $(`[aria-describedby=${tooltipId}]`).tooltip("hide");
          }
        }, tolerance);
      });
      setTimeout(function () {
        if (!tooltipMouseTracker) {
          $(`[aria-describedby=${tooltipId}]`).tooltip("hide");
        }
      }, tolerance);
    });
  
    $('[data-bs-toggle="tooltip"]').on("mouseenter", function () {
      $(this).tooltip("show");
      tooltipMouseTracker++;
    });
  
    $('[data-bs-toggle="tooltip"]').on("click", function () {
      $(this).tooltip("hide");
      let referenceNo = $(this).attr("reference-no");
      let referenceElement = `p[reference-no="${referenceNo}"]`;
      $(referenceElement).removeClass("reference-highlight");
      $("html, body").scrollTop($(referenceElement).offset().top - (window.innerHeight / 2 - $(referenceElement).innerHeight() / 2));
      $(referenceElement).addClass("reference-highlight");
    });
  
    // ===================================================================
  
    // Improved JSON fetching with error handling
    function loadReferences() {
      const issueNo = $("body").attr("issue-no") || "1"; // Fallback to issue 1
      const jsonPath = `issue${issueNo}_references.json`;
      
      // Try multiple methods to load the JSON
      try {
        // Method 1: Standard fetch (works with dev server)
        fetch(jsonPath)
          .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
          })
          .then(processReferences)
          .catch(() => {
            // Method 2: Try absolute path if relative fails
            fetch(`/${jsonPath}`)
              .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
              })
              .then(processReferences)
              .catch(e => {
                console.error("Failed to load references:", e);
                // Fallback to empty data
                processReferences({ noofArticles: 0, articles: {} });
              });
          });
      } catch (e) {
        console.error("Fetch error:", e);
      }
    }
  
    function processReferences(referencesObject) {
      if (!referencesObject) return;
      
      for (let i = 0; i < parseInt(referencesObject.noofArticles); i++) {
        const article = referencesObject.articles[`article${i + 1}`];
        if (!article) continue;
        
        for (let j = 0; j < parseInt(article.noofreferences); j++) {
          const refContent = article.references[j];
          const selector = `tooltip[reference-no="${i + 1}.${j + 1}"]`;
          
          $(selector).each(function() {
            const tooltip = bootstrap.Tooltip.getInstance(this);
            if (tooltip) {
              tooltip.setContent({ ".tooltip-inner": refContent });
            }
          });
          
          $(`p[reference-no="${i + 1}.${j + 1}"]`).html(refContent);
        }
      }
    }
  
    // Initialize references
    loadReferences();
  
    // ===================================================================
  
    const toasts = document.querySelectorAll(".toast");
    toasts.forEach((toast) => new bootstrap.Toast(toast));
  
    // ===================================================================
  
    $(".copy-section-link").on("click", function () {
      const sectionHref = $(this).attr("section-href").split(".");
      const url = `https://www.iyna-oct.site/issue-1#articles?article=${parseInt(sectionHref[1]) - 1}`;
      
      navigator.clipboard.writeText(url).then(() => {
        const toast = new bootstrap.Toast(document.getElementById("copied-toast"));
        toast.show();
      }).catch(err => {
        console.error("Copy failed:", err);
      });
    });
  
    // ===================================================================
  
  });
  
  const { createApp } = Vue;
  
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  
  createApp({
    data() {
      return {
        currentSection: urlParams.has("article") ? `section-${parseInt(urlParams.get("article")) + 1}` : "section-2",
      };
    },
    mounted() {
      $(`#offcanvas-nav-list a[href="#${this.currentSection}"]`).addClass("custom-active");
    },
    updated() {
      let noofSections = $("#offcanvas-nav-list").attr("no-of-sections");
      $(`#offcanvas-nav-list a[href="#${this.currentSection}"]`).addClass("custom-active");
      for (let i = 1; i <= noofSections; i++) {
        if (this.currentSection != `section-${i}`) {
          $(`#offcanvas-nav-list a[href="#section-${i}"]`).removeClass("custom-active");
        }
      }
    },
  }).mount("#app");
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) && 
           rect.left >= 0 && 
           rect.bottom >= (window.innerHeight - window.innerHeight / 2 || document.documentElement.clientHeight - document.documentElement.clientHeight / 2) && 
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }