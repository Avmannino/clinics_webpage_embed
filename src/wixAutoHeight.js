const MESSAGE_TYPE =
  "VITE_AUTO_HEIGHT";

function getContentHeight() {
  const root =
    document.getElementById(
      "root",
    );

  const pageShell =
    document.querySelector(
      ".pageShell",
    );

  const clinicsPage =
    document.querySelector(
      ".clinicsPage",
    );

  const heights = [];

  /*
    Measure the actual content
    containers first.

    We intentionally avoid using
    body/documentElement as part of
    the normal measurement because
    the iframe viewport itself can
    influence their reported height
    and prevent the embed from
    shrinking correctly.
  */

  if (pageShell) {
    const rect =
      pageShell.getBoundingClientRect();

    heights.push(
      pageShell.scrollHeight,
      pageShell.offsetHeight,
      rect.height,
    );
  }

  if (clinicsPage) {
    const rect =
      clinicsPage.getBoundingClientRect();

    heights.push(
      clinicsPage.scrollHeight,
      clinicsPage.offsetHeight,
      rect.height,
      rect.bottom,
    );
  }

  if (root) {
    heights.push(
      root.scrollHeight,
      root.offsetHeight,
      root.getBoundingClientRect()
        .height,
    );
  }

  /*
    Fallback only if the expected
    React containers don't exist.
  */
  if (!heights.length) {
    heights.push(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement
        .scrollHeight,
      document.documentElement
        .offsetHeight,
    );
  }

  return Math.ceil(
    Math.max(...heights),
  );
}

export function initWixAutoHeight() {
  if (
    typeof window === "undefined" ||
    window.parent === window
  ) {
    return;
  }

  let lastHeight = 0;
  let animationFrame = null;

  const timeoutIds = [];
  const trackedImages = [];
  const trackedVideos = [];

  const sendHeight = (
    force = false,
  ) => {
    if (
      animationFrame !== null
    ) {
      cancelAnimationFrame(
        animationFrame,
      );
    }

    animationFrame =
      requestAnimationFrame(() => {
        animationFrame = null;

        const height =
          getContentHeight();

        if (
          !Number.isFinite(height) ||
          height < 100
        ) {
          return;
        }

        if (
          !force &&
          height === lastHeight
        ) {
          return;
        }

        lastHeight = height;

        window.parent.postMessage(
          {
            type: MESSAGE_TYPE,
            height,
            pathname:
              window.location.pathname,
          },
          "*",
        );
      });
  };

  const scheduleMeasurements =
    () => {
      [
        0,
        50,
        100,
        250,
        500,
        750,
        1000,
        1500,
        2500,
      ].forEach((delay) => {
        if (delay === 0) {
          sendHeight(true);
          return;
        }

        const timeoutId =
          window.setTimeout(
            () => {
              sendHeight(true);
            },
            delay,
          );

        timeoutIds.push(
          timeoutId,
        );
      });
    };

  /*
    Initial series of measurements.

    This covers the first React paint,
    images, the video element, and any
    font/layout settling.
  */
  scheduleMeasurements();

  const root =
    document.getElementById(
      "root",
    );

  const pageShell =
    document.querySelector(
      ".pageShell",
    );

  const clinicsPage =
    document.querySelector(
      ".clinicsPage",
    );

  /*
    ResizeObserver is the primary
    mechanism.

    It automatically catches:
    - tablet/mobile stacking
    - text wrapping
    - image sizing
    - video sizing
    - responsive card changes
    - viewport width changes
  */
  const resizeObserver =
    new ResizeObserver(() => {
      sendHeight();
    });

  if (root) {
    resizeObserver.observe(
      root,
    );
  }

  if (
    pageShell &&
    pageShell !== root
  ) {
    resizeObserver.observe(
      pageShell,
    );
  }

  if (
    clinicsPage &&
    clinicsPage !== root &&
    clinicsPage !== pageShell
  ) {
    resizeObserver.observe(
      clinicsPage,
    );
  }

  /*
    MutationObserver gives us a
    secondary signal if React or
    media fallback behavior changes
    the DOM.
  */
  const mutationObserver =
    new MutationObserver(() => {
      sendHeight();
    });

  if (root) {
    mutationObserver.observe(
      root,
      {
        childList: true,
        subtree: true,
        characterData: true,
      },
    );
  }

  /*
    Responsive breakpoints can create
    substantial height changes on this
    page, particularly where cards go
    from side-by-side to stacked.
  */
  const handleResize = () => {
    sendHeight(true);

    [
      50,
      100,
      200,
      350,
      500,
      750,
      1000,
    ].forEach((delay) => {
      const timeoutId =
        window.setTimeout(
          () => {
            sendHeight(true);
          },
          delay,
        );

      timeoutIds.push(
        timeoutId,
      );
    });
  };

  const handleWindowLoad =
    () => {
      scheduleMeasurements();
    };

  window.addEventListener(
    "resize",
    handleResize,
  );

  window.addEventListener(
    "orientationchange",
    handleResize,
  );

  window.addEventListener(
    "load",
    handleWindowLoad,
  );

  /*
    Recalculate whenever one of the
    clinic graphics finishes loading
    or fails and switches to the
    placeholder state.
  */
  document
    .querySelectorAll("img")
    .forEach((image) => {
      if (!image.complete) {
        trackedImages.push(
          image,
        );

        image.addEventListener(
          "load",
          sendHeight,
        );

        image.addEventListener(
          "error",
          sendHeight,
        );
      }
    });

  /*
    The Hockey Lab uses a video, so
    recheck after its metadata becomes
    available.
  */
  document
    .querySelectorAll("video")
    .forEach((video) => {
      trackedVideos.push(
        video,
      );

      video.addEventListener(
        "loadedmetadata",
        sendHeight,
      );

      video.addEventListener(
        "loadeddata",
        sendHeight,
      );

      video.addEventListener(
        "error",
        sendHeight,
      );
    });

  /*
    Re-measure once browser fonts have
    finished settling because text
    wrapping can slightly change card
    heights.
  */
  if (document.fonts?.ready) {
    document.fonts.ready
      .then(() => {
        sendHeight(true);
      })
      .catch(() => {});
  }

  return () => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();

    window.removeEventListener(
      "resize",
      handleResize,
    );

    window.removeEventListener(
      "orientationchange",
      handleResize,
    );

    window.removeEventListener(
      "load",
      handleWindowLoad,
    );

    trackedImages.forEach(
      (image) => {
        image.removeEventListener(
          "load",
          sendHeight,
        );

        image.removeEventListener(
          "error",
          sendHeight,
        );
      },
    );

    trackedVideos.forEach(
      (video) => {
        video.removeEventListener(
          "loadedmetadata",
          sendHeight,
        );

        video.removeEventListener(
          "loadeddata",
          sendHeight,
        );

        video.removeEventListener(
          "error",
          sendHeight,
        );
      },
    );

    timeoutIds.forEach(
      (timeoutId) => {
        window.clearTimeout(
          timeoutId,
        );
      },
    );

    if (
      animationFrame !== null
    ) {
      cancelAnimationFrame(
        animationFrame,
      );
    }
  };
}