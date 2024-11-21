import s from "./Contact.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div>
        <p className={s.text}>
          <HiOutlineUserCircle />
          {name}
        </p>
        <p className={s.text}>
          <TbPhone />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={onDelete}>
        <RiDeleteBin2Fill className={s.icon} />
      </button>
    </>
  );
};

export default Contact;
