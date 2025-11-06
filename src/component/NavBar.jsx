import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

/**
 * Simple text-scramble on hover.
 * Attaches handlers to each link. Uses a small interval to show random chars
 * and progressively reveal the original text. Cleans up on mouseleave.
 */

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}<>?/|\\~".split(
    ""
  );

function startScramble(el) {
  if (!el) return;
  const original = el.dataset.original ?? el.textContent;
  el.dataset.original = original;

  // prevent starting multiple intervals on same element
  if (el._scrambleId) clearInterval(el._scrambleId);

  let frame = 0;
  const revealFramesPerChar = 3; // higher = slower reveal
  const totalFrames = original.length * revealFramesPerChar;

  el._scrambleId = setInterval(() => {
    let out = "";
    for (let i = 0; i < original.length; i++) {
      const revealAt = (i + 1) * revealFramesPerChar;
      if (frame >= revealAt) {
        out += original[i];
      } else {
        out += CHARSET[Math.floor(Math.random() * CHARSET.length)];
      }
    }
    el.textContent = out;
    frame++;
    if (frame > totalFrames) {
      clearInterval(el._scrambleId);
      el._scrambleId = null;
      el.textContent = original;
    }
  }, 30);
}

function stopScramble(el) {
  if (!el) return;
  if (el._scrambleId) {
    clearInterval(el._scrambleId);
    el._scrambleId = null;
  }
  if (el.dataset.original) el.textContent = el.dataset.original;
}

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <img src={logo} alt="thaithantho logo" style={{ height: '20px', width: 'auto', maxWidth: '200px' }} />
      </div>
      <div className="nav-links-row">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
              data-nav-item
              tabIndex={0}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <a
              href="#exit"
              onMouseEnter={(e) => startScramble(e.currentTarget)}
              onMouseLeave={(e) => stopScramble(e.currentTarget)}
              className="nav-item"
              data-nav-item
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                try {
                  window.open('', '_self');
                  window.close();
                  setTimeout(() => {
                    try { window.close(); } catch {}
                    try { window.location.replace('about:blank'); } catch {}
                  }, 50);
                } catch {
                  try { window.location.replace('about:blank'); } catch {}
                }
              }}
            >
              EXIT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
