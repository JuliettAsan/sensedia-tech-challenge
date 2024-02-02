export default function SearchInput() {
  return (
    <div className={`searchContainer `}>
      <form>
        <input
          className="searchContainer-Input"
          type="text"
          value={""}
          placeholder="Buscar"
        />
        <span className="searchContainer-Icon">
          <i className="icon icon-search icon-normal" />
        </span>
      </form>
    </div>
  );
}
