export default function Nav({ links }) {
  return (
    <nav className="">
      <div>
        <ul className="">{links.map((link) => link)}</ul>
      </div>
    </nav>
  );
}
