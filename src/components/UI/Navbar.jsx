export default function Nav({ links }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-end">
          {links.map((link) => link)}
        </div>
      </div>
    </nav>
  );
}
