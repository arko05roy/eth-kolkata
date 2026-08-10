"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import ethKolkataLogo from "../../brand/ethkolkata-navbar.png";

function KolkataLogo() {
  return (
    <img
      src={ethKolkataLogo.src}
      alt="ETH Kolkata"
      className="kolkata-logo"
    />
  );
}

function MenuIcon({ close = false }: { close?: boolean }) {
  return close ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawer-inner">
          <button className="drawer-close" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <MenuIcon close />
          </button>
          <KolkataLogo />
          <p className="eyebrow drawer-eyebrow">Menu</p>
          <nav className="drawer-nav" aria-label="Mobile navigation">
            <a href="#top" onClick={() => setMenuOpen(false)}>Overview</a>
            <a href="#community-events" onClick={() => setMenuOpen(false)}>Schedule</a>
            <a href="#conference" onClick={() => setMenuOpen(false)}>Partners</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Speakers</a>
            <a href="#partners" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#top" onClick={() => setMenuOpen(false)}>FAQ</a>
          </nav>
        </div>
      </div>

      <header className="site-header">
        <div className="page-container header-inner">
          <a href="#top" aria-label="ETH Kolkata home">
            <KolkataLogo />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#top">Overview</a>
            <a href="#community-events">Schedule</a>
            <a href="#conference">Hackathon</a>
            <a href="#team">Speakers</a>
            <a href="#partners">Partners</a>
            <a href="#partners">Sponsors</a>
            <a className="nav-faq" href="#top">FAQ</a>
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
    </>
  );
}
