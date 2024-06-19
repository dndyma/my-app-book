type litype = {
  title: string;
};
function List({ title }: litype) {
  return (
    <li>
      <span className="text-secondary group-hover:text-purple-600 group-hover:font-bold">
        ✓
      </span>
      {title}
    </li>
  );
}

export default List;
