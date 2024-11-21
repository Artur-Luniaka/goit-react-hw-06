import s from "./SearchBox.module.css";
import { MdOutlinePersonSearch } from "react-icons/md";
const SearchBox = ({ onChange }) => {
  return (
    <>
      <div className={s.div}>
        <p className={s.text}>
          <MdOutlinePersonSearch className={s.icon} />
          Find contacts by name
        </p>
        <input className={s.input} type="text" onChange={onChange} />
      </div>
    </>
  );
};

export default SearchBox;
